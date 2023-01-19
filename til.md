# Next.js
```bash
$ npx create-next-app@latest
```


# styled-components
```bash
$ npm i styled-components
```

```js
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
```

# eslint
```bash
$ npx eslint --init
$ npm i --save-dev eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unused-imports

$ touch .eslintrc.js
```

```js
// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'simple-import-sort',
    'import',
    'unused-imports'
  ],
  rules: {
    'react/prop-types': 'off', // js 사용시 missing in props validation 에러 제거
    'simple-import-sort/imports': 'error', // importのsortルールを設定
    'simple-import-sort/exports': 'error', // exportのsortルールを設定
    'import/first': 'error', // すべてのimportがファイルの先頭にあることを確認
    'import/newline-after-import': 'error', // import後に改行があることを確認
    'import/no-duplicates': 'error', // 同じファイルのimportをマージ
    'unused-imports/no-unused-imports': 'error' // 未使用のimport文を削除
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
```


# prettier
```bash
$ npm i --save-dev prettier

$ touch .prettierrc.js
```

```js
// .pretterrc.js

module.exports = {
  printWidth: 80, // 1行で表示する文字数
  tabWidth: 2, // インデントのサイズ
  useTabs: false, // インデントにスペースの代わりにタブを使うかどうか
  semi: true, // 文の後にセミコロンを付けるかどうか
  singleQuote: false, // 文字列をシングルクォートで囲むかどうか（falseだとダブルクォート）
  quoteProps: 'as-needed', // オブジェクトのプロパティ名をクォートで囲むかどうか
  jsxSingleQuote: false, // JSX内のクォートをシングルクォートで囲むかどうか
  trailingComma: 'es5', // 複数行のときの末尾のカンマを付けるかどうか
  bracketSpacing: true, // オブジェクトリテラルの{}内の前後にスペースを入れるかどうか
  bracketSameLine: false, // JSX内の要素の閉じタグを最後の行に含んで表示するか
  arrowParens: 'always' // アロー関数の引数が１つのときにカッコで囲むかどうか
}
```

# eslint-config-prettier
```bash
$ npm i eslint-config-prettier
```

```js
// eslintrc.js

extends: [
  'plugin:react/recommended',
  'standard',
  'prettier'
],
```

# npm run format
```json
// package.json

"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "eslint:fix": "eslint src --ext .js,jsx,.ts,.tsx --fix",
  "prettier:fix": "prettier --check --write src/**/*.{js,jsx,ts,tsx,css,scss,md,mdx}",
  "format": "npm run eslint:fix && npm run prettier:fix"
},
```

# tailwindcss
```bash
$ npm i --save-dev tailwindcss postcss autoprefixer
$ npx tailwindcss init
```

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* gloabl.css */*

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
