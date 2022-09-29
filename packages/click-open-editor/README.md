# ClickOpenEditor

开发`React`项目时, 在浏览器中按住`Option`键后, 移动鼠标选中一个元素点击后, 将会自动打开你的`editor`, 跳转到该元素对应的文件位置.

## 支持的构建工具或框架

- [Next.js](https://nextjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/plugin-react)
  使用了 [@babel/plugin-transform-react-jsx-source](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source)
  插件
- 自己配置的构建流程,
  添加 [@babel/plugin-transform-react-jsx-source](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source)
  插件, 或者 [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) 开启了 development 参数

## 支持的`editor`

- webstorm
- vscode

## 构建

使用`production`模式构建项目时, 自动 **tree-shaking**.

即使`click-open-editor`安装在项目的`dependencies`依赖中, 在`production`
模式构建时 [tree-shaking](https://webpack.docschina.org/guides/tree-shaking/#root) 将会移除`click-open-editor`.

## 安装

<details>
<summary>npm</summary>

```shell
npm install click-open-editor
```

</details>

## 使用

```diff
+import { ClickOpenEditor } from 'click-open-editor';
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
+    <ClickOpenEditor />
     <App />
   </React.StrictMode>
 );
```

## editor

默认打开 [webstorm](https://www.jetbrains.com/webstorm/).

如果你想使用 [vscode](https://code.visualstudio.com/), 你可以设置`editor`:

```diff
-<ClickOpenEditor />
+<ClickOpenEditor editor="vscode" />
```

## 运行在本地

克隆项目

```shell
git clone git@github.com:fengyangfifa/click-open-editor.git
```

1、安装依赖

```shell
cd click-open-editor
```

```shell
npm install
```

2、运行

```shell
npm run dev
```

3、构建

```shell
# 进入包目录
cd packages/click-open-editor
```

```shell
npm run build
```
