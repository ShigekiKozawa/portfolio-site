# 小澤繁輝ポートフォリオサイト

React + TypeScript + Vite で構築された個人ポートフォリオサイトです。

## 🚀 技術スタック

- **React 19** + TypeScript
- **Vite** (ビルドツール)
- **Tailwind CSS** (スタイリング)
- **Framer Motion** (アニメーション)
- **React Hook Form** (フォーム管理)
- **EmailJS** (コンタクトフォーム)
- **Lucide React** (アイコン)

## 📁 プロジェクト構造

```
src/
├── components/
│   ├── common/          # Header, Footer
│   └── sections/        # Hero, About, Projects, Contact
├── hooks/               # カスタムフック
├── types/               # TypeScript型定義
├── data/                # データファイル
└── styles/              # グローバルスタイル
```

## 🛠️ セットアップ

### 前提条件
- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# リント
npm run lint
```

## 🌐 環境変数

`.env`ファイルを作成して以下の環境変数を設定してください：

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GA_TRACKING_ID=your_ga_tracking_id
```

## 📱 レスポンシブ対応

- モバイルファーストデザイン
- ブレークポイント: sm(640px), md(768px), lg(1024px)
- タッチデバイス対応

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: 青系（#2563eb中心）
- **背景**: 白・グレー50系
- **アクセント**: 青のグラデーション

### フォント
- **見出し**: Crimson Text (serif)
- **本文**: Inter (sans-serif)

## 📦 デプロイ

### GitHub Pages

1. GitHubリポジトリを作成
2. リポジトリ設定でGitHub Pagesを有効化
3. ソースを`gh-pages`ブランチに設定
4. アクションで自動デプロイ

### 手動デプロイ

```bash
npm run build
# distフォルダの内容をサーバーにアップロード
```

## 🔧 開発ガイド

### 新しいセクションの追加

1. `src/components/sections/`に新しいコンポーネントを作成
2. `src/App.tsx`にインポートして追加
3. 必要に応じて`src/types/`に型定義を追加

### スタイルの追加

- Tailwind CSSクラスを直接使用
- カスタムスタイルは`src/index.css`の`@layer components`に追加

### データの更新

- 個人情報: `src/data/index.ts`
- プロジェクト情報: `src/data/index.ts`
- スキル情報: `src/data/index.ts`

## 📊 パフォーマンス

- 画像の最適化
- コード分割
- 遅延ローディング
- キャッシュ戦略

## 🔍 SEO対策

- メタタグ設定
- Open Graph対応
- セマンティックHTML
- 適切な見出し階層

## 📞 サポート

ご質問やご要望がございましたら、以下までお気軽にお問い合わせください：

- Email: sigekikozawa@gmail.com
- GitHub: https://github.com/ShigekiKozawa

## 📄 ライセンス

MIT License
