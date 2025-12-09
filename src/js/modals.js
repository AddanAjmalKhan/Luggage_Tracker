export function createAddLuggageModal() {
  return `
    <div id="addLuggageModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl mx-4 shadow-2xl transform transition-all flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-8 py-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-700 shrink-0">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Add New Luggage</h2>
          <button onclick="closeModal('addLuggageModal')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="overflow-y-auto p-8 custom-scrollbar">
            <form class="space-y-6" onsubmit="handleAddLuggage(event)">
              <!-- Customer Info Section -->
              <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Customer Info</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Customer Name <span class="text-red-500">*</span></label>
                      <input type="text" name="customerName" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" required />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Father Name</label>
                      <input type="text" name="fatherName" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                    </div>
                     <div class="md:col-span-2">
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Date of Birth</label>
                       <div class="relative">
                          <input type="date" name="dob" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" value="2020-12-12" />
                       </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Passport No. <span class="text-red-500">*</span></label>
                      <input type="text" name="passport" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" required />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Contact</label>
                       <input type="text" name="contact" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Maktab No.</label>
                      <input type="text" name="maktabNo" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Room No.</label>
                      <input type="text" name="roomNo" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                    </div>
                  </div>
              </div>

              <!-- Luggage Info Section -->
              <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Luggage Info</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Luggage Number <span class="text-red-500">*</span></label>
                      <input type="text" name="luggageId" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" required />
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Luggage Type</label>
                       <div class="relative">
                           <select name="type" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                            <option value="Suitcase">Suitcase</option>
                            <option value="Handbag">Handbag</option>
                            <option value="Box">Box</option>
                          </select>
                          <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Status</label>
                       <div class="relative">
                           <select name="status" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                            <option value="In">In</option>
                            <option value="Out">Out</option>
                            <option value="Pending">Pending</option>
                          </select>
                           <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Current Spot</label>
                       <div class="relative">
                           <select name="currentSpot" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                            <option value="Spot">Spot</option>
                            <option value="Lobby">Lobby</option>
                            <option value="Hotel">Hotel</option>
                          </select>
                          <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Weight (kg)</label>
                      <input type="text" name="weight" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Steward ID</label>
                      <div class="relative">
                          <input type="text" name="stewardId" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                          <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500">
                            <!-- Clock Icon -->
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </button>
                      </div>
                    </div>
                    <div class="md:col-span-2">
                       <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Description</label>
                       <textarea name="description" rows="3" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder"></textarea>
                    </div>
                  </div>
              </div>

              <!-- Travel Information Section -->
              <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Travel Information</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Flight Number</label>
                      <input type="text" name="flightNo" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placeholder" />
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Hotel</label>
                       <div class="relative">
                           <select name="hotel" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                            <option value="">Select Hotel</option>
                            <option value="Prime Makkah">Prime Makkah</option>
                          </select>
                          <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                     <div class="md:col-span-2">
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Group Name</label>
                       <div class="relative">
                           <select name="group" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                            <option value="">Select Group</option>
                            <option value="Group 812">Group 812</option>
                          </select>
                          <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                    </div>
                  </div>
              </div>
              
              <!-- Actions -->
              <div class="flex gap-4 justify-between pt-4 mt-8">
                <button type="button" onclick="closeModal('addLuggageModal')" class="flex-1 px-6 py-3.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button type="submit" class="flex-1 px-6 py-3.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-colors shadow-blue-500/30">
                  Add Luggage
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  `;
}

