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
```

# 参考記事
- [NestJSで簡単なtudoリストを実装するチュートリアル](https://taroosg.io/nestjs-tutorial)