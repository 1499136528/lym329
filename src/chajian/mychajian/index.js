let debounce={
    install(Vue){
        //防抖封装
        Vue.prototype.debouncefn=function(fn,wait){
            let timer=null;
            return function(){
                clearTimeout(timer);
                timer=setTimeout(function(){
                    fn();
                },wait)
            }
        }
    }
}

export default debounce;