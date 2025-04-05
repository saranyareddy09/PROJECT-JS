document.addEventListener('DOMContentLoaded', function() {
    const aadhaarInput = document.getElementById('aadhaar-input');
    const maskBtn = document.getElementById('mask-btn');
    const maskedOutput = document.getElementById('masked-output');

    maskBtn.addEventListener('click', function() {
        const aadhaarNumber = aadhaarInput.value.trim();
        
        // Validate input
        if (!aadhaarNumber) {
            showError('Please enter Aadhaar number');
            return;
        }
        
        if (!/^\d{12}$/.test(aadhaarNumber)) {
            showError('Aadhaar number must be 12 digits');
            return;
        }
        
        // Mask the Aadhaar number
        const masked = maskAadhaarNumber(aadhaarNumber);
        displayMaskedAadhaar(masked);
    });

    // Automatically mask as user types
    aadhaarInput.addEventListener('input', function() {
        const aadhaarNumber = aadhaarInput.value.trim();
        
        if (aadhaarNumber.length === 12) {
            const masked = maskAadhaarNumber(aadhaarNumber);
            displayMaskedAadhaar(masked);
        } else {
            maskedOutput.innerHTML = '';
        }
    });

    // Only allow numbers in input
    aadhaarInput.addEventListener('keypress', function(e) {
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    });

    function maskAadhaarNumber(number) {

        const lastFour = number.substring(number.length - 4);
        return {
            visibleParts: [lastFour],
            maskedPart: 'XXXX'
        };
    }

    function displayMaskedAadhaar(masked) {
        maskedOutput.innerHTML = `
            <span class="masked-part">${masked.maskedPart}</span>
            <span class="masked-part">${masked.maskedPart}</span>
            <span class="visible-part">${masked.visibleParts[1]}</span>
        `;
    }

    function showError(message) {
        // Remove any existing error
        const existingError = document.querySelector('.error');
        if (existingError) {
            existingError.remove();
        }
        
        // Create and display new error
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = message;
        
        const inputGroup = document.querySelector('.input-group');
        inputGroup.appendChild(errorElement);
        
        // Clear output
        maskedOutput.innerHTML = '';
    }
});