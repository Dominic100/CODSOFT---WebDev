function createRandomCircles() {
    const numCircles = 50;
    const minSize = 20;
    const maxSize = 300;
    const minZIndex = -50;

    const body = document.body;
    body.style.backgroundColor = 'black';
    const bodyWidth = body.clientWidth;
    const bodyHeight = body.clientHeight;

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = getRandomColor();
        const size = getRandomNumber(minSize, maxSize);
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${getRandomNumber(0, bodyHeight - size)}px`;
        circle.style.left = `${getRandomNumber(0, bodyWidth - size)}px`;
        circle.style.zIndex = minZIndex;
        body.appendChild(circle);
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

window.onload = function () {
    createRandomCircles();
}

function toggleDescription(element) {
    element.classList.toggle('expanded');
}