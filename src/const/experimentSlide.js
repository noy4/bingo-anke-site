import React from 'react'
import { Red, Blue, Gray } from '../components/Mark'

export default {
  title: '実験',
  cards: [
    {
      cols: {
        left: [
          {
            title: '目的: 以下の検証',
            texts: [
              <>1. ビンゴアンケの有効性</>,
              <>2. 回答値の質への影響</>,
              <>3. ランキングの有効性</>,
            ],
          },
          {
            title: '被験者',
            texts: [
              <>・ 62人（男性39人・女性23人）</>,
              <>・ 20 ~ 23歳</>,
              <>・ 様々な都道府県の大学に通う学生</>,
            ],
          },
        ],
        right: [
          {
            title: 'グループ',
            texts: [
              <>
                A. <Gray>アンケート</Gray>についてのアンケート
              </>,
              <>
                B. <Gray>大学</Gray>についてのアンケート
              </>,
              <>
                <strong>&times;</strong>
              </>,
              <>1. 従来型アンケート</>,
              <>
                2. ビンゴアンケ（ランキング<Red>なし</Red>）
              </>,
              <>
                3. ビンゴアンケ（ランキング<Blue>あり</Blue>）
              </>,
              <>
                <br />= <strong>6グループ</strong>
              </>,
            ],
          },
        ],
      },
    },
    { imageUrl: 'img/flow.png' },
  ],
}
