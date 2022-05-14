import React from 'react';
import {FilteredType} from "./App";

type PropsType = {
    title: string
    massive: Array<MassiveType>
    removeFunction: (id: number) => void
    FilteredFunction: (value: FilteredType) => void
}
export type MassiveType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    const tasksJsXElements = props.massive.map(el =>
        <li key={el.id}>
            <input type="checkbox" checked={el.isDone}/>
            <span>{el.title}</span>
            <button onClick={() => {
                props.removeFunction(el.id)
            }}>X
            </button>

        </li>)
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksJsXElements}
                </ul>
                <div>
                    <button onClick={() => props.FilteredFunction("all")}>All</button>
                    <button onClick={() => props.FilteredFunction("active")}>Active</button>
                    <button onClick={() => props.FilteredFunction("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );

}