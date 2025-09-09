/**
 * English Language Pack
 */
(function(window) {
    'use strict';

    // Initialize language packs object
    if (!window.LanguagePacks) {
        window.LanguagePacks = {};
    }

    window.LanguagePacks['en-US'] = {
        // Page titles
        'page.title.home': 'Online Traffic - Repeater',
        'page.title.config.list': 'Configuration Management - Repeater',
        'page.title.config.add': 'Add Configuration - Repeater',
        'page.title.config.edit': 'Edit Configuration - Repeater',
        'page.title.config.detail': 'Configuration Details - Repeater',
        'page.title.module.list': 'Online Modules - Repeater',
        'page.title.online.detail': 'Call Details - Repeater',
        'page.title.replay.detail': 'Replay Results - Repeater',
        'page.title.regress': 'Test Page - Repeater',

        // Navigation menu
        'nav.online.traffic': 'Online Traffic',
        'nav.config.management': 'Configuration',
        'nav.online.modules': 'Online Modules',

        // Common buttons
        'button.search': 'Search',
        'button.save': 'Save',
        'button.edit': 'Edit',
        'button.detail': 'Details',
        'button.push': 'Push',
        'button.replay': 'Replay',
        'button.activate': 'Activate',
        'button.freeze': 'Freeze',
        'button.refresh': 'Refresh',
        'button.install': 'Install Module',
        'button.batch.replay': 'Batch Replay',
        'button.add.config': 'Add Configuration',
        'button.execute': 'Execute',
        'button.cancel': 'Cancel',
        'button.confirm': 'Confirm',

        // Form labels
        'form.label.app.name': 'App Name',
        'form.label.environment': 'Environment',
        'form.label.trace.id': 'TraceId',
        'form.label.machine.ip': 'Machine IP',
        'form.label.machine': 'Machine',
        'form.label.application': 'Application',
        'form.label.mock': 'MOCK',

        // Table headers
        'table.header.app.name': 'App Name',
        'table.header.environment': 'Environment',
        'table.header.traffic.entry': 'Traffic Entry',
        'table.header.trace.id': 'TraceID',
        'table.header.machine': 'Machine',
        'table.header.time': 'Time',
        'table.header.operation': 'Operation',
        'table.header.config.info': 'Configuration',
        'table.header.create.time': 'Created Time',
        'table.header.modify.time': 'Modified Time',
        'table.header.machine.ip': 'Machine IP',
        'table.header.port': 'Port',
        'table.header.version': 'Version',
        'table.header.status': 'Status',
        'table.header.heartbeat.time': 'Heartbeat Time',
        'table.header.record.machine': 'Record Machine',
        'table.header.record.time': 'Record Time',
        'table.header.record.env': 'Record Environment',
        'table.header.execution.result': 'Execution Result',
        'table.header.cost.time': 'Cost Time',
        'table.header.execution.env': 'Execution Environment',
        'table.header.execution.machine': 'Execution Machine',
        'table.header.repeat.id': 'RepeatId',
        'table.header.execution.time': 'Execution Time',
        'table.header.node': 'Node',
        'table.header.expected.value': 'Expected Value',
        'table.header.actual.value': 'Actual Value',
        'table.header.reason': 'Reason',
        'table.header.sequence': 'Sequence',
        'table.header.record.identity': 'Record Identity',
        'table.header.replay.identity': 'Replay Identity',
        'table.header.record.params': 'Record Parameters',
        'table.header.replay.params': 'Replay Parameters',

        // Page headers and descriptions
        'page.header.online.traffic': 'Online Traffic',
        'page.header.config.management': 'Configuration Management',
        'page.header.online.modules': 'Online Modules',
        'page.header.add.config': 'Add Configuration',
        'page.header.edit.config': 'Edit Configuration',
        'page.header.view.config': 'View Configuration',
        'page.header.call.detail': 'Call Details',
        'page.header.replay.result': 'Replay Results',
        'page.header.test.page': 'Test Page',
        'page.header.call.list': 'Call List',
        'page.header.basic.info': 'Basic Information',
        'page.header.call.info': 'Call Information',
        'page.header.call.snapshot': 'Call Snapshot',
        'page.header.config.info': 'Configuration Information',
        'page.header.config.help': 'Configuration Help',
        'page.header.return.result': 'Return Result',

        // Breadcrumb navigation
        'breadcrumb.home': 'Home',
        'breadcrumb.online.traffic': 'Online Traffic',
        'breadcrumb.config.management': 'Configuration Management',
        'breadcrumb.online.modules': 'Online Modules',
        'breadcrumb.add.config': 'Add Configuration',
        'breadcrumb.edit.config': 'Edit Configuration',
        'breadcrumb.view.config': 'View Configuration',
        'breadcrumb.call.detail': 'Call Details',
        'breadcrumb.replay.result': 'Replay Results',
        'breadcrumb.test.page': 'Test Page',

        // Tab labels
        'tab.request.params': 'Request Parameters',
        'tab.return.result': 'Return Result',
        'tab.sub.invocations': 'Sub Invocations',
        'tab.basic.info': 'Basic Information',
        'tab.diff.nodes': 'Diff Nodes',
        'tab.result.diff': 'Result Diff',
        'tab.mock.process': 'Mock Process',
        'tab.expected.result': 'Expected Result',
        'tab.actual.result': 'Actual Result',

        // Status texts
        'status.activated': 'Activated',
        'status.executing': 'Executing',
        'status.success': 'Success',
        'status.failed': 'Failed',
        'status.ignored': 'Ignored',

        // Messages
        'message.no.data': 'No recorded data found',
        'message.no.config': 'No configuration found',
        'message.no.heartbeat': 'No heartbeat data found',
        'message.no.diff.nodes': 'No diff nodes found',
        'message.no.mock.process': 'No mock process found',
        'message.no.replay.machine': 'No replay machine available, please install first',
        'message.app.name.required': 'App name is required',
        'message.env.required': 'Environment is required',
        'message.execution.success': 'Execution started successfully. Your browser blocked the result page from opening automatically. Please allow it or click to proceed >>',
        'message.network.error': 'Network error occurred, please try again',

        // Modal titles
        'modal.title.start.replay': 'Start Replay',
        'modal.title.install.module': 'Install Module',
        'modal.title.tip': 'Tip',

        // Pagination
        'pager.first': 'First',
        'pager.previous': 'Previous',
        'pager.next': 'Next',
        'pager.last': 'Last',

        // Placeholders
        'placeholder.app.name': 'App Name',
        'placeholder.environment': 'Environment',
        'placeholder.trace.id': 'TraceId',
        'placeholder.ip': 'IP Address',

        // Tooltips
        'tooltip.view.detail': 'View Details',
        'tooltip.execute.replay': 'Execute Replay',
        'tooltip.select.all': 'Select All',
        'tooltip.push.config': 'Push Configuration',
        'tooltip.edit.config': 'Edit Configuration',
        'tooltip.freeze.module': 'Freeze Module',
        'tooltip.activate.module': 'Activate Module',
        'tooltip.refresh.plugin': 'Refresh Plugin',

        // Version info
        'version.info': ' Version:',

        // Others
        'text.on': 'On',
        'text.off': 'Off',
        'text.null': 'null',
        'text.ms': 'ms'
    };

})(window);

