let Mock=require('mockjs')

Mock.mock('/api/login','post',function(config){
    let obj=JSON.parse(config.body);
    let user=obj.name;
    let pw=obj.pw;
    if(user==='admin' &&pw==123456) return {
        status:200,
        message:"success",
        data:{
            user,
            pw,
            token:user+156161616
        }
    }
    return {
        status:200,
        message:"fail",
    }
})