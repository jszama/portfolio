"use client";
import { useState } from 'react';

export function useExpandedItem<T = string | number>() {
  const [expandedItem, setExpandedItem] = useState<T | null>(null);

  const toggleItem = (itemId: T) => {
    setExpandedItem(prev => (prev === itemId ? null : itemId));
    document.getElementById(String(itemId))?.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
  };

  return { expandedItem, toggleItem, setExpandedItem };
}
