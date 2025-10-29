import React, { useEffect } from 'react';

export const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600';
  const icon = type === 'success' ? '✓' : '⚠';

  return (
    <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-3 animate-slideDown`}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};