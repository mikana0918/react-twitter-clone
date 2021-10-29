import Tweet from "./tweet"
import {ITweet} from "@/types/index"

const Timeline = ({tweets}: {tweets: ITweet[]}) => {
  return(
    <>
      {tweets.map((t, idx) => 
        <Tweet tweet={t} key={idx}/>
      )}
    </>
  )
}

export default Timeline