import { useEffect, useRef, useState } from "react"
import  type { TableData } from "./type";
import data from '../../../public/Supermarket_Sales_1.json';
import './infiniteScroll.css';
import { throttle } from "../../utils/throttle";
const Page_Size = 100;
const Scroll_Threshold = 300;

const InfiniteScroll =() =>{
    const tableRef = useRef<HTMLDivElement | null>(null);
    const [visibleData, setVisibleData] = useState<number>(Page_Size)

    useEffect(()=>{
        const el = tableRef.current;
        if(!el) return;

        const handleScroll = throttle(()=>{
            console.log('Inside handle throttle')
            
            if(el.scrollTop + el.clientHeight >= el.scrollHeight - Scroll_Threshold){
                console.log('Inside handle throttle if block')
                setVisibleData(prev=>Math.min(prev+Page_Size,data.length));
            }
        },200)

        el.addEventListener("scroll",handleScroll);

        return ()=>{
            el.removeEventListener("scroll",handleScroll);
        }

    },[])

    const tableData:TableData[] = data.slice(0,visibleData)

    return(
        <div className="tableWrapper" ref={tableRef}>
            <table className="customerTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Branch</th>
                        <th>CustomerType</th>
                        <th>Gender</th>
                        <th>ProductLine</th>
                        <th>UnitPrice</th>
                        <th>Quantity</th>
                        <th>Payment</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data)=>(
                        <tr key={data.id}>
                            <td>
                                {data.Date}
                            </td>
                            <td>
                                {data.Branch}
                            </td>
                            <td>
                                {data.CustomerType}
                            </td>
                            <td>
                                {data.Gender}
                            </td>
                            <td>
                                {data.ProductLine}
                            </td>
                            <td>
                                {data.UnitPrice}
                            </td>
                            <td>
                                {data.Quantity}
                            </td>
                            <td>
                                {data.Payment}
                            </td>
                            <td>
                                {data.Rating}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {visibleData < data.length && (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default InfiniteScroll