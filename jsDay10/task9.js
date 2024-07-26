document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});
