import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {task1, task2} from "./MassiveObj";

function App() {
    return (
        <div className="App">
        <Todolist title={"What to learn"} massive={task1}/>
        <Todolist title={"What to sing"} massive={task2}/>

        </div>
)

}

export default App;
