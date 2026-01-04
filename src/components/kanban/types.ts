export type Task = {id: number, title:string, description: string}

export type CardProps = Task & {    
    colName: string,
    toDoHandler: (colName:string,id:number,destination:string)=>void,
    inProgressHandler: (colName:string,id:number,destination:string)=> void,
    doneHandler: (colName:string,id:number,destination:string)=> void
}

export type BoardProps = {
    [key:string]:Task[]
}