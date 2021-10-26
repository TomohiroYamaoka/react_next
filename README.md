# react_next

## 環境構築

npx create-next-app . --use-npm  
npm i tailwindcss  
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest  
npx tailwindcss init -p

## Footer やメニューなどの共通の項目は Layout component として管理をする。

## Tailwind の設定をする

https://tailwindcss.com/docs/guides/nextjs

## Tailwind チートシート

https://tailwindcomponents.com/cheatsheet/

## React のフレームワーク

・SSG(Static Site Generation)
同じコンテンツのサイトに多くのユーザーがアクセスする場合は Client-site-rendering
ではサーバー負荷がかかる(めっちゃ GetGetGet メソッド攻撃)
→ 同じコンテンツならば、事前に DB データを HTML を埋め込んで事前生成して配信した方が効率的

・CRA(create react app)では、SEO NG  
React はリクエスト毎にブラウザで JS が実行されて、HTML を生成。

・Pre-rendering(事前に html 生成)  
→ コンテンツをクローラーにアピール可能  
→ ブラウザの負荷低減高速表示

## Tailwind 公式ドキュメント

https://tailwindcss.com/docs
