# やりたいこと
- 本の登録
- ユーザー登録
- 本の特定のページに対して、感想をつける

# Commands
- ホットリロード
```
npm run start:dev
```

- sqliteのDBに入る
```
sqlite3 data/dev.sqlite
```

# API Sample
- 本の登録
```bash
curl http://localhost:3000/book -X POST -d "title=ぼくはイエローでホワイトで、ちょっとブルー&isbn=978-4-10-352681-0&author=ブレイディみかこ"
curl http://localhost:3000/book -X POST -d "title=同志少女よ、敵を撃て&isbn=9784152100641&author=逢坂 冬馬"
curl http://localhost:3000/book -X POST -d "title=SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発&isbn=9784798163680&author=西村 直人"
curl http://localhost:3000/book -X POST -d "title=INSPIRED: 熱狂させる製品を生み出すプロダクトマネジメント&isbn=9784820727507&author=マーティ・ケーガン"
```

- 本の更新
```bash
curl http://localhost:3000/book/1/update -X PUT -d "title=ぼくはイエローでホワイトで、ちょっとブルー&isbn=9784103526810&author=ブレイディみかこ"
```

- 本の削除
```bash
curl http://localhost:3000/book/1/delete -X DELETE
```

# 参考記事
## 環境構築周辺
- [NestJSで簡単なtudoリストを実装するチュートリアル](https://taroosg.io/nestjs-tutorial)
- [「NestJS」をAWS Lambda + API Gatewayで動かす](https://dev.classmethod.jp/articles/nestj-aws-lambda-api-gateway/)
- [Nest.js + Serverless Framework + TypeScript で API Gateway + Lambda 環境を構築してみる](https://note.com/dafujii/n/n83e76bc7e008)
- [serverless-offline を導入して Serverless Framework + TypeScript で作った Lambda 関数を VS Code でステップ実行する](https://note.com/dafujii/n/naf05740a253b)
- [nestjs 公式ドキュメント](https://nestjs.com/)
- [serverless framework 公式ドキュメント](https://www.serverless.com/)
- [[Nest.js] API Gateway + Lambda + DynamoDB 構成を実現してみた](https://qiita.com/Yusuke0122/items/2edea43c05176517c433)
- [TypeScript + Serverless + ORM + RoutingMiddlewareを探す旅](https://qiita.com/shinichi-takahashi/items/5a2faec6c5311d92a6d2)

## DynamoDBについて
- [TypeScriptでDynamoDB読み書き](https://www.ooooouchi.info/entry/2020/06/02/090000)
- [DynamoDB SDK公式ドキュメント](https://docs.aws.amazon.com/ja_jp/sdk-for-javascript/v2/developer-guide/dynamodb-examples.html)
- [Node.js (TypeScript) で DynamoDB のアトミックカウンタを試してみる](https://dev.classmethod.jp/articles/dynamodb-atomic-counter-typescript/)
- [DynamoDB でシーケンスを管理する](https://dev.classmethod.jp/articles/dyanmodb-sequenses/)
- [DynamoDBローカルをDockerコンテナとして動かす](https://qiita.com/tamo_breaker/items/7a2344032bc7e736b071)
- [ServerlessFrameworkでDynamoDBLocalを使う](https://qiita.com/marchin_1989/items/1a5ad220bee030fef111)

## CloudFormationについて
- [AWS SAMを使う前にCloudFormationテンプレートを書こう](https://qiita.com/izanari/items/78258251cced2f713b33)

## devcontainer・Dockerについて
- [Dockerのコンテナ名がコンフリクトした](https://medium.com/@rukurx/docker%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E5%90%8D%E3%81%8C%E3%82%B3%E3%83%B3%E3%83%95%E3%83%AA%E3%82%AF%E3%83%88%E3%81%97%E3%81%9F-1ae48a8a722c)
  - docker-composeがコンテナ名のコンフリクトで立ち上がらなかったときの対処法
- [みんながきっと１万回は聞いている、VS Code Remoteでコンテナ開発をやる方法](https://zenn.dev/niisan/articles/9abd372ae86fc1)
- [VSCode devcontainerを使って面倒な開発環境を作る](https://qiita.com/kishibashi3/items/e20aecef45ed8341e739)
  - Goベースの開発環境構築

# ToDo
- [x] lambda上でtypeormが動作せずに、ランタイムエラーが発生するので、typeormを利用せずに動作するように変更する
  - sqliteが読み込めていないだけなので、dynamodbに切り替える
- [ ] 著者が複数いる場合はどうするか
- [x] シーケンステーブル作成
- [ ] Localでの環境構築