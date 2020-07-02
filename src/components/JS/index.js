import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){
    var defaults = {   //默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };
    var Mycomponent = Vue.extend(MessageBox);
    return function(opts){
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }
        //Vue中的extend()
        var vm = new Mycomponent({
            //这里的el会被template的内容覆盖，详情请看VUE的生命周期图
            el: document.createElement("div"),
            data:{
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    }
})();