# デプロイメントガイド

## 🚀 GitHub Pages デプロイ

### 1. GitHub リポジトリの準備

1. GitHubで新しいリポジトリを作成
2. ローカルリポジトリをGitHubにプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-site.git
git push -u origin main
```

### 2. GitHub Pages の設定

1. リポジトリの設定ページに移動
2. 「Pages」セクションを選択
3. ソースを「GitHub Actions」に設定

### 3. GitHub Actions ワークフローの作成

`.github/workflows/deploy.yml` ファイルを作成：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. 環境変数の設定

GitHub リポジトリの設定で環境変数を追加：

1. リポジトリの設定ページに移動
2. 「Secrets and variables」→「Actions」を選択
3. 以下の環境変数を追加：
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GA_TRACKING_ID`

## 🔧 手動デプロイ

### 1. ビルド

```bash
npm run build
```

### 2. デプロイ

#### GitHub Pages (手動)

```bash
# gh-pages パッケージをインストール
npm install --save-dev gh-pages

# package.json にスクリプトを追加
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# デプロイ実行
npm run deploy
```

#### Netlify

1. Netlifyにサインアップ
2. 「New site from Git」を選択
3. GitHubリポジトリを選択
4. ビルド設定：
   - Build command: `npm run build`
   - Publish directory: `dist`

#### Vercel

1. Vercelにサインアップ
2. 「New Project」を選択
3. GitHubリポジトリをインポート
4. フレームワークプリセットで「Vite」を選択

## 🌐 カスタムドメイン設定

### GitHub Pages

1. リポジトリの設定ページで「Pages」セクションを開く
2. 「Custom domain」にドメインを入力
3. 「Save」をクリック
4. DNS設定でCNAMEレコードを追加

### Netlify

1. サイト設定で「Domain management」を選択
2. 「Add custom domain」をクリック
3. ドメインを入力してDNS設定を確認

## 📊 パフォーマンス最適化

### 1. 画像最適化

```bash
# 画像圧縮ツールのインストール
npm install --save-dev imagemin imagemin-webp

# 画像最適化スクリプトを追加
```

### 2. コード分割

```typescript
// 遅延ローディングの実装
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### 3. キャッシュ戦略

```typescript
// Service Worker の実装
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 🔍 SEO 最適化

### 1. メタタグ設定

```html
<!-- index.html -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>小澤繁輝 - フルスタックエンジニア</title>
  <meta name="description" content="React/TypeScript、Vue.js/Laravel、Python/AI活用の技術力を持つフルスタックエンジニアのポートフォリオサイト" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="小澤繁輝 - フルスタックエンジニア" />
  <meta property="og:description" content="React/TypeScript、Vue.js/Laravel、Python/AI活用の技術力を持つフルスタックエンジニアのポートフォリオサイト" />
  <meta property="og:image" content="/images/og-image.jpg" />
  <meta property="og:url" content="https://shigekikozawa.github.io" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="小澤繁輝 - フルスタックエンジニア" />
  <meta name="twitter:description" content="React/TypeScript、Vue.js/Laravel、Python/AI活用の技術力を持つフルスタックエンジニアのポートフォリオサイト" />
  <meta name="twitter:image" content="/images/og-image.jpg" />
</head>
```

### 2. sitemap.xml の生成

```bash
# sitemap 生成ツールのインストール
npm install --save-dev sitemap

# sitemap 生成スクリプト
```

### 3. robots.txt

```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://shigekikozawa.github.io/sitemap.xml
```

## 📈 アナリティクス設定

### Google Analytics

```typescript
// src/utils/analytics.ts
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: url,
    });
  }
};
```

## 🔒 セキュリティ設定

### 1. CSP (Content Security Policy)

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com;">
```

### 2. HTTPS 強制

```typescript
// 本番環境でのHTTPS強制
if (import.meta.env.PROD && location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

## 🧪 テスト

### 1. ビルドテスト

```bash
# ビルドテスト
npm run build

# プレビューテスト
npm run preview
```

### 2. リンター

```bash
# ESLint チェック
npm run lint

# Prettier フォーマット
npx prettier --write .
```

### 3. パフォーマンステスト

```bash
# Lighthouse CI
npm install --save-dev @lhci/cli
npx lhci autorun
```

## 📞 トラブルシューティング

### よくある問題

1. **404エラー**
   - SPAのルーティング設定を確認
   - GitHub Pages の 404.html を設定

2. **画像が表示されない**
   - パスの確認
   - 画像ファイルの存在確認

3. **フォームが送信されない**
   - EmailJS の設定確認
   - 環境変数の確認

4. **スタイルが適用されない**
   - Tailwind CSS の設定確認
   - ビルドプロセスの確認

### ログ確認

```bash
# 開発サーバーのログ
npm run dev

# ビルドログ
npm run build

# プレビューログ
npm run preview
```

---

**最終更新**: 2024年12月
**作成者**: AI開発支援システム 