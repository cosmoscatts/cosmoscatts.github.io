---
title: 记录 lombok 自动转换 List 类型
tags:
  - Tips
  - 类型转换
excerpt: 在日常开发中，经常会出现需要将 List 类型存入数据库的情况，如果每个都手动去转换，会显得很麻烦。项目使用了 lombok 的话，一切会显得十分简单，特此记录一下  
---

在日常开发中，经常会出现需要将 List 类型存入数据库的情况，如果每个都手动去转换，会显得很麻烦。项目使用了 lombok 的话，一切会显得十分简单，特此记录一下。

![](/images/in-post/2023-09-11/header.jpg)

---

```java
@Data
@Accessors(chain = true)
@TableName(value = "data", autoResultMap = true)
public class Data {
    @TableId(type = IdType.AUTO)
    private Integer id; // id
    @TableField(typeHandler = JacksonTypeHandler.class)
    private List<String> code; // code
}
```

添加了相应注解之后，在数据存入数据库时，会自动将 List 转为 String；取出数据时，也会将 String 转为 List，无需手动处理。
