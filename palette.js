
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateColors() {
    let container = document.getElementById('colorContainer');
    container.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        let color = getRandomColor();
        
        let box = document.createElement('div');
        box.className = 'color-box';
        box.style.backgroundColor = color;
        box.textContent = color;
        
        box.onclick = function() {
            navigator.clipboard.writeText(color);
            alert('تم نسخ اللون: ' + color);
        };
        
        container.appendChild(box);
    }
}
window.onload = generateColors;