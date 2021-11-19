<template>
  <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="标题" prop="title">
      <el-input
  type="text"
  placeholder="请输入内容"
  v-model="ruleForm.title"
  maxlength="10"
  show-word-limit
>
</el-input>

    <!-- <el-input type="password" v-model="ruleForm.title" autocomplete="off"></el-input> -->
  </el-form-item>
  <el-form-item label="文本框" prop="content">


    <!-- <el-input type="password" v-model="ruleForm.content" autocomplete="off"></el-input> -->
    <el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="ruleForm.content"
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

    
</template>

<script>
// import func from 'vue-editor-bridge';
export default {
    name: 'Upload',
    data() {
    //   var checkAge = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('年龄不能为空'));
    //     }
    //     setTimeout(() => {
    //       if (!Number.isInteger(value)) {
    //         callback(new Error('请输入数字值'));
    //       } else {
    //         if (value < 18) {
    //           callback(new Error('必须年满18岁'));
    //         } else {
    //           callback();
    //         }
    //       }
    //     }, 1000);
    //   };
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入项为空'));
        } 
        // else if (value !== this.ruleForm.pass) {
        //   callback(new Error('两次输入密码不一致!'));
        // } else {
        //   callback();
        // }
      };
      return {
        ruleForm: {
          title: '',
          content: ''
        //   age: ''
        },
        rules: {
          title: [
            { validator: validatePass, trigger: 'blur' }
          ],
          content: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        //   age: [
        //     { validator: checkAge, trigger: 'blur' }
        //   ]
        }
      };
    },
    methods: {
      submitForm() {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        // alert("进入上传函数");
        let rout = this.$router;
        if (this.ruleForm.title !== null && this.ruleForm.content !== null){
            // alert("都非空！！！")
            this.$axios.post('http://120.79.197.164:9285/barter/post/addPost',{
            // userId: 0,
            // type: '测试',
            // title: this.ruleForm.title,
            // easyContext: this.ruleForm.title,
            // detailContext: this.ruleForm.content,
            // status: 1

            createTime: "string",
            detailContext: this.ruleForm.content,
            easyContext: this.ruleForm.title,
            // "id": 0,
            modifyTime: "string",
            status: 0,
            title: this.ruleForm.title,
            type: "string",
            userId: 0


        }).then(function (response){
            console.log(response.data);
            alert(response.data.msg);
            rout.push('/look');

        });
        }
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
  

</style>