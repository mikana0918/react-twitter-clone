import Timeline from "@/components/pages/twitter/timeline"
import {ITweet} from "@/types/index"

function Twitter ({tweets}: {tweets: ITweet[]})  {
  return (
    <>
      <Timeline tweets={tweets}/>
    </>
  )
}


Twitter.getInitialProps = async ()  => {
  
  const res = await fetch('/api/twitter')
  const json = await res.json()

  return { tweets: json }
}

export default Twitter