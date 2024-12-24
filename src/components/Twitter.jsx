import { useState,useCallback, memo } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const MemoisedAddTweet=memo(AddTweet)
function Twitter() {
    const [tweets, setTweets] = useState([
        { id: 0, content: "tw1", likes: 2,createdAt:new Date },
        { id: 1, content: "tw2", likes: 3 ,createdAt:new Date}
    ]);

    const handleAddTweet= useCallback((text)=> {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
        setTweets([
            ...tweets,
            {
                id: nextId,
                content: text,
                likes: 3,
                createdAt:new Date() // Random value
            }
        ]);
    },[tweets]);

    const handleEditTweet=useCallback((tweet)=>{ //this incoming tweet is updated tweet
      setTweets(
        tweets.map((currentTweet)=>{
            if(currentTweet.id==tweet.id){
                return tweet;
            }else{
                return currentTweet;
            }
        })
      )
    },[tweets])


  const arrangeTweet=useCallback(()=>{
    tweets.sort((t1,t2)=>t2.createdAt.getTime()-t1.createdAt.getTime());
    setTweets([...tweets]);
  },[tweets])

    return (
        <>
        

            <MemoisedAddTweet onAddTweet={handleAddTweet} />
            <button onClick={arrangeTweet}>
            Arrange Tweet
            </button>
            <TweetList onEditTweet={handleEditTweet} tweets={tweets} />
           
        </>
    );
}

export default Twitter;
