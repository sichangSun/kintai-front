<template>
    <div>
        <div>
            名前  社員番号<button @click="basic_info()" id="change_btn">基本情報編集</button>
        </div>
        <div class="Main">
            <el-main>
                <table>
                    <tr>
                        <th colspan="4">11月累計</th>
                    </tr>
                    <tr>
                        <th>本月総日数</th> <td>30日</td> <th>稼働時間</th> <td>160</td>
                    </tr>
                    <tr>
                        <th>平日日数</th> <td>20日</td> <th>xxxx</th> <td>xx</td>
                    </tr>
                    <tr>
                        <th>休日日数</th> <td>10日</td> <th>xxxx</th> <td>xx</td>
                    </tr>
                </table>
            </el-main>
        </div>
        <Record_screen/>
        <div class="btns">
            <button>本月の確定を戻す</button><button>管理者用メイン画面に戻る</button><button>メイン画面に戻る</button>
        </div>
    </div>
</template>

<script>
import Record_screen from './Record_screen.vue';
export default {
    name: 'Administrator_screen',
    data() {
        return {
            
        }
    },
    components: {
        Record_screen
    }
}
</script>

<style>
table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
}
th{
  width: 10%;
  height: auto;
  border:solid 1px #aaaaaa;
}
td{
  width: auto;
  height: auto;
  border:solid 1px #aaaaaa;
}

button{
    margin: 20px;
}

.btns{
    position: relative;
    left: 60%;
}
</style>