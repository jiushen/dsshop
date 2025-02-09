<?php
return [
    /*
    |--------------------------------------------------------------------------
    | 路由语言包
    |--------------------------------------------------------------------------
    |
    | 根据路由的name来获取
    |
    */
    'admin' => [
        'login' => '登录',
        'refreshToken' => '刷新token',
        'plugInDownload' => '插件下载',
        'uploadPictures' => '上传',
        'userInfo' => '用户详情',
        'index' => '首页展示',
        'adminList' => '管理员列表',
        'adminCreate' => '创建管理员',
        'adminEdit' => '保存管理员',
        'adminDestroy' => '删除管理员',
        'authGroupList' => '管理权限列表',
        'adminLog' => '管理员操作日志',
        'memberList' => '会员列表',
        'memberCreate' => '创建会员',
        'memberEdit' => '保存会员',
        'manageList' => '管理组管理',
        'manageCreate' => '创建管理组',
        'manageEdit' => '保存管理组',
        'manageDestroy' => '删除管理组',
        'powerList' => '权限管理',
        'powerCreate' => '创建权限',
        'powerEdit' => '保存权限',
        'powerDestroy' => '删除权限',
        'goodList' => '商品列表',
        'goodCreate' => '创建商品',
        'goodEdit' => '保存商品',
        'goodDestroy' => '删除商品',
        'goodDetail' => '商品详情',
        'specification' => '商品规格列表',
        'goodState' => '商品状态',
        'brandList' => '品牌列表',
        'brandCreate' => '创建品牌',
        'brandEdit' => '保存品牌',
        'brandDestroy' => '删除品牌',
        'specificationList' => '规格列表',
        'specificationCreate' => '创建规格',
        'specificationEdit' => '保存规格',
        'specificationDestroy' => '删除规格',
        'specificationGroupList' => '规格组列表',
        'specificationGroupCreate' => '创建规格组',
        'specificationGroupEdit' => '规格组编辑',
        'specificationGroupDestroy' => '删除规格组',
        'categoryList' => '分类列表',
        'categoryCreate' => '创建分类',
        'categoryEdit' => '保存分类',
        'categoryDestroy' => '删除分类',
        'freightList' => '运费模板列表',
        'freightDetail' => '运费模板详情',
        'freightCreate' => '创建运费模板',
        'freightEdit' => '保存运费模板',
        'freightDestroy' => '删除运费模板',
        'dhlList' => '快递公司列表',
        'dhlCreate' => '创建快递公司',
        'dhlEdit' => '保存快递公司',
        'dhlDestroy' => '删除快递公司',
        'indentList' => '订单列表',
        'indentDetail' => '订单详情',
        'indentShipment' => '发货',
        'indentDhl' => '保存配送信息',
        'indentRefund' => '退款',
        'indentQuery' => '查询订单状态',
        'indentReceiving' => '延长收货时间',
        'redisServiceList' => 'Redis列表',
        'redisServiceDetail' => 'Redis详情',
        'redisServiceDestroy' => '删除Redis',
        'redisPanel' => 'Redis面板',
        'resourceList' => '资源列表',
        'resourceDestroy' => '删除资源',
        'bannerList' => '轮播列表',
        'bannerCreate' => '创建轮播',
        'bannerEdit' => '保存轮播',
        'bannerDestroy' => '删除轮播',
        'plugInList' => '插件列表',
        'plugInCreate' => '创建插件',
        'plugInDetails' => '插件详情',
        'plugInInstall' => '插件安装',
        'plugInEdit' => '保存插件',
        'plugInDestroy' => '插件删除',
        'plugInPublish' => '插件发行',
        'plugInUpdatePack' => '插件在线下载/更新',
        'plugInRoutes' => '获取路由列表',
        'plugInModels' => '获取模型列表',
        'plugInJurisdiction' => '获取权限列表',
        'plugInDiff' => '获取冲突文件列表',
        'installPlugInList' => '获取安装的插件列表',
        'plugInTemplate' => '获取模板列表',
        'plugInUninstall' => '插件卸载',
        'behavior' => '使用分析',
        'keep' => '留存趋势',
        'source' => '来源分析',
        'StatisticsAgeAndSex' => '年龄和性别',
        'statisticsPay' => '交易分析',
        'verifyPlugin' => '验证插件是否安装',
        // admin插件
    ],
    'client' => [
        'serve' => '处理应用的请求消息',
        'paymentNotify' => '支付回调',
        'refundNotify' => '退款回调',
        'uploadPictures' => '上传',
        'cellphoneCode' => '获取手机验证码',
        'emailCode' => '获取邮箱验证码',
        'login' => '登录',
        'refreshToken' => '刷新token',
        'verifyPlugin' => '验证插件是否安装',
        'register' => '注册',
        'findPassword' => '找回密码',
        'miniLogin' => '小程序换取openid',
        'authorization' => '授权登录',
        'verifyEmail' => '绑定邮箱',
        'notification' => '更新通知状态',
        'goodList' => '商品列表',
        'goodDetail' => '商品详情',
        'goodCategory' => '商品分类展示',
        'bannerList' => '轮播列表',
        'logout' => '登出',
        'userinfo' => '用户信息',
        'userinfoEdit' => '保存用户信息',
        'userCancel' => '注销账号',
        'paymentList' => '收支列表',
        'unifiedPayment' => '在线支付',
        'balancePay' => '余额支付',
        'orderList' => '订单列表',
        'orderCreate' => '创建订单',
        'addShoppingCart' => '添加到购物车',
        'clearShoppingCart' => '清空购物车',
        'orderDetail' => '订单详情',
        'synchronizationInventory' => '同步线上商品库存',
        'payOrderList' => '支付订单详情',
        'confirmReceipt' => '确认收货',
        'orderCancel' => '取消订单',
        'orderDestroy' => '删除订单',
        'orderQuantity' => '订单数量统计',
        'shippingList' => '收货地址列表',
        'shippingCreate' => '创建收货地址',
        'shippingEdit' => '保存收货地址',
        'shippingFreight' => '获取运费',
        'shippingDestroy' => '删除收货地址',
        'shippingDefaultSet' => '设为默认',
        'browseList' => '浏览记录列表',
        'browseCreate' => '创建浏览记录',
        'collectList' => '收藏列表',
        'collectDetail' => '收藏详情',
        'collectCreate' => '创建收藏',
        'collectDestroy' => '删除收藏',
        'notificationList' => '通知列表',
        'notificationUnread' => '通知未读数量',
        'notificationDestroy' => '删除通知',
        'notificationRead' => '标记通知为已读',
        'notificationDetail' => '通知详情',
        'changeCellphone' => '更换手机号',
        'amendPassword' => '修改密码',
        // client插件
    ]
];
