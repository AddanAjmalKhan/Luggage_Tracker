import { state } from '../js/data.js';

export function createCustomersLuggagePage() {
    return `
    <!-- Breadcrumb Strip -->
    <div class="w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-3">
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg class="w-4 h-4 text-teal-800 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span>/</span>
            <span class="text-teal-800 dark:text-teal-400 font-medium">Customers Luggage</span>
        </div>
    </div>

    <div class="px-6 py-6">
        <!-- Title Row -->
        <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">Customers Luggage</h1>
            <button onclick="window.openAddLuggageModal()" class="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors text-sm font-medium shadow-sm w-full md:w-auto">
                <span class="text-lg">+</span> Add new Luggage
            </button>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Luggages</div>
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">7,265</div>
                    </div>
                     <span class="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                        +11.01% <span class="text-[10px]">↗</span>
                    </span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Luggage Pending</div>
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">3,671</div>
                    </div>
                     <span class="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full flex items-center gap-1">
                        -0.03% <span class="text-[10px]">↘</span>
                    </span>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Missing Luggage</div>
                        <div class="text-2xl font-bold text-gray-900">2,318</div>
                    </div>
                     <span class="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                        +9.50% <span class="text-[10px]">↗</span>
                    </span>
                </div>
            </div>
            <div class="bg-white rounded-xl p-5 shadow-sm">
                 <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 mb-2">Luggage Scanned</div>
                        <div class="text-2xl font-bold text-gray-900">156</div>
                    </div>
                     <span class="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full flex items-center gap-1">
                        +15.03% <span class="text-[10px]">↗</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Filters -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 p-4">
             <div class="flex flex-wrap items-center gap-3">
                <div class="relative flex-1 min-w-[300px]">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    <input type="text" placeholder="Search by name, passport, group, airline, hotel, RFID, luggage number and contact no..." class="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 text-gray-600 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent" />
                </div>
                
                <select class="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[100px]">
                    <option>Flight No.</option>
                </select>
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('luggage-type-dropdown')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[140px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Luggage Type</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="luggage-type-dropdown" class="hidden absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-3">
                        <!-- Search -->
                        <div class="relative mb-3">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input type="text" placeholder="Search" class="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 text-gray-600 placeholder-gray-400">
                        </div>

                        <!-- Checkbox List -->
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors group">
                                <span class="relative flex items-center">
                                    <input type="checkbox" class="peer appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors">
                                    <svg class="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                <span class="text-sm text-gray-700">Suitcase</span>
                            </label>

                            <label class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors group">
                                <span class="relative flex items-center">
                                    <input type="checkbox" class="peer appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors">
                                    <svg class="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                <span class="text-sm text-gray-700">Handbag</span>
                            </label>

                            <label class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors group">
                                <span class="relative flex items-center">
                                    <input type="checkbox" class="peer appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors">
                                    <svg class="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                <span class="text-sm text-gray-700">Carton</span>
                            </label>
                            
                            <label class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors group">
                                <span class="relative flex items-center">
                                    <input type="checkbox" class="peer appearance-none w-5 h-5 border border-gray-300 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors" checked>
                                    <svg class="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </span>
                                <span class="text-sm text-gray-700">Other</span>
                            </label>
                        </div>
                    </div>
                </div>
                 <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('status-dropdown')" class="flex items-center justify-between w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500 bg-white min-w-[100px] hover:bg-gray-50 transition-colors">
                        <span>Status</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="status-dropdown" class="hidden absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50 p-2">
                        <!-- Search -->
                        <div class="relative mb-2 px-1 pt-1">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 mt-0.5">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input type="text" placeholder="Search" class="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-500 text-gray-600 placeholder-gray-400">
                        </div>

                        <!-- List Items -->
                        <div class="space-y-0.5">
                            <button class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                In
                            </button>
                             <button class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors bg-gray-100">
                                Out
                            </button>
                             <button class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                Pending
                            </button>
                        </div>
                    </div>
                </div>
                <select class="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500 bg-white min-w-[100px]">
                    <option>Group</option>
                </select>
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('hotel-dropdown')" class="flex items-center justify-between w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500 bg-white min-w-[100px] hover:bg-gray-50 transition-colors">
                        <span>Hotel</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="hotel-dropdown" class="hidden absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 p-2">
                        <!-- Search -->
                        <div class="relative mb-2 px-1 pt-1">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 mt-0.5">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input type="text" placeholder="Search" class="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-500 text-gray-600 placeholder-gray-400">
                        </div>

                        <!-- List Items (Dynamic) -->
                        <div class="max-h-48 overflow-y-auto space-y-0.5 custom-scrollbar">
                           ${state.hotels.map(hotel => `
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                    ${hotel.hotelName}
                                </button>
                           `).join('')}
                        </div>
                    </div>
                </div>
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('current-spot-dropdown')" class="flex items-center justify-between w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500 bg-white min-w-[110px] hover:bg-gray-50 transition-colors">
                        <span>Current Spot</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="current-spot-dropdown" class="hidden absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 p-2">
                        <!-- Search -->
                        <div class="relative mb-2 px-1 pt-1">
                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 mt-0.5">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input type="text" placeholder="Search" class="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-500 text-gray-600 placeholder-gray-400">
                        </div>

                        <!-- List Items (Dynamic Unique Spots) -->
                        <div class="max-h-48 overflow-y-auto space-y-0.5 custom-scrollbar">
                           ${[...new Set(state.luggage.map(item => item.currentSpot || 'N/A'))].map(spot => `
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                    ${spot}
                                </button>
                           `).join('')}
                        </div>
                    </div>
                </div>
                 <select class="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500 bg-white min-w-[140px]">
                    <option>Scanned/Unknown</option>
                </select>
                
                <!-- Actions Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('actions-filter-dropdown')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[120px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Actions</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="actions-filter-dropdown" class="hidden absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 overflow-hidden">
                        <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            <span>View All Details</span>
                        </button>
                        <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                            <span>Edit Details</span>
                        </button>
                        <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                            </svg>
                            <span>Download QR Code</span>
                        </button>
                        <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                            <span>Delete Luggage</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <table class="w-full text-left border-collapse table-fixed">
                    <colgroup>
                        <col style="width: 10%"> <!-- Customer Name -->
                        <col style="width: 7%">  <!-- Passport -->
                        <col style="width: 7%">  <!-- Luggage No. -->
                        <col style="width: 7%">  <!-- Type -->
                        <col style="width: 6%">  <!-- Weight -->
                        <col style="width: 7%">  <!-- Flight No. -->
                        <col style="width: 13%"> <!-- Hotel -->
                        <col style="width: 8%">  <!-- Group -->
                        <col style="width: 8%">  <!-- Status -->
                        <col style="width: 10%"> <!-- Current Spot -->
                        <col style="width: 12%"> <!-- Last Scanned -->
                        <col style="width: 5%">  <!-- Actions -->
                    </colgroup>
                    <thead class="bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                        <tr>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Customer Name</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Passport</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Luggage No.</th>
                             <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Type</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Weight</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Flight No.</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Hotel</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Group</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Status</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Current Spot</th>
                            <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Last Scanned</th>
                            <th class="px-3 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        ${state.luggage.map(item => {
        let statusClass = '';
        let statusIcon = '';
        if (item.status === 'In') {
            statusClass = 'bg-blue-100 text-blue-500';
            statusIcon = '↓';
        } else if (item.status === 'Out') {
            statusClass = 'bg-green-100 text-green-500';
            statusIcon = '↑';
        } else if (item.status === 'Pending') {
            statusClass = 'bg-orange-100 text-orange-500';
            statusIcon = '🕒';
        }

        return `
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <td class="px-3 py-3 text-xs font-medium text-gray-900 dark:text-white">${item.customerName || 'N/A'}</td>
                                <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300">${item.passport || 'N/A'}</td>
                                <td class="px-3 py-3 text-xs text-gray-900 dark:text-white">${item.luggageId}</td>
                                <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300">${item.subcase}</td>
                                <td class="px-3 py-3 text-xs text-gray-900 dark:text-white font-medium">${item.weight || '22 kg'}</td>
                                <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300">${item.flightNo || 'PK883'}</td>
                                <td class="px-3 py-3 text-xs text-gray-900 dark:text-white">${item.hotel}</td>
                                <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300">${item.group || 'Group 812'}</td>
                                <td class="px-3 py-3">
                                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass}">
                                        ${statusIcon} ${item.status}
                                    </span>
                                </td>
                                 <td class="px-3 py-3">
                                    <span class="inline-flex items-center justify-center px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">
                                        ${item.currentSpot || 'Spot'}
                                    </span>
                                </td>
                                <td class="px-3 py-3 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">${item.lastScanned}</td>
                                <td class="px-3 py-3 text-center relative">
                                    <button onclick="event.stopPropagation(); toggleDropdown('dropdown-${item.luggageId}')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                        </svg>
                                    </button>
                                    
                                    <!-- Dropdown Menu -->
                                    <div id="dropdown-${item.luggageId}" class="hidden absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 overflow-hidden">
                                        <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                            <span>View All Details</span>
                                        </button>
                                        <button onclick="window.openEditModal('${item.luggageId}')" class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                            </svg>
                                            <span>Edit Details</span>
                                        </button>
                                        <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                                            </svg>
                                            <span>Download QR Code</span>
                                        </button>
                                        <button onclick="window.openDeleteModal()" class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                            <span>Delete Luggage</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
        `}).join('')}
                    </tbody>
                </table>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div class="text-sm text-gray-500 dark:text-gray-400">
                    Showing <span class="font-medium text-gray-900 dark:text-white">1-10</span> of <span class="font-medium text-gray-900 dark:text-white">100</span>
                </div>
                <div class="flex gap-2">
                    <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs">
                        ‹
                    </button>
                    <button class="w-8 h-8 flex items-center justify-center rounded bg-gray-700 dark:bg-gray-600 text-white text-xs">
                        1
                    </button>
                     <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs">
                        2
                    </button>
                     <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs">
                        3
                    </button>
                     <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs">
                        4
                    </button>
                    <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs">
                        5
                    </button>
                     <button class="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs">
                        ›
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
}
