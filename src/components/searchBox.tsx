import { useEffect, useState } from "react"
import useSearch from "../hooks/useSearch";

interface ChildProps {
    onValueChange: (value: string) => void;
  }

const SearchBoxComponent = ({onValueChange}:ChildProps)=>{
    const [value,setValue] = useState<string>("");
    const debouncedText = useSearch(value,3000)

    useEffect(()=>{
        console.log("Searching for"+ debouncedText)
        onValueChange(debouncedText);
    },[debouncedText])


    return(
        <>
            <input id="searchBox" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        </>
    )
}

export default SearchBoxComponent