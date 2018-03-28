## About HOC

当我们把基础组件跟数据获取分离的时候 需要一个wrapper的高阶组件在中间做一层props映射 因为基础组件不需要关心state变化 所以我们借助高阶组件 把dataSource获取到的时候 再注入到基础组件的props 而基础组件实现 只要知道自己的目的是渲染某个已知的props即可 这样可以保持基础组件的简单特性

## Table of Contents
- [data source](#data-source)
- [wrapper component](#wrapper-component)
- [wrapped component](#wrapped-component)
- [layout](#layout)

## data source

* ./src/hoc/DataSource.js

## wrapper component

* ./src/hoc/withDataSource.js

## wrapped component

* ./src/hoc/UserFriends.js
* ./src/hoc/UserGroups.js
* ./src/hoc/UserMainPage.js

## layout

* ./src/hoc/FlexLayout.js