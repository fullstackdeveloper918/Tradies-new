import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  constructor() { }

  setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}


  // Get item
 getItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return null;
  }
}

  // Remove item
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items
  clear(): void {
    localStorage.clear();
  }

  // Check if item exists
  exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
