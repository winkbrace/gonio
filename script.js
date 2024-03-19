const canvasBg = document.getElementById('background');
const bg = canvasBg.getContext("2d");

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
ctx.lineWidth = 4;

const center = {x: canvas.width / 2, y: canvas.height / 2}
const radius = canvas.height / 2 - 150;

bg.lineWidth = 4
bg.beginPath();
bg.arc(center.x, center.y, radius, 0, 2 * Math.PI);
bg.strokeStyle = 'yellow'
bg.stroke();


document.addEventListener('mousemove', function(evt) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;

    // find intersection with circle
    const dx = x - center.x;
    const dy = y - center.y;
    const angle = Math.atan2(dy, dx); // tan(a) = O / A
    const intersectionX = center.x + radius * Math.cos(angle);
    const intersectionY = center.y + radius * Math.sin(angle);
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(intersectionX, intersectionY);

    // draw line perpendicular
    ctx.moveTo(intersectionX + canvas.width * Math.sin(angle), intersectionY - canvas.width * Math.cos(angle));
    ctx.lineTo(intersectionX - canvas.width * Math.sin(angle), intersectionY + canvas.width * Math.cos(angle));

    ctx.strokeStyle = 'orange'
    ctx.stroke();
});
