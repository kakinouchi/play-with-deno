# play-with-deno

deno さわってみるレポジトリ

# what is deno?

- a JavaScript/TypeScript runtime with secure defaults and a great developer experience. made by Ryan Dahl who is also author of Node.js
- released v1.0 on 2020/05/13.
- speach by author with retrospective of Node.js: https://youtu.be/M3BM9TB-8yA?t=987

# 結論

- エコシステムが非常によくできておりさわってて快適。ただし、まだ各種ライブラリが Node.js に対して圧倒的に不足してるのでまだプロダクションでは使いにくいか。OSS コミットチャンス！！！ :fist:

# 特徴

- 公式アイコンがかわいい
- Secure by default. No file, network, or environment access (unless explicitly enabled) (More detail: https://deno.land/manual@v1.4.4/getting_started/permissions)
- Supports TypeScript by default.
- Ships a single executable
- Has built-in utilities(e.g. dependency inspector, code formatter)
- 公式モジュールがいくつかある。
- Scripts can be bundled into a single JavaScript file.

# Node.js と何が違う？

- does not use `npm` (module URLs instead of it)
- does not use `package.json` in its module resolution algorithm.(he says it's a noise.)
- All async actions return a promise. (good bye callback hell)

cf: https://deno.land/manual#comparison-to-nodejs, https://qiita.com/so99ynoodles/items/c3ba2a528052827e3b3c

# やったこと

https://deno.land/manual の 1.Introduction, 2.Getting Started(2.3 First steps まで) までフォローしてあとは、6. Examples をいくつか。

1. setup

```sh
$ brew install deno
$ deno --version
deno 1.4.4
v8 8.7.75
typescript 4.0.3
```

2. [install deno extension for VSCode](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

3. getting started

```sh
$ deno run https://deno.land/std@0.73.0/examples/welcome.ts
Download https://deno.land/std@0.73.0/examples/welcome.ts
Check https://deno.land/std@0.73.0/examples/welcome.ts
Welcome to Deno 🦕
```

4. getting started with local code  
   https://deno.land/manual@v1.4.4/examples/hello_world

```sh
$ deno run hello-world.ts
Hello John
Hello Sarah
Hello Kai
```

5. webserver.ts
   https://deno.land/manual@v1.4.4/examples/http_server

```sh
$ deno run --allow-net webserver.ts
Check file:///Users/shogokakinouchiv2/study/play-with-deno/webserver.ts
HTTP webserver running.  Access it at:  http://localhost:3000/
```

スクショ貼る。

# ちょいハマったとこ

- webserver.ts コピってみたらエディタに怒られた。
  .vscode/settings.json を作って、`"deno.enable": true` と書けばよし(language server が有効になる)。
  https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno

-

# 参考

- https://deno.land/
- https://deno.land/manual <- これがガイドとしてよくできてる。
