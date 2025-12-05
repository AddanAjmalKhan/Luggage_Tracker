import { state, updateState } from './data.js';

export function createSidebar() {
  const luggageOperations = [
    { id: 'dashboard', label: 'Dashboard', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`, active: state.currentView === 'dashboard' },
    { id: 'customers-luggage', label: 'Customers Luggage', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`, active: state.currentView === 'customers-luggage' },
    { id: 'missing-luggage', label: 'Missing Luggage', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`, active: state.currentView === 'missing-luggage' },
    { id: 'hotels', label: 'Hotels', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`, active: state.currentView === 'hotels' },
    { id: 'groups', label: 'Groups', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`, active: state.currentView === 'groups' },
    { id: 'airlines', label: 'Airlines', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>`, active: state.currentView === 'airlines' },
  ];

  const systemPreferences = [
    { id: 'system-users', label: 'System Users', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`, active: state.currentView === 'system-users' },
    { id: 'roles', label: 'Roles', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`, active: state.currentView === 'roles' },
    { id: 'permissions', label: 'Permissions', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`, active: state.currentView === 'permissions' },
    { id: 'complaints', label: 'Complaints', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>`, active: state.currentView === 'complaints' },
  ];

  return `
    <aside id="sidebar" class="fixed left-0 top-0 h-screen w-64 bg-sidebar text-white flex flex-col transition-all duration-300">
      <!-- Logo -->
      <div class="p-6 border-b border-gray-700">
        <h1 class="text-2xl font-bold">LuggageTrax</h1>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-4">
        <!-- Luggage Operations Section -->
        <div class="px-3 mb-6">
          <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">Luggage Operations</h3>
          <div class="space-y-1">
            ${luggageOperations.map(item => `
              <button 
                onclick="navigateTo('${item.id}')"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active
      ? 'bg-white bg-opacity-10 text-white'
      : 'text-gray-300 hover:bg-white hover:bg-opacity-5'
    }"
              >
                ${item.icon}
                <span class="font-medium">${item.label}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- System Preferences Section -->
        <div class="px-3">
          <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">System Preferences</h3>
          <div class="space-y-1">
            ${systemPreferences.map(item => `
              <button 
                onclick="navigateTo('${item.id}')"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.active
        ? 'bg-white bg-opacity-10 text-white'
        : 'text-gray-300 hover:bg-white hover:bg-opacity-5'
      }"
              >
                ${item.icon}
                <span class="font-medium">${item.label}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Contact Support -->
        <div class="px-3 mt-6">
          <button class="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <span class="font-medium">Contact Support</span>
          </button>
        </div>
      </nav>

      <!-- Footer -->
      <div class="p-4 border-t border-gray-700">
        <button class="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span class="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  `;
}

export function createHeader() {
  return `
    <header class="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <span>🏠</span>
        <span>/</span>
        <span class="text-gray-900 font-medium">Customers Luggage</span>
      </div>
      
      <div class="flex items-center gap-4">
        <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <span class="text-xl">🔔</span>
        </button>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">
            AN
          </div>
          <div class="text-sm">
            <div class="font-medium">Admin Name</div>
            <div class="text-gray-500 text-xs">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  `;
}
