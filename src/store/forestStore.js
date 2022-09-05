import { makeAutoObservable } from "mobx";

class ForestStore {
    // locations = [
    //     { }
    // ];

    loc2 = false;
    loc31 = false;
    loc32 = false;
    loc4 = false;

    locate1 = "";

    random1 = 0;
    random2 = 0;
    random3 = 0;

    makeRandom() {
        this.random1 = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    }
    constructor() {
        makeAutoObservable(this);
    }
}

export default new ForestStore();
