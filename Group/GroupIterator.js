class GroupIterator {

    constructor(group) {
        this.group = group;
        this.i = 0;
    }

    next() {
        if(this.i === (this.group.length - 1)) {
            return {
                value: null,
                done: true
            }
        }

        const value = {
            value: this.group[this.i],
            done: false
        }

        this.i++;
        return value;
    }

}