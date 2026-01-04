import { FaArrowsTurnToDots } from "react-icons/fa6";
import { RiProgress4Line } from "react-icons/ri";
import { IoIosDoneAll } from "react-icons/io";
import  {type CardProps } from './types';
import './card.css';

export default function CardComponent(props:CardProps){
   

    return(
        <div className="cardWrapper">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="buttonWrapper">
                {props.colName !== "To Do" && <button onClick={()=>props.toDoHandler(props.colName,props.id,'To Do')}><FaArrowsTurnToDots /> To Do</button>}
                {props.colName !== "In Progress" && <button onClick={()=>props.inProgressHandler(props.colName,props.id,'In Progress')}><RiProgress4Line /> In Progress</button>}
                {props.colName !== "Done" && <button onClick={()=>props.doneHandler(props.colName,props.id,'Done')}><IoIosDoneAll /> Done</button>}
            </div>
        </div>
    )
}