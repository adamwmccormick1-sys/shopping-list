import { openDB, addItem, addItems, getAllItems, toggleItem, deleteItem, clearCompleted } from './db.js';
import { categorize } from './categories.js';
import { renderList, setupCollapseHandlers } from './ui.js';
import { recognizeImage, parseOCRText, buildOCRResultsUI, addOCRItem, getOCRItems } from './ocr.js';
import { registerServiceWorker } from './sw-register.js';

// DOM refs
const listContainer = document.getElementById('list-container');
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const cameraBtn = document.getElementById('camera-btn');
const cameraInput = document.getElementById('camera-input');
const clearDoneBtn = document.getElementById('clear-done-btn');
const ocrModal = document.getElementById('ocr-modal');
const ocrProcessing = document.getElementById('ocr-processing');
const ocrResults = document.getElementById('ocr-results');
const ocrPreview = document.getElementById('ocr-preview');
const ocrProgressFill = document.getElementById('ocr-progress-fill');
const ocrProgressText = document.getElementById('ocr-progress-text');
const ocrItemsList = document.getElementById('ocr-items-list');
const ocrAddInput = document.getElementById('ocr-add-input');
const ocrAddBtn = document.getElementById('ocr-add-btn');
const ocrCancelBtn = document.getElementById('ocr-cancel-btn');
const ocrConfirmBtn = document.getElementById('ocr-confirm-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');

async function refreshList() {
  const items = await getAllItems();
  renderList(items, listContainer);
}

// Add item from text input
async function handleAddItem() {
  const name = itemInput.value.trim();
  if (!name) return;

  const category = categorize(name);
  await addItem({ name, category });
  itemInput.value = '';
  await refreshList();
}

// List click delegation
async function handleListClick(e) {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.dataset.action;
  const id = target.dataset.id;

  if (action === 'toggle') {
    await toggleItem(id);
    await refreshList();
  } else if (action === 'delete') {
    await deleteItem(id);
    await refreshList();
  }
}

// Clear completed
async function handleClearDone() {
  await clearCompleted();
  await refreshList();
}

// Camera / OCR
function handleCameraClick() {
  cameraInput.click();
}

async function handleCameraCapture(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Show modal with processing state
  ocrModal.classList.remove('hidden');
  ocrProcessing.classList.remove('hidden');
  ocrResults.classList.add('hidden');

  // Preview image
  const url = URL.createObjectURL(file);
  ocrPreview.src = url;

  // Reset progress
  ocrProgressFill.style.width = '0%';
  ocrProgressText.textContent = '0%';

  try {
    const rawText = await recognizeImage(file, (pct) => {
      ocrProgressFill.style.width = pct + '%';
      ocrProgressText.textContent = pct + '%';
    });

    const itemNames = parseOCRText(rawText);

    // Switch to results view
    ocrProcessing.classList.add('hidden');
    ocrResults.classList.remove('hidden');

    buildOCRResultsUI(itemNames, ocrItemsList);
  } catch (err) {
    ocrProcessing.classList.add('hidden');
    ocrModal.classList.add('hidden');
    alert('Could not read the image. Please try again with a clearer photo.');
  } finally {
    URL.revokeObjectURL(url);
    cameraInput.value = '';
  }
}

function handleOCRAddItem() {
  const name = ocrAddInput.value.trim();
  if (name) {
    addOCRItem(name, ocrItemsList);
    ocrAddInput.value = '';
  }
}

async function handleOCRConfirm() {
  const items = getOCRItems(ocrItemsList);
  if (items.length) {
    await addItems(items);
    await refreshList();
  }
  closeModal();
}

function closeModal() {
  ocrModal.classList.add('hidden');
  ocrProcessing.classList.add('hidden');
  ocrResults.classList.add('hidden');
}

// Init
async function init() {
  registerServiceWorker();
  await openDB();
  await refreshList();

  // Event listeners
  addBtn.addEventListener('click', handleAddItem);
  itemInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAddItem();
  });

  listContainer.addEventListener('click', handleListClick);
  setupCollapseHandlers(listContainer);

  clearDoneBtn.addEventListener('click', handleClearDone);

  cameraBtn.addEventListener('click', handleCameraClick);
  cameraInput.addEventListener('change', handleCameraCapture);

  ocrAddBtn.addEventListener('click', handleOCRAddItem);
  ocrAddInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleOCRAddItem();
  });

  ocrConfirmBtn.addEventListener('click', handleOCRConfirm);
  ocrCancelBtn.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);

  // Close modal on backdrop click
  ocrModal.addEventListener('click', (e) => {
    if (e.target === ocrModal) closeModal();
  });
}

init();
