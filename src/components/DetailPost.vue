<template>

  <div>
      <el-page-header @back="goBack" content="帖子详情页面">
</el-page-header>

      <!-- <el-descriptions title="评论" :column=1></el-descriptions> -->
      <hr />

      <div>
        <el-descriptions :column=1>
    <el-descriptions-item label="标题" labelStyle="font-size:large;" contentStyle="">{{post.title}}</el-descriptions-item>
    <el-descriptions-item label="详细内容" labelStyle="font-size:large;" contentStyle="">{{post.detailContext}}</el-descriptions-item>
</el-descriptions>
<hr />

    </div>
<div>
        <!-- <el-descriptions :column=1 title="评论" >  
</el-descriptions> -->
        

        <el-row >
            <el-col>
                评论
            <el-button type="primary" icon="el-icon-edit" circle v-on:click="addComment"></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle v-on:click="closeAddComment"></el-button>

            </el-col>
            </el-row>

<!-- <el-button type="primary">添加评论</el-button>
            <el-button type="danger">取消评论</el-button> -->

<hr />
    </div>

    <div>
        <div>
      <el-form :model="addCommentContent" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
  <el-form-item label="评论" prop="content">


    <!-- <el-input type="password" v-model="ruleForm.content" autocomplete="off"></el-input> -->
    <el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="addCommentContent"
  maxlength="30"
  show-word-limit
>
</el-input>

  </el-form-item>
  <!-- <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

  </div>



    </div>
    <br />



    <div v-for="comment in commentList" :key="comment.id">

        <div>
        <el-descriptions :column=1>
    <el-descriptions-item label="用户名">{{comment.userId}}</el-descriptions-item>
    <el-descriptions-item label="评论内容">{{comment.detailComment}}</el-descriptions-item>
    <el-descriptions-item label="时间">{{comment.createTime}}</el-descriptions-item>
</el-descriptions>
<hr />

    </div>


    </div>

    <!-- <div>
        <el-descriptions :column=1>
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="评论内容">哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的哦哦啊啊第四节课是的</el-descriptions-item>
    <el-descriptions-item label="时间">2021-11-30 15:27</el-descriptions-item>
</el-descriptions>
<hr />

    </div> -->

  </div>

</template>

<script>
export default {
    name: 'DetailPost',
    data(){

        return {

            post: '',
            commentList: [],
            isAddComment: false,
            addCommentContent: ''

        };


        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入项为空'));
        } else {
        //   if (this.ruleForm.checkPass !== '') {
        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
        //   callback();
        }
      };
    },

    mounted:function(){
        // alert(this.$route.query.postId);

        this.$axios.get('http://120.79.197.164:9285/barter/post/getPostByPostId/'+this.$route.query.postId,{


        }).then((response)=>{
            this.post = response.data.data;

            // console.log(response.data.data);
            // console.log(this.post);
        });


        this.$axios.post('http://120.79.197.164:9285/barter/comment/getCommentList',{
            pageNum: 1,
            pageSize: 6,
            postId: this.$route.query.postId,

        }).then((response)=>{

            this.commentList = response.data.data;
            // console.log(this.commentList);

            // console.log(response.data.data)
        });

    },

    methods: {
         goBack() {
        // console.log('go back');
        // 坑，这里用this.$route！！！
        // alert(this.$route.query.postId);
        this.$router.push("/look");
        
      },
      addComment(){

          alert("添加评论！")
      },
      closeAddComment(){
          alert("关闭添加评论窗口！")

      }


    }

}
</script>

<style>

</style>