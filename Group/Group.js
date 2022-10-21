class Group {

    constructor() {}

    #group = [];

    add(el) {
        this.#group.push(el);
    }

    delete(el) {
        const indexEl = this.#group.indexOf(el);
        if(~indexEl) {
            this.#group.splice(indexEl, 1);
        }
    }

    static from(obj) {
        for(let value of obj) {
            this.add(value);
        }
    }

}