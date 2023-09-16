---
title: 关于在 css 模块中使用 Unocss 规则 apply 报错的系列问题
tags:
  - '@apply'
  - unocss
excerpt: 在使用 unocss 或者其他原子类 css 框架时，在 css 模块中使用 `@apply` 会提示错误；虽不影响使用，但是对于强迫症患者来说，真的十分难受
---

[[toc]]

在使用 unocss 或者其他原子类 css 框架时，在 css 模块中使用 `@apply` 会提示错误；虽不影响使用，但是对于强迫症患者来说，真的十分难受。

![](/images/in-post/2023-09-14/header.jpeg)

---

## ‘@apply’ 提示错误

在 <style></style> 或者 css 文件中使用 ‘@apply’ 会提示错误的问题：

![](/images/in-post/2023-09-14/apply-error.png)

这个虽然不影响使用，但是对于强迫症来说是一件很难受的事情。所以第一时间，我也去找了解决方案；在 unocss 也有相应的 [issues/2401](https://github.com/unocss/unocss/issues/2401) 提到了这个问题，在里面有大佬提出了解决方案，orz...。

### 解决方案

![](/images/in-post/2023-09-14/apply-error-solution.png)

- 在 vscode 的 settings.json 添加规则

```
{
  "css.customData": [".vscode/unocss.json"]
}
```

- 在 .vscode 文件夹中添加 unocss.json 文件

```
// 文件内容
{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@apply"
    },
    {
      "name": "@screen"
    },
  ]
}
```

添加了相应配置后，问题得到解决。

## 使用自定义规则报错

但是也出现了新问题，‘@apply’ 只对 unocss 的内置规则有效，自定义规则报错。

![](/images/in-post/2023-09-14/apply-self-rules-error.png)

### 解决方案

在 [@unocss/transformer-directives](https://github.com/unocss/unocss/blob/main/packages/transformer-directives/README.md#css-variable-style) 源码中给出了解决方案，介绍了 @apply、@screen、@theme 等规则的使用事项。

![](/images/in-post/2023-09-14/unocss-transformer-directives.png)

![](/images/in-post/2023-09-14/apply-self-rules-error-solution.png)

对于自定义规则，需要使用 `--uno:` 替代。

### 别名使用

同时，unocss 自带了一些别名，为了省事，可以全部使用 `--uno:`。

![](/images/in-post/2023-09-14/uno-alias.png)
