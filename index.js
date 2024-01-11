const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Creating Gradients
const gradient = ctx.createRadialGradient(
    canvas.width / 2, 0, 0,
    canvas.width / 2, 0, canvas.width * 1.17
  );
  
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.1, 'rgba(242, 13, 13, 0.8)');
    gradient.addColorStop(0.2, 'rgba(230, 26, 26, 0.6)');
    gradient.addColorStop(0.3, 'rgba(204, 51, 51, 0.4)');
    gradient.addColorStop(0.4, 'rgba(166, 89, 89, 0.2)');
    gradient.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');
    
const gradient2 = ctx.createRadialGradient(
    canvas.width * 0.8535533905932738, canvas.height * 0.14644660940672622, 0,
    canvas.width * 0.8535533905932738, canvas.height * 0.14644660940672622, canvas.width * 1.14
    );
    
    gradient2.addColorStop(0, '#ffbf00');
    gradient2.addColorStop(0.1, 'rgba(242, 185, 13, 0.8)');
    gradient2.addColorStop(0.2, 'rgba(230, 179, 26, 0.6)');
    gradient2.addColorStop(0.3, 'rgba(204, 166, 51, 0.4)');
    gradient2.addColorStop(0.4, 'rgba(166, 147, 89, 0.2)');
    gradient2.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

const gradient3 = ctx.createRadialGradient(
    canvas.width, canvas.height / 2, 0,
    canvas.width, canvas.height / 2, canvas.width * 1.17
  );

    gradient3.addColorStop(0, '#80ff00');
    gradient3.addColorStop(0.1, 'rgba(128, 242, 13, 0.8)');
    gradient3.addColorStop(0.2, 'rgba(128, 230, 26, 0.6)');
    gradient3.addColorStop(0.3, 'rgba(128, 204, 51, 0.4)');
    gradient3.addColorStop(0.4, 'rgba(128, 166, 89, 0.2)');
    gradient3.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

const gradient4 = ctx.createRadialGradient(
    canvas.width * 0.8535533905932738, canvas.height * 0.8535533905932738, 0,
    canvas.width * 0.8535533905932738, canvas.height * 0.8535533905932738, canvas.width * 1.14
    );

    gradient4.addColorStop(0, '#00ff40');
    gradient4.addColorStop(0.1, 'rgba(13, 242, 70, 0.8)');
    gradient4.addColorStop(0.2, 'rgba(26, 230, 77, 0.6)');
    gradient4.addColorStop(0.3, 'rgba(51, 204, 89, 0.4)');
    gradient4.addColorStop(0.4, 'rgba(89, 166, 108, 0.2)');
    gradient4.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

const gradient5 = ctx.createRadialGradient(
    canvas.width * 0.50000000000001, canvas.height * 1, 0,
    canvas.width * 0.50000000000001, canvas.height * 1, canvas.width * 1.14
    );

    gradient5.addColorStop(0, '#0ff');
    gradient5.addColorStop(0.1, 'rgba(13, 242, 242, 0.8)');
    gradient5.addColorStop(0.2, 'rgba(26, 230, 230, 0.6)');
    gradient5.addColorStop(0.3, 'rgba(51, 204, 204, 0.4)');
    gradient5.addColorStop(0.4, 'rgba(89, 166, 166, 0.2)');
    gradient5.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

const gradient6 = ctx.createRadialGradient(
    canvas.width * 0.1464466094067263, canvas.height * 0.8535533905932738, 15,
    canvas.width * 0.1464466094067263, canvas.height * 0.8535533905932738, canvas.width * 1.14
    );

    gradient6.addColorStop(0, '#0040ff');
    gradient6.addColorStop(0.1, 'rgba(13, 70, 242, 0.8)');
    gradient6.addColorStop(0.2, 'rgba(26, 77, 230, 0.6)');
    gradient6.addColorStop(0.3, 'rgba(51, 89, 204, 0.4)');
    gradient6.addColorStop(0.4, 'rgba(89, 108, 166, 0.2)');
    gradient6.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

const gradient7 = ctx.createRadialGradient(
0, canvas.height * 0.50000000000001, 15,
0, canvas.height * 0.50000000000001, canvas.width * 1.17
);

    gradient7.addColorStop(0, '#7f00ff');
    gradient7.addColorStop(0.1, 'rgba(128, 13, 242, 0.8)');
    gradient7.addColorStop(0.2, 'rgba(128, 26, 230, 0.6)');
    gradient7.addColorStop(0.3, 'rgba(128, 51, 204, 0.4)');
    gradient7.addColorStop(0.4, 'rgba(128, 89, 166, 0.2)');
    gradient7.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

const gradient8 = ctx.createRadialGradient(
canvas.width * 0.146447, canvas.height * 0.146447, 15,
canvas.width * 0.146447, canvas.height * 0.146447, canvas.width * 1.14
);

    gradient8.addColorStop(0, '#ff00bf');
    gradient8.addColorStop(0.1, 'rgba(242, 13, 185, 0.8)');
    gradient8.addColorStop(0.2, 'rgba(230, 26, 179, 0.6)');
    gradient8.addColorStop(0.3, 'rgba(204, 51, 166, 0.4)');
    gradient8.addColorStop(0.4, 'rgba(166, 89, 147, 0.2)');
    gradient8.addColorStop(0.5, 'hsla(0, 0%, 50%, 0)');

//Apply the gradient to the canvas

ctx.fillStyle = gradient8;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient7;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient6;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient5;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient4;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient3;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient2;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const selectedColor = document.getElementById("selected-color");

function pickColor(event, destination) {
  const bounding = canvas.getBoundingClientRect();
  const x = event.clientX - bounding.left;
  const y = event.clientY - bounding.top;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

  const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
  destination.textContent = rgba;

  return rgba;
}

canvas.addEventListener("click", (event) => pickColor(event, selectedColor));