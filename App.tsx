
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AIChat } from './components/AIChat';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'AI Assistant', id: 'ai-assistant' },
  { label: 'Reports', id: 'reports' },
  { label: 'Settings', id: 'settings' }
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      {/* Sidebar - Navy Blue Theme */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        navItems={NAV_ITEMS}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          activeTabLabel={NAV_ITEMS.find(n => n.id === activeTab)?.label || 'TD Solutions'} 
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'ai-assistant' && <AIChat />}
          {(activeTab === 'reports' || activeTab === 'settings') && (
            <div className="flex flex-col items-center justify-center h-full text-slate-500">
              <div className="w-16 h-16 mb-4 bg-slate-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">Section Under Development</h2>
              <p>The {activeTab} module is coming soon to the TD environment.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
