# yomi后端环境

为了加深对node的理解，计划自己倒腾一个系统来练练手，刚好负责一个交流会方案的设计，苦于没有好的地方可以用于发布和管理文章，就打算自己写一个系统来管理。



## 功能目标

一期：

- 用户登录
- 文章展示



## 技术选型

- 应用框架： express
- 数据库： mongodb、mongoose
- 表单处理：formidable
- 语法检查：standard



## 目录结构

```bash
|-- bin                              // 执行程序目录
|-- |-- www                          // 启动文件
|-- config                           // 项目开发环境配置目录
|	|-- index.js                     // 定义各种环境变量
|-- controllers                      // 各个模块控制器目录
|   |-- index.js                     // 加载各个控制器模块
|-- middleware                       // 中间件目录
|   |-- index.js                     // 加载各个中间件
|-- models                           // 数据处理模块目录
|   |-- index.js                     // 加载各个数据处理模块
|-- public                           // 静态资源目录
|   |-- index.html                   // 网站首页
|-- routes                           // 路由目录
|   |-- index.js                     // 加载和分发路由
|-- .editorconfig                    // 编辑器配置
|-- .gitignore                       // git忽略配置
|-- app.js                           // 入口文件
|-- package.json                     // 项目配置文件
|-- README.md                        // 项目说明文件

```



## quick start

```bash
#克隆代码
git clone https://github.com/kirazxyun/yomi-node.git

#进入项目
cd yomi-node

# 添加依赖
npm install

# 本地服务
npm start

#访问 localhost:3000
```
