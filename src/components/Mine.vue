<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="userName">
    <el-input type="text" v-model="ruleForm.userName" autocomplete="off" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="text" v-model="ruleForm.password" autocomplete="off" :disabled={isModify}></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" prop="realName">
    <el-input type="text" v-model="ruleForm.realName" autocomplete="off" :disabled={isModify}></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="sex">
    <el-input type="text" v-model="ruleForm.sex" autocomplete="off" :disabled={isModify}></el-input>
  </el-form-item>
  <el-form-item label="联系方式" prop="tel">
    <el-input type="text" v-model="ruleForm.tel" autocomplete="off" :disabled={isModify}></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm()">修改信息</el-button>
  </el-form-item>
</el-form>

    </div>

    
</template>

<script>
export default {
    name: 'Mine',
    data (){

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
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };

      var validateNotNull = (rule, value, callback) => {
           if (value === '') {
          callback(new Error('修改项为空！'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            // this.$refs.ruleForm.validateField('checkPass');
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
          
        isModify: 'true',
        ruleForm: {
          password: '123456',
          userName: 'zs',
          realName: '张三',
          sex: '男',
          tel: '1111111111111'
          
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        
        // this.$refs[formName].isModify
        this.isModify == 'false';
        console.log(this.isModify)
        // this.$refs[formName].resetFields();
      }
    }
    
}
</script>

<style scoped>
  

</style>