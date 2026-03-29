import { CATEGORIES } from './categories.js';

const chevronSVG = '<svg class="category-chevron" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>';

const deleteSVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

export function renderList(items, container) {
  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Your list is empty.<br>Add items with the + button<br>or scan a handwritten list.</p>
      </div>
    `;
    return;
  }

  // Group items by category
  const grouped = {};
  for (const item of items) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }

  // Sort within each category: unchecked first (by createdAt), then checked (by checkedAt desc)
  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) => {
      if (a.checked !== b.checked) return a.checked ? 1 : -1;
      if (a.checked) return (b.checkedAt || 0) - (a.checkedAt || 0);
      return a.createdAt - b.createdAt;
    });
  }

  let html = '';

  for (const category of CATEGORIES) {
    const catItems = grouped[category];
    if (!catItems || !catItems.length) continue;

    const uncheckedCount = catItems.filter(i => !i.checked).length;
    const isCollapsed = localStorage.getItem(`collapsed-${category}`) === 'true';

    html += `
      <section class="category-section${isCollapsed ? ' collapsed' : ''}" data-category="${category}">
        <div class="category-header">
          <span class="category-title">${category}</span>
          <span class="category-meta">
            <span class="category-count">${uncheckedCount}/${catItems.length}</span>
            ${chevronSVG}
          </span>
        </div>
        <ul class="category-items">
    `;

    for (const item of catItems) {
      html += `
          <li class="item${item.checked ? ' checked' : ''}" data-id="${item.id}">
            <label class="item-checkbox">
              <input type="checkbox" ${item.checked ? 'checked' : ''} data-action="toggle" data-id="${item.id}">
              <span class="checkmark"></span>
            </label>
            <span class="item-name">${escapeHTML(item.name)}</span>
            <button class="item-delete" data-action="delete" data-id="${item.id}" aria-label="Delete ${escapeHTML(item.name)}">${deleteSVG}</button>
          </li>
      `;
    }

    html += `
        </ul>
      </section>
    `;
  }

  container.innerHTML = html;
}

export function setupCollapseHandlers(container) {
  container.addEventListener('click', (e) => {
    const header = e.target.closest('.category-header');
    if (!header) return;

    const section = header.closest('.category-section');
    const category = section.dataset.category;
    section.classList.toggle('collapsed');

    const isCollapsed = section.classList.contains('collapsed');
    if (isCollapsed) {
      localStorage.setItem(`collapsed-${category}`, 'true');
    } else {
      localStorage.removeItem(`collapsed-${category}`);
    }
  });
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
