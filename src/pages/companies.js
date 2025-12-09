export function createCompaniesPage() {
    return `
    <div class="p-6">
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900 mb-1">Companies</h1>
            <p class="text-gray-600">Manage partner companies and vendors</p>
        </div>

        <div class="bg-white rounded-xl border border-gray-200">
            <!-- Search and Filters Header -->
            <div class="p-4 border-b border-gray-200" style="overflow-x: auto;">
                <div class="flex items-center gap-2" style="display: inline-flex; white-space: nowrap; min-width: min-content;">
                    <!-- Search Input -->
                    <div class="flex-shrink-0" style="min-width: 350px;">
                        <input 
                            type="text" 
                            placeholder="Search by name, passport, group, airline, hotel, RFID" 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                    </div>
                    
                    <!-- Filter Dropdowns -->
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Flight No.</option>
                        <option>Flight 101</option>
                        <option>Flight 102</option>
                        <option>Flight 103</option>
                    </select>
                    
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Luggage Type</option>
                        <option>Suitcase</option>
                        <option>Backpack</option>
                        <option>Duffle</option>
                    </select>
                    
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Status</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Delivered</option>
                    </select>
                    
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Group</option>
                        <option>Group A</option>
                        <option>Group B</option>
                        <option>Group C</option>
                    </select>
                    
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Hotel</option>
                        <option>Grand Hotel</option>
                        <option>Plaza Hotel</option>
                        <option>Resort</option>
                    </select>
                    
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Current Spot</option>
                        <option>Warehouse A</option>
                        <option>Terminal 2</option>
                        <option>Gate 5</option>
                    </select>
                    
                    <select class="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                        <option>Scanned/Unknown</option>
                        <option>Scanned</option>
                        <option>Unknown</option>
                    </select>
                </div>
            </div>
            
            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="border-b border-gray-200">
                        <tr class="bg-white">
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Customer Name</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Request</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Luggage No</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Hotel</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Flights No</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Height</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Status</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Current Scan</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Last Scanned</th>
                            <th class="px-4 py-3 text-left text-xs font-normal text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr class="hover:bg-gray-50">
                            <td class="px-4 py-3 text-sm font-medium text-gray-900">Makkah Logistics</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Transport</td>
                            <td class="px-4 py-3 text-sm text-gray-900">LUG-001</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Grand Hotel</td>
                            <td class="px-4 py-3 text-sm text-gray-900">FL-123</td>
                            <td class="px-4 py-3 text-sm text-gray-900">120cm</td>
                            <td class="px-4 py-3"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                            <td class="px-4 py-3 text-sm text-gray-900">Warehouse A</td>
                            <td class="px-4 py-3 text-sm text-gray-900">2h ago</td>
                            <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="px-4 py-3 text-sm font-medium text-gray-900">Storage Solutions</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Warehouse</td>
                            <td class="px-4 py-3 text-sm text-gray-900">LUG-002</td>
                            <td class="px-4 py-3 text-sm text-gray-900">Plaza Hotel</td>
                            <td class="px-4 py-3 text-sm text-gray-900">FL-456</td>
                            <td class="px-4 py-3 text-sm text-gray-900">95cm</td>
                            <td class="px-4 py-3"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span></td>
                            <td class="px-4 py-3 text-sm text-gray-900">Terminal 2</td>
                            <td class="px-4 py-3 text-sm text-gray-900">5h ago</td>
                            <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `;
}
