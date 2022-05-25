<template>
  <div class="tag-container">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    // mapMutations 是 vuex 的 mutation的辅助函数，用于在组件中映射 mutation 内的方法，以便在该组件中直接使用 mutation里的方法
    ...mapMutations({
      close: 'closeTag'
    }),
    // 改变menu
    changeMenu(tag) {
      // 点击跳转页面
      this.$router.push({
        name: tag.name
      })
    },
    handleClose(tag, index) {
      // 0 1 2
      const length = this.tags.length - 1
      this.close(tag)
      // 当前 tag 的name 不等于 当前 路由的 name
      if (tag.name !== this.$route.name) {
        // 返回
        return
      }
      // 索引号等于长度，即最后一个tag
      if (index === length) {
        // 跳转到前一个tag上
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        // 索引号不等于长度，即不是最后一个tag
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .tag-container {
    padding: 20px;
    .el-tag {
      margin-right: 15px;
      cursor: pointer;
    }
  }
</style>
