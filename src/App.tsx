import { useState,useCallback,Suspense } from 'react'
import './App.css'
import SearchBoxComponent from './components/searchBox'
import TableComponent from './components/table/table'
import Loading from './components/Loading';
function App() {

  const [query,setQuery] = useState<string>("");

  const handleChange=useCallback((value:string)=>{
    console.log('state lifted')
    setQuery(value);
  },[])

  return (
    <div className='parentWrapper'>
      <div className='searchBox'>
        <SearchBoxComponent onValueChange={handleChange}/>
      </div>
      <div className='tableData'>
        <Suspense fallback={<Loading />}>
          <TableComponent query={query}/>
        </Suspense>
      </div>
    </div>
  )
}

export default App
