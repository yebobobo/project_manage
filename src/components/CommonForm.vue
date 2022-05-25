<template>
  <!--
    model: 表单数据对象
    inline: 行内表单模式
  -->
  <el-form
    ref="form"
    label-width="100px"
    :model="form"
    :inline="inline"
  >
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <!-- 姓名 年龄 地址 -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model.trim="formData[item.model]"
      ></el-input>
      <!-- 日期 -->
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="请选择日期"
        v-model.trim="formData[item.model]"
      ></el-date-picker>
      <!-- 性别 -->
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model.trim="formData[item.model]"
      >
        <el-option
          v-for="subItem in item.opts"
          :key="subItem.value"
          :label="subItem.label"
          :value="subItem.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  data() {
    return {
      formData: this.form
    }
  },
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean
  },
  watch: {
    form(val) {
      this.formData = val
    }
  }
}
</script>

<style lang="less" scoped>

</style>
