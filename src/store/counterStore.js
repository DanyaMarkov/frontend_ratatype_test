import { makeAutoObservable } from "mobx"


class Counter {

    count = 1;
    timer = 60

    get Total() {
        return `Count + timer = ` + (this.timer + this.count)
    }



    constructor() {
        makeAutoObservable(this)
    }


    increment() {
        this.count = this.count + 1;
    }
    decrement() {
        this.count = this.count - 1;
    }
}

export default new Counter()