document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'CHILD-ELEMENT') {
        console.log('Dynamically added element clicked:', event.target.textContent);
    }
});
