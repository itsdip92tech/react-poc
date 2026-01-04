import { useState,useCallback,Suspense } from 'react'
import SearchBoxComponent from './table/searchBox'
import TableComponent from './table/table'
import Loading from './Loading';

export default function SearchTable(){
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