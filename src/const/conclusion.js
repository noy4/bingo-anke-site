import React from 'react'
import { Red, Blue, Gray } from '../components/Mark'

export default {
  title: 'まとめ',
  cards: [
    {
      title: 'ビンゴアンケを、',
    },
    {
      title: '1. 作って、',
      texts: [<>・ 労力減らした</>, <>・ 問題ゲーム要素を取り除いた</>],
    },
    {
      title: '2. 試した。',
      texts: [
        <>
          ・ ビンゴアンケ →<Blue>有効</Blue>
        </>,
        <>
          ・ 回答値の質の低下 →<Blue>今回は有意差なし</Blue>
        </>,
        <>
          ・ ランキング →<Blue>有効かも</Blue>
        </>,
      ],
    },
  ],
}
