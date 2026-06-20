# sh1an 歌唱データベース

sh1an さんの歌枠セットリスト、歌唱回数ランキング、全曲検索、タイムライン、歌みた/オリ曲プレイヤーをまとめる Cloudflare Pages アプリです。

UI は `stitch_remix_of_v_song_analytics_hub` の Archivist デザインを基調に、既存の歌唱データベースと同水準の機能構成を移植しています。

## 構成

```text
docs/                 公開フロントエンド
functions/            Cloudflare Pages Functions API
src/                  D1/API/集計/管理画面の実装
d1/schema.sql         D1 初期テーブル
d1/seed.sql           単一チャンネル seed
tools/generate_static_data.mjs
                      D1 から docs/data/*.json を生成
.github/workflows/   CI と静的データ更新 workflow
```

## 初回セットアップ

1. GitHub repository: `atrial2837-ui/sh1an`
2. Cloudflare Pages でこの repository を接続
3. Build command: `npm run build`
4. Build output directory: `docs`
5. D1 database を作成し、Pages の D1 binding に `DB` として設定
6. D1 Console で以下を順に実行

```sql
-- d1/schema.sql
-- d1/seed.sql
```

`wrangler.toml` の `database_id` は、作成した D1 database ID に置き換えてください。

## Cloudflare Pages 環境変数

管理画面から GitHub Actions を起動する場合:

```text
GITHUB_ACTIONS_TOKEN
GITHUB_OWNER=atrial2837-ui
GITHUB_REPO=sh1an
GITHUB_STATIC_WORKFLOW=update-static-data.yml
GITHUB_STATIC_REF=main
GITHUB_STATIC_ENV=production
```

任意:

```text
ADMIN_TOKEN
KEY_REFERENCE_CSV_URL
```

`/admin.html` と `/api/admin/*` は Cloudflare Access で保護してください。`ADMIN_TOKEN` を併用すると二重ロックになります。

## GitHub Secrets

`.github/workflows/update-static-data.yml` が D1 から静的 JSON を生成して commit/push します。

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_D1_DATABASE_ID
```

ステージングを使う場合:

```text
CLOUDFLARE_API_TOKEN_STG
CLOUDFLARE_ACCOUNT_ID_STG
CLOUDFLARE_D1_DATABASE_ID_STG
```

## 歌枠データ投入

Cloudflare Pages の管理画面:

```text
https://<site-url>/admin.html
```

管理画面から歌枠 URL、配信日、タイトル、セットリストを追加します。保存後、「静的データ生成を開始」を押すと GitHub Actions が `docs/data/meta.json`、`songs.json`、`streams.json` を更新します。

## 歌みた/オリ曲

`docs/data/music.json` は初期状態では空配列です。元データとして以下の playlist を記録しています。

```text
カバー曲
https://youtube.com/playlist?list=PLDzFP4tsPv4huDkQ8_CgziGFJWTrdTxl_&si=FnUlsTC98hDdSxEf
```

動画一覧を取得したら、`videos` に以下の形式で追加してください。

```json
{
  "id": "mv_VIDEO_ID",
  "title": "動画タイトル",
  "type": "cover",
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "publishedAt": "YYYY-MM-DD"
}
```

## 確認

```powershell
npm test
npm run build
```

公開後:

```text
https://<site-url>/api/data
https://<site-url>/admin.html
```

最低限確認する項目:

- Main のダッシュボードが表示される
- ランキング、全曲リスト、タイムラインが空データでも落ちない
- 管理画面で歌枠を追加できる
- 静的データ生成 workflow が成功する
- 歌みた/オリ曲タブで `music.json` の動画が再生できる
