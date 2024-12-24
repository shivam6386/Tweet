import { useState } from "react";
import '../CSS/Tweet.css'
function Tweet({tweetId,content,likes,createdAt,onEdit}){
 const [isEditting,setIsEditting]=useState(false);
  
    return(
   <div className="tweet-wrapper">

    <div className="tweet-edit-wrapper">
      <div className="tweet-content">

        {(isEditting)?(<input
          type="text"
         value={content} 
         onChange={(e)=>
          onEdit({
            id:tweetId,
            content:e.target.value,
            likes:likes,
            createdAt:createdAt
          } )

          
        }/>):content}

       </div>

       <div className="edit-tweet">
       {

       <button
        onClick={() => {
       
    setIsEditting(!isEditting); // Toggle edit mode
        }}
>
{isEditting ? "Save" : "Edit"}
</button>  
       }

       </div>

    </div>


   

    <div className='like-createdAt-wrapper'>
     <div className="likes">
        {likes}
      </div>
      <div className='created-at'>
      <b>Created at</b> {createdAt}
      </div>
    </div>
 
 </div>
    )

}

export default Tweet;