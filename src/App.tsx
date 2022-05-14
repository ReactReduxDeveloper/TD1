import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilteredType = "all" | "completed" | "active"
function App() {
    let [task, Settask] = useState([
        {id: 1, title: "React", isDone: true},
        {id: 2, title: "Html", isDone: true},
        {id: 3, title: "JS", isDone: false},
        {id: 4, title: "GrapghQL", isDone: false},
        {id: 5, title: "Tesla", isDone: false},
    ])
let [filtered, Setfiltered] = useState<"all" | "active" | "completed">("all")
    let FilteredTasks = task
    if (filtered === "active") {
        FilteredTasks = task.filter(el=>el.isDone === false)
    }
if (filtered === "completed") {
    FilteredTasks = task.filter(el=>el.isDone === true)
}
    const FilteredFunction = (value:FilteredType)=> {
        Setfiltered(value)

    }
    const DeleteFunction = (id: number) => {
        let FilteredTasks = task.filter(el => el.id != id)
        Settask(FilteredTasks)

    }
    return (
        <div className="App">
            <Todolist title={"What to learn"} massive={FilteredTasks} removeFunction={DeleteFunction}/>
        </div>
    )

}

export default App;
