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

    <el-form-item label="姓名" prop="realName">
    <el-input type="text" v-model="ruleForm.realName" autocomplete="off"></el-input>
  </el-form-item>

    <el-form-item label="性别" prop="sex">
    <el-input type="text" v-model="ruleForm.sex" autocomplete="off"></el-input>
  </el-form-item>

    <el-form-item label="联系方式" prop="tel">
    <el-input type="text" v-model="ruleForm.tel" autocomplete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
    <el-button @click="toLogin()">返回登录</el-button>
  </el-form-item>
</el-form>

    <FootPart></FootPart>
    </div>
</template>

<script>

import FootPart from '@/components/Foot.vue'

export default {
    name: 'Register',
    components: {
      FootPart
    },
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入项为空'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          sex: '',
          tel: '',
          realName: ''
        //   age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          tel: [
            { validator: validatePass, trigger: 'blur' }
          ],
          realName: [
            { validator: validatePass, trigger: 'blur' }
          ],
          sex: [
            { validator: validatePass, trigger: 'blur' }
          ]
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
        let rout  = this.$router;

        alert("本系统已关闭注册账号功能，请联系管理员开通账号!");


//          暂不支持注册账号，请联系管理员开放账号
      //   this.$axios.post('http://120.79.197.164:9285/barter/user/register',{
      //       userName: this.ruleForm.pass,
      //       password: this.ruleForm.checkPass,
      //       sex: this.ruleForm.sex,
      //       tel: this.ruleForm.tel,
      //       realName: this.ruleForm.realName,

      //   }).then(function (response){
      //       if(response.data.data !== 'error'){
      //           alert("注册成功！！！");
      //           rout.push('/login');


      //       }else{
      //           alert(response.data.msg)

      //       }



      //   })


      },
      toLogin() {
          this.$router.push("/login"); 
      }
    }
  }
</script>
    
<style>
el-form-item {
    text-align: center;

}
</style>