import { state } from '../js/data.js';

export function createHotelsPage() {
    return `
    <div class="px-6 py-6">
        <!-- Breadcrumbs -->
        <div class="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            <span>/</span>
            <span>Hotels</span>
        </div>

        <!-- Page Header -->
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h2 class="text-xl font-bold text-[#042f38]">Hotels</h2>
              
            </div>
            <button onclick="window.openAddHotelModal()" class="bg-[#38b6ff] hover:bg-blue-400 text-white px-6 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-medium transition-all hover:shadow-md">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                Add New Hotel
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-5 mb-8">
            <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500 mb-1">Total Hotels</p>
                        <h3 class="text-2xl font-bold text-gray-800">7,265</h3>
                    </div>
                    <div class="p-2 bg-teal-50 rounded-lg">
                       <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500 mb-1">Total Luggage</p>
                        <h3 class="text-2xl font-bold text-gray-800">7,265</h3>
                    </div>
                    <div class="p-2 bg-green-50 rounded-lg">
                         <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7v4a1 1 0 01-1 1h-2a1 1 0 01-1-1V7m0 0a2 2 0 100 4 2 2 0 000-4zm-8 4h2a1 1 0 011 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 011-1z"></path></svg>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500 mb-1">Scanned Luggage</p>
                        <h3 class="text-2xl font-bold text-gray-800">7,265</h3>
                    </div>
                     <div class="p-2 bg-blue-50 rounded-lg">
                        <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                    </div>
                </div>
            </div>

           <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500 mb-1">Pending Luggage</p>
                        <h3 class="text-2xl font-bold text-gray-800">12:00 PM</h3>
                    </div>
                    <div class="p-2 bg-yellow-50 rounded-lg">
                        <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
                <div class="flex items-start justify-between">
                    <div>
                        <p class="text-sm font-medium text-gray-500 mb-1">Total Weight</p>
                        <h3 class="text-2xl font-bold text-gray-800">7,265</h3>
                    </div>
                    <div class="p-2 bg-gray-50 rounded-lg">
                        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="px-4 py-3 border-b border-gray-200 flex items-center justify-between gap-4">
                 <!-- Search -->
                 <div class="relative w-72">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <input type="text" placeholder="Search" class="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary text-sm transition-shadow">
                 </div>

                 <div class="flex items-center gap-2">
                    <!-- Status Filter Dropdown -->
                    <div class="relative action-dropdown">
                        <button onclick="window.toggleDropdown('dropdown-status')" class="flex items-center justify-between min-w-[120px] px-3 py-2 text-sm border border-gray-300 bg-white rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                            <span>Status</span>
                            <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <!-- Dropdown Content -->
                        <div id="dropdown-status" class="hidden absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-20">
                             <div class="space-y-1">
                                <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700">Active</button>
                                <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700">In-Active</button>
                             </div>
                        </div>
                    </div>


                    <!-- Last Updated Dropdown -->
                    <div class="relative action-dropdown">
                        <button onclick="window.toggleDropdown('dropdown-last-updated')" class="flex items-center justify-between min-w-[160px] px-4 py-2.5 text-sm border border-gray-300 bg-white rounded-lg text-gray-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary">
                            <span>Last Updated</span>
                            <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        
                         <!-- Dropdown Content -->
                        <div id="dropdown-last-updated" class="hidden absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                             
                             <!-- View 1: Preset List -->
                             <div id="last-updated-list" class="p-2 space-y-1">
                                <label class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer group">
                                     <input type="checkbox" checked class="w-4 h-4 rounded border-gray-300 text-[#38b6ff] focus:ring-[#38b6ff]">
                                     <span class="text-sm text-gray-700">Today</span>
                                </label>
                                <label class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer group">
                                     <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#38b6ff] focus:ring-[#38b6ff]">
                                     <span class="text-sm text-gray-700">Last 24 hours</span>
                                </label>
                                <label class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer group">
                                     <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#38b6ff] focus:ring-[#38b6ff]">
                                     <span class="text-sm text-gray-700">This Week</span>
                                </label>
                                <label class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer group">
                                     <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#38b6ff] focus:ring-[#38b6ff]">
                                     <span class="text-sm text-gray-700">This Month</span>
                                </label>
                                <label class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer group">
                                     <input type="checkbox" checked class="w-4 h-4 rounded border-gray-300 text-[#38b6ff] focus:ring-[#38b6ff]">
                                     <span class="text-sm text-gray-700">This Year</span>
                                </label>
                                
                                <div class="border-t border-gray-100 my-1 pt-1">
                                    <label onclick="document.getElementById('last-updated-list').classList.add('hidden'); document.getElementById('last-updated-calendar').classList.remove('hidden');" class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer group">
                                         <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-[#38b6ff] focus:ring-[#38b6ff]">
                                         <span class="text-sm text-gray-700">Custom Date Range</span>
                                    </label>
                                </div>
                             </div>

                             <!-- View 2: Custom Calendar (Hidden by default) -->
                             <div id="last-updated-calendar" class="hidden p-4">
                                <!-- Back/Toggle Header -->
                                <div class="flex items-center gap-3 mb-4">
                                     <input type="checkbox" checked onclick="document.getElementById('last-updated-calendar').classList.add('hidden'); document.getElementById('last-updated-list').classList.remove('hidden');" class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer">
                                     <span class="text-sm font-medium text-gray-900">Custom Date Range</span>
                                </div>

                                <!-- Tabs -->
                                <div class="flex bg-gray-100 p-1 rounded-lg mb-4">
                                    <button class="flex-1 py-1.5 text-xs font-medium text-white bg-[#38b6ff] rounded shadow-sm text-center">From</button>
                                    <button class="flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 text-center">To</button>
                                </div>

                                <!-- Date Selectors -->
                                <div class="flex items-center gap-2 mb-4">
                                    <div class="relative flex-1">
                                        <select class="w-full appearance-none text-xs font-medium bg-transparent border-none pr-4 focus:ring-0 cursor-pointer">
                                            <option>2025</option>
                                        </select>
                                        <svg class="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                    <div class="relative flex-1">
                                        <select class="w-full appearance-none text-xs font-medium bg-transparent border-none pr-4 focus:ring-0 cursor-pointer">
                                            <option>November</option>
                                        </select>
                                        <svg class="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                 <!-- Calendar Grid -->
                                 <div class="grid grid-cols-7 gap-1 text-center mb-2">
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">M</div>
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">T</div>
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">W</div>
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">T</div>
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">F</div>
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">S</div>
                                     <div class="text-[10px] font-medium text-gray-400 uppercase">S</div>
                                 </div>
                                 <div class="grid grid-cols-7 gap-y-1 gap-x-0 text-center text-xs">
                                     <!-- Empty cells -->
                                     <div></div><div></div><div></div><div></div><div></div>
                                     <!-- Days -->
                                     <div class="py-1.5 text-gray-300">1</div>
                                     
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">2</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">3</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">4</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">5</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">6</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">7</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">8</div>

                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">9</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">10</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">11</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">12</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">13</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">14</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">15</div>

                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">16</div>
                                     <div class="py-1.5 bg-[#38b6ff] text-white rounded-full cursor-pointer">17</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">18</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">19</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">20</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">21</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">22</div>

                                     <div class="py-1.5 bg-gray-100 cursor-pointer rounded-l-full">23</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">24</div>
                                     <div class="py-1.5 bg-gray-100 cursor-pointer">25</div>
                                     <div class="py-1.5 bg-[#38b6ff] text-white rounded-full cursor-pointer relative z-10 -ml-1">26</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">27</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">28</div>
                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">29</div>

                                     <div class="py-1.5 hover:bg-gray-50 rounded cursor-pointer">30</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div>
                <table class="w-full table-fixed">
                    <thead class="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <tr>
                            <th class="w-[15%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Hotel</th>
                            <th class="w-[10%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Hotel Code / ID</th>
                            <th class="w-[10%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Building No.</th>
                            <th class="w-[8%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Total Luggage</th>
                            <th class="w-[8%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Total Weight</th>
                            <th class="w-[7%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Scanned</th>
                            <th class="w-[7%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Pending</th>
                            <th class="w-[7%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Missing</th>
                            <th class="w-[12%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Last Updated</th>
                            <th class="w-[10%] px-3 py-2.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Hotel Status</th>
                            <th class="w-[6%] px-3 py-2.5 text-center text-xs font-medium text-gray-500 dark:text-gray-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-100">
                        ${state.hotels.map((hotel, index) => {
        let statusClass = '';
        let statusText = hotel.status;
        if (statusText === 'Active') {
            statusClass = 'bg-[#dcfce7] text-[#166534]';
        } else if (statusText === 'In-Active') {
            statusClass = 'bg-[#fee2e2] text-[#991b1b]';
        } else if (statusText === 'Out') {
            statusClass = 'bg-[#ccfbf1] text-[#115e59]';
            statusText = '↑ Out';
        }

        return `
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-3 py-3 text-xs text-gray-900 font-medium break-words">${hotel.hotelName}</td>
                                <td class="px-3 py-3 text-xs text-gray-500 break-words">${hotel.hotelCode || 'N/A'}</td>
                                <td class="px-3 py-3 text-xs text-gray-900 break-words">${hotel.buildingNo || 'N/A'}</td>
                                <td class="px-3 py-3 text-xs text-gray-900">${hotel.totalLuggage}</td>
                                <td class="px-3 py-3 text-xs text-gray-900">${hotel.totalWeight}</td>
                                <td class="px-3 py-3 text-xs text-gray-900">${hotel.scanned}</td>
                                <td class="px-3 py-3 text-xs text-gray-900">${hotel.pending}</td>
                                <td class="px-3 py-3 text-xs text-gray-900">${hotel.missing}</td>
                                <td class="px-3 py-3 text-xs text-gray-500 break-words">${hotel.lastUpdated}</td>
                                <td class="px-3 py-3">
                                    <span class="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                                        ${statusText}
                                    </span>
                                </td>
                                <td class="px-3 py-3 text-center text-xs font-medium relative">
                                     <div class="relative action-dropdown inline-block text-left">
                                        <button onclick="window.toggleDropdown('dropdown-action-${index}')" class="text-gray-400 hover:text-gray-600 focus:outline-none p-1 rounded-full hover:bg-gray-100">
                                            <svg class="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>
                                        </button>
                                        <!-- Dropdown Menu -->
                                        <div id="dropdown-action-${index}" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 border border-gray-100 overflow-hidden">
                                             <div class="py-1">
                                                <button class="w-full text-left group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                    <svg class="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                    View Details
                                                </button>
                                                <button class="w-full text-left group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                     <svg class="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                    Update Status
                                                </button>
                                                <button class="w-full text-left group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                                    <svg class="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                    Delete Hotel
                                                </button>
                                             </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            `;
    }).join('')}
                    </tbody>
                </table>
            </div>

            <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-white rounded-b-xl">
                 <div class="text-sm text-teal-600 font-medium">Showing <span class="font-bold">1-10</span> of <span class="font-bold">100</span></div>
                <div class="flex items-center gap-1">
                     <button class="p-2 rounded hover:bg-gray-100 text-gray-400 disabled:opacity-50">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                     </button>
                    <button class="w-8 h-8 flex items-center justify-center bg-[#0d9488] text-white rounded text-sm font-medium shadow-sm transition-colors">1</button>
                    <button class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600 rounded text-sm font-medium transition-colors">2</button>
                    <button class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600 rounded text-sm font-medium transition-colors">3</button>
                    <button class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600 rounded text-sm font-medium transition-colors">4</button>
                    <button class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-600 rounded text-sm font-medium transition-colors">5</button>
                    <button class="p-2 rounded hover:bg-gray-100 text-gray-400">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
}
