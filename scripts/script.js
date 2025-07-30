document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission on hire.html
    const hireForm = document.getElementById('hireForm');
    if (hireForm) {
        hireForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would collect form data here
            // and send it to a server (e.g., using fetch API).
            const formData = new FormData(hireForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            console.log('Form Submitted Data:', data);

            // Simulate form submission success and redirect
            alert('Your request has been submitted! Redirecting to thank you page...');
            window.location.href = 'thankyou.html';
        });

        // Pre-fill lawyer selection if coming from lawyers.html
        const urlParams = new URLSearchParams(window.location.search);
        const preferredLawyer = urlParams.get('lawyer');
        if (preferredLawyer) {
            const lawyerSelect = document.getElementById('lawyerSelect');
            if (lawyerSelect) {
                // Check if the option exists and select it
                const optionExists = Array.from(lawyerSelect.options).some(
                    option => option.value === preferredLawyer
                );
                if (optionExists) {
                    lawyerSelect.value = preferredLawyer;
                } else {
                    // Optionally add the lawyer if not in the predefined list
                    // This is less common but could be useful for dynamic lists
                    // let newOption = document.createElement('option');
                    // newOption.value = preferredLawyer;
                    // newOption.textContent = preferredLawyer;
                    // lawyerSelect.appendChild(newOption);
                    // lawyerSelect.value = preferredLawyer;
                }
            }
        }
    }
});