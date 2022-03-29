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
- [NestJSで簡単なtudoリストを実装するチュートリアル](https://taroosg.io/nestjs-tutorial)
- [「NestJS」をAWS Lambda + API Gatewayで動かす](https://dev.classmethod.jp/articles/nestj-aws-lambda-api-gateway/)
- [Nest.js + Serverless Framework + TypeScript で API Gateway + Lambda 環境を構築してみる](https://note.com/dafujii/n/n83e76bc7e008)
- [serverless-offline を導入して Serverless Framework + TypeScript で作った Lambda 関数を VS Code でステップ実行する](https://note.com/dafujii/n/naf05740a253b)
- [nestjs 公式ドキュメント](https://nestjs.com/)
- [serverless framework 公式ドキュメント](https://www.serverless.com/)
- [[Nest.js] API Gateway + Lambda + DynamoDB 構成を実現してみた](https://qiita.com/Yusuke0122/items/2edea43c05176517c433)

# ToDo
- [ ] lambda上でtypeormが動作せずに、ランタイムエラーが発生するので、typeormを利用せずに動作するように変更する
  - sqliteが読み込めていないだけなので、dynamodbに切り替える
- [ ] 著者が複数いる場合はどうするか