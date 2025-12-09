import { state } from '../js/data.js';

export function createMissingLuggagePage() {
    return `
    <!-- Breadcrumb Strip -->
    <div class="w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-3">
        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" onclick="window.navigateTo('dashboard'); return false;" class="hover:text-teal-800 dark:hover:text-teal-400">
                <svg class="w-4 h-4 text-teal-800 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
            </a>
            <span>/</span>
            <span class="text-teal-800 dark:text-teal-400 font-medium">Missing Luggage</span>
        </div>
    </div>

    <div class="px-6 py-6">
        <!-- Title Row -->
        <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">Missing Luggage</h1>
            <button onclick="window.openAddLuggageModal()" class="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors text-sm font-medium shadow-sm w-full md:w-auto">
                <span class="text-lg">+</span> Add new Luggage
            </button>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <!-- Total Missing -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Missing</div>
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">7,265</div>
                    </div>
                    <div class="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Critical (48h+) -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Critical (48h+)</div>
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">7,265</div>
                    </div>
                    <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                         <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Unscanned -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Unscanned</div>
                        <div class="text-2xl font-bold text-gray-900 dark:text-white">7,265</div>
                    </div>
                    <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                         <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Last Scanned Time -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
                <div class="flex items-start justify-between">
                    <div>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Last Scanned Time</div>
                         <div class="text-2xl font-bold text-gray-900 dark:text-white">12:00 PM</div>
                    </div>
                    <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filters -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 p-4">
             <div class="flex flex-wrap items-center gap-3">
                <div class="relative w-56">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </span>
                    <input type="text" placeholder="Search" class="w-full pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 text-gray-600 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent" />
                </div>
                
                <!-- Flight No Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-flight')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[100px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Flight No.</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="filter-flight" class="hidden absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">PK883</button>
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">PR351</button>
                    </div>
                </div>
                
                <!-- Luggage Type Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-type')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[120px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Luggage Type</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="filter-type" class="hidden absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Suitcase</button>
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Handbag</button>
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Carton</button>
                    </div>
                </div>

                <!-- Status Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-status')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[100px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Status</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="filter-status" class="hidden absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                         <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">In</button>
                         <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Out</button>
                    </div>
                </div>

                <!-- Group Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-group')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[100px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Group</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="filter-group" class="hidden absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                         <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Group 812</button>
                         <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Group 344</button>
                    </div>
                </div>
                
                <!-- Hotel Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-hotel')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[100px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Hotel</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="filter-hotel" class="hidden absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                         <div class="relative mb-2 px-1 pt-1">
                            <input type="text" placeholder="Search" class="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-blue-500 text-gray-600">
                        </div>
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Prime Makkah</button>
                    </div>
                </div>

                 <!-- Last Spot Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-spot')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[110px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Last Spot</span>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                     <div id="filter-spot" class="hidden absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Haji Camp</button>
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Airport Counter</button>
                    </div>
                </div>
                
                 <!-- Last Scanned Dropdown -->
                <div class="relative block text-left action-dropdown">
                    <button onclick="toggleDropdown('filter-scanned')" class="flex items-center justify-between w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 min-w-[120px] hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <span>Last Scanned</span>
                         <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="filter-scanned" class="hidden absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50 p-2">
                        <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Unknown</button>
                         <button class="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Unscanned</button>
                    </div>
                </div>

                 <button onclick="window.openMarkFoundModal()" class="bg-blue-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors ml-auto">
                    Mark All As Found
                </button>
            </div>
        </div>

        <!-- Table -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
             <table class="w-full text-left border-collapse table-fixed">
                <colgroup>
                    <col style="width: 12%"> <!-- Customer Name -->
                    <col style="width: 8%">  <!-- Passport -->
                    <col style="width: 8%">  <!-- Luggage No. -->
                    <col style="width: 8%">  <!-- Type -->
                    <col style="width: 5%">  <!-- Weight -->
                    <col style="width: 8%">  <!-- Flight No. -->
                    <col style="width: 12%"> <!-- Hotel -->
                    <col style="width: 8%">  <!-- Group -->
                    <col style="width: 7%">  <!-- Last Status -->
                    <col style="width: 10%"> <!-- Last Spot -->
                    <col style="width: 9%">  <!-- Last Scanned -->
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
                        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Last Status</th>
                        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Last Spot</th>
                        <th class="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Last Scanned</th>
                        <th class="px-3 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800">
                    ${generateMissingLuggageRows()}
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

function generateMissingLuggageRows() {
    const sampleData = [
        { name: 'Shah Sawar', passport: '091KBB7', luggageId: 'KJ09127', type: 'Suitcase', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Makkah', group: 'Group 81 scanned', lastStatus: 'In', spot: 'Haji Camp', scanned: 'Unknown' },
        { name: 'ByeWind', passport: '091KBB7', luggageId: 'KJ09127', type: 'Suitcase', weight: '22 kg', flightId: 'PK883', status: 'Out', hotel: 'Prime Makkah', group: 'Group 81 scanned', lastStatus: 'Out', spot: 'Airport Counter', scanned: 'Unknown' },
        { name: 'Drew Cano', passport: '091KBB7', luggageId: 'KJ09127', type: 'Handbag', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Hotel Makkah 544', group: 'Group 221', lastStatus: 'In', spot: 'Truck', scanned: 'Unknown' },
        { name: 'Orlando Diggs', passport: '091KBB7', luggageId: 'KJ09127', type: 'Handbag', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Makkah', group: 'Group 344', lastStatus: 'In', spot: 'Lobby', scanned: 'Unscanned' },
        { name: 'Andi Lane', passport: '091KBB7', luggageId: 'KJ09127', type: 'Suitcase', weight: '22 kg', flightId: 'PK883', status: 'Out', hotel: 'Prime Makkah', group: 'Group 344', lastStatus: 'Out', spot: 'Hotel', scanned: 'Unknown' },
        { name: 'Andi Lane', passport: '091KBB7', luggageId: 'KJ09127', type: 'Suitcase', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Makkah', group: 'Group 812', lastStatus: 'In', spot: 'Pakistan', scanned: 'Unscanned' },
        { name: 'Andi Lane', passport: '091KBB7', luggageId: 'KJ09127', type: 'Handbag', weight: '22 kg', flightId: 'PK883', status: 'Out', hotel: 'Prime Makkah', group: 'Group 81', lastStatus: 'Out', spot: 'Jeddah', scanned: 'Unknown' },
        { name: 'Andi Lane', passport: '091KBB7', luggageId: 'KJ09127', type: 'Handbag', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Makkah', group: 'Group 344', lastStatus: 'In', spot: 'Spot', scanned: 'Unscanned' },
        { name: 'Andi Lane', passport: '091KBB7', luggageId: 'KJ09127', type: 'Suitcase', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Makkah', group: 'Group 812', lastStatus: 'In', spot: 'Spot', scanned: 'Unscanned' },
        { name: 'Andi Lane', passport: '091KBB7', luggageId: 'KJ09127', type: 'Carton', weight: '22 kg', flightId: 'PK883', status: 'In', hotel: 'Prime Makkah', group: 'Group 555', lastStatus: 'In', spot: 'Spot', scanned: 'Unscanned' },

    ];

    return sampleData.map((item, index) => {
        let statusClass = '';
        let statusIcon = '';
        if (item.status === 'In') {
            statusClass = 'bg-blue-100 text-blue-500';
            statusIcon = '↓';
        } else if (item.status === 'Out') {
            statusClass = 'bg-green-100 text-green-500';
            statusIcon = '↑';
        }

        let scannedClass = 'bg-red-100 text-red-500';
        if (item.scanned === 'Unknown') {
            scannedClass = 'bg-red-100 text-red-500';
        }

        return `
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-3 py-3 text-xs text-gray-900 dark:text-white truncate" title="${item.name}">${item.name}</td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate">${item.passport}</td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate">${item.luggageId}</td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate">${item.type}</td>
            <td class="px-3 py-3 text-xs text-gray-900 dark:text-white font-medium truncate">${item.weight}</td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate">${item.flightId}</td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate" title="${item.hotel}">${item.hotel}</td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate">${item.group}</td>
             <td class="px-3 py-3">
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass}">
                    ${statusIcon} ${item.status}
                </span>
            </td>
            <td class="px-3 py-3 text-xs text-gray-600 dark:text-gray-300 truncate">
                 <span class="inline-flex items-center justify-center px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300">
                    ${item.spot}
                </span>
            </td>
            <td class="px-3 py-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${scannedClass}">
                    ${item.scanned}
                </span>
            </td>
            <td class="px-3 py-3 text-center relative">
                 <div class="relative inline-block text-left action-dropdown">
                    <button onclick="toggleDropdown('missing-luggage-dropdown-${index}')" class="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 focus:outline-none">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                        </svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div id="missing-luggage-dropdown-${index}" class="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden text-left">
                        <div class="py-1">
                             <button class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                <span>View All Details</span>
                            </button>
                            <button onclick="window.openScanUpdateModal()" class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                 <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                <span>Scan / Update Status</span>
                            </button>
                            <button onclick="window.openDeleteModal()" class="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                                <span>Delete Luggage</span>
                            </button>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        `;
    }).join('');
}
