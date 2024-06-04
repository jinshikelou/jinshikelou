实现一个类似React教程官网的架构，完成自己的博客
https://react.dev/learn/choosing-the-state-structure

博客发布的地方： 微信个人公众号， CSDN， github, 稀土掘金

1. 为了试import "@/as.."  生效， 需要做以下的配置
(1) 在vite.config.ts中配置如下代码
```
import * as path from "path";

.......
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
```
(2) 在tsconfig.json中配置如下代码, 使得@ 路径别名能有代码提示
```"compilerOptions": { 
    ...........

    /* import @  路径提示*/
    "baseUrl":"./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },

 ``` 

 2. 模块化引入scss样式
(1) 文件的命名为xxx.module.scss
(2) 引入方式为  import styles from '../'

3. 引入antd 和 ant-design/icons
(1) 安装
npm install antd --save --force  
npm install --save @ant-design/icons --force
(2) 全局import 样式
import 'antd/dist/antd.css' // or 'antd/dist/antd.less' 全局引入， 全部组件的样式都引入
(3)按组件需要引入， 按需引入
首先安装转插件vite-plugin-style-import：  npm install vite-plugin-style-import -D
然后在vite.config.ts中引入并配置
```
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves: [
        AntdResolve()
      ]
    })
  ],
  ...
})
```
