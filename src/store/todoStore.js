import { makeAutoObservable } from "mobx"


class ToDo {

    todos = [
        { id: 1, title: "выучить уроки", complete: false },
        { id: 2, title: "ударить Аделя по бошке", complete: true },
        { id: 3, title: "поиграть в компьютер", complete: false },
    ]

    inputValue = "привет";


    constructor() {
        makeAutoObservable(this)
    }

    changeInput(e) {
        this.inputValue = e.target.value;
    }

    addTask(task) {
        this.todos.push(task);
    }
    deleteTask(id) {
        this.todos = this.todos.filter(task => task.id !== id);
        // this.todos.push(task);
    }
    completeTask(id) {
        this.todos = this.todos.filter(task => task.id === id ? { ...task, complete: !task.complete } : task);
        // this.todos = this.todos.filter(task => task.id === id ? task.complete = true : task);

    }
}

export default new ToDo()