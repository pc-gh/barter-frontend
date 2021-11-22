<template>
<div>
    <!-- <el-table
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
  </el-table> -->

   <el-table
    :data="showTableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    @cell-dblclick="clickDbTab">
    <el-table-column
      label="标题"
      prop="title">
    </el-table-column>
    <el-table-column
      label="介绍"
      prop="easyContext">
    </el-table-column>

    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          disabled
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          disabled
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>

<el-pagination
  background
  layout="prev, pager, next"
  :total="100"
  :current-page="currentPage"
  @current-change="changeCurrentPage">
</el-pagination>
</div>
</template>

<script>
export default {

    
    mounted: function(){

      // console.log(this.tableData);
      var tableData = this.tableData;
      var showTableData = this.showTableData;
      this.MyclickPageQueue.push(1);
      // var lastPost = this.lastPost;

      this.$axios.post('http://120.79.197.164:9285/barter/post/getPostListByTitle',{
         pageNum: 1,
        pageSize: 6,
        title: "v1.0"

      }).then(function (response){
        // console.log(response.data.data);

        for(var i = 0;i<response.data.data.length;i++){
          var strm = response.data.data[i].title;
          response.data.data[i].title = strm.replace('v1.0','');
          showTableData.push(response.data.data[i]);
          // console.log(response.data.data[i])
          tableData.push(response.data.data[i]);

        }
        // lastPost = response.data.data[response.data.data.length-1];
        // console.log("挂载完成，最后一个帖子id："+lastPost.id);

      });

    },


    name: 'Look',
    
     data() {
       
      //  var tableData = [],
      return {
        tableData: [
        //   {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, 
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }
        ],
        showTableData: [],
        search: '',
        currentPage: 1,
        MyclickPageQueue: [],
        lastPost: ''
        
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      clickDbTab(row, column, cell, event){
        // console.log("呜呜呜："+row.id);
        alert(row.detailContext);
      },
      
      changeCurrentPage(val){
        this.currentPage = val;
        console.log("当前页面为："+this.currentPage);

        // var tableData = this.tableData;
        // var showTableData = this.showTableData;
        // var currentPage = this.currentPage;
        // var MyclickPageQueue = this.MyclickPageQueue;
        this.lastPost = this.tableData[this.tableData.length-1].id;


        console.log("挂载完成，最后一个帖子id："+this.lastPost);
        // console.log("挂载完成第一页展示："+showTableData[0].title);
        
        

        // tableData = [];
        // console.log(this.MyclickPageQueue);
        var current = this.currentPage;
        var inInQueue = this.MyclickPageQueue.findIndex((function(tmp){return tmp>=current}));
        // console.log("当前页是否在缓存中："+inInQueue);
        
// 不在队列里面
        if(inInQueue==-1){
          this.MyclickPageQueue.push(this.currentPage);
            this.$axios.post('http://120.79.197.164:9285/barter/post/getPostListByTitle',{
          pageNum: this.currentPage,
          pageSize: 6,
          title: "v1.0"

        }).then((response)  =>  {
          console.log("不在队列里面！");

          this.showTableData = [];

          // console.log(lastPost);
          // console.log("id:"+lastPost+"与id："+response.data.data[response.data.data.length-1].id+"是否相等："+lastPost!==response.data.data[response.data.data.length-1].id);
          if(this.lastPost!==response.data.data[response.data.data.length-1].id){
            for(var i = 0;i<response.data.data.length;i++){
            // console.log(response.data.data[i])
            var strm = response.data.data[i].title;
            response.data.data[i].title = strm.replace('v1.0','');

            this.tableData.push(response.data.data[i]);
            this.MyclickPageQueue.push(this.currentPage);

          }
          
          // lastPost = response.data.data[response.data.data.length-1];

          }


          for(var i = 0;i<response.data.data.length;i++){
            this.showTableData.push(response.data.data[i]);

          }
          // this.showTableData = showTableData;
          // console.log(showTableData.length);
          // console.log("lastPost:"+lastPost.id);
          // console.log(response.data.data[response.data.data.length-1]);
          
          
          // console.log("当前展示："+showTableData[0].id);

          // showTableData = [];
          // for(var i = 6*(currentPage-1);i<tableData.length;i++){
          //   if(showTableData.length<6){
          //     showTableData.push(tableData[i]);

          //   }

          // }
          
        // console.log(showTableData);
        // console.log(tableData);

        })
        }
        // 在队列里面
        else{
            this.showTableData = [];
            // console.log("在队列里面，索引为：");
            // var point = 6*(MyclickPageQueue[inInQueue]-1) + 6;
            for(var i = 6*(this.MyclickPageQueue[inInQueue]-1);i<this.tableData.length;i++){
              if(this.showTableData.length<6){
                this.showTableData.push(this.tableData[i]);
            }

        }

        }
        // this.showTableData = showTableData;
        // this.showTableData = [];

        // console.log("外："+this.tableData);
        }
    },
}
</script>

<style scoped>
  /* div{

    left: 28%;
  } */


</style>