<template>

  <el-row :gutter="20">
  <el-col :span="6"><img src="../assets/logo.png"></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    <router-link to="/look">看</router-link>
    
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    
    <router-link to="/upload">传</router-link>
    
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    <router-link to="/mine">我的</router-link>
    </div></el-col>
  <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
</el-row>

</template>

<script>
export default {
    name: 'HeadPart',
    data (){

        return {
            
        }
    }
}
</script>

<style scoped>
   .el-row {
    margin-bottom: 20px;
    
  }
  .el-row :last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>