// //Color Picker Canvas

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// //Creating Gradients
// const gradient = ctx.createRadialGradient(
//     canvas.width / 2, 0, 10,
//     canvas.width / 2, 0, canvas.width * 1.17
//   );
  
//     gradient.addColorStop(0, 'red');
//     gradient.addColorStop(0.1, 'rgba(242, 13, 13, 0.8)');
//     gradient.addColorStop(0.2, 'rgba(230, 26, 26, 0.6)');
//     gradient.addColorStop(0.3, 'rgba(204, 51, 51, 0.4)');
//     gradient.addColorStop(0.4, 'rgba(166, 89, 89, 0.2)');
//     gradient.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
    
// const gradient2 = ctx.createRadialGradient(
//     canvas.width * 0.8535533905932738, canvas.height * 0.14644660940672622, 10,
//     canvas.width * 0.8535533905932738, canvas.height * 0.14644660940672622, canvas.width * 1.14
//     );
    
//     gradient2.addColorStop(0, '#ffbf00');
//     gradient2.addColorStop(0.1, 'rgba(242, 185, 13, 0.8)');
//     gradient2.addColorStop(0.2, 'rgba(230, 179, 26, 0.6)');
//     gradient2.addColorStop(0.3, 'rgba(204, 166, 51, 0.4)');
//     gradient2.addColorStop(0.4, 'rgba(166, 147, 89, 0.2)');
//     gradient2.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// const gradient3 = ctx.createRadialGradient(
//     canvas.width, canvas.height / 2, 10,
//     canvas.width, canvas.height / 2, canvas.width * 1.17
//   );

//     gradient3.addColorStop(0, '#80ff00');
//     gradient3.addColorStop(0.1, 'rgba(128, 242, 13, 0.8)');
//     gradient3.addColorStop(0.2, 'rgba(128, 230, 26, 0.6)');
//     gradient3.addColorStop(0.3, 'rgba(128, 204, 51, 0.4)');
//     gradient3.addColorStop(0.4, 'rgba(128, 166, 89, 0.2)');
//     gradient3.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// const gradient4 = ctx.createRadialGradient(
//     canvas.width * 0.8535533905932738, canvas.height * 0.8535533905932738, 10,
//     canvas.width * 0.8535533905932738, canvas.height * 0.8535533905932738, canvas.width * 1.14
//     );

//     gradient4.addColorStop(0, '#00ff40');
//     gradient4.addColorStop(0.1, 'rgba(13, 242, 70, 0.8)');
//     gradient4.addColorStop(0.2, 'rgba(26, 230, 77, 0.6)');
//     gradient4.addColorStop(0.3, 'rgba(51, 204, 89, 0.4)');
//     gradient4.addColorStop(0.4, 'rgba(89, 166, 108, 0.2)');
//     gradient4.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// const gradient5 = ctx.createRadialGradient(
//     canvas.width * 0.50000000000001, canvas.height * 1, 10,
//     canvas.width * 0.50000000000001, canvas.height * 1, canvas.width * 1.14
//     );

//     gradient5.addColorStop(0, '#0ff');
//     gradient5.addColorStop(0.1, 'rgba(13, 242, 242, 0.8)');
//     gradient5.addColorStop(0.2, 'rgba(26, 230, 230, 0.6)');
//     gradient5.addColorStop(0.3, 'rgba(51, 204, 204, 0.4)');
//     gradient5.addColorStop(0.4, 'rgba(89, 166, 166, 0.2)');
//     gradient5.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// const gradient6 = ctx.createRadialGradient(
//     canvas.width * 0.1464466094067263, canvas.height * 0.8535533905932738, 10,
//     canvas.width * 0.1464466094067263, canvas.height * 0.8535533905932738, canvas.width * 1.14
//     );

//     gradient6.addColorStop(0, '#0040ff');
//     gradient6.addColorStop(0.1, 'rgba(13, 70, 242, 0.8)');
//     gradient6.addColorStop(0.2, 'rgba(26, 77, 230, 0.6)');
//     gradient6.addColorStop(0.3, 'rgba(51, 89, 204, 0.4)');
//     gradient6.addColorStop(0.4, 'rgba(89, 108, 166, 0.2)');
//     gradient6.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// const gradient7 = ctx.createRadialGradient(
// 0, canvas.height * 0.50000000000001, 10,
// 0, canvas.height * 0.50000000000001, canvas.width * 1.17
// );

