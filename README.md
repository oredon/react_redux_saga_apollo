# redux-sagaとApollo GraphQLに慣れるためのtest

## 概要
* GithubのGraphQL APIを使ってrepository検索機能を作る。
* 非同期周りはRedux-saga
* styled-componentsによるスタイリング

## githubトークン
* sagas/app.jsの以下の部分を変更

```var githubToken = 'GITHUB DEVELOPPER TOKEN';```

## 開発
npm run dev実行

## build
npm run build

## GraphQLの導入
* 以下をインストール
  * npm i --save graphql graphql-tag apollo-boost
* sagas/app.jsにapolloの記述を記載

## styled-componentsの導入
* npm i --save-dev styled-components
