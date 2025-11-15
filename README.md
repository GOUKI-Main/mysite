#　AIによって作成されたREADMEです。今後適切に編集予定です。

# 個人サイト

Next.js 15.5.4で構築されたポートフォリオサイトです。React 19、TypeScript、Tailwind CSS 4を使用し、Framer MotionとP5.jsによるインタラクティブなアニメーションを特徴としています。

## 主な機能

- ポートフォリオ表示
- 自己紹介ページ
- Zennブログ連携
- インタラクティブなアニメーション
- 日本語・英語フォント対応
- レスポンシブデザイン

## 技術スタック

### コアフレームワーク
- **Next.js** 15.5.4 (Turbopack対応)
- **React** 19
- **TypeScript** 5.9.3

### アニメーション・インタラクティビティ
- **Framer Motion** - スプリングベースのアニメーション
- **P5.js** - キャンバスベースのジェネレーティブアニメーション

### スタイリング
- **Tailwind CSS** 4
- **@tailwindcss/postcss**
- カスタムエメラルド配色

### その他
- **react-icons** - SNSアイコン・UIエレメント
- **Zenn API** - ブログコンテンツ統合

## 開発環境のセットアップ

### 前提条件
- Node.js (推奨: 20.x以上)
- npm

### インストール

```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でサイトにアクセスできます。

Turbopackを使用しているため、高速なホットリロードが可能です。

### ビルド

```bash
npm run build
```

静的エクスポート形式でビルドされます。

### プロダクション実行

```bash
npm start
```

ビルド後の静的ファイルを `npx serve@latest out` で配信します。

### Lint

```bash
npm run lint
```

## プロジェクト構成

```
app/
├── components/
│   ├── layout/          # ヘッダー、フッター
│   ├── sections/        # ヒーロー、スキルセクション
│   │   └── skills/      # スキル表示コンポーネント
│   └── ui/              # UIコンポーネント
├── connfigs/            # スキル設定
├── types/               # TypeScript型定義
├── about/               # 自己紹介ページ
├── zennblog/            # Zennブログページ
│   └── components/      # Zenn記事カード
├── layout.tsx           # ルートレイアウト
└── page.tsx             # ホームページ
```

### 主要コンポーネント

**レイアウト**
- `header.tsx` - ナビゲーションヘッダー
- `footer.tsx` - フッター

**セクション**
- `hero.tsx` - メインビジュアル
- `myskills.tsx` - スキル一覧表示

**UI**
- `avoid-mouse-text.tsx` - マウス追従テキスト
- `p5-animation.tsx` - P5.jsアニメーション

**Zenn連携**
- `zennarticle.tsx` - Zenn記事カード

## 設定のカスタマイズ

### スキルの追加・編集

`app/connfigs/skillconfig.ts` を編集してください。

```typescript
export const skillsData: SkillsData = {
  "Frontend Framework": [
    {
      name: "React",
      level: 80,
      iconPath: "/icons/react.svg"
    }
  ]
}
```

スキルアイコンは `/public` ディレクトリに配置してください。

### カラーテーマ

サイト全体でエメラルド系カラーパレットを使用しています。Tailwind CSSの設定で変更可能です。

## デプロイ

Next.jsアプリケーションのデプロイには以下のプラットフォームが利用できます：

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- その他の静的ホスティングサービス

## ライセンス

このプロジェクトは個人用サイトです。

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://motion.dev/)
- [P5.js Documentation](https://p5js.org/reference/)
