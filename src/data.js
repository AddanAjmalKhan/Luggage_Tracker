// Mock Data
export const mockLuggageData = [
    {
        id: 1,
        serialNumber: '0799687',
        luggageId: 'KJLP127',
        subcase: 'Suitcase',
        city: '22 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'In',
        lastScanned: '09/10/2025, 1:21:15'
    },
    {
        id: 2,
        serialNumber: '0799688',
        luggageId: 'KJLP128',
        subcase: 'Suitcase',
        city: '22 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'Out',
        lastScanned: '09/10/2025, 1:21:15'
    },
    {
        id: 3,
        serialNumber: '0799689',
        luggageId: 'KJLP129',
        subcase: 'Handbag',
        city: '12 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'Pending',
        lastScanned: '09/10/2025, 1:21:15'
    },
    {
        id: 4,
        serialNumber: '0799690',
        luggageId: 'KJLP130',
        subcase: 'Suitcase',
        city: '25 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 3-A',
        status: 'In',
        lastScanned: '09/10/2025, 2:15:30'
    },
    {
        id: 5,
        serialNumber: '0799691',
        luggageId: 'KJLP131',
        subcase: 'Carrier',
        city: '18 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 3-A',
        status: 'Out',
        lastScanned: '09/10/2025, 3:45:12'
    },
    {
        id: 6,
        serialNumber: '0799692',
        luggageId: 'KJLP132',
        subcase: 'Suitcase',
        city: '22 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'In',
        lastScanned: '09/10/2025, 4:20:45'
    },
    {
        id: 7,
        serialNumber: '0799693',
        luggageId: 'KJLP133',
        subcase: 'Handbag',
        city: '10 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'Pending',
        lastScanned: '09/10/2025, 5:10:22'
    },
    {
        id: 8,
        serialNumber: '0799694',
        luggageId: 'KJLP134',
        subcase: 'Suitcase',
        city: '23 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 3-A',
        status: 'Out',
        lastScanned: '09/10/2025, 6:30:18'
    },
    {
        id: 9,
        serialNumber: '0799695',
        luggageId: 'KJLP135',
        subcase: 'Carrier',
        city: '20 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'In',
        lastScanned: '09/10/2025, 7:15:55'
    },
    {
        id: 10,
        serialNumber: '0799696',
        luggageId: 'KJLP136',
        subcase: 'Suitcase',
        city: '22 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 3-A',
        status: 'Pending',
        lastScanned: '09/10/2025, 8:45:33'
    },
];

export const mockMissingLuggageData = [
    {
        id: 1,
        serialNumber: '0799687',
        luggageId: 'KJLP127',
        subcase: 'Suitcase',
        city: '22 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 2-G',
        status: 'Missing',
        lastScanned: '09/10/2025, 1:21:15'
    },
    {
        id: 2,
        serialNumber: '0799698',
        luggageId: 'KJLP138',
        subcase: 'Handbag',
        city: '15 kg',
        hotel: 'PM681',
        destination: 'Prime Makkah',
        dropOff: 'Shop 3-A',
        status: 'Missing',
        lastScanned: '09/10/2025, 2:30:45'
    },
];

export const mockHotelsData = [
    {
        id: 1,
        hotelName: 'Prime Makkah',
        totalLuggage: 7265,
        in: 345,
        out: 120,
        pending: 45,
        missing: 12,
        status: 'Active',
        lastUpdated: '09/10/2025, 1:21:15'
    },
    {
        id: 2,
        hotelName: 'Elara Makkah',
        totalLuggage: 7265,
        in: 345,
        out: 120,
        pending: 45,
        missing: 12,
        status: 'Active',
        lastUpdated: '09/10/2025, 1:21:15'
    },
    {
        id: 3,
        hotelName: 'Grand Hotel',
        totalLuggage: 5432,
        in: 234,
        out: 98,
        pending: 32,
        missing: 8,
        status: 'Active',
        lastUpdated: '09/10/2025, 2:15:30'
    },
];

// State management
export const state = {
    currentView: 'customers-luggage',
    luggage: [...mockLuggageData],
    missingLuggage: [...mockMissingLuggageData],
    hotels: [...mockHotelsData],
    filters: {
        search: '',
        status: '',
        type: '',
    }
};

export function updateState(updates) {
    Object.assign(state, updates);
    // Trigger re-render
    if (window.renderApp) {
        window.renderApp();
    }
}