export function createDeleteConfirmationModal() {
  return `
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg m-4 shadow-2xl transition-all">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
             <h2 class="text-lg font-bold text-gray-900 dark:text-white">Delete Luggage</h2>
             <button onclick="closeModal('deleteModal')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
             </button>
          </div>
          
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            This action will permanently remove this luggage record from the system.
            <br>
            Are you sure you want to continue?
          </p>
          
          <div class="flex gap-4 justify-end">
            <button onclick="closeModal('deleteModal')" class="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Cancel
            </button>
            <button onclick="confirmDelete()" class="flex-1 px-6 py-3 rounded-full bg-[#FF5252] hover:bg-red-600 text-white font-medium text-sm shadow-md transition-colors shadow-red-500/30">
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
    <div id="addHotelModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white rounded-xl w-full max-w-2xl m-4 shadow-2xl transform transition-all flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-8 py-6 border-b border-gray-100 flex items-center justify-between shrink-0">
          <h2 class="text-lg font-bold text-gray-900">Add New Hotel</h2>
          <button onclick="closeModal('addHotelModal')" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="overflow-y-auto p-8 custom-scrollbar">
            <form class="space-y-5" onsubmit="window.handleAddHotel(event)">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <!-- Hotel Name -->
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Hotel Name <span class="text-red-500">*</span></label>
                    <input type="text" name="hotelName" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Enter hotel name (e.g. Movenpick Hotel)" required />
                  </div>
                  <!-- Hotel Code -->
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Hotel Code / ID <span class="text-red-500">*</span></label>
                    <input type="text" name="hotelCode" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Enter Hotel Code / ID" required />
                  </div>
                  
                  <!-- Address -->
                  <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Hotel Address <span class="text-red-500">*</span></label>
                    <input type="text" name="address" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Enter full hotel address" required />
                  </div>

                  <!-- Building Number -->
                  <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Building Number</label>
                    <input type="text" name="buildingNo" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Enter building number here" />
                  </div>

                  <!-- Contact Person -->
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Contact Person Name</label>
                    <input type="text" name="contactPerson" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placehoder" />
                  </div>
                  <!-- Contact Number -->
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1.5">Contact Number</label>
                    <input type="text" name="contactNumber" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Placehoder" />
                  </div>

                  <!-- Status -->
                  <div class="md:col-span-2">
                      <label class="block text-xs font-semibold text-gray-500 mb-1.5">Hotel Status</label>
                      <div class="relative">
                           <select name="status" class="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                            <option value="">Select hotel status</option>
                            <option value="Active">Active</option>
                            <option value="In-Active">In-Active</option>
                          </select>
                          <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                       </div>
                  </div>
              </div>
              
              <div class="flex gap-4 justify-between pt-6 mt-2 border-t border-gray-100">
                <button type="button" onclick="closeModal('addHotelModal')" class="flex-1 px-6 py-3 rounded-full border border-gray-300 text-gray-500 font-medium text-sm hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" class="flex-1 px-6 py-3 rounded-full bg-[#38b6ff] hover:bg-blue-400 text-white font-medium text-sm shadow-md transition-colors">
                  Add Hotel
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  `;
}

export function createMarkFoundModal() {
  return `
    <div id="markFoundModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl mx-4 shadow-2xl transform transition-all flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-8 py-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-700 shrink-0">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Mark All as Found</h2>
          <button onclick="closeModal('markFoundModal')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-8 custom-scrollbar">
            <div class="mb-6">
                 <p class="text-sm text-gray-500 dark:text-gray-400">
                    To mark all selected luggages as found, please update their Last Scanned time. This will move them out of the Missing Luggages section.
                </p>
            </div>

            <!-- List of Items -->
            <div class="space-y-4 mb-8 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                <!-- Item 1 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 2 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 3 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 4 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 5 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 6 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 7 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 8 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 9 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
                 <!-- Item 10 -->
                <div class="pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div class="font-medium text-gray-900 dark:text-white text-sm">KJ09127</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">Shah Sawar</div>
                </div>
            </div>

            <!-- Last Scanned At -->
            <div class="mb-8">
                 <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Last Scanned At</label>
                 <div class="relative">
                    <input type="text" value="12:00 PM" readonly class="w-full px-4 py-3 bg-[#D3E0E2] dark:bg-gray-700 border-none rounded-lg text-sm text-[#37585F] dark:text-white font-medium focus:outline-none" />
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#37585F]">
                         <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                 </div>
            </div>

             <div class="mb-4">
                 <p class="text-xs text-gray-400 dark:text-gray-500">
                    This scanned date and time will be applied to all selected luggages.
                </p>
            </div>
              
              <!-- Actions -->
              <div class="flex gap-4 justify-between pt-2">
                <button type="button" onclick="closeModal('markFoundModal')" class="flex-1 px-6 py-3.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
                <button type="button" onclick="window.handleMarkFound()" class="flex-1 px-6 py-3.5 rounded-full bg-[#34A853] hover:bg-green-600 text-white font-semibold text-sm shadow-md transition-colors shadow-green-500/30">
                  Mark as Found
                </button>
              </div>
        </div>
      </div>
    </div>
  `;
}

export function createScanUpdateModal() {
  return `
    <div id="scanUpdateModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-lg mx-4 shadow-2xl transform transition-all">
        <!-- Header -->
        <div class="px-8 py-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Scan / Update Status - Mark as Found</h2>
          <button onclick="closeModal('scanUpdateModal')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-8">
            <!-- Update Status Section -->
            <div class="mb-6">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">Update Status</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    To scan this luggage as found, update the Last Scanned status. This will trigger an alert and the manager will be moved out of the Missing Luggages section.
                </p>
            </div>

            <!-- Last Scanned At -->
            <div class="mb-8">
                <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Last Scanned At</label>
                <div class="relative">
                    <input type="text" value="12:00 PM" readonly class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-700 dark:text-white font-medium focus:outline-none cursor-pointer" />
                    <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-4">
                <button onclick="closeModal('scanUpdateModal')" class="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Cancel
                </button>
                <button onclick="handleScanUpdate()" class="flex-1 px-6 py-3 rounded-full bg-[#10B981] hover:bg-green-600 text-white font-medium text-sm shadow-md transition-colors">
                    Mark as Found
                </button>
            </div>
        </div>
      </div>
    </div>
  `;
}


