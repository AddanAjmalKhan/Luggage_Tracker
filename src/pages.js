import { state } from './data.js';

export function createMissingLuggagePage() {
  const stats = [
    { label: 'Total Missing', value: '7,265', icon: '🔍', color: 'bg-red-50 text-red-600' },
    { label: 'Unscanned', value: '7,265', icon: '📦', color: 'bg-orange-50 text-orange-600' },
    { label: 'Last Scanned Time', value: '12:00 PM', icon: '🕐', color: 'bg-yellow-50 text-yellow-600' },
  ];

  return `
    <div class="p-6">
      <!-- Welcome Section -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Missing Luggage</h1>
        <p class="text-gray-600">Track and manage missing luggage items</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        ${stats.map(stat => `
          <div class="bg-white rounded-xl p-5 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-2xl">${stat.icon}</span>
            </div>
            <div class="text-sm text-gray-600 mb-1">${stat.label}</div>
            <div class="text-2xl font-bold text-gray-900">${stat.value}</div>
          </div>
        `).join('')}
      </div>

      <!-- Table Section -->
      <div class="bg-white rounded-xl border border-gray-200">
        <!-- Table Header -->
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Search..."
              class="input-field w-96"
            />
            <select class="input-field w-32">
              <option>Filter Type</option>
            </select>
            <select class="input-field w-32">
              <option>Status</option>
            </select>
          </div>
          <button onclick="markAllAsFound()" class="bg-success hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-colors">
            Mark All as Found
          </button>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                  <input type="checkbox" class="rounded" />
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Serial Number</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Luggage ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Subcase</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Weight</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Hotel</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Destination</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Drop Off</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Scanned</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              ${state.missingLuggage.map(item => `
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <input type="checkbox" class="rounded" />
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.serialNumber}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.luggageId}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.subcase}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.city}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.hotel}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.destination}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.dropOff}</td>
                  <td class="px-4 py-3">
                    <span class="badge badge-danger">
                      ${item.status}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">${item.lastScanned}</td>
                  <td class="px-4 py-3">
                    <button onclick="openScanModal(${item.id})" class="text-primary hover:text-primary-dark">
                      Scan
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="p-4 border-t border-gray-200 flex items-center justify-between">
          <div class="text-sm text-gray-600">
            Showing 1-${state.missingLuggage.length} of ${state.missingLuggage.length} results
          </div>
          <div class="flex gap-2">
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Previous</button>
            <button class="px-3 py-1 bg-primary text-white rounded">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function createHotelsPage() {
  const stats = [
    { label: 'Total Hotels', value: '3', icon: '🏨', color: 'bg-blue-50 text-blue-600' },
    { label: 'Total Luggage', value: '7,265', icon: '🧳', color: 'bg-green-50 text-green-600' },
    { label: 'Active Hotels', value: '3', icon: '✅', color: 'bg-purple-50 text-purple-600' },
    { label: 'Last Updated', value: '12:00 PM', icon: '🕐', color: 'bg-orange-50 text-orange-600' },
  ];

  return `
    <div class="p-6">
      <!-- Welcome Section -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Hotels</h1>
        <p class="text-gray-600">Manage hotel luggage operations</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        ${stats.map(stat => `
          <div class="bg-white rounded-xl p-5 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-2xl">${stat.icon}</span>
            </div>
            <div class="text-sm text-gray-600 mb-1">${stat.label}</div>
            <div class="text-2xl font-bold text-gray-900">${stat.value}</div>
          </div>
        `).join('')}
      </div>

      <!-- Table Section -->
      <div class="bg-white rounded-xl border border-gray-200">
        <!-- Table Header -->
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Search hotels..."
              class="input-field w-96"
            />
            <select class="input-field w-32">
              <option>Status</option>
            </select>
          </div>
          <button onclick="openAddHotelModal()" class="btn-primary flex items-center gap-2">
            <span>+</span>
            Add New Hotel
          </button>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Hotel Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Total Luggage</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">In</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Out</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Pending</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Missing</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Updated</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              ${state.hotels.map(hotel => `
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">${hotel.hotelName}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${hotel.totalLuggage.toLocaleString()}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${hotel.in}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${hotel.out}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${hotel.pending}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${hotel.missing}</td>
                  <td class="px-4 py-3">
                    <span class="badge badge-success">
                      ${hotel.status}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">${hotel.lastUpdated}</td>
                  <td class="px-4 py-3">
                    <button class="text-gray-600 hover:text-gray-900">⋮</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="p-4 border-t border-gray-200 flex items-center justify-between">
          <div class="text-sm text-gray-600">
            Showing 1-${state.hotels.length} of ${state.hotels.length} results
          </div>
          <div class="flex gap-2">
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Previous</button>
            <button class="px-3 py-1 bg-primary text-white rounded">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function createCustomersLuggagePage() {
  const stats = [
    { label: 'Total Luggage', value: '7,265', change: '+12.5%', trend: 'up' },
    { label: 'Active Luggage', value: '5,471', change: '+8.2%', trend: 'up' },
    { label: 'Missing Luggage', value: '2,318', change: '-3.1%', trend: 'down' },
    { label: 'Last Scanned Time', value: '1:2:00 PM', change: '', trend: 'neutral' },
  ];

  return `
    <div class="p-6">
      <!-- Welcome Section -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Welcome Admin Name</h1>
        <p class="text-gray-600">Fri, 12 June 2025</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        ${stats.map(stat => `
          <div class="bg-white rounded-xl p-5 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-600">${stat.label}</span>
              ${stat.change ? `
                <span class="text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
                  ${stat.change}
                </span>
              ` : ''}
            </div>
            <div class="text-2xl font-bold text-gray-900">${stat.value}</div>
          </div>
        `).join('')}
      </div>

      <!-- Table Section -->
      <div class="bg-white rounded-xl border border-gray-200">
        <!-- Table Header -->
        <div class="p-4 border-b border-gray-200 flex items-center justify-between flex-wrap gap-3">
          <div class="flex items-center gap-3 flex-wrap">
            <input 
              type="text" 
              placeholder="Search by serial number, luggage ID, hotel, PNR, customer name or other field..."
              class="input-field w-96"
            />
            <select class="input-field w-32">
              <option>Flight No</option>
            </select>
            <select class="input-field w-32">
              <option>Luggage Type</option>
            </select>
            <select class="input-field w-32">
              <option>Status</option>
            </select>
            <select class="input-field w-32">
              <option>Vendor</option>
            </select>
            <select class="input-field w-32">
              <option>Hotel</option>
            </select>
          </div>
          <button onclick="openAddLuggageModal()" class="btn-primary flex items-center gap-2">
            <span>+</span>
            Add new Luggage
          </button>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Serial Number</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Luggage ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Subcase</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Weight</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Hotel</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Destination</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Drop Off</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Scanned</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              ${state.luggage.map(item => `
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 text-sm text-gray-900">${item.serialNumber}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.luggageId}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.subcase}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.city}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.hotel}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.destination}</td>
                  <td class="px-4 py-3 text-sm text-gray-900">${item.dropOff}</td>
                  <td class="px-4 py-3">
                    <span class="badge ${item.status === 'In' ? 'badge-success' :
      item.status === 'Out' ? 'badge-info' :
        'badge-warning'
    }">
                      ${item.status}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600">${item.lastScanned}</td>
                  <td class="px-4 py-3">
                    <button class="text-gray-600 hover:text-gray-900">⋮</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="p-4 border-t border-gray-200 flex items-center justify-between">
          <div class="text-sm text-gray-600">
            Showing 1-10 of ${state.luggage.length} results
          </div>
          <div class="flex gap-2">
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Previous</button>
            <button class="px-3 py-1 bg-primary text-white rounded">1</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">3</button>
            <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function createGroupsPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Groups</h1>
        <p class="text-gray-600">Manage customer groups and categories</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <input type="text" placeholder="Search groups..." class="input-field w-96" />
          <button class="btn-primary">+ Add New Group</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Group Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Members</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Created Date</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">VIP Customers</td>
                <td class="px-4 py-3 text-sm text-gray-900">45</td>
                <td class="px-4 py-3 text-sm text-gray-600">01/15/2025</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Regular Customers</td>
                <td class="px-4 py-3 text-sm text-gray-900">128</td>
                <td class="px-4 py-3 text-sm text-gray-600">01/10/2025</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function createAirlinesPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Airlines</h1>
        <p class="text-gray-600">Manage airline partners and flight information</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <input type="text" placeholder="Search airlines..." class="input-field w-96" />
          <button class="btn-primary">+ Add New Airline</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Airline Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Code</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Total Flights</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Active Luggage</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Emirates Airlines</td>
                <td class="px-4 py-3 text-sm text-gray-900">EK</td>
                <td class="px-4 py-3 text-sm text-gray-900">156</td>
                <td class="px-4 py-3 text-sm text-gray-900">2,345</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Saudi Airlines</td>
                <td class="px-4 py-3 text-sm text-gray-900">SV</td>
                <td class="px-4 py-3 text-sm text-gray-900">98</td>
                <td class="px-4 py-3 text-sm text-gray-900">1,876</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function createSystemUsersPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">System Users</h1>
        <p class="text-gray-600">Manage system users and access control</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <input type="text" placeholder="Search users..." class="input-field w-96" />
          <button class="btn-primary">+ Add New User</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Email</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Role</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Last Login</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Admin Name</td>
                <td class="px-4 py-3 text-sm text-gray-900">admin@luggagetrax.com</td>
                <td class="px-4 py-3 text-sm text-gray-900">Administrator</td>
                <td class="px-4 py-3 text-sm text-gray-600">2 hours ago</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">John Doe</td>
                <td class="px-4 py-3 text-sm text-gray-900">john@luggagetrax.com</td>
                <td class="px-4 py-3 text-sm text-gray-900">Manager</td>
                <td class="px-4 py-3 text-sm text-gray-600">1 day ago</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function createPermissionsPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Permissions</h1>
        <p class="text-gray-600">Manage roles and permissions</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <input type="text" placeholder="Search permissions..." class="input-field w-96" />
          <button class="btn-primary">+ Add New Role</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Role Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Users</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Permissions</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Created Date</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Administrator</td>
                <td class="px-4 py-3 text-sm text-gray-900">3</td>
                <td class="px-4 py-3 text-sm text-gray-900">Full Access</td>
                <td class="px-4 py-3 text-sm text-gray-600">01/01/2025</td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Manager</td>
                <td class="px-4 py-3 text-sm text-gray-900">8</td>
                <td class="px-4 py-3 text-sm text-gray-900">Read, Write, Update</td>
                <td class="px-4 py-3 text-sm text-gray-600">01/01/2025</td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Viewer</td>
                <td class="px-4 py-3 text-sm text-gray-900">15</td>
                <td class="px-4 py-3 text-sm text-gray-900">Read Only</td>
                <td class="px-4 py-3 text-sm text-gray-600">01/01/2025</td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function createCompaniesPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Companies</h1>
        <p class="text-gray-600">Manage partner companies and vendors</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <input type="text" placeholder="Search companies..." class="input-field w-96" />
          <button class="btn-primary">+ Add New Company</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Company Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Contact</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Active Contracts</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Makkah Logistics</td>
                <td class="px-4 py-3 text-sm text-gray-900">Transport</td>
                <td class="px-4 py-3 text-sm text-gray-900">+966 12 345 6789</td>
                <td class="px-4 py-3 text-sm text-gray-900">5</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Storage Solutions</td>
                <td class="px-4 py-3 text-sm text-gray-900">Warehouse</td>
                <td class="px-4 py-3 text-sm text-gray-900">+966 11 234 5678</td>
                <td class="px-4 py-3 text-sm text-gray-900">3</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function createDashboardPage() {
  const stats = [
    { label: 'Total Luggage', value: '7,265', icon: '🧳', change: '+12.5%', color: 'bg-blue-50' },
    { label: 'Active Luggage', value: '5,471', icon: '✅', change: '+8.2%', color: 'bg-green-50' },
    { label: 'Missing Luggage', value: '2,318', icon: '🔍', change: '-3.1%', color: 'bg-red-50' },
    { label: 'Total Hotels', value: '3', icon: '🏨', change: '', color: 'bg-purple-50' },
  ];

  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
        <p class="text-gray-600">Overview of luggage management system</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        ${stats.map(stat => `
          <div class="bg-white rounded-xl p-5 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-2xl">${stat.icon}</span>
              ${stat.change ? `<span class="text-xs text-gray-600">${stat.change}</span>` : ''}
            </div>
            <div class="text-sm text-gray-600 mb-1">${stat.label}</div>
            <div class="text-2xl font-bold text-gray-900">${stat.value}</div>
          </div>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl border border-gray-200 p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span class="text-2xl">🧳</span>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">New luggage added</p>
                <p class="text-xs text-gray-600">2 minutes ago</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span class="text-2xl">🔍</span>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">Missing luggage reported</p>
                <p class="text-xs text-gray-600">15 minutes ago</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span class="text-2xl">✅</span>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">Luggage delivered</p>
                <p class="text-xs text-gray-600">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-gray-200 p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div class="space-y-2">
            <button onclick="navigateTo('customers-luggage')" class="w-full btn-primary text-left">
              Add New Luggage
            </button>
            <button onclick="navigateTo('missing-luggage')" class="w-full btn-secondary text-left">
              Report Missing Luggage
            </button>
            <button onclick="navigateTo('hotels')" class="w-full btn-secondary text-left">
              Manage Hotels
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function createRolesPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Roles</h1>
        <p class="text-gray-600">Manage user roles and access levels</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <input type="text" placeholder="Search roles..." class="input-field w-96" />
          <button class="btn-primary">+ Add New Role</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Role Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Description</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Users</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Administrator</td>
                <td class="px-4 py-3 text-sm text-gray-900">Full system access</td>
                <td class="px-4 py-3 text-sm text-gray-900">3</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Manager</td>
                <td class="px-4 py-3 text-sm text-gray-900">Manage operations</td>
                <td class="px-4 py-3 text-sm text-gray-900">8</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">Staff</td>
                <td class="px-4 py-3 text-sm text-gray-900">Basic operations</td>
                <td class="px-4 py-3 text-sm text-gray-900">15</td>
                <td class="px-4 py-3"><span class="badge badge-success">Active</span></td>
                <td class="px-4 py-3"><button class="text-gray-600 hover:text-gray-900">⋮</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function createComplaintsPage() {
  return `
    <div class="p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-1">Complaints</h1>
        <p class="text-gray-600">Manage customer complaints and feedback</p>
      </div>

      <div class="bg-white rounded-xl border border-gray-200">
        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <input type="text" placeholder="Search complaints..." class="input-field w-96" />
            <select class="input-field w-32">
              <option>Status</option>
              <option>Open</option>
              <option>Resolved</option>
              <option>Pending</option>
            </select>
          </div>
          <button class="btn-primary">+ Add New Complaint</button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Complaint ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Customer Name</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Subject</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Priority</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Date</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">#C001</td>
                <td class="px-4 py-3 text-sm text-gray-900">Ahmed Ali</td>
                <td class="px-4 py-3 text-sm text-gray-900">Lost luggage</td>
                <td class="px-4 py-3"><span class="badge badge-danger">High</span></td>
                <td class="px-4 py-3"><span class="badge badge-warning">Pending</span></td>
                <td class="px-4 py-3 text-sm text-gray-600">12/05/2025</td>
                <td class="px-4 py-3"><button class="text-primary hover:text-primary-dark">View</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">#C002</td>
                <td class="px-4 py-3 text-sm text-gray-900">Sara Mohammed</td>
                <td class="px-4 py-3 text-sm text-gray-900">Damaged luggage</td>
                <td class="px-4 py-3"><span class="badge badge-warning">Medium</span></td>
                <td class="px-4 py-3"><span class="badge badge-success">Resolved</span></td>
                <td class="px-4 py-3 text-sm text-gray-600">12/04/2025</td>
                <td class="px-4 py-3"><button class="text-primary hover:text-primary-dark">View</button></td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900">#C003</td>
                <td class="px-4 py-3 text-sm text-gray-900">Omar Hassan</td>
                <td class="px-4 py-3 text-sm text-gray-900">Delayed delivery</td>
                <td class="px-4 py-3"><span class="badge badge-info">Low</span></td>
                <td class="px-4 py-3"><span class="badge badge-warning">Pending</span></td>
                <td class="px-4 py-3 text-sm text-gray-600">12/03/2025</td>
                <td class="px-4 py-3"><button class="text-primary hover:text-primary-dark">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
