<template>
  <div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu
          background-color="rgb(50,64,87)"
          text-color="#ffffff"
          :router="true"
        >
          <el-menu-item index="/home" class="item">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" class="item">
            <template slot="title"
              ><i class="el-icon-document-remove"></i
              ><span>文章管理</span></template
            >
            <el-menu-item index="home1">文章列表</el-menu-item>
            <el-menu-item index="2-2">多路由示例</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header >
          <div class="header-top">
            <i class="el-icon-menu"></i>
            <div class="right">
              <i class="el-icon-menu"></i>
              <i class="el-icon-menu"></i>
              <i class="el-icon-menu"></i>
              <el-dropdown>
              <span class="el-dropdown-link">
               admin
              </span>
              <el-dropdown-menu slot="dropdown" class>
                <el-dropdown-item>登录</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
          </div>
          <el-breadcrumb separator="/" class="header" >
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="(item, index) in this.$route.meta"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.header-top{
  display:flex;
  justify-content: space-between;
  height: 36px;
  background: blue;
  align-items:center;
}
.header {
  display: flex;
  align-items: center;
  height: 42px;
  background: #eff2f7;
}
.header img {
  width: 32px;
  height: 32px;
}
</style>
