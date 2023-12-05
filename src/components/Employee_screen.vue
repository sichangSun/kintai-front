<template>
    <div>
        <HeaderMenu_screen/>
        <div style="margin-top: 10px;">
              名前  社員番号 {{ Confirm }}
        </div>
        <div class="Main">
            <!-- 累計日数表示 -->
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
                    <td colspan="6" >＜2023/11/01＞～＜2023/11/30＞
                        <i class="el-icon-date" @click="changeDropdown"></i>
                        <div v-if="isDropdownValue" class="dropdown">
                            <ul>
                                <li v-for="(month, index) in months" :key="index" @click="selectMonth(month)">{{ month }}</li>
                            </ul>
                        </div>
                        {{ selectedMonth }}
                        <button class="btn" v-if="showButton1" @click="toggleButtons('A')">{{ isContentEditable ? "編集" : "編集" }}</button></td>
                </tr>
                <tr>
                    <th>日付</th><th>曜日</th><th>勤休</th><th>出勤</th><th>退勤</th><th>仕事内容</th>
                </tr>
            </thead>
            <!-- 勤怠入力 -->
            <tbody>
                <tr v-for="item in items" :key="item">
                    <td>{{ item.day }}</td>
                    <td>{{ item.youbi }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.workrest }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.adwork }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.lvwork }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update">{{ item.note }}</td>
                </tr>
            </tbody>
        </table>
        <div class="btns">
            <button v-if="showButton2" @click="toggleButtons('B')">保存</button><button v-if="confirmbutton" @click="ConfirmAlert">本月勤怠確定</button>
        </div>
    </div>
</template>

<script>
import HeaderMenu_screen from './HeaderMenu_screen.vue';
import axios from 'axios';

export default {
    name: 'Employee_screen',
    data() {
        return {
            isContentEditable: false, //勤怠管理送信時確認
            Confirm: "本月勤怠未確定", //確定後文字変更
            showButton1: true, //編集ボタン表示
            showButton2: false, //編集保存ボタン表示
            confirmbutton: true, //本月勤怠管理ボタン表示
            isDropdownValue: false, //
            selectedMonth: "January", //何月か判断する
            months: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            items: [
                { day: '', youbi: '', workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },//この行をテストとする
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, youbi: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
            ]
        };
    },
    mounted() {
        this.fetchday();
        this.fetchyoubi();
    },
    methods: {
        //日付データをバックエンドから受け取る
        async fetchday() {
            try {
                const responseday = await axios.get('バックエンドのゲットリクエストURL貼る');

                this.items.day = responseday.data.nitisuu;
            } catch (error) {
                console.error('Error fetching nitisuu value', error);
            }
        },
        //曜日データをバックエンドから受け取る
        async fetchyoubi() {
            try {
                const responseyoubi = await axios.get("バックエンドのゲットリクエストURL貼る");

                this.items.youbi = responseyoubi.data.youbi;
            } catch (error) {
                console.error('Error fetching youbi value', error);
            }
        },
        //勤務表送信時確認アラート機能
        ConfirmAlert() {
            var result = confirm('本月の勤務時間を確定します\r確定後、編集することができなくなります。\r修正が必要になる場合、管理員までご連絡ください');
            if (result) {
                alert('提出完了');
                this.isContentEditable = false;
                this.showButton1 = false;
                this.Confirm = "本月勤怠確定";
            }
        },
        changeDropdown() {
            this.isDropdownValue = !this.isDropdownValue;
        },
        selectMonth(month) {
            this.selectedMonth = month;
            this.isDropdownValue = false;
        },
        //勤務表編集機能
        toggleButtons(clickedButton) {
            this.showButton1 = !this.showButton1;
            this.showButton2 = !this.showButton2;
            this.confirmbutton = !this.confirmbutton;
            if (clickedButton == 'B') {
                // alert('今月の勤務時間を保存しますか？');
                var alarm = confirm('今月の勤務時間を保存しますか？');
                if (!alarm){
                    this.showButton1 = !this.showButton1;
                    this.showButton2 = !this.showButton2;
                    this.confirmbutton = !this.confirmbutton;
                }
            }
            this.isContentEditable = !this.isContentEditable;
            if (this.isContentEditable) {
                this.$refs.editableCell.focus();
            }
        },
        // 編集中のテキストを更新
        update(event) {
            this.item.note = event.target.textContent;
        }
    },
    components: { HeaderMenu_screen }
}
</script>

<style>
table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
}

th {
    width: 10%;
    height: auto;
    border: solid 1px #aaaaaa;
}

td {
    width: auto;
    height: auto;
    border: solid 1px #aaaaaa;
}


.btn{
    margin: 10px;
    padding: 3px;
    height: auto;
    margin-left: 60%; 
}
.btns {
    margin-left: 80%;
}

.dropdown {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>