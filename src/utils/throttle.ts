export function throttle<T extends(...args:unknown[])=>void>(
    fn:T,
    delay:number
){
    let lastCall = 0;
    return (...args:Parameters<T>)=>{
        const now = Date.now();
        console.log(now-lastCall);
        if(now-lastCall>=delay){
            console.log('Throttle triggered');
            lastCall = now;
            fn(...args)
        }
    }
}