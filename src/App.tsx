
import './App.css'
import useToast from './hooks/useToast';

function App() {

  const { triggerNotification, NotificationComponent } = useToast("bottom-right");

  return (
    <>
      {NotificationComponent}
      <div className='container'>
        <h1>This is a Toast POC</h1>
        <div className='button-wrapper'>
        <button onClick={()=>triggerNotification({duration:3000,type:"info",message:"This is a new notification"})}>
          Info
        </button>
        <button onClick={()=>triggerNotification({duration:3000,type:"success",message:"This is a new notification"})}>
          Success
        </button>
        <button onClick={()=>triggerNotification({duration:3000,type:"warning",message:"This is a new notification"})}>
          Warning
        </button>
        <button onClick={()=>triggerNotification({duration:3000,type:"error",message:"This is a new notification"})}>
          Error
        </button>
      </div>
      </div>
    </>
  )
}

export default App
