document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form data:', new FormData(this));
});
