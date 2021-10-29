import Timeline from "@/components/pages/twitter/timeline"

const api = () => {
  return {
    tweets: [
      {
        icon: "https://pbs.twimg.com/profile_images/1255543381347852288/LKtzr5w9_400x400.png",
        tweet: "テストテスト1"
      },
      {
        icon: "https://pbs.twimg.com/profile_images/1255543381347852288/LKtzr5w9_400x400.png",
        tweet: "テストテスト2"
      },
      {
        icon: "https://pbs.twimg.com/profile_images/1255543381347852288/LKtzr5w9_400x400.png",
        tweet: "テストテスト3"
      }
    ]
  }
}

const Twitter = () => {
  const tweets = api().tweets

  return (
    <>
      <Timeline tweets={tweets}/>
    </>
  )
}

export default Twitter