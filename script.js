class colorPickerClass {
  constructor(target, width, height) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.target.width = width;
    this.target.height = height;
    this.mouseX = 0;
    this.mouseY = 0;

    this.ctx = this.target.getContext("2d");

    this.colorSelector = { x: width / 2, y: height / 2, radius: 12 };

    this.buildWheelOnce();

    this.wheelImage = this.ctx.getImageData(0, 0, this.width, this.height);

    this.listenForEvents();

    this.draw();

    const initialColor = this.getSelectedColor();
    this.updateColorPreview(initialColor)
  }

  draw() {
    this.ctx.putImageData(this.wheelImage, 0, 0);

    //Selector
    this.ctx.beginPath();
    this.ctx.arc(
      this.colorSelector.x,
      this.colorSelector.y,
      this.colorSelector.radius,
      0,
      Math.PI * 2
    );
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 8;
    this.ctx.shadowBlur = 4;
    this.ctx.shadowColor = "rgb(70, 70, 70)";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  buildWheelOnce() {
    const gradient = this.ctx.createRadialGradient(
      this.width / 2,
      0,
      0,
      this.width / 2,
      0,
      this.width
    );

    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.1, "rgba(242, 13, 13, 0.8)");
    gradient.addColorStop(0.2, "rgba(230, 26, 26, 0.6)");
    gradient.addColorStop(0.3, "rgba(204, 51, 51, 0.4)");
    gradient.addColorStop(0.4, "rgba(166, 89, 89, 0.2)");
    gradient.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient2 = this.ctx.createRadialGradient(
      this.width * 0.8535533905932738,
      this.height * 0.14644660940672622,
      0,
      this.width * 0.8535533905932738,
      this.height * 0.14644660940672622,
      this.width * 1.14
    );

    gradient2.addColorStop(0, "#ffbf00");
    gradient2.addColorStop(0.1, "rgba(242, 185, 13, 0.8)");
    gradient2.addColorStop(0.2, "rgba(230, 179, 26, 0.6)");
    gradient2.addColorStop(0.3, "rgba(204, 166, 51, 0.4)");
    gradient2.addColorStop(0.4, "rgba(166, 147, 89, 0.2)");
    gradient2.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient3 = this.ctx.createRadialGradient(
      this.width,
      this.height / 2,
      0,
      this.width,
      this.height / 2,
      this.width * 1.17
    );

    gradient3.addColorStop(0, "#80ff00");
    gradient3.addColorStop(0.1, "rgba(128, 242, 13, 0.8)");
    gradient3.addColorStop(0.2, "rgba(128, 230, 26, 0.6)");
    gradient3.addColorStop(0.3, "rgba(128, 204, 51, 0.4)");
    gradient3.addColorStop(0.4, "rgba(128, 166, 89, 0.2)");
    gradient3.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient4 = this.ctx.createRadialGradient(
      this.width * 0.8535533905932738,
      this.height * 0.8535533905932738,
      0,
      this.width * 0.8535533905932738,
      this.height * 0.8535533905932738,
      this.width * 1.14
    );

    gradient4.addColorStop(0, "#00ff40");
    gradient4.addColorStop(0.1, "rgba(13, 242, 70, 0.8)");
    gradient4.addColorStop(0.2, "rgba(26, 230, 77, 0.6)");
    gradient4.addColorStop(0.3, "rgba(51, 204, 89, 0.4)");
    gradient4.addColorStop(0.4, "rgba(89, 166, 108, 0.2)");
    gradient4.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient5 = this.ctx.createRadialGradient(
      this.width * 0.50000000000001,
      this.height * 1,
      0,
      this.width * 0.50000000000001,
      this.height * 1,
      this.width * 1.14
    );

    gradient5.addColorStop(0, "#0ff");
    gradient5.addColorStop(0.1, "rgba(13, 242, 242, 0.8)");
    gradient5.addColorStop(0.2, "rgba(26, 230, 230, 0.6)");
    gradient5.addColorStop(0.3, "rgba(51, 204, 204, 0.4)");
    gradient5.addColorStop(0.4, "rgba(89, 166, 166, 0.2)");
    gradient5.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient6 = this.ctx.createRadialGradient(
      this.width * 0.1464466094067263,
      this.height * 0.8535533905932738,
      0,
      this.width * 0.1464466094067263,
      this.height * 0.8535533905932738,
      this.width * 1.14
    );

    gradient6.addColorStop(0, "#0040ff");
    gradient6.addColorStop(0.1, "rgba(13, 70, 242, 0.8)");
    gradient6.addColorStop(0.2, "rgba(26, 77, 230, 0.6)");
    gradient6.addColorStop(0.3, "rgba(51, 89, 204, 0.4)");
    gradient6.addColorStop(0.4, "rgba(89, 108, 166, 0.2)");
    gradient6.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient7 = this.ctx.createRadialGradient(
      0,
      this.height * 0.50000000000001,
      0,
      0,
      this.height * 0.50000000000001,
      this.width * 1.17
    );

    gradient7.addColorStop(0, "#7f00ff");
    gradient7.addColorStop(0.1, "rgba(128, 13, 242, 0.8)");
    gradient7.addColorStop(0.2, "rgba(128, 26, 230, 0.6)");
    gradient7.addColorStop(0.3, "rgba(128, 51, 204, 0.4)");
    gradient7.addColorStop(0.4, "rgba(128, 89, 166, 0.2)");
    gradient7.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

    const gradient8 = this.ctx.createRadialGradient(
      this.width * 0.146447,
      this.height * 0.146447,
      0,
      this.width * 0.146447,
      this.height * 0.146447,
      this.width * 1.14
    );

    gradient8.addColorStop(0, "#ff00bf");
    gradient8.addColorStop(0.1, "rgba(242, 13, 185, 0.8)");
    gradient8.addColorStop(0.2, "rgba(230, 26, 179, 0.6)");
    gradient8.addColorStop(0.3, "rgba(204, 51, 166, 0.4)");
    gradient8.addColorStop(0.4, "rgba(166, 89, 147, 0.2)");
    gradient8.addColorStop(0.5, "hsla(0, 0%, 50%, 0)");

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
  }

  listenForEvents() {
    let isMouseDown = false;

    const getCanvasCoords = (e) => {
      const rect = this.target.getBoundingClientRect();

      const cssX = e.clientX - rect.left;
      const cssY = e.clientY - rect.top;

      const scaleX = this.width / rect.width;
      const scaleY = this.height / rect.height;

      const x = cssX * scaleX;
      const y = cssY * scaleY;

      return { x, y };
    };

    const onMouseDown = (e) => {
      const { x, y } = getCanvasCoords(e);

      this.mouseX = x;
      this.mouseY = y;

      // Move selector immediately to click
      this.updateColorSelectorPosition(x, y);
      const color = this.getSelectedColor();
      console.log("Selected color (click):", color);
      this.updateColorPreview(color)

      isMouseDown = true;
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;

      const { x, y } = getCanvasCoords(e);

      this.mouseX = x;
      this.mouseY = y;

      this.updateColorSelectorPosition(x, y);
      const color = this.getSelectedColor();
      console.log("Selected color (drag):", color);
      this.updateColorPreview(color)
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    this.target.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  updateColorSelectorPosition(x, y) {

    const centerX = this.width / 2;
    const centerY = this.width / 2;

    const dx = x - centerX;
    const dy = y - centerY;
    let distance = Math.sqrt(dx * dx + dy * dy);

    const maxRadius = this.width / 2;

    if (distance <= maxRadius) {
      this.colorSelector.x = x;
      this.colorSelector.y = y;
    } else {
      const angle = Math.atan2(dy, dx);
      this.colorSelector.x = this.width / 2 + maxRadius * Math.cos(angle);
      this.colorSelector.y = this.height / 2 + maxRadius * Math.sin(angle);
    }

    this.draw();
  }

  getSelectedColor() {
    const x = Math.round(this.colorSelector.x);
    const y = Math.round(this.colorSelector.y);

    const clampedX = Math.min(Math.max(x, 0), this.width - 1);
    const clampedY = Math.min(Math.max(y, 0), this.height - 1);

    const idx = (clampedY * this.width + clampedX) * 4;
    const data = this.wheelImage.data;

    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3] / 255;

    const toHex = (v) => v.toString(16).padStart(2, "0");
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    return {
      r,
      g,
      b,
      a,
      hex,
      rgbaString: `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`,
    };
  }

  updateColorPreview (color) {
    const swatchElement = document.getElementById('color-swatch')
    const hexElement = document.getElementById('color-hex')
    const rgbaElement = document.getElementById('color-rgba')

    if (!swatchElement || !hexElement || !rgbaElement) return;

    swatchElement.style.backgroundColor = color.rgbaString;
    hexElement.textContent = color.hex
    rgbaElement.textContent = color.rgbaString
  };
}

const colorPicker = new colorPickerClass(
  document.getElementById("canvas"),
  500,
  500
);
