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
        <table>
            <thead>
                <tr>
                    <td colspan="6" >＜2023/11/01＞～＜2023/11/30＞<button class="btn" @click="toggleContentEditable">{{ isContentEditable ? "編集終了" : "編集開始" }}</button></td>
                </tr>
                <tr>
                    <th>日付</th><th>曜日</th><th>勤休</th><th>出勤</th><th>退勤</th><th>仕事内容</th>
                </tr>
            
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    <td>{{ item.day }}</td>
                    <td>{{ item.weeks }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.workrest }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.adwork }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.lvwork }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.note }}</td>
                </tr>
            </tbody>
        </table>
        <div class="btns">
            <button>本月の確定を戻す</button><button>管理者用メイン画面に戻る</button><button @click="Employee">メイン画面に戻る</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Administrator_screen',
    data() {
        return {
            isContentEditable: false,
            Confirm: "本月勤怠未確定",
            items: [
                { day: '', weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },//この行をテストとする
                { day: '', weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: '', weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: '', weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: '', weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
            ]
        }
    },
    mounted() {
        this.fetchday
    },
    methods: {
        async fetchday() {
            try {
                const response = await axios.get('バックエンドのゲットリクエスト送信');

                this.items.day = response.data.nitisuu;
            } catch(error) {
                console.error('Error fetching nitisuu value', error);
            }

        },
        ConfirmAlert() {
            var result = confirm('本月の勤務時間を確定します\r確定後、編集することができなくなります。\r修正が必要になる場合、管理員までご連絡ください')

            if (result) {
                alert('提出完了');
                this.isContentEditable = false;
                this.Confirm = "本月勤怠確定";
            }
        },
        toggleContentEditable() {
            // contenteditableを切り替える
            this.isContentEditable = !this.isContentEditable;

            // 編集が有効になったら、セルにフォーカスを設定
            if (this.isContentEditable) {
                this.$refs.editableCell.focus();
            }
        },
        update(event) {
            // 編集中のテキストを更新
            this.item.note = event.target.textContent;
        },
        Employee() {
            this.$router.push('Employee')
        },
    },
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

/* .btns{
    margin-left: 5%;
} */
</style>