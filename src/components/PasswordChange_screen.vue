<!-- <template>
    <div class="frame">
        <title>パスワード変更</title>
        <h1>パスワード変更</h1>
        <div>
            <label for="oldPassword" id="oldPassword_id">古いパスワード: </label>
            <input type="password" name="oldPassword" v-model="oldPassword"/>
        </div>
        <br>
        <div>
            <label for="password" id="password_id">新しいパスワード:  </label>
            <input type="password" name="password" v-model="password"/>
        </div>
        <br>
        <div>
            <label for="againPassword" id="againPassword_id">もう一度入力してください: </label>
            <input type="password" name="againPassword" v-model="againPassword"/>
        </div>
        <br>

        <div class="noDataError_message" v-show="noDataErrorState" >{{ noDataError_message }}</div>
        <div class="anotherDataError_message" v-show="anotherDataErrorState" >{{ anotherDataError_message }}</div>
        <div class="okDataError_message" v-show="okDataErrorState" >{{ okDataError_message }}</div>

        <button class="button1" style='margin-right:30px' @click="keepPassword()" id="keepPassword_btn">保存</button>
        <button class="button2" @click="deleteAll()" id="deleteAll_btn" >リセット</button>
    </div>
    
</template>

<script>


export default {
    name:'PasswordChange_screen',
    data(){
        return{
            oldPassword:"",
            password:"",
            againPassword:"",
            noDataErrorState: false,
            noDataError_message: "",
            anotherDataErrorState: false,
            anotherDataError_message: "",
            okDataErrorState: false,
            okDataError_message:"",

            
        }
    },
    methods: {
        // エラーチェック
        keepPassword() {
            if (this.oldPassword != 111 ) {
                this.noDataErrorState = true;
                this.noDataError_message = "＊古いパスワードが間違います又は未入力です！。";
            }
            else {
                this.noDataErrorState = false;
                this.noDataError_message = "";
            }
            if(this.password != this.againPassword){
                this. anotherDataErrorState = true;
                this.anotherDataError_message = "＊新しいパスワードが一致していない！"
            }
            else {
                this. anotherDataErrorState = false;
                this.anotherDataError_message = "";
            }

            if (this.oldPassword == 111 && this.password == this.againPassword && this.password !="") {
                this.okDataErrorState = true;
                this.okDataError_message = "＊変更成功しました。";
            }
            else{
                this.okDataErrorState = true;
                this.okDataError_message = "";
            }
            
        }
    }
}

</script>
<style>
.button1{
    background-color: white; 
    color: blue; 
    
}
.button2{
    background-color: white; 
    color: blue; 
    
}
.noDataError_message {
    color: red;
}
.anotherDataError_message {
    color: red;
}
.okDataError_message {
    color: red;
}

   -->
  <template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>パスワード修正</span>
      </div>
      <!-- 表单 -->
      <el-form :model="pwdForm" :rules="pwdFormRules" ref="form" label-width="150px">
        <el-form-item label="旧パスワード:" prop="old_pwd">
          <el-input v-model="pwdForm.old_pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新パスワード:" prop="new_pwd">
          <el-input v-model="pwdForm.new_pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新パスワード確認:" prop="re_pwd">
          <el-input v-model="pwdForm.re_pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <button type="primary" v-if="!isSubmitting" @click="keepPassword()">修正</button> -->
          <!-- <button :disabled="isSubmitting" type="primary" @click="keepPassword()">修正</button> -->
          <el-button type="primary" :disabled="pwdForm.old_pwd == '' || pwdForm.new_pwd == ''|| pwdForm.re_pwd !==pwdForm.new_pwd" @click="keepPassword()" >修正</el-button>
          <el-button type="primary" @click="deleteAll()">リセット</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script>
  
  export default {
    name: 'PasswordChange_screen',
    data () {
      //自定义规则
      let checkPassword = (rule, value, callback) =>{
        if(value===""){
          callback(new Error("もう一度入力してください"));
        }else{
          if(value !== this.pwdForm.new_pwd){
            callback(new Error("入力したパスワードが一致していません"));
          }else{
            callback();
          }
        }
      };

      return {
        // 表单的数据对象
        pwdForm: {
          old_pwd: '',
          new_pwd: '',
          re_pwd: '',
          // isSubmitting: false
        },
  //       computed: {
  //   isSubmitting() {
  //     // calculate isSubmitting based on formData
  //     return this.pwdForm.old_pwd === '' && this.pwdForm.new_pwd === '' && this.pwdForm.re_pwd === ''
  //   }
  // },
  
        // 表单的验证规则对象
        pwdFormRules: {
          old_pwd: [
            { required: true, message: '旧パスワードを入力してください', trigger: 'blur' },
            { pattern: /^\S{6,15}$/, message: '6~15桁のパスワードを入力してください', trigger: 'blur' }
          ],
          new_pwd: [
            { required: true, message: '新パスワードを入力してください', trigger: 'blur' },
            {min:6,max:15, pattern: /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)/, message: '6~15桁のパスワード(英数字含む)を入力してください', trigger: 'blur' }
          ],
          re_pwd: [
            {required: true,validator:checkPassword,trigger:["blur","change"]},
            // { pattern: /^\S{6,15}$/, message: '密码长度必须是6-15位的非空字符串', trigger: 'blur' },
          ]
          },
        // pwdFormRules2:{
        //   re_pwd: [
        //     { required: true, message: '请再次确认新密码', trigger: 'blur' },
        //     { pattern: this.new_pwd!==this.re_pwd, message: '前后输入的密码不一致', trigger: 'blur' }
        //   ]
        // },
        
      }
    },
    methods:{
        keepPassword(){
          // this.isSubmitting = true
            // this.$refs.form.validate().then(valid=>{
              //  console.log( 'PasswordChange_screen',this.pwdForm)
            // },
        //     this.$confirm('修改密码, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '修改成功!'
        //   });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消修改'
        //   });          
        // });
        var popups = confirm('修改密码, 是否继续?',)
        if(popups){
          if( /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)/.test(this.pwdForm.new_pwd) && this.pwdForm.old_pwd =="12345678"){
            alert('修改成功');
          console.log( 'PasswordChange_screen',this.pwdForm)
          }else{
            alert('修改失败')
          }
        }else{
          alert('取消')
        }
      },
        //表单数据重置
        deleteAll(){
            this.$refs.form.resetFields()
        }
        }
        
    }
  
  
  </script>
  
  <style lang="less" scoped>
  .el-form {
    width: 500px;
    margin: 0 auto;
  }
//   .label{
//     width: 150px;
// }
  </style> 

 
  