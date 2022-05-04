import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {
    let task1 = [
        {id: 1, title: "React", isDone: true},
        {id: 2, title: "Html", isDone: true},
        {id: 3, title: "JS", isDone: false},
    ]


    const DeleteFunction = (id: number) => {
        task1 = task1.filter(el => el.id != id)

    }
    return (
        <div className="App">
            <Todolist title={"What to learn"} massive={task1} removeFunction={DeleteFunction}/>
        </div>
    )

}

export default App;
