<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="userName">
    <el-input type="text" v-model="ruleForm.userName" autocomplete="off" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="text" v-model="ruleForm.password" autocomplete="off" :disabled="ruleForm.isModify"></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" prop="realName">
    <el-input type="text" v-model="ruleForm.realName" autocomplete="off" :disabled="ruleForm.isModify"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex">
    <el-input type="text" v-model="ruleForm.sex" autocomplete="off" :disabled="ruleForm.isModify"></el-input>
  </el-form-item>
  <el-form-item label="联系方式" prop="tel">
    <el-input type="text" v-model="ruleForm.tel" autocomplete="off" :disabled="ruleForm.isModify"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm()">修改信息</el-button>
  </el-form-item>
</el-form>

    </div>

    
</template>

<script>
export default {
    name: 'Mine',

    beforeCreate: function() {
    this.userName = this.$store.state.user.user.userName;
    this.password = this.$store.state.user.user.password;
    this.sex = this.$store.state.user.user.sex;
    this.tel = this.$store.state.user.user.tel;
    this.realName = this.$store.state.user.user.realName;

    this.id = this.$store.state.user.user.id;
      // console.log(this.realName);
    },

    

    data (){

       var isModify = 'true';
       var id = '';
          var password = '';
          var userName = '';
          var realName = '';
          var sex = '';
          var tel = '';
          

      
      // var ruleForm = {

      //     id,
      //     password,
      //     userName,
      //     realName,
      //     sex,
      //     tel
          
      //   };

        

      var validateNotNull = (rule, value, callback) => {
           if (value === '') {
          callback(new Error('修改项为空！'));
        } else {
          // if (this.ruleForm.checkPass !== '') {
          //   // this.$refs.ruleForm.validateField('checkPass');
          // }
          // callback();
        }


      };

      // console.log(this.tel);

      return {
        // isModify: true,

        ruleForm: {
          isModify: true,
          id: this.id,
          password: this.password,
          userName: this.userName,
          realName: this.realName,
          sex: this.sex,
          tel: this.tel,
          status: this.status

          // id: id,
          // password,
          // userName,
          // realName,
          // sex,
          // tel
          
        },

        rules: {
          password: [
            { validator: validateNotNull, trigger: 'blur' }
          ],
          userName: [
            { validator: validateNotNull, trigger: 'blur' }
          ],
          realName: [
            { validator: validateNotNull, trigger: 'blur' }
          ],
          sex: [
            { validator: validateNotNull, trigger: 'blur' }
          ],
          tel: [
            { validator: validateNotNull, trigger: 'blur' }
          ]
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

        var axios = this.$axios;
        var ruleForm = this.ruleForm;
        var store = this.$store;

        this.$axios.post('http://120.79.197.164:9285/barter/user/editInformation',{
          id: this.ruleForm.id,
          password: this.ruleForm.password,
          realName: this.ruleForm.realName,
          sex: this.ruleForm.sex,
          status: this.ruleForm.state,
          tel: this.ruleForm.tel,
          userName: this.ruleForm.userName
          // status: this.ruleForm.status

        }).then(function (response) {

          if(response.data.data !== null){
            store.state.user.user.password = ruleForm.password;
            store.state.user.user.realName = ruleForm.realName;
            store.state.user.user.tel = ruleForm.tel;
            store.state.user.user.sex = ruleForm.sex;
            alert("信息修改成功！");
          }

          // console.log(ruleForm.id);

      //     axios.post('http://120.79.197.164:9285/barter/user/getUserByName?userName='+ruleForm.userName,{

      // })
      // .then(function (response){
      //   //   console.log(response);
      //     if(response.data.data !== null){
      //         // console.log(response.data.data);
      //         store.dispatch('saveUserInfo',response.data.data);

      //     }else{
      //         alert("系统错误！");
      //     }
      // })

        })


        // console.log(this.ruleForm.tel);
      },
      resetForm() {
        
        console.log(this.isModify)
        // this.$refs[formName].isModify
        console.log(this.$store.state.user.user.id);
        this.ruleForm.isModify = false;
        
        // this.$refs[formName].resetFields();
      }
    }
    
}
</script>

<style scoped>
  

</style>