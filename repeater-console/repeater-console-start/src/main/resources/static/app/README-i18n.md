# Repeater Console 国际化功能使用说明

## 功能概述

本项目已成功实现中英文切换功能，用户可以通过页面右上角的语言切换开关在中文和英文界面之间自由切换。

## 已实现的功能

### 1. 国际化基础设施
- ✅ 国际化核心JavaScript文件 (`/app/js/i18n.js`)
- ✅ 中文语言包 (`/app/lang/zh-CN.js`)
- ✅ 英文语言包 (`/app/lang/en-US.js`)
- ✅ 自定义样式文件 (`/app/css/i18n.css`)

### 2. 用户界面改进
- ✅ 导航栏语言切换下拉菜单
- ✅ 当前语言状态显示
- ✅ 语言偏好本地存储
- ✅ 响应式设计支持

### 3. 页面模板国际化
- ✅ 布局模板 (`layout/default.vm`)
- ✅ 在线流量页面 (`online/search.vm`)
- ✅ 模态框组件 (`blocks/*.vm`)
- ✅ 分页组件 (`blocks/pager.vm`)

### 4. JavaScript国际化
- ✅ 应用主文件 (`app.js`)
- ✅ 回放功能文件 (`start-repaly.js`)
- ✅ 错误消息和提示信息

## 使用方法

### 用户使用
1. 访问任何页面，在右上角可看到语言切换菜单（🌐 中文）
2. 点击下拉菜单，选择 "English" 切换到英文界面
3. 选择 "中文" 切换回中文界面
4. 语言偏好会自动保存，下次访问时会记住选择

### 开发者扩展

#### 添加新的翻译文本
1. 在 `/app/lang/zh-CN.js` 中添加中文文本：
```javascript
'new.text.key': '新的中文文本'
```

2. 在 `/app/lang/en-US.js` 中添加对应英文翻译：
```javascript
'new.text.key': 'New English Text'
```

#### 在模板中使用
```html
<span data-i18n="new.text.key">新的中文文本</span>
```

#### 在JavaScript中使用
```javascript
var translatedText = t('new.text.key');
```

## 技术特性

### 性能优化
- 语言包按需加载
- 本地存储语言偏好
- 平滑的切换动画

### 兼容性
- 支持所有现代浏览器
- 向后兼容原有功能
- 响应式设计

### 可扩展性
- 易于添加新语言
- 模块化设计
- 标准化的翻译键命名

## 已翻译的内容

### 导航菜单
- 在线流量 → Online Traffic
- 配置管理 → Configuration Management
- 在线模块 → Online Modules

### 按钮和操作
- 查询 → Search
- 保存 → Save
- 编辑 → Edit
- 详情 → Details
- 回放 → Replay
- 激活 → Activate
- 冻结 → Freeze

### 表单标签
- 应用名 → App Name
- 环境 → Environment
- TraceId → TraceId
- 机器IP → Machine IP

### 状态和消息
- 已激活 → Activated
- 执行中 → Executing
- 成功 → Success
- 失败 → Failed
- 没有录制到任何数据 → No recorded data found

## 文件结构

```
/app/
├── js/
│   └── i18n.js              # 国际化核心文件
├── lang/
│   ├── zh-CN.js             # 中文语言包
│   └── en-US.js             # 英文语言包
├── css/
│   └── i18n.css             # 国际化样式
└── README-i18n.md          # 使用说明（本文件）
```

## 下一步改进建议

1. **完善翻译覆盖**: 继续翻译剩余页面（配置管理详情页、模块列表页等）
2. **添加更多语言**: 支持日文、韩文等其他语言
3. **翻译管理**: 实现在线翻译管理工具
4. **自动检测**: 根据浏览器语言自动选择默认语言
5. **RTL支持**: 为阿拉伯语等从右到左的语言提供支持

## 技术支持

如有问题或需要扩展功能，请参考：
- 国际化核心文件：`/app/js/i18n.js`
- 语言包示例：`/app/lang/zh-CN.js`
- 使用示例：页面模板中的 `data-i18n` 属性

