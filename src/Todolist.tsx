import React from 'react';
type PropsType = {
    title:string
massive:Array<MassiveType>
}
type MassiveType = {
    id: number
    title:string
    isDone:boolean
}
export const Todolist = (props:PropsType)=> {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={props.massive[0].isDone}/> <span>{props.massive[0].title}</span></li>
                    <li><input type="checkbox" checked={props.massive[1].isDone}/> <span>{props.massive[1].title}</span></li>
                    <li><input type="checkbox" checked={props.massive[2].isDone}/> <span>{props.massive[2].title}</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );

}