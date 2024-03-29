---
id: bingo-anke
title: ビンゴアンケの仕様
---

import useBaseUrl from '@docusaurus/useBaseUrl'

被験者にとってモバイル端末からの実験への参加が簡単だと考えたため、ビンゴアンケは Web アプリケーションとして開発した。

## 開発環境

#### TypeScript

- プログラミング言語

#### React

- UI フレームワーク

#### AWS Amplify

- AWS（Amazon Web Service）のサービスの 1 つ
- Web アプリケーションのホスティング・公開が簡単にできる

## 主要な UI

### 基本画面

<img src={useBaseUrl(`img/spec/2_1_1_基本画面.png`)} width="200" />

基本画面はアンケート内容が表示される画面である。

各設問の回答欄の下に「**ガラポンボタン**」を設置した。これはビンゴモーダル（後述）を表示してビンゴの抽選を行うためのボタンである。ガラポンボタンには非アクティブ・アクティブ・使用済みの 3 つの状態を用意した。

<img src={useBaseUrl(`img/spec/2_2_1_非アクティブ.png`)} width="150" />
<img src={useBaseUrl(`img/spec/2_2_2_アクティブ.png`)} width="150" />
<img src={useBaseUrl(`img/spec/2_2_3_使用済み.png`)} width="90" />

ガラポンボタンの特徴は以下である。

- アクティブ状態時のみ、ボタンの押下が可能である。
- ガラポンボタンは通常、初期状態で非アクティブであり、灰色になっている。
- 回答欄に**回答が入力されている時**、ガラポンボタンはアクティブ状態になり、赤色に変わる。
- アクティブ状態のガラポンボタンは押下されると、使用済み状態となり、灰色になる。
- 使用済み状態の場合、仮に入力値が空になったとしても再びアクティブ状態になることはない。

画面左下に「メニューボタン」を設置した。押下するとステータスドロワー（後述）が表示される。

### ビンゴモーダル

<img src={useBaseUrl(`img/spec/2_1_2_ビンゴモーダル.png`)} width="200" />

ビンゴモーダルの特徴は以下である。

- 上部に抽選玉、下部にビンゴカードが表示されるウィンドウである。
- **ビンゴの抽選**が行われる際に画面全体に表示される。
- ビンゴモーダル表示後に抽選が開始し、1 つの、または複数並んだ抽選玉に記された数がランダムに切り替わるアニメーションがスタートする。左の球から順にアメーションが停止し、抽選結果が確定する。その後、ビンゴカードの当選マスに当選順に色がつく。
- ビンゴモーダル内の空白をタップするとウィンドウが閉じられる。

### ステータスドロワー

<img src={useBaseUrl(`img/spec/2_1_3_ステータスドロワー.png`)} width="200" />

ステータスドロワーの特徴は以下である。

- 上部に**ランキング**、下部にビンゴカードが表示されるウィンドウである。
- 画面左から引き出しのように現れる。
- ビンゴ数、ビンゴカードの当選マスの合計値から算出したスコアをもとに回答者は順位付けられ、ランキングに表示される。
- ランキングには以下 5 つの項目が表示される。

  <img src={useBaseUrl(`img/spec/2_3_ランキング表示項目_数字.png`)} width="400" />

  1. 順位
  1. 公開名
  1. 所属
  1. ビンゴ数
  1. スコア

- ビンゴカードはビンゴモーダル内のものと同じものが表示され、ビンゴ状況が確認できる。
- ステータスドロワーの外側をタップするとステータスドロワーが閉じられる。

## その他の UI

### プログレスバー

<img src={useBaseUrl(`img/spec/3_1_プログレスバー.png`)} width="400" />

- アンケートの進歩状況を視覚的・直感的に表すバー
- 画面上部に表示される。

### 通知バー

<img src={useBaseUrl(`img/spec/3_2_通知バー.png`)} width="400" />

- 通知バーは通知が表示されるウィンドウである。
- 回答者に通知がある際に、画面上部に表示される。
- 通知には以下 2 種類がある。

  - #### ビンゴ通知
    - 抽選時、全ての当選マスに色がついた後、回答者がビンゴしていた場合に現在のビンゴ数を通知する
  - #### 順位上昇通知
    - ビンゴモーダルを閉じた際、回答者の順位が上昇していた場合に上昇数と現在の順位を通知する

### ダイアログボックス

<img src={useBaseUrl(`img/spec/3_3_ダイアログボックス.png`)} width="200" />

ダイアログボックス（以下ダイアログ）は回答者へのメッセージが表示されるウィンドウである。

- 回答者にメッセージがある際に、画面中央に表示される。
- ダイアログ内にはタイトル・本文・「進むボタン」の 3 つの要素がある。タイトル・本文の内容は、アンケート作成者が編集できる仕様（後述）とした。
- 進むボタンを押すとウィンドウが閉じられる。
- ダイアログは以下 3 種類がある。

  - #### 導入ダイアログ
    - ビンゴアンケの画面が開かれた際に表示され、アンケートについての説明や注意事項などが表示されることを想定している。
  - #### ビンゴ説明ダイアログ
    - 導入ダイアログが閉じられた際に新たに表示され、ビンゴについての説明が表示されることを想定している。
  - #### アンケート終了ダイアログ
    - 回答の送信が完了した際に表示され、回答者への感謝のメッセージなどが表示されることを想定している。

ビンゴ説明ダイアログが閉じられた際、ステータスドロワーが表示される。回答者にその存在を認識させるためである。

## 編集可能な項目

ビンゴアンケを使用してアンケートを作成する際に作成者が編集する項目は以下 2 つである。

1. 設問
2. ダイアログボックスの表示内容

### 設問

各設問について、基本的に編集可能なのは以下 4 項目である。
<img src={useBaseUrl(`img/spec/4-1 設問編集可能項目 2.png`)} width="300" />

1. ID
2. タイトル
3. 設問タイプ
4. ビンゴ抽選時のスロット数

1 つ目の ID は設問の識別に使われる。また ID は各設問の先頭に表示される。「Q1」「問 1」などが設定されることを想定している。3 つ目の設問タイプは設問の種類を指定する。設問タイプとして以下 7 種類を用意した。

- A. 名前
- B. 公開名
- C. 所属
- D. 性別
- E. 5 段階
- F. 数字
- G. 自由

A〜D について、設問タイプを指定するとタイプ名の通りの内容を問う設問になる。B の公開名とは、回答者が望む、ランキング上での表示名である。E の 5 段階を指定すると 1〜5 の 5 段階評価の回答値を得る設問になる。ここで E を指定した場合、編集可能な項目が以下 2 つ追加される。

1. 5 段階評価の負の最大値を示す文言
2. 5 段階評価の正の最大値を示す文言

以上の 2 つは回答を入力するラジオボタンの両端に表示される。F の数字を指定すると数字の回答値を得る設問になる。ここで F を指定した場合、編集可能な項目に「単位」が追加される。単位は回答欄の右側に表示される。単位には「分」「円」などが入る想定である。G の自由を指定すると自由記述の回答を得る設問になる。

### ダイアログボックスの表示内容

<img src={useBaseUrl(`img/spec/4-2_各ダイアログボックスにおける編集可能な項目のコピー.png`)} width="300" />

各ダイアログボックスについて、編集可能なのは以下 2 項目である。

1. タイトル
2. 本文
