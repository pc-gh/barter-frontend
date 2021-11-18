<template>

    <el-container>
  <el-header>
      
      <HeadPart></HeadPart>

    </el-header>
  <el-main>
    <router-view></router-view>
      <!-- <div v-show="show">
        <Upload></Upload>
        
      </div>

      <div v-show="show">
        
        <Mine></Mine>
        
      </div>

      <div v-show="show">
        
        <Look></Look>
        
      </div> -->

  </el-main>
  <el-footer>
      
      <FootPart></FootPart>

      </el-footer>
</el-container>

</template>

<script>

import HeadPart from '@/components/Head';
import FootPart from '@/components/Foot';
import Look from '@/components/Look'

export default {
    components:{
        HeadPart,FootPart,Look

    },
    name: 'Main',
    data (){
        return {
          show:true
        }
    }
}
</script>

<style>
 .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 480px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


</style>