// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'Go to fancy restaurant!') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('options').style.display = 'none';
            document.getElementById('question').style.display = 'none';// Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        
            let title = document.createElement("p");
            title.textContent = "YAYYYY IM EXCITED!! (to be with you of course)";
            title.style.fontSize = "50px"; // Adjust styling
            title.style.textAlign = "center";
            title.style.marginTop = "-400px";
            title.style.fontFamily = "'Sacramento', cursive";
            let message = document.createElement("p");
            message.textContent = "Mi amor please tell me where through text!, I love you :)";
            message.style.fontSize = "30px"; // Adjust styling
            message.style.textAlign = "center";
            message.style.marginTop = "-100px";
            message.style.fontFamily = "'Sacramento', cursive";
            
            // Append message to the body or a specific container
            document.body.appendChild(message);
            document.body.appendChild(title);
        });
    } else if (option === 'Have a cute little picnic!') {
        flashRainbowColors(function () {
            document.getElementById('options').style.display = 'none';
            document.getElementById('question').style.display = 'none';// Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        
            let title = document.createElement("p");
            title.textContent = "YAYYYY IM EXCITED!! (to be with you of course)";
            title.style.fontSize = "50px"; // Adjust styling
            title.style.textAlign = "center";
            title.style.marginTop = "-400px";
            title.style.fontFamily = "'Sacramento', cursive";
            let message = document.createElement("p");
            message.textContent = "Mi amor please tell me where you would want to go and what you want me to bring with through text, I love you :)";
            message.style.fontSize = "30px"; // Adjust styling
            message.style.textAlign = "center";
            message.style.marginTop = "-100px";
            message.style.fontFamily = "'Sacramento', cursive";
            
            // Append message to the body or a specific container
            document.body.appendChild(message);
            document.body.appendChild(title);
        });
    
    } else if (option === 'Go thrifting!') {
        flashRainbowColors(function () {
            document.getElementById('options').style.display = 'none';
            document.getElementById('question').style.display = 'none';// Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        
            let title = document.createElement("p");
            title.textContent = "YAYYYY IM EXCITED!! (to be with you of course)";
            title.style.fontSize = "50px"; // Adjust styling
            title.style.textAlign = "center";
            title.style.marginTop = "-400px";
            title.style.fontFamily = "'Sacramento', cursive";
            let message = document.createElement("p");
            message.textContent = "Mi amor tell me where we would go! I want to know all about it through text, I love you :)";
            message.style.fontSize = "30px"; // Adjust styling
            message.style.textAlign = "center";
            message.style.marginTop = "-100px";
            message.style.fontFamily = "'Sacramento', cursive";
            
            // Append message to the body or a specific container
            document.body.appendChild(message);
            document.body.appendChild(title);
        });
    } else if (option === 'Painting activity!') {
        flashRainbowColors(function () {
            document.getElementById('options').style.display = 'none';
            document.getElementById('question').style.display = 'none';// Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        
            let title = document.createElement("p");
            title.textContent = "YAYYYY IM EXCITED!! (to be with you of course)";
            title.style.fontSize = "50px"; // Adjust styling
            title.style.textAlign = "center";
            title.style.marginTop = "-400px";
            title.style.fontFamily = "'Sacramento', cursive";
            let message = document.createElement("p");
            message.textContent = "Mi amor tell me what I would need to bring through text, I love you :)";
            message.style.fontSize = "30px"; // Adjust styling
            message.style.textAlign = "center";
            message.style.marginTop = "-100px";
            message.style.fontFamily = "'Sacramento', cursive";
            
            // Append message to the body or a specific container
            document.body.appendChild(message);
            document.body.appendChild(title);
        });
    }
    else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.style.position = "relative"
    catHeartImage.style.top = "-200px";
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
