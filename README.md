# makihairmake.com

Maki Hayashi — Makeup / Hair portfolio. Next.js → GitHub → Vercel (auto deploy on push to `main`).

## 写真の差し替え・追加
1. 元写真は iCloud `AI/makihairmake.com/photos/{graphic,mh}` に置く
2. `python3 scripts/build_photos.py` で `public/photos` と `data/photos.json` を再生成
3. commit → push すると Vercel が自動で本番反映

## 動画の追加
`data/videos.ts` の先頭に `{ id: "YouTubeのID", title: "タイトル" }` を1行足す。
