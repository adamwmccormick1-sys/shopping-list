const DB_NAME = 'ShoppingListDB';
const DB_VERSION = 1;
const STORE_NAME = 'items';

let dbInstance = null;

export function openDB() {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('category', 'category', { unique: false });
        store.createIndex('checked', 'checked', { unique: false });
        store.createIndex('name', 'name', { unique: false });
      }
    };

    request.onsuccess = (e) => {
      dbInstance = e.target.result;
      resolve(dbInstance);
    };

    request.onerror = (e) => reject(e.target.error);
  });
}

function getStore(mode = 'readonly') {
  const tx = dbInstance.transaction(STORE_NAME, mode);
  return tx.objectStore(STORE_NAME);
}

export function addItem(item) {
  return new Promise((resolve, reject) => {
    const store = getStore('readwrite');
    const record = {
      id: crypto.randomUUID(),
      name: item.name,
      category: item.category,
      checked: false,
      createdAt: Date.now(),
      checkedAt: null,
    };
    const req = store.add(record);
    req.onsuccess = () => resolve(record.id);
    req.onerror = (e) => reject(e.target.error);
  });
}

export function addItems(items) {
  return new Promise((resolve, reject) => {
    const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const ids = [];

    for (const item of items) {
      const record = {
        id: crypto.randomUUID(),
        name: item.name,
        category: item.category,
        checked: false,
        createdAt: Date.now(),
        checkedAt: null,
      };
      store.add(record);
      ids.push(record.id);
    }

    tx.oncomplete = () => resolve(ids);
    tx.onerror = (e) => reject(e.target.error);
  });
}

export function getAllItems() {
  return new Promise((resolve, reject) => {
    const store = getStore();
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

export function toggleItem(id) {
  return new Promise((resolve, reject) => {
    const store = getStore('readwrite');
    const req = store.get(id);

    req.onsuccess = () => {
      const item = req.result;
      if (!item) return reject(new Error('Item not found'));
      item.checked = !item.checked;
      item.checkedAt = item.checked ? Date.now() : null;
      const putReq = store.put(item);
      putReq.onsuccess = () => resolve(item);
      putReq.onerror = (e) => reject(e.target.error);
    };

    req.onerror = (e) => reject(e.target.error);
  });
}

export function deleteItem(id) {
  return new Promise((resolve, reject) => {
    const store = getStore('readwrite');
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = (e) => reject(e.target.error);
  });
}

export async function clearCompleted() {
  const items = await getAllItems();
  const checked = items.filter(i => i.checked);
  if (!checked.length) return;

  return new Promise((resolve, reject) => {
    const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    for (const item of checked) {
      store.delete(item.id);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}
