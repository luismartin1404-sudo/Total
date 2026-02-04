
import React from 'react';
import { NavItem } from '../types';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (id: string) => void;
  navItems: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, setActiveTab, navItems }) => {
  return (
    <aside 
      className={`bg-slate-900 text-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-0 md:w-20'
      } flex flex-col overflow-hidden border-r border-slate-800 shadow-xl`}
    >
      {/* Branding */}
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-xl shrink-0">
          TD
        </div>
        {isOpen && (
          <span className="font-bold text-xl tracking-tight whitespace-nowrap">Solutions</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 px-3 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="shrink-0">
              {item.id === 'dashboard' && <IconDashboard />}
              {item.id === 'ai-assistant' && <IconAI />}
              {item.id === 'reports' && <IconReports />}
              {item.id === 'settings' && <IconSettings />}
            </div>
            {isOpen && <span className="font-medium whitespace-nowrap">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer Branding */}
      <div className="p-6">
        {isOpen ? (
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Version</p>
            <p className="text-sm font-semibold text-slate-300">v2.4.0 Stable</p>
          </div>
        ) : (
          <div className="w-8 h-1 bg-slate-700 mx-auto rounded-full" />
        )}
      </div>
    </aside>
  );
};

// Simple SVG Icons
const IconDashboard = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const IconAI = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconReports = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconSettings = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
