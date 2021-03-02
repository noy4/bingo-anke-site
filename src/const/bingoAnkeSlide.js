import React from 'react'
import { Red, Blue, Gray } from '../components/Mark'

export default {
  title: 'ビンゴアンケ',
  cards: [
    { imageUrl: 'img/bingo_anke_img.png' },
    {
      cols: {
        left: [
          {
            title: '概要',
            texts: [
              <>
                ・ <Gray>ビンゴ</Gray>
                をプレイしながら回答を進められる、オンライン調査フォームの
                <Gray>雛形</Gray>
              </>,
            ],
          },
          {
            title: '目的',
            texts: [
              <>
                ・ アンケート回答者の
                <Blue>回答意欲</Blue>
                を向上させること
              </>,
              <>
                ・ アンケートが
                <Blue>楽しく</Blue>
                回答できるものになること
              </>,
            ],
          },
          {
            title: '雛形である意図',
            texts: [
              <>
                ・ 労力の大幅な<Blue>削減</Blue>
              </>,
              <>
                ・ 問題のゲーム要素を
                <Blue>排除</Blue>
              </>,
            ],
          },
        ],
        right: [
          {
            title: 'ゲーム要素',
            texts: [
              <>
                <strong>即時フィードバック</strong>
                <br />
                ・ 設問に回答すると抽選ボタンが赤くなる
                <br />・ ボタンを押すと抽選が始まる
                <br />
                <br />
                <strong>報酬</strong>
                <br />・ 設問に回答すると抽選権が得られる
                <br />
                <br />
                <strong>ランキング</strong>
                <br />
                <br />
                <strong>ビンゴ</strong>
              </>,
            ],
          },
        ],
      },
    },
  ],
}
