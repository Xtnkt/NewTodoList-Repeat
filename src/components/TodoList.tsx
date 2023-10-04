import React, {FC} from 'react';
import {TaskType} from "src/App";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

export const TodoList: FC<TodoListPropsType> = ({title, tasks}) => {

    const button = {
        marginLeft: '5px',
    }
    return (
        <div className='todolist'>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={tasks[0].isDone}/>{tasks[0].title}</li>
                <li><input type="checkbox" checked={tasks[1].isDone}/>{tasks[1].title}</li>
                <li><input type="checkbox" checked={tasks[2].isDone}/>{tasks[2].title}</li>
            </ul>
            <div>
                <button style={button}>All</button>
                <button style={button}>Active</button>
                <button style={button}>Completed</button>
            </div>
        </div>
    );
};

