import React, {ChangeEvent, FC, JSX} from 'react';
import {FilterType, TaskType} from "src/App";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (taskId: number) => void,
    changeFilter: (filter: FilterType) => void,
    changeIsDone: (isDone: boolean, taskId: number) => void
}

export const TodoList: FC<TodoListPropsType> = (
    {
        title,
        tasks,
        removeTask,
        changeFilter,
        changeIsDone
    }
) => {

    const button = {
        marginLeft: '5px',
    }

    const listItems: Array<JSX.Element> = tasks.map(t => {

        const onClickRemoveTaskHandler = () => removeTask(t.id)
        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => changeIsDone(event.currentTarget.checked, t.id)


        return (
            <li key={t.id}>
                <button onClick={onClickRemoveTaskHandler}>x</button>
                <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>{t.title}
            </li>
        )
    })

    const tasksList: JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span>No tasks</span>

    return (
        <div className='todolist'>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button style={button} onClick={() => changeFilter('all')}>All</button>
                <button style={button} onClick={() => changeFilter('active')}>Active</button>
                <button style={button} onClick={() => changeFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};

