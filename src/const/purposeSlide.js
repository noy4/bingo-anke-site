import React from 'react'
import { Red, Blue, Gray } from '../components/Mark'

export default {
  title: '目的',
  cards: [
    {
      title: '先行研究の以下3つの問題点を解決すること',
    },
    {
      title: '1. 作成の労力',
      texts: [
        <>
          ・ ゲーミフィケーションを適用したオンライン調査の
          <Red>作成の労力が非常に大きい</Red>。
        </>,
      ],
    },
    {
      title: '2. 回答値への影響',
      texts: [
        <>
          ・ ゲーム要素が
          <Red>回答値の質を下げる</Red>
          場合がある。
        </>,
      ],
    },
    {
      title: '3. ランキング',
      texts: [
        <>
          ・ ランキングがオンライン調査において
          <Red>有効であるかが示されていない</Red>。
        </>,
      ],
    },
  ],
}
