import React, { useState } from "react";
import TodoList from "./TodoList";

const App = ()=>{
  const [inputList, setInputList] = useState("");

  const [items, setitems]= useState([]);
 
  // const [colors, setColour] = useState(['green']);
  //  const isBackGroud = true;


  const itemEvent= (event)=>{
    setInputList(event.target.value);

  }
  const clickHandler = ()=>{
      setitems((olditems) =>{

        return [...olditems, inputList];
      })
      setInputList("");
  }
 
  const deleteHandler=(id)=>{
    setitems((olditems)=>{
      return olditems.filter((arrItem, index)=>{
          return index !== id;
      })
      })
    // alert('Do you want delete items?');

}

// const toogleHandler=(id)=>{
//     // if(colors === 'red'){
//     //  setColour(e.target.value={colors: 'green'}) 
//     // }
//     // else{
//     //  setColour(e.target.value={colors: 'red'}) 
//     // }
//     setitems((olditems)=>{
//       return olditems.filter((arrItem, index)=>{
//           return
       
          
//       })
//       })
    

  
// }
const toogleHandler=()=>{
  console.log('clicked');
}

  return(
      <>
     <div className="box">

		<span className="text-center">To Do List</span>
	<div className="input-container">
		<input type="text" required="" placeholder="write here" onChange={itemEvent} value={inputList}/>
		
    <button type="button" className="btn" onClick={clickHandler}>submit</button>
    <br/>
  
   <ol className="text">
    {/* <li>{inputList}</li> */}
    { 
     items.map((itemsvalue, index)=>{
      return(
        <TodoList key={index} 
        id={index}
         text={itemsvalue}
         onSelect={deleteHandler}
         onCheck={toogleHandler}

        //  {
        //    ...colors.map((colors, index)=>{
        //      return(
        //        colors={colors}
              
        //      )
        //    })
        //  }
       
       />
     )
    
    })
    

    }
  
   
  </ol>

	</div>

	
</div>

      </>

  );

};
export default App;
