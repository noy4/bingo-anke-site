import React from 'react'
import { Red, Blue, Gray } from '../components/Mark'

export default {
  title: '背景',
  cards: [
    {
      title: '1. オンライン調査',
      texts: [
        <>
          ・ <Red>いい加減な回答</Red>・<Red>回答の中断</Red>
          などが課題としてあげられている。
        </>,
      ],
    },
    {
      title: '2. ゲーミフィケーション',
      texts: [
        <>
          ・ ゲームの要素を<Gray>ゲーム以外の分野</Gray>で用いること
        </>,
        <>
          ・ 様々な分野（ビジネス・教育・医療
          etc.）で活用され、意欲向上などの点で有効
        </>,
      ],
    },
    {
      title: '3. オンライン調査のゲーミフィケーション',
      texts: [
        <>
          ・ <Blue>回答意欲</Blue>・<Blue>回答率</Blue>・
          <Blue>得られるデータの質</Blue>
          の向上などの利点が示されている。
        </>,
        <>
          ・ ゲーミフィケーションを適用したオンライン調査の
          <Red>作成の労力が非常に大きい</Red>。
        </>,
        <>
          ・ ゲーム要素によって<Red>回答内容の質に影響が出る</Red>
          場合がある。
        </>,
      ],
    },
  ],
}
