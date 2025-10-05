// Get input elements
const totalRoomsInput = document.getElementById('totalRooms');
const roomsSoldInput = document.getElementById('roomsSold');
const totalRevenueInput = document.getElementById('totalRevenue');

// Get output elements
const occupancyOutput = document.getElementById('occupancy');
const adrOutput = document.getElementById('adr');
const revparOutput = document.getElementById('revpar');

// Get error message elements
const totalRoomsError = document.getElementById('totalRoomsError');
const roomsSoldError = document.getElementById('roomsSoldError');

/**
 * Format currency values with $ symbol, comma separators, and 2 decimal places
 */
function formatCurrency(value) {
    if (isNaN(value) || !isFinite(value)) {
        return 'N/A';
    }
    return '$' + value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/**
 * Format percentage values with % symbol and 2 decimal places
 */
function formatPercentage(value) {
    if (isNaN(value) || !isFinite(value)) {
        return 'N/A';
    }
    return value.toFixed(2) + '%';
}

/**
 * Calculate Occupancy Rate
 * Formula: (Rooms Sold / Total Rooms Available) * 100
 */
function calculateOccupancy(roomsSold, totalRooms) {
    if (totalRooms === 0) {
        return null; // Cannot calculate - will show N/A
    }
    return (roomsSold / totalRooms) * 100;
}

/**
 * Calculate Average Daily Rate (ADR)
 * Formula: Total Room Revenue / Rooms Sold
 */
function calculateADR(totalRevenue, roomsSold) {
    if (roomsSold === 0) {
        return null; // Cannot calculate - will show N/A
    }
    return totalRevenue / roomsSold;
}

/**
 * Calculate Revenue Per Available Room (RevPAR)
 * Formula: Total Room Revenue / Total Rooms Available
 */
function calculateRevPAR(totalRevenue, totalRooms) {
    if (totalRooms === 0) {
        return null; // Cannot calculate - will show N/A
    }
    return totalRevenue / totalRooms;
}

/**
 * Main calculation function - updates all KPIs
 */
function calculateKPIs() {
    // Get input values and parse as numbers
    const totalRooms = parseFloat(totalRoomsInput.value) || 0;
    const roomsSold = parseFloat(roomsSoldInput.value) || 0;
    const totalRevenue = parseFloat(totalRevenueInput.value) || 0;

    // Calculate KPIs
    const occupancy = calculateOccupancy(roomsSold, totalRooms);
    const adr = calculateADR(totalRevenue, roomsSold);
    const revpar = calculateRevPAR(totalRevenue, totalRooms);

    // Update display with formatted values
    occupancyOutput.textContent = occupancy !== null ? formatPercentage(occupancy) : 'N/A';
    adrOutput.textContent = adr !== null ? formatCurrency(adr) : 'N/A';
    revparOutput.textContent = revpar !== null ? formatCurrency(revpar) : 'N/A';
}

/**
 * Validate and format inputs
 */
function validateInputs() {
    // Clear error messages
    totalRoomsError.textContent = '';
    roomsSoldError.textContent = '';

    // Ensure rooms are integers
    if (totalRoomsInput.value) {
        totalRoomsInput.value = Math.floor(parseFloat(totalRoomsInput.value));
    }

    if (roomsSoldInput.value) {
        roomsSoldInput.value = Math.floor(parseFloat(roomsSoldInput.value));
    }

    // Ensure revenue has max 2 decimal places
    if (totalRevenueInput.value) {
        const revenue = parseFloat(totalRevenueInput.value);
        if (!isNaN(revenue)) {
            totalRevenueInput.value = revenue.toFixed(2);
        }
    }

    const totalRooms = parseFloat(totalRoomsInput.value) || 0;
    const roomsSold = parseFloat(roomsSoldInput.value) || 0;

    // Ensure rooms sold doesn't exceed total rooms
    if (roomsSold > totalRooms) {
        if (totalRooms > 0) {
            roomsSoldInput.value = totalRooms;
            roomsSoldError.textContent = 'Rooms sold cannot exceed total rooms available';
        } else {
            roomsSoldInput.value = 0;
            roomsSoldError.textContent = 'Rooms sold cannot exceed total rooms available';
        }
    }
}

// Prevent decimal input for room fields
function preventDecimal(e) {
    if (e.key === '.' || e.key === ',' || e.key === 'e' || e.key === 'E') {
        e.preventDefault();
    }
}

// Add event listeners for real-time updates
totalRoomsInput.addEventListener('keydown', preventDecimal);
totalRoomsInput.addEventListener('input', function() {
    calculateKPIs();
});

totalRoomsInput.addEventListener('blur', function() {
    validateInputs();
    calculateKPIs();
});

roomsSoldInput.addEventListener('keydown', preventDecimal);
roomsSoldInput.addEventListener('input', function() {
    validateInputs();
    calculateKPIs();
});

roomsSoldInput.addEventListener('blur', function() {
    validateInputs();
    calculateKPIs();
});

// Limit revenue to 2 decimal places during input
totalRevenueInput.addEventListener('input', function() {
    const value = totalRevenueInput.value;
    // Check if there are more than 2 decimal places
    if (value.includes('.')) {
        const parts = value.split('.');
        if (parts[1] && parts[1].length > 2) {
            totalRevenueInput.value = parseFloat(value).toFixed(2);
        }
    }
    calculateKPIs();
});

totalRevenueInput.addEventListener('blur', function() {
    validateInputs();
    calculateKPIs();
});

// Initial calculation on page load
calculateKPIs();
