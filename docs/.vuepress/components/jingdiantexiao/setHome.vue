<template>
    <div class="wrap">
        <el-link type="primary" @click="SetHome(this,'https://coder.itclan.cn')">设为首页</el-link>&nbsp;&nbsp;
    </div>
</template>

<script>
    export default {
        name:'setHome',
        methods: {
            // 后退
            SetHome(obj,url) {
                try{
                    // 设置body的style.behavior 
                    obj.style.behavior='url(#default#homepage)';
                    // 设置body的style.behavior 
                    obj.setHomePage(url);
                }catch(e) {
                    if(window.netscape){
                        try{
                            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }catch(e){
                            alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                        }
                    }else if(window.sidebar) {
                        // 通过Firefox特有的组件设置首页地止
                        var thePrefs = Components.classes['@mozilla.org/preference-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        thePrefs.setCharPref('browser.startup.homepage',url);
                    }else {
                        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
                    }
                };
            },
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>