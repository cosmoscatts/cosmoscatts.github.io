---
title: 如何编写 Web 游戏
tags:
  - 游戏
excerpt: 总结游戏的基本编写方法
---

[[toc]]

总结游戏的基本编写方法。

![](/images/in-post/2022-11-28/header.jpeg)

<!-- more -->

---

原来一直觉得写游戏很复杂，所以一直没有尝试写一些小游戏。直到看了 yxc 的教学，发现写小游戏也并不是那么复杂。写游戏也是有固定套路的，所以在此记录一下，orz...

---

## 基类
一般来说，写这些小游戏都会写一个基类，这个基类定义基本的 start 和 update 方法；初始时，执行一次 start 方法，之后浏览器刷新的每一帧都会只执行 update 方法。这样，游戏主体只需要继承这个基类，就可以拥有 start、update 方法，我们只需要实现一个 render 函数控制游戏每个时刻该渲染什么样，把这个 render 函数放在 update 函数中执行，就可以实现游戏的渲染。 

```ts
const GAME_OBJECTS: GameObject[] = []

/*
  游戏对象基类：
    定义一些基本参数和通用方法
*/
export class GameObject {
  timeDelta: number // 间隔
  hasCalledStart: boolean // 是否执行了 start 方法

  constructor() {
    this.timeDelta = 0
    this.hasCalledStart = false
    GAME_OBJECTS.push(this)
  }

  start() {

  }

  update() {

  }

  beforeDestory() {

  }

  destory() {
    this.beforeDestory()
    for (let i = 0; i < GAME_OBJECTS.length; i++) {
      const obj = GAME_OBJECTS[i]
      if (this === obj) {
        GAME_OBJECTS.splice(i)
        break
      }
    }
  }
}

let lastTimestamp = 0
function step(timestamp: number) {
  for (const obj of GAME_OBJECTS) {
    if (!obj.hasCalledStart) { // 第一次执行 start 方法
      obj.hasCalledStart = true
      obj.start()
    } else {
      obj.timeDelta = timestamp - lastTimestamp
      obj.update()
    }
  }
  lastTimestamp = timestamp
  requestAnimationFrame(step)
}
requestAnimationFrame(step)
```

## 实践
### 贪吃蛇

![](/images/in-post/2022-11-28/snakegame.png)

使用了 vue 和 typescript 简单实现了贪吃蛇吃苹果的小游戏。

你可以在此处预览：[preview](https://vue-snakegame.netlify.app/)

你可以在此处找到实现代码：[cosmoscatts/vue-snakegame](https://github.com/cosmoscatts/vue-snakegame)

### 拳皇

![](/images/in-post/2022-11-28/kof.png)
使用原生三件套实现了简易版拳皇，只有 **草稚京** 这个角色，后面我会使用 vue 写一个新版的拳皇，应该或许会支持多个角色😅。

你可以在此处找到实现代码：[cosmoscatts/kof-js](https://github.com/cosmoscatts/kof-js)

---

P.S. 长时间不碰就会忘，有些东西还是得记录下来，以备不时之需 (╯‵□′)╯︵╘═╛。