//     gradient7.addColorStop(0, '#7f00ff');
//     gradient7.addColorStop(0.1, 'rgba(128, 13, 242, 0.8)');
//     gradient7.addColorStop(0.2, 'rgba(128, 26, 230, 0.6)');
//     gradient7.addColorStop(0.3, 'rgba(128, 51, 204, 0.4)');
//     gradient7.addColorStop(0.4, 'rgba(128, 89, 166, 0.2)');
//     gradient7.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// const gradient8 = ctx.createRadialGradient(
// canvas.width * 0.146447, canvas.height * 0.146447, 10,
// canvas.width * 0.146447, canvas.height * 0.146447, canvas.width * 1.14
// );

//     gradient8.addColorStop(0, '#ff00bf');
//     gradient8.addColorStop(0.1, 'rgba(242, 13, 185, 0.8)');
//     gradient8.addColorStop(0.2, 'rgba(230, 26, 179, 0.6)');
//     gradient8.addColorStop(0.3, 'rgba(204, 51, 166, 0.4)');
//     gradient8.addColorStop(0.4, 'rgba(166, 89, 147, 0.2)');
//     gradient8.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

// //Apply the gradient to the canvas

// ctx.fillStyle = gradient8;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient7;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient6;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient5;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient4;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient3;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient2;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = gradient;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// //Color Selector

// const colorSelector = {x: 250, y: 250, width: 50, height: 7};

// ctx.beginPath();
// ctx.arc(colorSelector.x, colorSelector.y, colorSelector.width, 0, Math.PI * 2)
// ctx.strokeStyle = "#fff" 
// ctx.fill()
// ctx.closePath();

// //Event listeners

// let isMouseDown = false;
// const onMouseDown = (e) => {
//     const bounding = canvas.getBoundingClientRect();
//     const currentX = e.clientX - bounding.left;
//     const currentY = e.clientY - bounding.top;
//     if(currentY > colorSelector.y && currentY < colorSelector.y + colorSelector.width 
//         && currentX > colorSelector.x && currentX < colorPicker.width) {
//         isMouseDown = true;
//     } else {
//         colorPicker.x = currentX;
//         colorPicker.y = currentY;
//     }

// };

// const onMouseMove = (e) => {
//     let currentX = e.clientX - canvas.target.offsetLeft;
//     let currentY = e.clientY - canvas.target.offsetTop;
//     if(isMouseDown) {
//         colorPicker.x = currentX;
//         colorPicker.y = currentY;
//     }
// };

// const onMouseUp = (e) => {
//     isMouseDown = false;
// };

// colorSelector.addEventListener("mousedown", onMouseDown);
// colorSelector.addEventListener("mousemove", onMouseMove);
// document.addEventListener("mouseup", onMouseUp);


// //Assingning rgb value to a variable

// const selectedColor = document.getElementById("selected-color");

// function pickColor(event, destination) {
//   const bounding = canvas.getBoundingClientRect();
//   const x = event.clientX - bounding.left;
//   const y = event.clientY - bounding.top;
//   const pixel = ctx.getImageData(x, y, 1, 1);
//   const data = pixel.data;

//   const rgba = `${data[0]}, ${data[1]}, ${data[2]}`;

//   destination.textContent = rgba

//   return rgba;
// }

// //Lightness slider

// tan(theta) = mouseRelY / mouseRelX
// theta = arctan(mouseRelY / mouseRelX)
// // quadrant 2
// if (mouseRelX < 0 && mouseRelY > 0) {
//     theta += Math.PI
// // quadrant 3
// } else if (mouseRelX < 0 && mouseRelY <= 0) {
//     theta += Math.PI
// // quadrant 4
// } else if (mouseRelX > 0 && mouseRelY <= 0) {
//     theta += 2 * Math.PI
// }

// canvas.addEventListener("click", (event) => pickColor(event, selectedColor));


