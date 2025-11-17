/**
 * 中文语言包
 */
(function(window) {
    'use strict';

    // 初始化语言包对象
    if (!window.LanguagePacks) {
        window.LanguagePacks = {};
    }

    window.LanguagePacks['zh-CN'] = {
        // 页面标题
        'page.title.home': '在线流量 - Repeater',
        'page.title.config.list': '配置管理 - Repeater',
        'page.title.config.add': '新增配置 - Repeater',
        'page.title.config.edit': '编辑配置 - Repeater',
        'page.title.config.detail': '配置详情 - Repeater',
        'page.title.module.list': '在线模块 - Repeater',
        'page.title.online.detail': '调用详情 - Repeater',
        'page.title.replay.detail': '回放结果 - Repeater',
        'page.title.regress': '测试页面 - Repeater',

        // 导航菜单
        'nav.online.traffic': '在线流量',
        'nav.config.management': '配置管理',
        'nav.online.modules': '在线模块',

        // 通用按钮
        'button.search': '查询',
        'button.save': '保存',
        'button.edit': '编辑',
        'button.detail': '详情',
        'button.push': '推送',
        'button.replay': '回放',
        'button.activate': '激活',
        'button.freeze': '冻结',
        'button.refresh': '刷新',
        'button.install': '安装模块',
        'button.batch.replay': '批量回放',
        'button.add.config': '新增配置',
        'button.execute': '执行',
        'button.cancel': '取消',
        'button.confirm': '确定',

        // 表单标签
        'form.label.app.name': '应用名',
        'form.label.environment': '环境',
        'form.label.trace.id': 'TraceId',
        'form.label.machine.ip': '机器IP',
        'form.label.machine': '机器',
        'form.label.application': '应用',
        'form.label.mock': 'MOCK',

        // 表格标题
        'table.header.app.name': '应用名',
        'table.header.environment': '环境',
        'table.header.traffic.entry': '流量入口',
        'table.header.trace.id': 'TraceID',
        'table.header.machine': '机器',
        'table.header.time': '时间',
        'table.header.operation': '操作',
        'table.header.config.info': '配置信息',
        'table.header.create.time': '创建时间',
        'table.header.modify.time': '修改时间',
        'table.header.machine.ip': '机器IP',
        'table.header.port': '端口号',
        'table.header.version': '版本号',
        'table.header.status': '状态',
        'table.header.heartbeat.time': '心跳时间',
        'table.header.record.machine': '录制机器',
        'table.header.record.time': '录制时间',
        'table.header.record.env': '录制环境',
        'table.header.execution.result': '执行结果',
        'table.header.cost.time': '耗时',
        'table.header.execution.env': '执行环境',
        'table.header.execution.machine': '执行机器',
        'table.header.repeat.id': 'RepeatId',
        'table.header.execution.time': '执行时间',
        'table.header.node': '节点',
        'table.header.expected.value': '期望值',
        'table.header.actual.value': '实际值',
        'table.header.reason': '原因',
        'table.header.sequence': '序号',
        'table.header.record.identity': '录制identity',
        'table.header.replay.identity': '回放identity',
        'table.header.record.params': '录制参数',
        'table.header.replay.params': '回放参数',

        // 页面标题和描述
        'page.header.online.traffic': '在线流量',
        'page.header.config.management': '配置管理',
        'page.header.online.modules': '在线模块',
        'page.header.add.config': '新增配置',
        'page.header.edit.config': '编辑配置',
        'page.header.view.config': '查看配置',
        'page.header.call.detail': '调用详情',
        'page.header.replay.result': '回放结果',
        'page.header.test.page': '测试页面',
        'page.header.call.list': '调用列表',
        'page.header.basic.info': '基础信息',
        'page.header.call.info': '调用信息',
        'page.header.call.snapshot': '调用快照',
        'page.header.config.info': '配置信息',
        'page.header.config.help': '配置帮助',
        'page.header.return.result': '返回结果',

        // 面包屑导航
        'breadcrumb.home': '首页',
        'breadcrumb.online.traffic': '在线流量',
        'breadcrumb.config.management': '配置管理',
        'breadcrumb.online.modules': '在线模块',
        'breadcrumb.add.config': '新增配置',
        'breadcrumb.edit.config': '编辑配置',
        'breadcrumb.view.config': '查看配置',
        'breadcrumb.call.detail': '调用详情',
        'breadcrumb.replay.result': '回放结果',
        'breadcrumb.test.page': '测试页面',

        // Tab标签
        'tab.request.params': '请求参数',
        'tab.return.result': '返回结果',
        'tab.sub.invocations': '子调用信息',
        'tab.basic.info': '基础信息',
        'tab.diff.nodes': '差异节点',
        'tab.result.diff': '结果Diff',
        'tab.mock.process': 'MOCK过程',
        'tab.expected.result': '预期结果',
        'tab.actual.result': '实际结果',

        // 状态文字
        'status.activated': '已激活',
        'status.executing': '执行中',
        'status.success': '成功',
        'status.failed': '失败',
        'status.ignored': '忽略',

        // 提示信息
        'message.no.data': '没有录制到任何数据',
        'message.no.config': '没有配置信息',
        'message.no.heartbeat': '没有心跳信息',
        'message.no.diff.nodes': '没有差异节点',
        'message.no.mock.process': '没有mock过程',
        'message.no.replay.machine': '没有可用回放机器，请先挂载',
        'message.app.name.required': '应用名不能为空',
        'message.env.required': '环境不能为空',
        'message.execution.success': '执行发起成功，您的浏览器阻止了结果页面自动打开，请先允许或点击前往 >>',
        'message.network.error': '服务抽风了，网络异常',

        // 弹窗标题
        'modal.title.start.replay': '开始回放',
        'modal.title.install.module': '安装模块',
        'modal.title.tip': '提示',

        // 分页
        'pager.first': '首页',
        'pager.previous': '上一页',
        'pager.next': '下一页',
        'pager.last': '尾页',

        // 占位符
        'placeholder.app.name': 'appName',
        'placeholder.environment': 'environment',
        'placeholder.trace.id': 'TraceId',
        'placeholder.ip': 'ip',

        // 工具提示
        'tooltip.view.detail': '查看详情',
        'tooltip.execute.replay': '执行回放',
        'tooltip.select.all': '全选',
        'tooltip.push.config': '推送',
        'tooltip.edit.config': '编辑',
        'tooltip.freeze.module': '冻结',
        'tooltip.activate.module': '激活模块',
        'tooltip.refresh.plugin': '刷新插件',

        // 版本信息
        'version.info': ' 版本:',

        // 其他
        'text.on': '开',
        'text.off': '关',
        'text.null': 'null',
        'text.ms': 'ms'
    };

})(window);

