document.getElementById('myButton').addEventListener('dblclick', function() {
    let para = document.getElementById('myParagraph');
    para.style.display = (para.style.display === 'none') ? 'block' : 'none';
});
