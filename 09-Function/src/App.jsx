import React from 'react'

const App = () => {
  function btClicked(){
    console.log("Buttonn is Clicked")
  }
  function mouseEnter(){
    console.log("Mouse Entered")
  }

  function inputChanging(){
        console.log("input is changing")
      }

  function inputChanging1(val){
        console.log(val)
      }

  const pageScrolling= ()=>{
    console.log("Page Scrolling");
  }

  const pageScrolling1= (elem)=>{
    console.log(elem);
  }

  return (
    <div>
      {/* <h1>Hello Guys</h1>
      <button onClick={btClicked}>Change Name</button>
      <button onDoubleClick={btClicked}>Change Name</button>
      <button className="py-104-eww2"onClick={mouseEnter}>Change Name</button>
      <button onClick={()=>{
        console.log("Button Clicked")
      }}>newButton</button> */}

      {/* <input onClick={()=>{
        console.log("clicked on the input")
      }} type="text" placeholder='yaha likho' /> */}

      {/* <input onChange={inputChanging} type="text" placeholder='yaha likho' /> */}

      {/* <input onChange={function(){
        console.log("Hello");
      }} type="text" placeholder='yaha likho' /> */}

      {/* <input onChange={function(elem){
        console.log(elem);
      }} type="text" placeholder='yaha likho' /> */}

      {/* <input onClick={function(elem){
        console.log(elem);
      }} type="text" placeholder='yaha likho' /> */}

      {/* <input onChange={function(elem){
        console.log(elem.target.value);
      }} type="text" placeholder='yaha likho' /> */}

      {/* <input onChange={function(elem){
        inputChanging();
      }} type="text" placeholder='yaha likho' /> */}

      {/* <input onChange={function(elem){
        inputChanging1(elem.target.value);
      }} type="text" placeholder='yaha likho' /> */}

      {/* <div 
      onMouseMove={()=>{
        console.log("Nacho")
      }} 
      className='box'>

      </div> */}

      {/* <div 
      onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }} 
      className='box'>

      </div> */}

      {/* <div 
      onMouseMove={(elem)=>{
        console.log(elem.clientY)
      }} 
      className='box'>

      </div> */}

      {/* <div onWheel={pageScrolling}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div> */}

      <div onWheel={(elem)=>{
        pageScrolling1(elem.deltaY)
      }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </div>
  )
}

export default App