import './style.css';
import { state, updateState } from './data.js';
import { createSidebar, createHeader } from './components.js';
import {
  createCustomersLuggagePage,
  createMissingLuggagePage,
  createHotelsPage,
  createGroupsPage,
  createAirlinesPage,
  createSystemUsersPage,
  createPermissionsPage,
  createCompaniesPage,
  createDashboardPage,
  createRolesPage,
  createComplaintsPage
} from './pages.js';
import { createAddLuggageModal, createDeleteConfirmationModal, createAddHotelModal } from './modals.js';


// Global function to toggle dropdown
window.toggleDropdown = function (dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll('[id^="dropdown-"]');

  // Close all other dropdowns
  allDropdowns.forEach(d => {
    if (d.id !== dropdownId) {
      d.classList.add('hidden');
    }
  });

  // Toggle current dropdown
  dropdown.classList.toggle('hidden');
};

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.action-dropdown')) {
    const allDropdowns = document.querySelectorAll('[id^="dropdown-"]');
    allDropdowns.forEach(d => d.classList.add('hidden'));
  }
});


// Global functions for event handlers
window.navigateTo = function (view) {
  updateState({ currentView: view });
  renderApp();
};

window.openAddLuggageModal = function () {
  document.getElementById('addLuggageModal').classList.remove('hidden');
  document.getElementById('addLuggageModal').classList.add('flex');
};

window.closeModal = function (modalId) {
  document.getElementById(modalId).classList.add('hidden');
  document.getElementById(modalId).classList.remove('flex');
};

window.handleAddLuggage = function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newLuggage = {
    id: state.luggage.length + 1,
    serialNumber: formData.get('serialNumber'),
    luggageId: formData.get('luggageId'),
    subcase: formData.get('subcase'),
    city: formData.get('city'),
    hotel: formData.get('hotel'),
    destination: formData.get('destination'),
    dropOff: formData.get('dropOff'),
    status: formData.get('status'),
    lastScanned: new Date().toLocaleString()
  };

  state.luggage.unshift(newLuggage);
  closeModal('addLuggageModal');
  renderApp();
};

window.confirmDelete = function () {
  // Delete logic here
  closeModal('deleteModal');
};

window.openAddHotelModal = function () {
  document.getElementById('addHotelModal').classList.remove('hidden');
  document.getElementById('addHotelModal').classList.add('flex');
};

window.handleAddHotel = function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newHotel = {
    id: state.hotels.length + 1,
    hotelName: formData.get('hotelName'),
    totalLuggage: 0,
    in: 0,
    out: 0,
    pending: 0,
    missing: 0,
    status: 'Active',
    lastUpdated: new Date().toLocaleString()
  };

  state.hotels.push(newHotel);
  closeModal('addHotelModal');
  renderApp();
};

window.openScanModal = function (id) {
  // Open scan modal for missing luggage
  alert('Scan modal for luggage ID: ' + id);
};

window.markAllAsFound = function () {
  if (confirm('Mark all selected items as found?')) {
    // Logic to mark items as found
    alert('All selected items marked as found');
  }
};

// Main render function
function renderApp() {
  const app = document.getElementById('app');

  let pageContent = '';
  switch (state.currentView) {
    case 'dashboard':
      pageContent = createDashboardPage();
      break;
    case 'customers-luggage':
      pageContent = createCustomersLuggagePage();
      break;
    case 'missing-luggage':
      pageContent = createMissingLuggagePage();
      break;
    case 'hotels':
      pageContent = createHotelsPage();
      break;
    case 'groups':
      pageContent = createGroupsPage();
      break;
    case 'airlines':
      pageContent = createAirlinesPage();
      break;
    case 'system-users':
      pageContent = createSystemUsersPage();
      break;
    case 'roles':
      pageContent = createRolesPage();
      break;
    case 'permissions':
      pageContent = createPermissionsPage();
      break;
    case 'complaints':
      pageContent = createComplaintsPage();
      break;
    case 'companies':
      pageContent = createCompaniesPage();
      break;
    default:
      pageContent = createCustomersLuggagePage();
  }

  app.innerHTML = `
    ${createSidebar()}
    ${createHeader()}
    <main class="ml-64 mt-16 min-h-screen bg-gray-50">
      ${pageContent}
    </main>
    ${createAddLuggageModal()}
    ${createDeleteConfirmationModal()}
    ${createAddHotelModal()}
  `;
}

// Make renderApp available globally
window.renderApp = renderApp;

// Initial render
renderApp();

