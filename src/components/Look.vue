<template>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="标题"
      width="400">
    </el-table-column>
    <el-table-column
      prop="name"
      label="简介"
      width="400">
    </el-table-column>
    <!-- <el-table-column
      prop="address"
      label="地址">
    </el-table-column> -->
  </el-table>

</template>

<script>
export default {
    name: 'Look',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
}
</script>

<style>
  


</style>