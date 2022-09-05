import { makeAutoObservable } from "mobx";

class MyDeck {
    cards = [
        {
            name: "ГОРНОСТАЙ",
            costType: "blood",
            cost: 1,
            image: "gornostay",
            attack: 1,
            hp: 3,
            special: "none",
        },
        {
            name: "ВОЛК",
            costType: "blood",
            cost: 2,
            image: "volk",
            attack: 3,
            hp: 2,
            special: "none",
        },
        {
            name: "ТАРАКАН",
            costType: "bone",
            cost: 2,
            image: "tarakan",
            attack: 1,
            hp: 2,
            special: "weakening",
        },
        {
            name: "ЖАБА",
            costType: "blood",
            cost: 1,
            image: "jaba",
            attack: 1,
            hp: 2,
            special: "fly-defense",
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new MyDeck();

// cards = [
//     { id: 1, title: "выучить уроки", complete: false },
//     { id: 2, title: "ударить Аделя по бошке", complete: true },
//     { id: 3, title: "поиграть в компьютер", complete: false },
// ]
