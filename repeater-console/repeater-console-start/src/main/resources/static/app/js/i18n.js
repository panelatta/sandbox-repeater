/**
 * 国际化核心文件
 * 提供多语言支持功能
 */
(function(window) {
    'use strict';

    var I18n = {
        // 当前语言
        currentLanguage: 'zh-CN',
        
        // 默认语言
        defaultLanguage: 'zh-CN',
        
        // 语言包存储
        messages: {},
        
        // 支持的语言列表
        supportedLanguages: {
            'zh-CN': '中文',
            'en-US': 'English'
        },

        /**
         * 初始化国际化
         */
        init: function() {
            // 从localStorage获取用户偏好语言
            var savedLang = localStorage.getItem('repeater_language');
            if (savedLang && this.supportedLanguages[savedLang]) {
                this.currentLanguage = savedLang;
            }
            
            // 加载语言包
            this.loadLanguagePack(this.currentLanguage);
            
            // 绑定语言切换事件
            this.bindLanguageSwitchEvents();
            
            // 初始化页面文字
            this.updatePageTexts();
        },

        /**
         * 加载语言包
         */
        loadLanguagePack: function(language) {
            if (window.LanguagePacks && window.LanguagePacks[language]) {
                this.messages = window.LanguagePacks[language];
                this.currentLanguage = language;
            } else {
                console.warn('Language pack not found for: ' + language);
            }
        },

        /**
         * 翻译函数
         */
        t: function(key, params) {
            var message = this.messages[key];
            
            if (!message) {
                console.warn('Translation key not found: ' + key);
                return key;
            }
            
            // 处理参数替换
            if (params && typeof params === 'object') {
                for (var param in params) {
                    var placeholder = '{' + param + '}';
                    message = message.replace(new RegExp(placeholder, 'g'), params[param]);
                }
            }
            
            return message;
        },

        /**
         * 切换语言
         */
        switchLanguage: function(language) {
            if (!this.supportedLanguages[language]) {
                console.warn('Unsupported language: ' + language);
                return;
            }
            
            this.currentLanguage = language;
            localStorage.setItem('repeater_language', language);
            
            this.loadLanguagePack(language);
            this.updatePageTexts();
            this.updateLanguageSwitch();
        },

        /**
         * 更新页面所有文字
         */
        updatePageTexts: function() {
            var self = this;
            
            // 更新带有 data-i18n 属性的元素
            $('[data-i18n]').each(function() {
                var $element = $(this);
                var key = $element.attr('data-i18n');
                var translatedText = self.t(key);
                
                // 根据元素类型设置文本
                if ($element.is('input[type="button"], input[type="submit"], button')) {
                    $element.val(translatedText);
                } else if ($element.is('input[placeholder]')) {
                    $element.attr('placeholder', translatedText);
                } else if ($element.attr('title')) {
                    $element.attr('title', translatedText);
                } else {
                    $element.text(translatedText);
                }
            });

            // 更新页面标题
            if (this.messages['page.title.current']) {
                document.title = this.messages['page.title.current'];
            }
        },

        /**
         * 绑定语言切换事件
         */
        bindLanguageSwitchEvents: function() {
            var self = this;
            
            // 语言切换开关事件
            $(document).on('click', '.language-switch', function(e) {
                e.preventDefault();
                var targetLang = $(this).data('lang');
                self.switchLanguage(targetLang);
            });
        },

        /**
         * 更新语言切换开关状态
         */
        updateLanguageSwitch: function() {
            $('.language-switch').removeClass('active');
            $('.language-switch[data-lang="' + this.currentLanguage + '"]').addClass('active');
        },

        /**
         * 获取当前语言
         */
        getCurrentLanguage: function() {
            return this.currentLanguage;
        },

        /**
         * 是否为中文
         */
        isChinese: function() {
            return this.currentLanguage === 'zh-CN';
        }
    };

    // 全局暴露
    window.I18n = I18n;
    window.t = function(key, params) {
        return I18n.t(key, params);
    };

    // jQuery ready 时初始化
    $(document).ready(function() {
        // 延迟初始化，确保语言包已加载
        setTimeout(function() {
            I18n.init();
        }, 100);
    });

})(window);

