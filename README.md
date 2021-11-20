#  壹無前端

idea：壹無（易物），barter。

风格：繁体古风。

logo：双手相扣。200*200.

用户身份：普通用户、管理员。

功能：以物易物的论坛。看帖（评论、点赞）、发帖、我的。

模块：看、写（删）、我（与我相关帖）。

页面设计：主要页面设计为top+button+content。

价值：闲置物品重新利用，提高资源利用率，响应供给侧改革。

技术方案：`springboot+vue`。

logo字体生成：

```
http://www.diyiziti.com/Builder/
```

墨刀原型：

```
https://modao.cc/app/eb7193222e6c979b5cabaaaf4a30b54f744a94e5?simulator_type=device&sticky
```

前端地址：

```
http://120.79.197.164/#/mine
```

后端地址：

```
http://120.79.197.164:9285/barter/
```

#### 开发进度

| 时间       | 任务                                             | 完成情况 | 备注 |
| ---------- | ------------------------------------------------ | -------- | ---- |
| 2021.11.17 | vue-cli脚手架骨架搭建、element引入、页面初步布局 | 完成     |      |
| 2021.11.18 | 基本完成页面搭建和页面基本跳转功能               | 完成     |      |
|            |                                                  |          |      |
|            |                                                  |          |      |

#### Q&A

* vue use ajax
* data exchange
* component layout(fixed)
* CORS
* package(fixed)
* ser_run_env



#### 后续优化

后端：

* 增加“根据用户名查找用户接口”。（已添加）
* 后端CORS处理。（已解决）
* swagger给出接口哪些字段必须。



前端：

* CORS配置。
* 用户登录的关键信息缓存。
* element-ui组件加入后错位的调法。
* 接口传参哪些是必须的。前端相应需要增加的组件。
* 数据存储：cookie、localstorage、vuex（状态管理）。
* rout带参数传递。