class colorPickerClass {
    // Constructor to initialize the color picker
    constructor(target, width, height) {
        this.target = target;
        this.width = width;
        this.height = height;
        this.target.width = width;
        this.target.height = height;

        // Get the 2D rendering context of the canvas
        this.ctx = this.target.getContext("2d");

        // Initial position and dimensions of the color selector
        this.colorSelector = {x: 250, y: 250, width: 12, height: 0};

        //Event listeners for user interactions
        this.listenForEvents();
    }

    //Draw method to render the color picker
    draw() {
        this.build();
    }

    // Build method to create and render the gradients on the canvas
    build() {
        //Creating the gradient color stops
        const gradient = this.ctx.createRadialGradient(
            this.width / 2, 0, 10,
            this.width / 2, 0, this.width * 1.17
          );
        
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.1, 'rgba(242, 13, 13, 0.8)');
        gradient.addColorStop(0.2, 'rgba(230, 26, 26, 0.6)');
        gradient.addColorStop(0.3, 'rgba(204, 51, 51, 0.4)');
        gradient.addColorStop(0.4, 'rgba(166, 89, 89, 0.2)');
        gradient.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
            
        const gradient2 = this.ctx.createRadialGradient(
            this.width * 0.8535533905932738, this.height * 0.14644660940672622, 10,
            this.width * 0.8535533905932738, this.height * 0.14644660940672622, this.width * 1.14
            );
            
        gradient2.addColorStop(0, '#ffbf00');
        gradient2.addColorStop(0.1, 'rgba(242, 185, 13, 0.8)');
        gradient2.addColorStop(0.2, 'rgba(230, 179, 26, 0.6)');
        gradient2.addColorStop(0.3, 'rgba(204, 166, 51, 0.4)');
        gradient2.addColorStop(0.4, 'rgba(166, 147, 89, 0.2)');
        gradient2.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
        
        const gradient3 = this.ctx.createRadialGradient(
            this.width, this.height / 2, 10,
            this.width, this.height / 2, this.width * 1.17
          );
        
        gradient3.addColorStop(0, '#80ff00');
        gradient3.addColorStop(0.1, 'rgba(128, 242, 13, 0.8)');
        gradient3.addColorStop(0.2, 'rgba(128, 230, 26, 0.6)');
        gradient3.addColorStop(0.3, 'rgba(128, 204, 51, 0.4)');
        gradient3.addColorStop(0.4, 'rgba(128, 166, 89, 0.2)');
        gradient3.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
        
        const gradient4 = this.ctx.createRadialGradient(
            this.width * 0.8535533905932738, this.height * 0.8535533905932738, 10,
            this.width * 0.8535533905932738, this.height * 0.8535533905932738, this.width * 1.14
            );
    
        gradient4.addColorStop(0, '#00ff40');
        gradient4.addColorStop(0.1, 'rgba(13, 242, 70, 0.8)');
        gradient4.addColorStop(0.2, 'rgba(26, 230, 77, 0.6)');
        gradient4.addColorStop(0.3, 'rgba(51, 204, 89, 0.4)');
        gradient4.addColorStop(0.4, 'rgba(89, 166, 108, 0.2)');
        gradient4.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
        
        const gradient5 = this.ctx.createRadialGradient(
            this.width * 0.50000000000001, this.height * 1, 10,
            this.width * 0.50000000000001, this.height * 1, this.width * 1.14
            );
        
        gradient5.addColorStop(0, '#0ff');
        gradient5.addColorStop(0.1, 'rgba(13, 242, 242, 0.8)');
        gradient5.addColorStop(0.2, 'rgba(26, 230, 230, 0.6)');
        gradient5.addColorStop(0.3, 'rgba(51, 204, 204, 0.4)');
        gradient5.addColorStop(0.4, 'rgba(89, 166, 166, 0.2)');
        gradient5.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
    
        const gradient6 = this.ctx.createRadialGradient(
            this.width * 0.1464466094067263, this.height * 0.8535533905932738, 10,
            this.width * 0.1464466094067263, this.height * 0.8535533905932738, this.width * 1.14
            );
        
        gradient6.addColorStop(0, '#0040ff');
        gradient6.addColorStop(0.1, 'rgba(13, 70, 242, 0.8)');
        gradient6.addColorStop(0.2, 'rgba(26, 77, 230, 0.6)');
        gradient6.addColorStop(0.3, 'rgba(51, 89, 204, 0.4)');
        gradient6.addColorStop(0.4, 'rgba(89, 108, 166, 0.2)');
        gradient6.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
        
