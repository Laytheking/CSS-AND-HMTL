function drawRectangle(width, height) {
    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 0; j < width; j++) {
            row += "*";
        }
        console.log(row);
    }
}

drawRectangle(5, 3);