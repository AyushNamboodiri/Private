window.onload = function() {
    const balloon = document.getElementById('balloon');
    const backgroundImage = document.getElementById('backgroundImage');

    // Show the balloon
    balloon.style.display = 'block';

    // Hide the balloon after 3 seconds and show the background image
    setTimeout(function() {
        balloon.style.display = 'none';
        backgroundImage.style.display = 'block';
    }, 3000); // 3000 milliseconds = 3 seconds
};
