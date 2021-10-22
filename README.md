# react_next

## 環境構築
npx create-next-app . --use-npm  
npm i tailwindcss  

## Reactのフレームワーク
・SSG(Static Site  Generation)
同じコンテンツのサイトに多くのユーザーがアクセスする場合はClient-site-rendering
ではサーバー負荷がかかる(めっちゃGetGetGetメソッド攻撃)
→同じコンテンツならば、事前にDBデータをHTMLを埋め込んで事前生成して配信した方が効率的

・CRA(create react app)では、SEO NG  
Reactはリクエスト毎にブラウザでJSが実行されて、HTMLを生成。　　

・Pre-rendering(事前にhtml生成)  
→コンテンツをクローラーにアピール可能  
→ブラウザの負荷低減高速表示　　


