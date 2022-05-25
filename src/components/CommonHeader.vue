<template>
  <div class="header-container">
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="tag in tags"
          :key="tag.path"
          :to="{path: tag.name }"
          class="white"
        >{{ tag.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('@/assets/images/user.png')
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    // 退出
    logOut() {
      // 清空 token
      this.$store.commit('clearToken')
      // 清空 menu
      this.$store.commit('clearMenu')
      // 跳转到登录页面
      this.$router.push('/login')
    }
  },
  computed: {
    // 当一个组件要获取多个状态的时候，将这些状态声明为计算属性会有些重复和冗余
    // 为解决这个问她，使用 mapState 辅助函数 帮助我们生成计算属性
    ...mapState({
      // 映射 tags 为 state.tab.tabsList的值
      tags: state => state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
  .header-container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .l-content {
      display: flex;
      align-items: center;
      .el-button {
        margin-right: 20px;
      }
      h3 {
        color: #fff;
      }
    }
    .r-content {
      .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }

  .white /deep/ .el-breadcrumb__inner {
    color: #606266;
  }
  /deep/
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  /deep/
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #fff;
  }
</style>
