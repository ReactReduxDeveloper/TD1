import React from 'react';

type PropsType = {
    title: string
    massive: Array<MassiveType>
    removeFunction: (id: number) => void
    FilteredFunction:(value:)
}
type MassiveType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {

    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {
                        props.massive.map(el =>
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => {props.removeFunction(el.id)
                                }}>X
                                </button>

                            </li>
                        )}
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