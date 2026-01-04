import { useState, useEffect } from 'react';

const useSearch = (value:string,delay:number)=>{

    const [debounce,setDebounced] = useState(value);

    useEffect(()=>{
        console.log('Hook created');
        // The timer function is managed the browsers Web API and not by react or javascript. 
        // Once this timer expires, its callback is passed down to the macrotask queue of the event loop.
        // The callback waits for the functions from the main stack to be executed followed by the microtasks.
        // Reach renders the components before the macrotask is executed.
        // For each iteration of the event loop(event loop tick) one function from the macrotask is executed. 
        const timer = setTimeout(()=>setDebounced(value),delay)

        // Executes every time the dependency array changes or the associated component is unmounted. 
        // Essentially this clears the last timer from the browser and prevents its callback entering macrotask queue of the event loop.
        return ()=> clearTimeout(timer)
    },[value,delay])

    return debounce
}

export default useSearch;