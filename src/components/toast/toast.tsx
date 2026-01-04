import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineWarning } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import type { Type } from '../../hooks/useToast';
import './toast.css'

interface ToastProps{
    type: Type,
    msg: string,
    closeToast: ()=>void;
}


const icons = {
    info: <AiOutlineInfoCircle />,
    success: <AiOutlineCheck />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineExclamationCircle />
}

const ToastComponent = ({type,msg="New Notification",closeToast}:ToastProps)=>{
    return (
        <div className={`toast-wrapper ${type}`}>
            {icons[type]}
            {msg}
            <AiOutlineClose className="toast-close" onClick={closeToast}/>
        </div>
    )
}

export default ToastComponent