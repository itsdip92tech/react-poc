import {type ReactElement, useState } from 'react';
import './App.css'
import Notification from './components/notification'
import SearchTable from './components/searchTable'

const pocList = [
  {id:0,name:"Reset",component: null},
  {id:1,name:"Search Table POC", component: <SearchTable  />},
  {id:2,name:"Notification POC", component: <Notification />}
]


function App() {
  
  const [activePoc,setActivePoc] = useState<ReactElement | null>(null)

  const handlePOC = (id:number)=>{
    const selectedComponent = pocList.filter(poc=>poc.id === id);
    setActivePoc(selectedComponent[0].component);
  }

  return (
    <>
      <div>
        {pocList.map(poc=>
          <button key={poc.id} onClick={()=>handlePOC(poc.id)}>{poc.name}</button>
        )}
      </div>
      <div>
        {activePoc}
      </div> 
    </>
  )
}

export default App
