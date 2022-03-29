<template>
    <div class="login">
        <div class="myform">
            <h3 class="title">Login Form</h3>
            <el-form ref="form" :model="form" :rules="rules" label-width="40px">
                <el-form-item prop='name'>
                    <el-input v-model="form.name" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop='pw'>
                    <el-input v-model="form.pw" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="loginbtn" @click="submitfn">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import instance from '../../api/index'
export default {
    name:"MyLogin",
    data(){
        let nameFn=function(rule,value,callback){
            let rg=/^[a]\w{2,6}\w$/;
            if(rg.test(value)) return
            return callback(new Error("用户不正确"))
        }
        let pwFn=function(rule,value,callback){
            let rg=/^\w{6,16}$/;
            if(rg.test(value))return;
            return callback(new Error("密码不正确"))
        }
        return {
            form:{
                name:"admin",
                pw:1234567,
            },
            rules:{
                name:[{validator:nameFn,trigger:'blur'}],
                pw:[{validator:pwFn,trigger:'blur'}]
            },
            newsumbit:null
        }
    },
    methods:{
        //登录业务
        async login(){
            let name=this.form.name;
            let pw=this.form.pw;
            const {data}=await instance.post('/login',{name,pw})

            if(data.message=='fail')return this.$message.error('登录失败')
            if(data.message=='success')return this.$message({
                type:'success',
                message:'登录成功',
                duration:1500,
                onClose:()=>{
                    localStorage.setItem('key',data.data.token);
                    this.$router.push('/')
                }
            })
        },
        submitfn(){
            this.newsumbit();
        }
    },
    created(){
        this.newsumbit=this.debouncefn(this.login,2000)
    }
}
</script>

<style scoped>
    .login{
        height: 100vh;
        background: #324057;
    }
    .title{
        text-align:center;
        width: 360px;
        position:absolute;
        left:50%;
        margin-left:-180px;
        top:-80px;
        color:#fff;
    }
    .myform{
        width: 360px;
        height: 300px;
        position:absolute;
        padding:40px 20px;
        box-sizing: border-box;
        left:50%;
        top:50%;
        margin:-200px 0 0 -180px;
    }
    .loginbtn{
        width: 100%;
    }
   
</style>