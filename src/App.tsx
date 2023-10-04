import React from 'react';
import './App.css';
import {TodoList} from "src/components/TodoList";

export type TaskType = {
    id: number,
    isDone: boolean,
    title: string
}

function App() {

    const todoTitle_1 = 'What to buy'
    const todoTitle_2 = 'What to learn'

    const tasks_1:Array<TaskType> = [
        {id: 1, isDone: false, title: 'Milk'},
        {id: 2, isDone: false, title: 'Bread'},
        {id: 3, isDone: true, title: 'Coffee'},
    ]
    const tasks_2:Array<TaskType> = [
        {id: 4, isDone: true, title: 'Js'},
        {id: 5, isDone: false, title: 'Ts'},
        {id: 6, isDone: true, title: 'React'},
    ]

    return (
        <div className="App">
            <TodoList title={todoTitle_1} tasks={tasks_1}/>
            <TodoList title={todoTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
