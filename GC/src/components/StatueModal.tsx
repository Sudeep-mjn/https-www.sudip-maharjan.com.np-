import React from 'react'
// Add contact button to modal
;
<div className="mt-6 border-t border-gray-700 pt-6">
  <button onClick={() => {
    window.location.href = '#contact';
    setSelectedStatue(null);
  }} className="w-full px-6 py-3 bg-[#C1272D] text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2">
    <span>Contact Owner for Details</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  </button>
</div>;