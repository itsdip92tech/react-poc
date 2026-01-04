import { useState } from "react"
import {type BoardProps } from './kanban/types';
import CardComponent from "./kanban/card";


export default function Board(){
    // Data structure for the board will be a hashMap in which the keys will represent the column names
    // The keys will contain arrays of tasks which will describe the cards.
    const [columns,setColumns] = useState<BoardProps>({
        "To Do":[{"id":1,title:"Task 1",description:"This is the first task"}],
        "In Progress": [{"id":2,title:"Task 2",description:"This is the second task"}],
        "Done": [{"id":3,title:"Task 3",description:"This is the third task"}]
    })

    const columnNames = Object.keys(columns);

    const handleTransition = (colName:string,id:number,destination:string)=>{
        console.log(colName)
        console.log(id)
        console.log(destination)
        setColumns(prev=>{
            const task = prev[colName].filter(task=>task.id == id);
            return{
            ...prev,
            [colName]:prev[colName].filter(task=>task.id !== id),
            [destination]:[...prev[destination],...task]
        }})
    }

    return(
        <div className="boardWrapper">
            {/* Paint the columns */}
            {columnNames.map(colName=>(
                <div key={colName} className="columnWrapper">
                    <h2>{colName}</h2>
                    {/* Paint the tasks within the columns */}
                    {columns[colName].map(task=>(
                        <CardComponent 
                            key={task.id} 
                            id={task.id} 
                            colName={colName} 
                            title={task.title} 
                            description={task.description} 
                            toDoHandler={handleTransition}
                            inProgressHandler={handleTransition}
                            doneHandler={handleTransition}
                        />
                    ))}
                </div>
            ))}
        </div>
    )

    
}