(function (global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global['I18n'] = factory({}); // <script>
    }
}(this, function (exports) {
    var lang = 'en-us';
    lang = String(typeof window && window.navigator && window.navigator.userLanguage || window.navigator.language || 'en-us').toLowerCase();
    
    var res = {};
    res['en-us'] = {};
    res['zh-cn'] = {
        'Dock to left/top/right/bottom': '把窗口停靠到 左/上/右/下',
        'Dock': '停靠',
        'Elements': '场景元素',
        'Profiles': '性能调试',
        'Inspect Element': '检察元素',
        'Refresh': '刷新列表',
        'Share to..': '分享',
        'Share to Sina Weibo': '分享到新浪微博',
        'Join QQ group': '去QQ讨论组吐槽',
        'Set speed:': '设置APP速度：',
        
        '_': '_' // rear
    };
    
    exports = function(t){
        if (!res[lang]) return String(t);
        return String(res[lang][t] || t);
    };
    
    exports.lang = lang;
    
    return exports;
}));