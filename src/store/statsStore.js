import { makeAutoObservable } from "mobx";

class Stats {
    speed = 0;
    accuracy = 0;
    rightSymbols = 0;
    failedSymbols = 0;
    seconds = 0;
    interval = 0;

    currLanguage = "russian";

    russianVersion =
        "Всем привет, напечатайте этот текст с максимально возможной скоростью. Как только вы наберёте первый символ - запустится таймер, который в конечном итоге подсчитает вашу статистику";
    englishVersion =
        "Hello everyone, type this text as fast as possible. As soon as you type the first character, a timer will start, which will eventually calculate your statistics";

    selectedText =
        "Всем привет, напечатайте этот текст с максимально возможной скоростью. Как только вы наберёте первый символ - запустится таймер, который в конечном итоге подсчитает вашу статистику";

    currentInput = "";

    constructor() {
        makeAutoObservable(this);
    }

    setLanguage(lang) {
        this.reset();
        if (lang === "russian") {
            this.currLanguage = "russian";
            this.selectedText = this.russianVersion;
        } else {
            this.currLanguage = "english";
            this.selectedText = this.englishVersion;
        }
    }

    //Событие ввода символа
    handleChange(e) {
        if (
            String(e.target.value.slice(-1)) ===
            String(this.selectedText[this.currentInput.length])
        ) {
            this.currentInput = e.target.value;
            this.rightSymbols++;

            if (this.selectedText.length === this.currentInput.length) {
                this.seconds = 0;

                clearInterval(this.interval);

                // alert(
                //     "Ваша скорость: " +
                //         this.speed.toFixed(2) +
                //         " зн. в минуту. \n Ваша точность: " +
                //         this.accuracy.toFixed(0) +
                //         " %"
                // );
            }
        } else {
            this.failedSymbols++;
        }

        if (this.currentInput.length > 0 && this.currentInput.length <= 1) {
            this.startTimer();
        }

        this.matchAccuracy();
    }

    //Запускаем таймер для подсчёта зн/мин
    startTimer() {
        this.interval = setInterval(() => {
            this.seconds++;
            this.speed = (this.rightSymbols / this.seconds) * 60;
            console.log("Скорость = " + this.speed);
        }, 1000);
    }

    //Считаем точность
    matchAccuracy() {
        this.accuracy =
            (this.rightSymbols / (this.rightSymbols + this.failedSymbols)) *
            100;
    }

    //Сброс
    reset() {
        this.speed = 0;
        this.seconds = 0;
        clearInterval(this.interval);

        this.accuracy = 0;
        this.rightSymbols = 0;
        this.failedSymbols = 0;

        this.currentInput = "";
    }
}

export default new Stats();
