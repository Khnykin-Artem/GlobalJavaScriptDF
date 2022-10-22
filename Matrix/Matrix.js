"use strict"

class Matrix {

    constructor(width, height, elementGenerator = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = []

        let i = 0;
        while(i < height) {
            this.content[i] = Array(width);
            ++i;
        };

        this.content.forEach((childArr, y) => {
            childArr.forEach((el, x) => {
                childArr[x] = elementGenerator(x, y);
            });
        });

        Object.seal(this.content);
    }

    get(x, y) {
        return this.content[y][x];
    }

    set(x, y, value) {
        this.content[y][x] = value;
        return this.content[x][y];
    }

}



