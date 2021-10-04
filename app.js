const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0, lastY = 0;
let linewidth = 5;
let direction = true;
let hue = 0;

function draw(e) {
    if(!isDrawing) return;
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    lastX = x;
    lastY = y;
    hue = (hue + 1) % 360;
    if(linewidth > 100 || linewidth < 5) {
        direction = !direction;
    }
    if(direction) linewidth++;
    else linewidth--;
}

canvas.addEventListener('mousemove', (e) => draw(e));
canvas.addEventListener('mousedown', (e) => {
   isDrawing = true; 
   lastX = e.offsetX;
   lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});