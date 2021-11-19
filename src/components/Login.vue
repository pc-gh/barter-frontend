<template>
    <div>
        <img src="../assets/logo.png">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="pass">
    <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="register()">注册</el-button>
  </el-form-item>
</el-form>

    </div>
</template>

<script>
export default {
    name: 'Login',
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
      var info = ''; 
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {

            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if (this.ruleForm.pass !== '') {
            
        //   callback(new Error('两次输入密码不一致!'));
        } 
        else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: ''
        //   age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        //   age: [
        //     { validator: checkAge, trigger: 'blur' }
        //   ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        let rout = this.$router;
        console.log('进入登录点击事件');
        this.$axios.post('/barter/user/login',{
          userName: this.ruleForm.pass,
          password: this.ruleForm.checkPass
      })
      .then(function (response){
        //   console.log(response);
          if(response.data.data !== null){
              rout.push('/main');
              alert("欢迎回来："+response.data.data.realName);
              console.log(response.data.data);
          }else{
              alert("账号或密码错误！");
          }
      })
        
      },

      register() {
          this.$router.push("/register"); 
      }
    }
  }
</script>
    
<style>
el-form-item {
    text-align: center;

}
</style>