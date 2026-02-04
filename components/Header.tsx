
import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
  activeTabLabel: string;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, activeTabLabel }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-slate-800">{activeTabLabel}</h1>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-2 text-slate-500">
          <span className="text-sm font-medium">Status:</span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-slate-900">Live</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Admin User</p>
            <p className="text-xs text-slate-500">Master Account</p>
          </div>
          <div className="w-10 h-10 bg-slate-900 rounded-full border-2 border-orange-500 flex items-center justify-center text-white font-bold">
            AU
          </div>
        </div>
      </div>
    </header>
  );
};
