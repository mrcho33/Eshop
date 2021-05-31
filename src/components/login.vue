<template>
  <div class="login-container">
    <div class="login-box">
      <el-form label-width="0px" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <el-form-item prop="uname">
          <el-input v-model="loginForm.uname"  prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="pws">
          <el-input v-model="loginForm.pws"  prefix-icon="el-icon-key" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button  @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
      // 登录表单数据绑定
      loginForm: {
        uname: 'MrCho',
        pws: '123456'
      },
      // 验证表单规则对象
      loginFormRules: {
        uname: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pws: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 表单预验证
    onSubmit () {
    /*
      this.$refs.loginFormRef.validate(async val => {
        // console.log(val)
        if (!val) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 1.将登录之后的token，保存到客户端的sessionStorage中
        //  1.1 项目中除了登录之外的其他api接口，必须在登录之后才能访问
        //  1.2 token只应用在当前网站打开期间生效，所以将token保存在sessionStorage中
        console.log(res)
        window.sessionStorage.setItem('token', res.data.token)
        // 2.编程式导航跳转到后台主页，路由地址是/home
        */
      this.$router.push('/home')
    }// )
  },
  // 重置对象
  resetForm () {
    // console.log(this)
    this.$refs.loginFormRef.resetFields()
  // }
  }
}
</script>

<style scoped lang="less">
.login-container{
    background-color: #E4E7ED;
    height: 100%;
}
.login-box{
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 30px 30px;
}
</style>
