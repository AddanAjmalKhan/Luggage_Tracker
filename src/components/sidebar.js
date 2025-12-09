import { state } from '../js/data.js';
import logo from '../images/logo.png';

export function createSidebar() {
    const collapsed = state.isSidebarCollapsed;
    const mobileOpen = state.isMobileMenuOpen;
    const widthClass = collapsed ? 'w-20' : 'w-64'; // On mobile always 64
    // Text visibility
    const hideTextClass = collapsed ? 'hidden' : 'block';

    // Icon alignment: Collapsed = centered, Expanded = left aligned (but with specific padding)
    const centerIconClass = collapsed ? 'justify-center' : '';

    // Container Padding: Collapsed = px-2 (tight), Expanded = px-0 (full width items)
    const containerPx = collapsed ? 'px-2' : 'px-0';

    // Item Padding/Style: 
    // Collapsed: Square-ish, centered, no margin.
    // Expanded: Pill-ish, margin-x, padding-x.
    const itemBaseClass = collapsed
        ? 'w-12 h-12 justify-center rounded-xl mx-auto mb-2'
        : 'w-auto mx-3 px-4 py-3 rounded-lg mb-1';

    const getLinkClass = (viewName) => {
        const isActive = state.currentView === viewName;
        const activeBg = isActive ? 'bg-white/20 text-white shadow-sm' : 'text-gray-400 hover:text-white hover:bg-white/5';
        return `flex items-center ${centerIconClass} ${itemBaseClass} transition-all duration-200 group ${activeBg}`;
    };

    // Mobile transform logic
    const transformClass = mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0';
    const overlayClass = mobileOpen ? 'fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden' : 'hidden';

    return `
    <!-- Mobile Overlay -->
    <div class="${overlayClass}" onclick="window.toggleMobileMenu()"></div>

    <aside id="sidebar" class="fixed left-0 top-0 h-screen ${widthClass} bg-sidebar text-white flex flex-col transition-all duration-300 z-30 ${transformClass} border-r border-gray-800 shadow-xl">
        <!-- Logo -->
        <div class="h-24 flex items-center justify-center mb-2">
             <img src="${logo}" alt="LuggageTrax" class="${collapsed ? 'h-15' : 'h-27'} object-contain transition-all duration-300">

            <!-- Mobile Close Button -->
            <button onclick="window.toggleMobileMenu()" class="md:hidden absolute right-4 top-6 text-gray-400 hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar flex flex-col">
            
            <!-- Luggage Operations Section -->
            <div class="mb-6">
                <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-6 ${hideTextClass} opacity-70">Luggage Operations</h3>
                <div class="space-y-0.5">
                    <button onclick="window.navigateTo('dashboard')" class="${getLinkClass('dashboard')}" title="Dashboard">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Dashboard</span>
                    </button>
                    
                    <button onclick="window.navigateTo('customers-luggage')" class="${getLinkClass('customers-luggage')}" title="Customers Luggage">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Customers Luggage</span>
                    </button>

                    <button onclick="window.navigateTo('missing-luggage')" class="${getLinkClass('missing-luggage')}" title="Missing Luggage">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Missing Luggage</span>
                    </button>

                    <button onclick="window.navigateTo('hotels')" class="${getLinkClass('hotels')}" title="Hotels">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Hotels</span>
                    </button>

                    <button onclick="window.navigateTo('groups')" class="${getLinkClass('groups')}" title="Groups">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Groups</span>
                    </button>

                    <button onclick="window.navigateTo('airlines')" class="${getLinkClass('airlines')}" title="Airlines">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Airlines</span>
                    </button>
                </div>
            </div>

            <!-- Separator Line (Only visible in Expanded) -->
            <div class="${collapsed ? 'hidden' : 'block'} border-t border-gray-700/50 mx-6 mb-6"></div>

            <!-- System Preferences Section -->
            <div class="mb-6">
                <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-6 ${hideTextClass} opacity-70">System Preferences</h3>
                <div class="space-y-0.5">
                    <button onclick="window.navigateTo('system-users')" class="${getLinkClass('system-users')}" title="System Users">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">System Users</span>
                    </button>
                    
                    <button onclick="window.navigateTo('roles')" class="${getLinkClass('roles')}" title="Roles">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Roles</span>
                    </button>

                    <button onclick="window.navigateTo('permissions')" class="${getLinkClass('permissions')}" title="Permissions">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Permissions</span>
                    </button>

                    <button onclick="window.navigateTo('complaints')" class="${getLinkClass('complaints')}" title="Complaints">
                        <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Complaints</span>
                    </button>
                </div>
            </div>

            <!-- Contact Support (Pushed to bottom of flex container) -->
            <div class="mt-auto mb-6 px-0">
                 <div class="${collapsed ? 'hidden' : 'block'} border-t border-gray-700/50 mx-6 mb-6"></div>
                 <button class="${collapsed ? 'w-12 h-12 justify-center rounded-xl mx-auto' : 'w-auto mx-3 px-4 py-3 rounded-lg'} flex items-center bg-[#063b46] hover:bg-[#084551] transition-all duration-200 group text-white border border-[#09505d] shadow-lg" title="Contact Support">
                    <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Contact Support</span>
                </button>
            </div>
        </nav>

        <!-- Footer / Logout -->
        <div class="p-4"> 
            <button class="${collapsed ? 'w-12 h-12 justify-center rounded-xl mx-auto' : 'w-auto mx-0 px-4 py-3 rounded-lg'} flex items-center text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors w-full ${centerIconClass}" title="Logout">
                <svg class="w-[22px] h-[22px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span class="font-medium text-[15px] ml-3 ${hideTextClass}">Logout</span>
            </button>
        </div>
    </aside>
    `;
}
