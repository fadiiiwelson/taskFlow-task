import Link from "next/link"


export default function App(){
  return(
    <div className="w-full h-75 bg-amber-300 rounded-xl mt-10 flex justify-center items-center ">
        <Link href="/todos" className="bg-blue-500 p-3 rounded-xl hover:bg-blue-600 active:bg-blue-700">go to todos</Link>
    </div>
  )
}
  
  
  
  
  
  

  
  
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
