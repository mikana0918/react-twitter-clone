import styles from '@/styles/Tweet.module.css'
import {ITweet} from "@/types/index"


const Tweet = ({tweet}: {tweet: ITweet}) => {
  return (
    <div className={styles.container}>
      <img src={tweet.icon} alt="user icon" className={styles.icon} />
      <div  className={styles.tweet}>{tweet.tweet}</div>
    </div>
  )
}

export default Tweet