        const gradient7 = this.ctx.createRadialGradient(
        0, this.height * 0.50000000000001, 10,
        0, this.height * 0.50000000000001, this.width * 1.17
        );
    
        gradient7.addColorStop(0, '#7f00ff');
        gradient7.addColorStop(0.1, 'rgba(128, 13, 242, 0.8)');
        gradient7.addColorStop(0.2, 'rgba(128, 26, 230, 0.6)');
        gradient7.addColorStop(0.3, 'rgba(128, 51, 204, 0.4)');
        gradient7.addColorStop(0.4, 'rgba(128, 89, 166, 0.2)');
        gradient7.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
        
        const gradient8 = this.ctx.createRadialGradient(
        this.width * 0.146447, this.height * 0.146447, 10,
        this.width * 0.146447, this.height * 0.146447, this.width * 1.14
        );
        
        gradient8.addColorStop(0, '#ff00bf');
        gradient8.addColorStop(0.1, 'rgba(242, 13, 185, 0.8)');
        gradient8.addColorStop(0.2, 'rgba(230, 26, 179, 0.6)');
        gradient8.addColorStop(0.3, 'rgba(204, 51, 166, 0.4)');
        gradient8.addColorStop(0.4, 'rgba(166, 89, 147, 0.2)');
        gradient8.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

        //Apply the gradient to the canvas
        this.ctx.fillStyle = gradient8;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient7;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient6;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient5;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient4;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient3;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient2;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);

        //Draw the color selector
        this.ctx.beginPath();
        this.ctx.arc(this.colorSelector.x, this.colorSelector.y, this.colorSelector.width, 0, Math.PI * 2)
        this.ctx.strokeStyle = "white" 
        this.ctx.lineWidth = 8;
        this.ctx.shadowBlur = 4;
        this.ctx.shadowColor = "rgb(70, 70, 70)"
        this.ctx.stroke()
        this.ctx.closePath();

    }

    // Event listeners for mouse interactions
    listenForEvents() {
        let isMouseDown = false;

        const onMouseDown = (e) => {
        let rect = this.target.getBoundingClientRect();
        let currentX = e.clientX - rect.left;
        let currentY = e.clientY - rect.top;

        // Check if the mouse is within the circular canvas
        if (
            Math.pow(currentX - this.width / 2, 2) +
            Math.pow(currentY - this.height / 2, 2) <=
            Math.pow(this.width / 2, 2)
        ) {
            isMouseDown = true;
        } else {
            // Update the color selector position
            this.updateColorSelectorPosition(currentX, currentY);
        }
        };

        const onMouseMove = (e) => {
        let rect = this.target.getBoundingClientRect();
        let currentX = e.clientX - rect.left;
        let currentY = e.clientY - rect.top;

        // If the mouse is down, update the color selector position
        if (isMouseDown) {
            this.updateColorSelectorPosition(currentX, currentY);
        }
            colorPicker.draw();
        };

        const onMouseUp = () => {
        isMouseDown = false;
        };

        // Add event listeners to the canvas
        this.target.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    // Function to update the color selector position
    updateColorSelectorPosition(x, y) {
        // Calculate the distance from the center of the canvas
        let distance = Math.sqrt(
        Math.pow(x - this.width / 2, 2) + Math.pow(y - this.height / 2, 2)
        );

        // Check if the mouse is still within the circular canvas
        if (distance <= this.width / 2) {
        // Update the color selector position
        this.colorSelector.x = x;
        this.colorSelector.y = y;
        } else {
        // If the mouse moves outside the circle, calculate the position on the circle
        let angle = Math.atan2(y - this.height / 2, x - this.width / 2);
        this.colorSelector.x =
            this.width / 2 + (this.width / 2 - 10) * Math.cos(angle);
        this.colorSelector.y =
            this.height / 2 + (this.height / 2 - 10) * Math.sin(angle);
        }
    }
}

//Create an instance of the color picker
const colorPicker = new colorPickerClass (document.getElementById("canvas"), 500, 500);

//Update the color picker continuously
colorPicker.draw();