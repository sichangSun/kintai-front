<template>
<!--  Form-->
  <div id="InfoUpdateForm" v-if="isVisible">
    <el-form label-position="left" :inline="true" :model="formInline" label-width="200px">
      <el-row>
        <el-col :span="11">
          <el-form-item label="氏名">
            <el-input v-model="formInline.name" placeholder="氏名" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="カタカナ">
            <el-input v-model="formInline.katakana" placeholder="カタカナ" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="生年日月">
            <div style="width: 178px">
            <el-date-picker
                v-model="formInline.birthday"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                style="width:249px"
                >
            </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="電話番号">
            <el-input v-model="formInline.phonenumber" placeholder="電話番号" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="メールアドレス">
            <el-input v-model="formInline.email" placeholder="社員のメールアドレス" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="マイナンバー">
            <el-input v-model="formInline.mynumber" placeholder="社員のマイナンバー番号" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="在留カード番号">
            <el-input v-model="formInline.zairyuucardbango" placeholder="在留カード番号" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="在留期間">
            <div style="width: 178px">
              <el-date-picker
                  v-model="formInline.zairyuukikan"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  style="width:249px"
              >
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="郵便番号">
            <el-input v-model="formInline.yuubinbango" placeholder="郵便番号" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="住所">
            <el-input v-model="formInline.zyuusyo" placeholder="住所" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="最寄駅">
            <el-input v-model="formInline.moyorieki" placeholder="最寄駅" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="日本語資格">
            <el-input v-model="formInline.nihongosikaku" placeholder="日本語資格" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="その他資格">
            <el-input v-model="formInline.sonohokasikaku" placeholder="その他資格" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="来日時間">
            <div style="width: 178px">
              <el-date-picker
                  v-model="formInline.rainitizikan"
                  type="date"
                  placeholder="来日時間"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  style="width:249px"
              >
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="最終学歴学校名">
            <el-input v-model="formInline.saisyuugakureigakkouna" placeholder="最終学歴学校名" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="卒業時間">
            <div style="width: 178px">
              <el-date-picker
                  v-model="formInline.sotugyouzikan"
                  type="date"
                  placeholder="卒業時間"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  style="width:249px"
              >
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="入社日">
            <div style="width: 178px">
              <el-date-picker
                  v-model="formInline.nyuusyabi"
                  type="date"
                  placeholder="入社日"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  style="width:249px"
              >
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="勤務経験年数">
            <el-input v-model="formInline.kinmukeikennensuu" placeholder="勤務経験年数" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="銀行名">
            <el-input v-model="formInline.gingoumei" placeholder="銀行名" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="支店番号">
            <el-input v-model="formInline.sitenbangou" placeholder="支店番号" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="口座番号">
            <el-input v-model="formInline.kouzabangou" placeholder="口座番号" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="銀行名義">
            <el-input v-model="formInline.ginkoumeigi" placeholder="銀行名義" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="在日緊急連絡先 氏名">
            <el-input v-model="formInline.zainitikinkyuurenrakusimei" placeholder="在日緊急連絡先 氏名" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="在日緊急連絡先 電話番号">
            <el-input v-model="formInline.zainitikinkyuurenrakudenwa" placeholder="在日緊急連絡先 電話番号" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          <el-form-item label="緊急連絡先 親氏名">
            <el-input v-model="formInline.kinkyuurenrakuoyasimei" placeholder="緊急連絡先 親氏名" class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="緊急連絡先 電話番号">
            <el-input v-model="formInline.kinkyuurenrakudenwa" placeholder="緊急連絡先 電話番号" class="input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>

    <br/>
    <br/>
<!--Button-->
    <el-row label-width="200px" class="right-aligned-button">
<!--      <el-button @click="getFormData"> 测试取得数据 </el-button>-->
      <el-button @click="cancelInfoUpdateForm" > キャンセル </el-button>
      <el-button> 管理画面に戻る </el-button>
      <el-button type="primary" @click="confirmBox"> 保存 </el-button>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'InfoUpdateForm',
  data() {
    return {
      formInline: {
        name: '',
        katakana: '',
        birthday: '',
        phonenumber: '',
        email: '',
        mynumber: '',
        zairyuucardbango:'',
        zairyuukikan:'',
        yuubinbango:'',
        zyuusyo:'',
        moyorieki:'',
        nihongosikaku:'',
        sonohokasikaku:'',
        rainitizikan:'',
        saisyuugakureigakkouna:'',
        sotugyouzikan:'',
        nyuusyabi:'',
        kinmukeikennensuu:'',
        gingoumei:'',
        sitenbangou:'',
        kouzabangou:'',
        ginkoumeigi:'',
        zainitikinkyuurenrakusimei:'',
        zainitikinkyuurenrakudenwa:'',
        kinkyuurenrakuoyasimei:'',
        kinkyuurenrakudenwa:''
      },
      isVisible:true
    };
  },
  methods:{
    // 取得数据（测试）
    // getFormData(){
    //   console.log('InfoUpdateForm',this.formInline)
    // },

    // 提示窗口＆保存
    confirmBox(){
      this.$confirm('是否确定保存信息？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
          }
      ).then(() => {
        this.$message({
          type:'success',
          message:'保存成功！'
        });
        this.isVisible = false;
        this.$router.push('/');
      }).catch(() =>{
        this.$message({
          type:'info',
          message:'已取消保存！'
        })
      });
    },
    // キャンセルボタン
    cancelInfoUpdateForm(){
      this.$router.push('/')
    },
    // // 添加关闭 Dialog 的方法
    // closeDialog() {
    //   // 触发自定义事件，通知父组件关闭 Dialog
    //   this.$emit('closeDialog');
    // },
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");

.input {
  width: 140%;
}

.custom-date-picker .el-date-editor {
  line-height: 40px; /* 调整日期选择框文本垂直对齐 */
}

.right-aligned-button {
  float: right;
  width: 53%;
}
</style>
