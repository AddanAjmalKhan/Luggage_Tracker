// Make renderApp available globally
window.renderApp = renderApp;
import '../css/input.css';
import { state, updateState, toggleSidebar, toggleTheme, toggleMobileMenu } from './data.js'; // Import toggleSidebar and toggleTheme
import { createSidebar } from '../components/sidebar.js'; // Keep explicit import if needed, or rely on side-effects if any (none here)
import { createHeader } from '../components/header.js';
import { createDashboardPage } from '../pages/dashboard.js';
import { createCustomersLuggagePage } from '../pages/customers-luggage.js';
import { createMissingLuggagePage } from '../pages/missing-luggage.js';
import { createHotelsPage } from '../pages/hotels.js';
import { createGroupsPage } from '../pages/groups.js';
import { createAirlinesPage } from '../pages/airlines.js';
import { createSystemUsersPage } from '../pages/system-users.js';
import { createRolesPage } from '../pages/roles.js';
import { createPermissionsPage } from '../pages/permissions.js';
import { createCompaniesPage } from '../pages/companies.js';
import { createComplaintsPage } from '../pages/complaints.js';
import { createAddLuggageModal, createDeleteConfirmationModal, createAddHotelModal, createMarkFoundModal, createScanUpdateModal, createEditDetailsModal } from './modals.js';


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
    // renderApp(); // updateState triggers renderApp
};

window.toggleSidebar = toggleSidebar; // Expose toggleSidebar
window.toggleTheme = toggleTheme; // Expose toggleTheme
window.toggleMobileMenu = toggleMobileMenu; // Expose toggleMobileMenu

window.openAddLuggageModal = function () {
    document.getElementById('addLuggageModal').classList.remove('hidden');
    document.getElementById('addLuggageModal').classList.add('flex');
};

window.openAddHotelModal = function () {
    document.getElementById('addHotelModal').classList.remove('hidden');
    document.getElementById('addHotelModal').classList.add('flex');
};

window.handleAddHotel = function (event) {
    event.preventDefault();
    // Logic to add hotel would go here
    alert('Hotel added! (Simulation)');
    window.closeModal('addHotelModal');
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
        // Customer Info
        customerName: formData.get('customerName'),
        fatherName: formData.get('fatherName'),
        passport: formData.get('passport'),
        contact: formData.get('contact'), // New
        maktabNo: formData.get('maktabNo'),
        roomNo: formData.get('roomNo'), // New
        dob: formData.get('dob'),

        // Luggage Info
        luggageId: formData.get('luggageId'),
        subcase: formData.get('type'), // Mapped to subcase
        status: formData.get('status'),
        currentSpot: formData.get('currentSpot'),
        weight: formData.get('weight'),
        stewardId: formData.get('stewardId'),
        description: formData.get('description'),

        // Travel Info
        flightNo: formData.get('flightNo'),
        hotel: formData.get('hotel'),
        group: formData.get('group'), // Moved here

        // Defaults/System
        dropOff: 'Lobby', // Default as field was removed
        city: formData.get('weight') || '22kg', // Legacy mapping
        destination: formData.get('hotel'), // Legacy mapping
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

window.openDeleteModal = function () {
    document.getElementById('deleteModal').classList.remove('hidden');
    document.getElementById('deleteModal').classList.add('flex');
};

window.confirmDelete = function () {
    // Logic to delete luggage
    alert('Luggage deleted successfully! (Simulation)');
    closeModal('deleteModal');
    // renderApp(); // Refresh to remove item if simulation was real
};

window.openScanModal = function (id) {
    // Open scan modal for missing luggage
    alert('Scan modal for luggage ID: ' + id);
};

window.openMarkFoundModal = function () {
    document.getElementById('markFoundModal').classList.remove('hidden');
    document.getElementById('markFoundModal').classList.add('flex');
};

window.handleMarkFound = function () {
    // Logic to mark items as found would go here
    alert('Items marked as found! (Simulation)');
    closeModal('markFoundModal');
};

window.openScanUpdateModal = function () {
    document.getElementById('scanUpdateModal').classList.remove('hidden');
    document.getElementById('scanUpdateModal').classList.add('flex');
};

window.handleScanUpdate = function () {
    // Logic to update scan status
    alert('Luggage status updated! (Simulation)');
    closeModal('scanUpdateModal');
    // renderApp(); // Refresh if needed
};

window.openEditModal = function (luggageId) {
    document.getElementById('editDetailsModal').classList.remove('hidden');
    document.getElementById('editDetailsModal').classList.add('flex');
    // TODO: Load luggage data by ID and populate form
};

window.saveEditChanges = function () {
    // Logic to save edited luggage details
    alert('Changes saved successfully! (Simulation)');
    closeModal('editDetailsModal');
    // renderApp(); // Refresh to show updated data
};

// Main render function
function renderApp() {
    const app = document.getElementById('app');

    // Handle Theme
    if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

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
        case 'companies':
            pageContent = createCompaniesPage();
            break;
        case 'complaints':
            pageContent = createComplaintsPage();
            break;
        default:
            pageContent = createCustomersLuggagePage();
    }

    // Highlight active link
    setTimeout(() => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.dataset.view === state.currentView) {
                link.classList.add('bg-white/10', 'text-white', 'shadow-sm');
                link.classList.remove('text-gray-400', 'hover:bg-white/5');
            } else {
                link.classList.remove('bg-white/10', 'text-white', 'shadow-sm');
                link.classList.add('text-gray-400', 'hover:bg-white/5');
            }
        });

        // Update title
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) {
            pageTitle.textContent = state.currentView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
    }, 0);

    const marginLeftClass = state.isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64';

    app.innerHTML = `
    ${createSidebar()}
    ${createHeader()}
    <main class="ml-0 ${marginLeftClass} mt-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      ${pageContent}

    </main>
    ${createAddLuggageModal()}
    ${createDeleteConfirmationModal()}
    ${createAddHotelModal()}
    ${createMarkFoundModal()}
    ${createScanUpdateModal()}
    ${createEditDetailsModal()}
  `;
}

// Make renderApp available globally
window.renderApp = renderApp;

// Initial render
renderApp();
