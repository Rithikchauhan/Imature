const newLocal = 'openBtn';
   document.getElementById(newLocal).addEventListener('click', function() {
    document.getElementById('popupBox').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popupBox').style.display = 'none';
});

// Close the pop-up box if the user clicks outside of it
window.addEventListener('click', function(event) {
    var popup = document.getElementById('popupBox');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
