
let Mock=require('mockjs');

let arrs=[
    {id:"中故宫",name:'小说',count:156156,huifu:15},
    {id:"中故sd 宫",name:'小说',count:156156,huifu:15},
    {id:"中故sd宫",name:'小说',count:156156,huifu:15},
    {id:"中故sddd宫",name:'小说',count:156156,huifu:15},
]
Mock.mock('/api/homeindex',function(config){
    return arrs
})


Mock.mock(/\/api\/homeindex\/\d/,'delete',function(config){
    let id=config.url.split('/').pop();
    arrs.splice(id,1)
    return {
        message:"删除了",
        data:arrs,
        status:200
    }
})