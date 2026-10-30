"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function App(){
  let [todo , setTodo] = useState([])
  let [loading , setLoading] =useState(true)
  let [note , setNote] = useState("")

  useEffect(()=>{
    fetch("https://dummyjson.com/todos")
    .then(res => res.json())
    .then(data => setTodo(data.todos))
    .finally(()=> setLoading(false))
  },[])
  
  function addNote(){
    if(note.trim()=== "") return;

    let newTask ={
        id:Date.now(),
        todo:note,
        completed:false
    }
    setTodo(prev =>[...prev, newTask])
    setNote("")
  }
  function check(id){
    setTodo(prev =>prev.map(item=>item.id === id ? {...item, completed:!item.completed}:item))
  }
  return(
    <div className="mt-10 bg-amber-100 mt-10 p-3 rounded-xl w-full min-h-40 text-black ">
      {loading && <h1 className="text-2xl">loading...</h1>}
      <div className="flex ">
      <input 
        value={note}
        onChange={(e)=>setNote(e.target.value)}

      placeholder="write your note" className="w-full bg-blue-400 border-4 border-white p-4 rounded-2xl mr-7" />
        <button className="w-30 bg-sky-900 text-white p-5 rounded-2xl hover:bg-sky-800 active:bg-sky-700 cursor-pointer active:scale-95 transition duration-300" onClick={addNote}>add</button>
      </div>
      {todo.map(item =>(
        <div key={item.id} className="bg-blue-200 text-black p-3 rounded-xl mt-3 grid grid-cols-10 items-center">
            <button className="bg-blue-500 p-2 w-20 rounded-2xl text-white" onClick={()=>check(item.id)}>{item.completed?"undo":"complete"}</button>
          <h1 className={ `${item.completed ? "text-gray-900 " :"text-gray-900/70"} col-span-4`}>{item.todo}</h1>
          <Link href="/users" className="col-span-2">VIEW</Link>
          <h2 className={`${item.completed ? "text-green-600":"text-red-500"} text-shadow-2xs text-shadow-amber-900 capitalize `}>{item.completed ? "done": "in active"}</h2>
          <button className="p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 cursor-pointer  rounded-2xl mr-2 ">edit</button>
          <button className="p-2 bg-red-400  hover:bg-red-500  active:bg-red-600 cursor-pointer rounded-2xl mr-2 ">del</button>
</div>
      )
    )}
    </div>
  )
  
  
  
  
  

  
  
  // let todo = [
  //   {id:1 , name:"fadi"},
  //   {id:2 , name:"ahmed"},
  //   {id:3 , name:"peter"}
  // ]
  
  // return(
  //   <div>
  //     {todo.map((item)=>{
  //       return <h1 key={item.id}>{item.name}</h1>})}
  //   </div>
  // )
}