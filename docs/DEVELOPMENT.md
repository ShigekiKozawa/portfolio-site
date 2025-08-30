# 開発仕様書

## 📋 プロジェクト概要

### 基本情報
- **オーナー**: 小澤繁輝（Kozawa Shigeki）
- **職種**: フルスタックエンジニア（アライドアーキテクツ株式会社）
- **サイトタイプ**: 個人ポートフォリオ（React SPA）
- **ホスティング**: GitHub Pages
- **URL**: https://shigekikozawa.github.io
- **開発期間**: 2-3週間

### プロジェクト目標
- React/TypeScript、Vue.js/Laravel、Python/AI活用の技術力アピール
- SNSマーケティングシステム開発実績（8年間）の展示
- OSS貢献、個人開発プロジェクトの紹介
- 転職・フリーランス活動での営業ツール
- 技術者としての個人ブランド確立

## ⚡ 技術スタック

### 必須技術
- **React 19** + TypeScript
- **Vite** (ビルドツール)
- **Tailwind CSS** (スタイリング)
- **Framer Motion** (アニメーション)
- **React Hook Form** (フォーム管理)
- **EmailJS** (コンタクトフォーム)
- **Lucide React** (アイコン)

### 開発ツール
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions (CI/CD)

## 🏗️ サイト構成

### セクション一覧
| セクション | 内容 | 優先度 |
|-----------|------|--------|
| **Hero** | 名前、職種、キャッチコピー | **HIGH** |
| **About** | 詳細プロフィール、会社情報、SNSリンク | **HIGH** |
| **Projects** | メイン3プロジェクト（SNS管理、AI活用、勉強会） | **HIGH** |
| **Personal Dev** | 個人開発3項目（Figmaプラグイン、GAS、Vue.jsライブラリ） | **MEDIUM** |
| **Skills** | 4カテゴリ（言語、デザイン、AI、その他ツール） | **MEDIUM** |
| **Contact** | フォーム送信（sigekikozawa@gmail.com宛） | **HIGH** |

### SNSリンク
- GitHub: https://github.com/ShigekiKozawa
- X(Twitter): https://x.com/home
- Facebook: https://www.facebook.com/profile.php?id=100005526343283

## 📁 ファイル構造

```
src/
├── components/
│   ├── common/        # Header, Footer, Navigation
│   ├── sections/      # Hero, About, Projects, PersonalDev, Skills, Contact
│   └── ui/           # Button, Card, Badge等の汎用コンポーネント
├── hooks/            # カスタムフック（アニメーション、フォーム等）
├── data/             # 個人情報、プロジェクト、スキルデータ
├── types/            # TypeScript型定義
├── utils/            # ユーティリティ関数
└── styles/           # グローバルスタイル
```

## 🎨 デザイン仕様

### カラーパレット
- **プライマリ**: 青系（#2563eb中心）
- **背景**: 白・グレー50系
- **アクセント**: 青のグラデーション

### フォント
- **見出し**: Crimson Text (serif)
- **本文**: Inter (sans-serif)

### アニメーション
- Framer Motionによるスクロールアニメーション
- Intersection Observerで要素出現時発火
- パララックス効果（Hero背景）
- ホバーエフェクト（カード浮上）

## 🔧 主要機能

### 必須機能 (HIGH)
1. **ナビゲーション**
   - 固定ヘッダー、スムーススクロール
   - アクティブセクション表示
   - モバイルハンバーガーメニュー

2. **コンタクトフォーム**
   - 必須項目: 名前、メール、件名、メッセージ
   - バリデーション機能
   - EmailJS経由でメール送信
   - 送信状態表示（ローディング、成功、エラー）

3. **レスポンシブデザイン**
   - モバイルファースト
   - ブレークポイント: sm(640px), md(768px), lg(1024px)

### 推奨機能 (MEDIUM)
- 画像遅延ローディング
- コード分割（React.lazy）
- パフォーマンス最適化
- Google Analytics連携

## 🚀 開発フロー

### Phase 1: 環境構築・基本構造 (1週間)
- [x] Vite + React + TypeScript セットアップ
- [x] Tailwind CSS, ESLint, Prettier設定
- [x] 基本レイアウト（Header, Footer, Navigation）
- [x] GitHub リポジトリ作成

### Phase 2: コアセクション実装 (1週間)
- [x] Hero, About, Projects, Contact セクション
- [x] 基本データファイル作成
- [x] スムーススクロール、レスポンシブ

### Phase 3: 拡張機能・アニメーション (3-4日)
- [ ] PersonalDev, Skills セクション
- [ ] Framer Motion アニメーション
- [ ] パララックス効果

### Phase 4: 最適化・仕上げ (2-3日)
- [ ] パフォーマンス最適化
- [ ] SEO対策（メタタグ、Open Graph）
- [ ] アクセシビリティ対応

### Phase 5: デプロイ・テスト (1-2日)
- [ ] GitHub Actions ワークフロー
- [ ] GitHub Pages デプロイ
- [ ] ブラウザ・デバイステスト

## 📊 パフォーマンス目標

| 指標 | 目標値 |
|------|--------|
| LCP (Largest Contentful Paint) | < 2.5秒 |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Score | 90+ |

## 🔍 テスト戦略

### 必須テスト
- **手動テスト**: 各ブラウザ・デバイスでの表示確認
- **フォームテスト**: コンタクトフォーム送信確認
- **レスポンシブテスト**: モバイル・タブレット表示

### 推奨テスト
- **単体テスト**: 主要コンポーネント
- **E2Eテスト**: ナビゲーション・フォーム送信
- **パフォーマンステスト**: Core Web Vitals測定

## 📦 デプロイメント

### GitHub Pages設定
1. `vite.config.ts`でbase設定
2. GitHub Actions ワークフロー作成
3. `npm run build`でdistフォルダ生成
4. gh-pagesブランチに自動デプロイ

### 環境変数
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_GA_TRACKING_ID` (オプション)

## ⚠️ 重要事項・制約

### 必須対応
- 実際の職務経歴に基づく正確な情報のみ掲載
- コンタクトフォームは`sigekikozawa@gmail.com`に送信
- GitHub Pages制約を考慮したSPA設計

### 技術的制約
- 外部画像はプレースホルダーを使用
- EmailJS無料プランの送信制限考慮
- GitHub Pages はサーバーサイド処理不可

### SEO対策
- セマンティックHTML構造
- メタタグ設定
- Open Graph対応
- 適切な見出し階層

## 📚 参考リソース

### 公式ドキュメント
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

### ツール
- [EmailJS](https://www.emailjs.com/)
- [GitHub Pages](https://pages.github.com/)
- [Lucide React](https://lucide.dev/)

---

**最終更新**: 2024年12月
**作成者**: AI開発支援システム 