import { state } from '../js/data.js';

export function createHeader() {
    const collapsed = state.isSidebarCollapsed;
    // Mobile: left-0, Desktop: depends on collapsed state
    const leftClass = collapsed ? 'md:left-20' : 'md:left-64';

    return `
    <header class="fixed top-0 right-0 ${leftClass} left-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 z-10 transition-all duration-300">
        <div class="flex items-center gap-4">
             <!-- Mobile Menu Button -->
            <button onclick="window.toggleMobileMenu()" class="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <h1 id="page-title" class="text-lg font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        </div>

        <div class="flex items-center gap-6">
            <!-- Theme Toggle -->
            <div class="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <button onclick="window.toggleTheme()" class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${state.theme === 'dark' ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-600'}">
                     <span class="sr-only">Toggle theme</span>
                     <span class="${state.theme === 'dark' ? 'translate-x-6 bg-white' : 'translate-x-1 bg-white'} inline-block w-4 h-4 transform rounded-full transition-transform shadow-sm"></span>
                </button>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
            </div>
            
            <div class="flex items-center gap-3 border-l border-gray-200 dark:border-gray-700 pl-6">
                <!-- User Profile -->
                <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm ring-1 ring-gray-100 dark:ring-gray-700">
                     <img src="https://ui-avatars.com/api/?name=Admin+Name&background=0D8ABC&color=fff" alt="Admin" class="w-full h-full object-cover">
                </div>
                <div class="text-sm hidden md:block">
                    <div class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1">
                        Admin Name
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div class="text-gray-400 text-xs">Admin</div>
                </div>
            </div>
        </div>
    </header>
    `;
}
