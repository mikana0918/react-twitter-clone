// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  icon: string;
  tweet: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = [
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
  res.status(200).json(data)
}
