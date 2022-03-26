# やりたいこと
- 本の登録
- ユーザー登録
- 本の特定のページに対して、感想をつける

# Commands
- ホットリロード
```
npm run start:dev
```

# API Sample
- 本の登録
```bash
curl http://localhost:3000/book -X POST -d "title=ぼくはイエローでホワイトで、ちょっとブルー&isbn=978-4-10-352681-0&author=ブレイディみかこ"
curl http://localhost:3000/book -X POST -d "title=同志少女よ、敵を撃て&isbn=9784152100641&author=逢坂 冬馬"
curl http://localhost:3000/book -X POST -d "title=SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発&isbn=9784798163680&author=西村 直人"
curl http://localhost:3000/book -X POST -d "title=INSPIRED: 熱狂させる製品を生み出すプロダクトマネジメント&isbn=9784820727507&author=マーティ・ケーガン"
```

# 参考記事
- [NestJSで簡単なtudoリストを実装するチュートリアル](https://taroosg.io/nestjs-tutorial)

# ToDo
- [ ] 著者が複数いる場合はどうするか