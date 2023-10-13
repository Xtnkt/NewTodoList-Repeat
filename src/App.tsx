import React, {useState} from 'react';
import './App.css';
import {TodoList} from "src/components/TodoList";

export type TaskType = {
    id: number,
    isDone: boolean,
    title: string
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const todoTitle_1 = 'What to buy'

    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, isDone: false, title: 'Milk'},
        {id: 2, isDone: false, title: 'Bread'},
        {id: 3, isDone: true, title: 'Coffee'},
    ])

    const tasksForTodolist: TaskType[] = getFilteredTasks(tasks, filter)

    function getFilteredTasks(tasks: TaskType[], filter: FilterType) {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }
    const changeIsDone = (isDone: boolean, taskId: number) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: isDone} : t))
    }

    return (
        <div className="App">
            <TodoList title={todoTitle_1}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      changeIsDone={changeIsDone}/>
        </div>
    );
}
export default App;
