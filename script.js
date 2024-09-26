document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Do something when checkbox is checked
                console.log('Selected:', this.value);
            } else {
                // Do something when checkbox is unchecked
                console.log('Unselected:', this.value);
            }
        });
    });
});
