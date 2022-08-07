import { isDevMode } from "@angular/core"

export const report=(msg:string)=>{
    if(isDevMode()){
        alert(msg)
    }else{
        // send logs
    }
}