  <template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>パスワード修正</span>
      </div>
      <!-- Form -->
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
          <!-- ポップアップとその検証 -->
          <el-button type="primary" :disabled="pwdForm.old_pwd == '' || pwdForm.new_pwd == ''|| pwdForm.re_pwd !==pwdForm.new_pwd" @click="keepPassword()" >修正</el-button>

          <!-- リセットボタン -->
          <el-button type="primary" @click="deleteAll()">リセット</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script>
  
  export default {
    name: 'PasswordChange_screen',
    data () {
      // re_pwdの検証ルール
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
        // Formのデータ
        pwdForm: {
          old_pwd: '',
          new_pwd: '',
          re_pwd: '',
         
        },
 
  
        // Fromの検証ルール
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
  
          ]
          },
       
        
      }
    },
    methods:{
        keepPassword(){
          
        var popups = confirm('パスワードを修正しますが、よろしいでしょうか?',)
        if(popups){
          if( /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)/.test(this.pwdForm.new_pwd) && this.pwdForm.old_pwd =="12345678"){
            alert('修正成功しました');
          console.log( 'PasswordChange_screen',this.pwdForm)
          }else{
            alert('入力した古いパスワードが間違っています！')
          }
        }else{
          alert('キャンセルしました。')
        }
      },
        //Formのリセット
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

  </style> 

 
  