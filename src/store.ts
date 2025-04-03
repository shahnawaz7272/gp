import { create } from "zustand";

type counterstore ={
    counter:number,
    inc:()=>void,
    dec:()=>void
}

export const userCounter =create<counterstore>((set)=>({
  counter:0,

  inc:()=>
    set((state)=>({counter:state.counter+1})),
  dec:()=>
    set((state)=>({counter:state.counter-1})),
  
}))