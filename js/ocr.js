import { categorize } from './categories.js';

let worker = null;

async function getWorker(onProgress) {
  if (worker) return worker;

  worker = await Tesseract.createWorker('eng', 1, {
    logger: (m) => {
      if (m.status === 'recognizing text' && onProgress) {
        onProgress(Math.round(m.progress * 100));
      }
    },
  });

  return worker;
}

export function parseOCRText(rawText) {
  return rawText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 1)
    .map(line => {
      // Strip common list prefixes
      return line
        .replace(/^[-*\u2022\u2023\u25E6\u2043\u2219]\s*/, '')
        .replace(/^\d+[.)]\s*/, '')
        .replace(/^\[[ x]?\]\s*/i, '')
        .replace(/^[oO]\s+/, '')
        .trim();
    })
    .filter(line => line.length > 0);
}

export async function recognizeImage(imageFile, onProgress) {
  const w = await getWorker(onProgress);
  const { data } = await w.recognize(imageFile);
  return data.text;
}

export function buildOCRResultsUI(itemNames, container) {
  container.innerHTML = '';

  for (const name of itemNames) {
    addOCRItemRow(name, container);
  }
}

function addOCRItemRow(name, container) {
  const category = categorize(name);
  const row = document.createElement('div');
  row.className = 'ocr-item';
  row.innerHTML = `
    <input type="text" class="ocr-item-name" value="${escapeAttr(name)}" data-original="${escapeAttr(name)}">
    <span class="ocr-item-category">${category}</span>
    <button class="ocr-item-remove" aria-label="Remove">&times;</button>
  `;

  // Update category when name changes
  const input = row.querySelector('.ocr-item-name');
  const badge = row.querySelector('.ocr-item-category');

  input.addEventListener('blur', () => {
    const val = input.value.trim();
    if (val) {
      badge.textContent = categorize(val);
    }
  });

  row.querySelector('.ocr-item-remove').addEventListener('click', () => {
    row.remove();
  });

  container.appendChild(row);
}

export function addOCRItem(name, container) {
  if (name.trim()) {
    addOCRItemRow(name.trim(), container);
  }
}

export function getOCRItems(container) {
  const rows = container.querySelectorAll('.ocr-item');
  const items = [];

  for (const row of rows) {
    const name = row.querySelector('.ocr-item-name').value.trim();
    if (name) {
      items.push({ name, category: categorize(name) });
    }
  }

  return items;
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
