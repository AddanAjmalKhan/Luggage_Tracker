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
