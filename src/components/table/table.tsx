import { useEffect, useState } from "react"
import  type { TableData } from "./type";
import './table.css';

const TableComponent =({query}:{query:string}) =>{

    const [tableData, setTableData] = useState<TableData[]>([])
    // const [error, setError] = useState<boolean>(false);
    useEffect(()=>{
        let isCancelled = false;
        
        async function fetchData(){
            try{
                const res = await fetch("/Supermarket_Sales.json");
                const data = await res.json();
                const distinctData = removeDuplicates(data);
                indexData(distinctData)
            }catch(err){
                // setError(true);
                console.log(err)
            }
        }

        function removeDuplicates(tableData: TableData[]){
            const uniqueValues = new Set();
            let distinctData = [];
            distinctData = tableData.filter(data=>{
                if(uniqueValues.has(data.id)) return false;
                uniqueValues.add(data.id);
                return true;
            })    
            return distinctData;
        }

        function indexData(tableData: TableData[]){
            const indexedData = tableData.map(data=>{
                return{
                    index: data.Branch+ data.Date + data.CustomerType + data.Gender + data.Payment + data.ProductLine + data.Quantity + data.Rating + data.UnitPrice,
                    ...data
                }
            })
            if(!isCancelled){
              setTableData(indexedData);
              sessionStorage.setItem('tableData',JSON.stringify(indexedData));  
            } 
        }

        const delay = setTimeout(fetchData,5000);

        return ()=>{
            isCancelled = true;
            clearTimeout(delay)
        }
    },[])

    useEffect(()=>{
        console.log('search triggered')
        function findData(query:string){
            console.log('searching')
            const cachedData = sessionStorage.getItem('tableData');
            const originalData = cachedData? (JSON.parse(cachedData) as TableData[]) : [];
            if(query != ""){
                const matchingRows = originalData.filter(data=>data.index?.toLowerCase().includes(query.toLowerCase()));
                setTableData(matchingRows);
            }else{
                setTableData(originalData)
            }
        }
        findData(query);
    },[query])

    return(
        <>
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
        </>
    )
}

export default TableComponent