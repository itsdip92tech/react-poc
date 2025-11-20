import { useState, useRef } from "react";
import ToastComponent from "../components/toast";

export type Type = "info"|"success"|"error"|"warning";

type Position = "top-left"|"top-right"|"bottom-left"|"bottom-right";

interface useToastProps{
    duration: number,
    type: Type,
    message: string
}

interface Notification extends useToastProps{
    id: number
}

const useToast = (Position:Position="top-right")=>{
    const idRef  = useRef(0);
    const nextId = ()=>{
        idRef.current +=1;
        return idRef.current;
    }

    // const isTop:boolean = Position.startsWith("top")

    const [notification,setNotification] = useState<Notification[]>([]);

    const triggerNotification  = (notificationProps:useToastProps)=>{
        const id  = nextId();

        const Toast:Notification = {id:id,...notificationProps};

        // setNotification((notification)=>isTop?[...notification,Toast]:[Toast,...notification]);

        setNotification((notification)=>[...notification,Toast]);

        setTimeout(()=>{
            closeNotification(id)
        },notificationProps.duration)
    }

    const closeNotification = (id:number)=>{
        setNotification((notification)=>notification.filter((t)=>t.id !== id))
    }

    const NotificationComponent = notification.length>0? 
        
            <div className={`${Position}`}>
                {notification.map((t)=>(
                    <ToastComponent key={t.id} type={t.type} msg={t.message} closeToast={()=>closeNotification(t.id)}/>
                ))}            
            </div>
     : null;

    return {triggerNotification, NotificationComponent}
}

export default useToast;
