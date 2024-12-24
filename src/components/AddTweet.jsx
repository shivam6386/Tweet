import { useState } from "react";

function AddTweet({onAddTweet}){

    const [text,setText]=useState("");
    return(
       <div>

     <input
     
     placeholder="Add new tweet"
     value={text}
     onChange={(e)=>setText(e.target.value)}
     
     />
     <button onClick={
        ()=>{
          onAddTweet(text); //Example of child is propogating information to Parent
          //Defination of onAddTweet written in it's parent component.
          // Child component is calling onAddTweet with an argument.
          //This argument is passed to function handleaAddTweet
          setText('');
        }}
    >Tweet</button>
      
    

       </div>
    )
}

export default AddTweet;