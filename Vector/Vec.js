"use strict"

class Vec {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        const x = vec.x + this.x;
        const y = vec.y + this.y;

        return new Vec(x, y);
    }

    minus(vec) {
        const x = vec.x - this.x;
        const y = vec.y - this.y;

        return new Vec(x, y);
    }

    get length() {
        const l =
            (
                ((0 - this.x) ** 2) +
                ((0 - this.y) ** 2)
            ) ** (1/2);

        return l;
    }

}