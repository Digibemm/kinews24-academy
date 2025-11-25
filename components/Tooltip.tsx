import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>

      {isVisible && (
        <div
          className={`absolute z-50 ${positionClasses[position]} animate-fade-in`}
          style={{ width: 'max-content', maxWidth: '280px' }}
        >
          <div className="bg-slate-900 text-white text-sm px-4 py-3 rounded-lg shadow-xl border border-slate-700">
            {text}
          </div>
          {/* Arrow */}
          <div className={`absolute w-2 h-2 bg-slate-900 border-slate-700 transform rotate-45 ${
            position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2 border-r border-b' :
            position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2 border-l border-t' :
            position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2 border-t border-r' :
            'left-[-4px] top-1/2 -translate-y-1/2 border-b border-l'
          }`}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
