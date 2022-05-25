<template>
  <el-row :gutter="20" class="home-container">
    <!-- 用户信息 + 商品信息 -->
    <el-col :span="8" class="mt-20">
      <!-- 用户信息 -->
      <el-card shadow="hover">
        <!-- 用户-->
        <div class="user">
          <!-- 头像  -->
          <img :src="userImg" alt="">
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <!-- 登录信息 -->
        <div class="login-info">
          <p>上次登录时间：<span>2022-05-18</span></p>
          <p>上次登录地点：<span>青岛</span></p>
        </div>
      </el-card>
      <!-- 商品信息 -->
      <el-card class="tb mt-20">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <!-- 订单信息 + 渲染图 -->
    <el-col :span="16" class="mt-20">
      <!-- 订单信息 -->
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <!-- 图标 -->
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ backgroundColor: item.color }"></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card style="height: 280px">
        <e-charts style="height: 280px" :chartData="echartData.order"></e-charts>
      </el-card>
      <!-- 柱状图和饼图 -->
      <div class="graph mt-20">
        <!-- 柱状图 -->
        <el-card style="height: 260px">
          <e-charts style="height: 240px" :chartData="echartData.user"></e-charts>
        </el-card>
        <!-- 饼图 -->
        <el-card style="height: 260px">
          <e-charts style="height: 240px" :chartData="echartData.video" :isAxisChart="false"></e-charts>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import ECharts from '@/components/ECharts.vue'
import { getData } from '@/api/data.js'
export default {
  name: 'MyHome',
  components: {
    ECharts
  },
  data() {
    return {
      userImg: require('@/assets/images/user.png'),
      tableData: [],
      tableLabel: {},
      countData: [],
      echartData: {
        // 折线图
        order: {
          // x轴数据
          xData: [],
          series: []
        },
        // 柱状图
        user: {
          xData: [],
          series: []
        },
        // 饼图
        video: {
          series: []
        }
      }
    }
  },
  // 对DOM节点进行操作
  mounted () {
    getData().then(res => {
      // 解构返回的数据
      const { code, data } = res.data
      // 获取数据成功
      if (code === 20000) {
        // 表格数据
        this.tableData = data.tableData
        this.tableLabel = data.tableLabel
        this.countData = data.countData
        // 折线图
        const order = data.orderData
        const xData = order.date
        // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key =>
          series.push({
            name: key,
            // 数组.map 映射
            data: order.data.map(item => item[key]),
            // line 直线指示器
            type: 'line'
          })
        )
        this.echartData.order.xData = xData
        this.echartData.order.series = series
        // 柱状图
        this.echartData.user.xData = data.userData.map(item => item.date)
        this.echartData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.userData.map(item => item.active),
            type: 'bar'
          }
        ]
        // 饼图
        this.echartData.video.series = [
          {
            data: data.videoData,
            type: 'pie'
          }
        ]
      }
    })
  }
}
</script>

<style lang="less" scoped>

</style>
