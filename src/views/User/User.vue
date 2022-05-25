<template>
  <div class="user-container">
    <!--
      title：Dialog的标题：add时是新增用户，其他是更新用户
      visible：是否显示Dialog
    -->
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <common-form
        :formLabel = "operateFormLabel"
        :form = "operateForm"
        :inline="true"
        ref="form"
      ></common-form>
      <div slot="footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="user-header">
      <!-- 新增 按钮 -->
      <el-button
        type="primary"
        @click="addUser"
        class="add"
      >+ 新增</el-button>
      <!-- 文本框 -->
      <common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <!-- 搜索按钮 -->
        <el-button
          type="primary"
          @click="getList(searchForm.keyWord)"
        >搜索</el-button>
      </common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @delete="delUser"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm.vue'
import CommonTable from '@/components/CommonTable.vue'
import { getUser } from '@/api/data.js'
export default {
  name: 'MyUser',
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      operateType: 'add',
      isShow: false,
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        }
      ],
      operateForm: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchForm: {
        keyword: ''
      },
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sex',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      }
    }
  },
  created() {
    // 渲染表格数据
    this.getList()
  },
  methods: {
    // 获取表格数据
    getList(name = '') {
      this.config.loading = true
      name ? (this.config.page = 1) : name = ''
      // 获取用户
      getUser({
        page: this.config.page,
        name
      }).then(({ data: res }) => {
        this.tableData = res.list.map(item => {
          item.sex = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.count
        this.config.loading = false
      })
    },
    // 确认
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/user/edit', this.operateForm).then(() => {
          // 关闭弹窗
          this.isShow = false
          this.$message.success('编辑用户信息成功！')
          // 更新表格数据
          this.getList()
        })
      } else {
        this.$http.post('/user/add', this.operateForm).then(() => {
          // 关闭弹窗
          this.isShow = false
          this.$message.success('添加新用户成功！')
          // 更新表格数据
          this.getList()
        })
      }
    },
    // 新增用户
    addUser() {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      }
    },
    // 编辑用户
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    // 删除用户
    delUser(row) {
      this.$confirm('此操作将永久删除该用户，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = row.id
        this.$http.get('/user/del', {
          params: { id }
        }).then(() => {
          this.$message.success('删除用户成功！')
        })
        // 更新用户列表
        this.getList()
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .user-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .add {
      margin-bottom: 22px;
    }
  }
</style>
