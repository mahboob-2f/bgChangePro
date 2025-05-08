import { use, useState } from "react"

function App() {
  const [color,setColor]= useState("pink");

  const [textColor ,setTextColor] = useState("pink");
  let colors = document.getElementsByTagName("button");
   

  const handleColor =(colorValue)=>{
    setColor(colorValue);
    // setTextColor(colorValue);
    // console.log(colorValue)
    let ele = colors[Math.floor(Math.random()*colors.length)];
    let col = window.getComputedStyle(ele).backgroundColor;
    // console.log(col);
    setTextColor(col);

  }


  return (
    <div className="w-[100vw] h-screen " style={{backgroundColor:color}}> 
      <h1 className="text-3xl capitalize font-bold text-center pt-12" style={{color:textColor}}>Background Changer Website</h1>
      <div className="fixed bottom-12  flex justify-center left-0 right-0"> 
        <div className="flex flex-wrap justify-center gap-x-3 bg-[#b7a8a8] px-4 py-2 rounded-full">
         
          <button onClick={()=>handleColor("blue")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer "
          style={{backgroundColor:"blue"}}
          >blue</button>
          <button onClick={()=>handleColor("red")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer "
          style={{backgroundColor:"red"}}
          >red</button>
          <button onClick={()=>handleColor("white")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer text-black"
          style={{backgroundColor:"white"}}
          >white</button>
          <button onClick={()=>handleColor("pink")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer "
          style={{backgroundColor:"pink"}}
          >pink</button>
          <button onClick={()=>handleColor("green")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer "
          style={{backgroundColor:"green"}}
          >green</button>
          <button onClick={()=>handleColor("olive")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer "
          style={{backgroundColor:"olive"}}
          >olive</button> 
          <button onClick={()=>handleColor("yellow")}
          className=" px-4 py-1 text-lg capitalize font-[500] rounded-full cursor-pointer "
          style={{backgroundColor:"yellow"}}
          >yellow</button>
        </div>
      </div>
    
    </div>
  )
}

export default App
