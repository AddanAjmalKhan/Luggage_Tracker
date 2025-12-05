export function createAddLuggageModal() {
  return `
    <div id="addLuggageModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
      <div class="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
        <div class="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 class="text-xl font-bold text-gray-900">Add New Luggage</h2>
          <button onclick="closeModal('addLuggageModal')" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <form class="p-6 space-y-4" onsubmit="handleAddLuggage(event)">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Serial Number</label>
              <input type="text" name="serialNumber" class="input-field" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Luggage ID</label>
              <input type="text" name="luggageId" class="input-field" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Subcase</label>
              <select name="subcase" class="input-field" required>
                <option value="">Select...</option>
                <option value="Suitcase">Suitcase</option>
                <option value="Handbag">Handbag</option>
                <option value="Backpack">Backpack</option>
                <option value="Carrier">Carrier</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Weight</label>
              <input type="text" name="city" class="input-field" placeholder="e.g., 22 kg" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Hotel Code</label>
              <input type="text" name="hotel" class="input-field" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <input type="text" name="destination" class="input-field" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Drop Off</label>
              <input type="text" name="dropOff" class="input-field" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select name="status" class="input-field" required>
                <option value="">Select...</option>
                <option value="In">In</option>
                <option value="Out">Out</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          
          <div class="flex gap-3 justify-end pt-4">
            <button type="button" onclick="closeModal('addLuggageModal')" class="btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn-primary">
              Add Luggage
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function createDeleteConfirmationModal() {
  return `
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
      <div class="bg-white rounded-xl w-full max-w-md m-4">
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-2">Delete Luggage</h2>
          <p class="text-gray-600 mb-6">
            Are you sure you want to delete this luggage record? This action cannot be undone.
          </p>
          
          <div class="flex gap-3 justify-end">
            <button onclick="closeModal('deleteModal')" class="btn-secondary">
              Cancel
            </button>
            <button onclick="confirmDelete()" class="btn-danger">
              Delete Luggage
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function createAddHotelModal() {
  return `
    <div id="addHotelModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
      <div class="bg-white rounded-xl w-full max-w-md m-4">
        <div class="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-900">Add New Hotel</h2>
          <button onclick="closeModal('addHotelModal')" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <form class="p-6 space-y-4" onsubmit="handleAddHotel(event)">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
            <input type="text" name="hotelName" class="input-field" required />
          </div>
          
          <div class="flex gap-3 justify-end pt-4">
            <button type="button" onclick="closeModal('addHotelModal')" class="btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn-primary">
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