export function createEditDetailsModal() {
  return `
    <div id="editDetailsModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50 backdrop-blur-sm">
      <div class="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl mx-4 shadow-2xl transform transition-all flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-8 py-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-700 shrink-0">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Edit Details</h2>
          <button onclick="closeModal('editDetailsModal')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="overflow-y-auto p-8 custom-scrollbar">
            <form class="space-y-6" onsubmit="saveEditChanges(event)">
              <!-- Customer Info Section -->
              <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Customer Info</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Customer Name <span class="text-red-500">*</span></label>
                      <input type="text" name="customerName" value="Shahsawar" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" required />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Father Name</label>
                      <input type="text" name="fatherName" value="Sikandar Khan" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                    </div>
                     <div class="md:col-span-2">
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Date of Birth</label>
                       <div class="relative">
                          <input type="date" name="dob" value="1999-12-12" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                       </div>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Passport No. <span class="text-red-500">*</span></label>
                      <input type="text" name="passport" value="091K887" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" required />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Contact</label>
                       <input type="text" name="contact" value="(555) 123-4567" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                    </div>
                     <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Matab No.</label>
                      <input type="text" name="matabNo" value="0000" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Room No.</label>
                      <input type="text" name="roomNo" value="1002" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                    </div>
                  </div>
              </div>

              <!-- Luggage Info Section -->
              <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Luggage Info</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Luggage Number <span class="text-red-500">*</span></label>
                      <input type="text" name="luggageNumber" value="KJ09217" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" readonly />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Luggage Type</label>
                      <select name="luggageType" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow appearance-none bg-no-repeat bg-right pr-10" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236B7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E'); background-size: 1.5rem; background-position: right 0.75rem center;">
                        <option value="Suitcase" selected>Suitcase</option>
                        <option value="Handbag">Handbag</option>
                        <option value="Carton">Carton</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Status</label>
                      <select name="status" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow appearance-none bg-no-repeat bg-right pr-10" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236B7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E'); background-size: 1.5rem; background-position: right 0.75rem center;">
                        <option value="In" selected>In</option>
                        <option value="Out">Out</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Current Spot</label>
                      <select name="currentSpot" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow appearance-none bg-no-repeat bg-right pr-10" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236B7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E'); background-size: 1.5rem; background-position: right 0.75rem center;">
                        <option value="Airport Lobby" selected>Airport Lobby</option>
                        <option value="Terminal 1">Terminal 1</option>
                        <option value="Terminal 2">Terminal 2</option>
                        <option value="Storage">Storage</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Weight (kg)</label>
                      <input type="text" name="weight" value="20kg" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Scanned At</label>
                      <div class="relative">
                        <input type="time" name="scannedAt" value="12:00" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </span>
                      </div>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">If the last scan is unknown, the luggage goes to Missing Luggage.</p>
                    </div>
                    <div class="md:col-span-2">
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Description</label>
                      <div class="relative">
                        <textarea name="description" rows="4" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                        <button type="button" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>

              <!-- Travel Information Section -->
              <div>
                  <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Travel Information</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Flight Number</label>
                      <input type="text" name="flightNumber" value="PK883" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                    </div>
                    <div>
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Hotel</label>
                      <select name="hotel" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow appearance-none bg-no-repeat bg-right pr-10" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236B7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E'); background-size: 1.5rem; background-position: right 0.75rem center;">
                        <option value="Hotel Prime City Pak" selected>Hotel Prime City Pakah</option>
                        <option value="Grand Hotel">Grand Hotel</option>
                        <option value="Royal Inn">Royal Inn</option>
                      </select>
                    </div>
                    <div class="md:col-span-2">
                      <label class="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">Group Name</label>
                      <select name="groupName" class="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow appearance-none bg-no-repeat bg-right pr-10" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236B7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E'); background-size: 1.5rem; background-position: right 0.75rem center;">
                        <option value="AA12C" selected>AA12C</option>
                        <option value="BB34D">BB34D</option>
                        <option value="CC56E">CC56E</option>
                      </select>
                    </div>
                  </div>
              </div>
            </form>
        </div>

        <!-- Footer -->
        <div class="px-8 py-6 border-t border-gray-100 dark:border-gray-700 flex gap-4 shrink-0">
          <button type="button" onclick="closeModal('editDetailsModal')" class="flex-1 px-6 py-3 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
            Cancel
          </button>
          <button type="button" onclick="saveEditChanges()" class="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  `;
}
