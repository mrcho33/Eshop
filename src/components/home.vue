<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <span>电商管理系统</span>
      <el-button type="info" @click="logout">退出</el-button></el-header>
    <el-container>
    <!-- 左侧 -->
    <el-aside :width="isCollapse ? '64px':'200px'">
      <div class="toggle-button" @click="toggleCollapse">|||</div>
      <el-menu
      background-color="#303133"
      text-color="#fff"
      active-text-color="#409EFF"
      unique-opened
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
      :default-active="activePath">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-coordinate"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/roles">角色列表</el-menu-item>
            <el-menu-item index="/rights">权限列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-shopping-cart-full"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users">角色列表</el-menu-item>
            <el-menu-item index="/rights">权限列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users">角色列表</el-menu-item>
            <el-menu-item index="/rights">权限列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-data-line"></i>
            <span>数据统计</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users">角色列表</el-menu-item>
            <el-menu-item index="/rights">权限列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 中间 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  mounted () {},
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所以菜单
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      console.log(res)
    },
    // 点击按钮菜单折叠
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNaState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
    }
  }
}
</script>

<style scoped lang="less">
.el-container{
  height: 100%;
}
.el-header{
  background-color: #4e6ef2;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-aside{
  background-color: #303133;
  .el-menu {
    border-right:0px ;
  }
}
.el-main{
  background-color: #F2F6FC;
}
.iconfont{
  padding-left: 10px;
}
.toggle-button{
  background-color: #000000;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
}
</style>
