<template>
  <div ref="echarts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ECharts',
  props: {
    // 是否有类目轴x和y轴
    // 折线图和柱状图有，饼图无
    isAxisChart: {
      type: Boolean,
      // 默认为真
      default: true
    },
    // 图表数据
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        }
      }
    }
  },
  data () {
    return {
      // 柱状图
      axisOption: {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '20%'
        },
        // 提示框
        tooltip: {
          // 坐标轴触发，主要在柱状图，折线图等使用类目轴的图表中使用
          trigger: 'axis'
        },
        xAxis: {
          // 类目轴
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#333'
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
        series: []
      },
      // 饼状图
      normalOption: {
        // 提示框
        tooltip: {
          // item:主要在散点图，饼图等无类目轴的图表中使用
          trigger: 'item'
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf'
        ],
        series: []
      }
    }
  },
  computed: {
    // 用哪种绘制方式
    // isAxisChart为 true 则绘制折线图和柱状图，否则绘制饼图
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  methods: {
    // 初始化图表数据
    initChartData() {
      // 判断绘制什么图
      if (this.isAxisChart) {
        // 折线图或者柱状图
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        // 饼图
        this.normalOption.series = this.chartData.series
      }
    },
    initChart() {
      // 初始化图表数据
      this.initChartData()
      // echarts.init() 初始化：基于DOM元素echarts实例
      // this.$refs.echarts 获取当前DOM元素
      const myCharts = echarts.init(this.$refs.echarts)
      myCharts.setOption(this.options)
    }
  },
  // 监听图表数据
  watch: {
    chartData: {
      handler() {
        // 绘图
        this.initChart()
      },
      // 打开页面就监听
      // 深度监听
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
