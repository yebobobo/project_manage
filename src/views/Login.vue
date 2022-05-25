<template>
  <!--
    model: 表单数据对象
    status-icon: 是否在输入框中显示校验结果反馈图标
    rules: 表单验证规则
    label-width: 表单域标签的宽度
    ref: 方便获取DOM元素
   -->
  <el-form
    class="login-container"
    :model="form"
    status-icon
    :rules="rules"
    ref="form"
    label-width="100px"
  >
    <h3 class="login-title">系统登录</h3>
    <!--
      label: 标签文本
      prop: 表单域model字段
      label-width: 表单域标签的宽度
     -->
    <el-form-item
      label="用户名"
      prop="username"
      label-width="80px"
    >
      <!--
        type: 类型
        v-model: 双向绑定
        autocomplete: 原生属性，自动补全，off关闭
        placeholder: 输入框占位文本
       -->
      <el-input
        type="input"
        v-model.trim="form.username"
        autocomplete="off"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
      label-width="80px"
    >
      <el-input
        type="password"
        v-model.trim="form.password"
        autocomplete="off"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login-submit">
      <el-button type="primary" @click="onClickLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { getMenu } from '@/api/data.js'
export default {
  name: 'MyLogin',
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '用户名长度在3~15之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    onClickLogin() {
      getMenu(this.form).then(({ data: res }) => {
        console.log(res)
        if (res.code === 20000) {
          // 清除当前路由
          this.$store.commit('clearMenu')
          // 设置路由
          this.$store.commit('setMenu', res.data.menu)
          // 设置 token
          this.$store.commit('setToken', res.data.token)
          // 动态添加路由
          this.$store.commit('addMenu', this.$router)
          // 页面跳转
          this.$router.push({ name: 'main' })
        } else {
          this.$message.warning(res.data.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login-submit {
    margin: 10px auto 0px auto;
  }
</style>
