import { makeAutoObservable } from "mobx";

class TakeCardsStore {
    cards = [
        {
            name: "ВОРОБЕЙ",
            costType: "blood",
            cost: 1,
            image: "vorobey",
            attack: 1,
            hp: 2,
            special: "fly-attack",
        },
        {
            name: "ГАДЮКА",
            costType: "blood",
            cost: 2,
            image: "gaduka",
            attack: 1,
            hp: 1,
            special: "oneshot",
        },
        {
            name: "КРОТ",
            costType: "blood",
            cost: 1,
            image: "krot",
            attack: 0,
            hp: 4,
            special: "none",
        },
        {
            name: "ЧЕРЕПАХА",
            costType: "blood",
            cost: 2,
            image: "cherepaha",
            attack: 1,
            hp: 6,
            special: "none",
        },
        {
            name: "БОГОМОЛ",
            costType: "blood",
            cost: 1,
            image: "bogomol",
            attack: 1,
            hp: 1,
            special: "triple",
        },
        {
            name: "ОПОССУМ",
            costType: "bone",
            cost: 2,
            image: "opossym",
            attack: 1,
            hp: 1,
            special: "none",
        },
        {
            name: "ЛЕТУЧАЯ МЫШЬ",
            costType: "bone",
            cost: 4,
            image: "letychaya",
            attack: 2,
            hp: 1,
            special: "fly-attack",
        },
    ];

    cardsList = [];

    fillArray() {
        this.cardsList = this.cards;
    }

    card1 = {};
    card2 = {};
    card3 = {};

    chooseCards = [];

    makeRandom() {
        this.fillArray();

        for (var i = 0; i < 3 && i < this.cardsList.length; i++) {
            let card =
                Math.floor(Math.random() * (this.cardsList.length - i)) + i;
            this.chooseCards[i] = this.cardsList[card];
            this.cardsList.splice(card, 1);
        }

        // this.random1 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
        // this.chooseCards[0] = this.cards[this.random1];

        // this.random2 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
        // this.chooseCards[1] = this.cards[this.random2];

        // this.random3 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
        // this.chooseCards[2] = this.cards[this.random3];
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new TakeCardsStore();
