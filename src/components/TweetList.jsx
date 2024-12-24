import Tweet from "./Tweet";
import '../CSS/TweetList.css';
import { memo } from "react";
const MemoisedTweet=memo(Tweet)

function TweetList({tweets,onEditTweet}){
    return(
        
            <div className="tweet-list">
              
            {
        tweets.map((tweet) => (
        <li className="tweet-like-wrapper" key={tweets.id}>
            <MemoisedTweet 
            tweetId={tweet.id}
            content={tweet.content} 
            likes={tweet.likes} 
            createdAt={tweet.createdAt.toString()}
            onEdit={onEditTweet}
            />
        </li>
        
       
    
    ))

}
            </div>




          

      

            

   


    )
}
export default TweetList;