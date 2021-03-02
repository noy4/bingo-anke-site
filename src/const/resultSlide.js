import React from 'react'
import { Red, Blue, Gray } from '../components/Mark'

export default {
  title: '結果・考察',
  cards: [
    {
      cols: {
        left: [
          { imageUrl: 'img/ev_A1-3.png' },
          {
            title: '1. ビンゴアンケの有効性',
            texts: [
              <>
                ・ 評価：<Blue>高⤴︎</Blue>
              </>,
              <>
                ・ 自由記述：<Blue>楽しい</Blue>・<Blue>意欲向上</Blue>
              </>,
              <>
                ・ 有効な回答率：<Blue>UP⤴︎</Blue>
              </>,
            ],
          },
        ],
        right: [
          {
            title: '2. 回答値への影響',
            texts: [<>・ 有意差はなかった。</>],
          },
          {
            title: '3. ランキングの有効性',
            texts: [
              <>
                ・ 評価：<Blue>高い</Blue>傾向
              </>,
              <>
                →<strong>有効な可能性あり</strong>
              </>,
            ],
          },
        ],
      },
    },
  ],
}
