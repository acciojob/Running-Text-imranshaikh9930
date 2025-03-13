 function startRendering() {
            const text = "We love Programming!";
            const inputSpeed = document.getElementById("speed").value;
            const displayDiv = document.getElementById("text");
            displayDiv.textContent = ""; // Clear previous text
            
            let index = 0;
            let speed = 500 / parseInt(inputSpeed, 10); // Calculate speed

            function renderText() {
                if (index < text.length) {
                    displayDiv.textContent += text[index];
                    index++;
                    setTimeout(renderText, speed);
                }
            }

            renderText(); // Start rendering
        }