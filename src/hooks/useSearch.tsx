import { useState, useEffect } from 'react';

const useSearch = (value:string,delay:number)=>{

    const [debounce,setDebounced] = useState(value);

    useEffect(()=>{
        console.log('Hook created');
        const timer = setTimeout(()=>setDebounced(value),delay)

        return ()=> clearTimeout(timer)
    },[value,delay])

    return debounce
}

export default useSearch;