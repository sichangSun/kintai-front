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
                    <td colspan="6" style="margin: 1px;">
                        <div v-for="(value, key) in variables" :key="key"> 
                            <p v-if="months[0] == selectedMonth && key === 'A'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[1] == selectedMonth && key === 'B'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[2] == selectedMonth && key === 'C'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[3] == selectedMonth && key === 'D'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[4] == selectedMonth && key === 'E'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[5] == selectedMonth && key === 'F'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[6] == selectedMonth && key === 'G'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[7] == selectedMonth && key === 'H'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[8] == selectedMonth && key === 'I'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[9] == selectedMonth && key === 'J'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[10] == selectedMonth && key === 'K'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[11] == selectedMonth && key === 'L'">{{ value.start }} ～ {{ value.end }}</p>
                        </div>
                        <i class="el-icon-date" @click="changeDropdown"></i>
                        <div v-if="isDropdownValue" class="dropdown">
                            <ul>
                                <li v-for="(month, index) in months" :key="index" @click="selectMonth(month)">{{ month }}</li>
                            </ul>
                        </div>
                        {{ selectedMonth }}
                        <button class="btn" v-if="showButton1" @click="toggleButtons('A')">{{ isContentEditable ? "編集" : "編集" }}</button>
                    </td>
                </tr>
                <tr>
                    <th>日付</th>
                    <th>曜日</th>
                    <!-- 勤怠フィルタ -->
                    <th>勤休<i class="el-icon-arrow-down" @click="AttendanceDropdown"></i>
                        <div v-if="isDropdownAttendance" class="dropdown">
                            <ul>
                                <li v-for="(Attendance, index) in Attendances" :key="index" @click="selectAttendance(Attendance)">{{ Attendance }}</li>
                            </ul>
                        </div>
                    </th>
                    <th>出勤</th>
                    <th>退勤</th>
                    <th>仕事内容</th>
                </tr>
            </thead>
            <!-- 勤怠入力 -->
            <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index">
                    <td>{{ item.day }}</td>
                    <td>{{ item.youbi }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update(item, 'workrest')">{{ item.workrest }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update(item, 'startwork')">{{ item.startwork }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update(item, 'endwork')">{{ item.endwork }}</td>
                    <td :contenteditable="isContentEditable.toString()" @input="update(item, 'note')">{{ item.note }}</td>
                </tr>
            </tbody>
        </table>
        <div class="btns">
            <button v-if="showButton2" @click="toggleButtons('B')">保存</button>
            <button v-if="confirmbutton" @click="ConfirmAlert">本月勤怠確定</button>
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
            isContentEditable: false, //勤怠編集権限
            Confirm: "本月勤怠未確定", //確定後文字変更
            showButton1: true, //編集ボタン表示
            showButton2: false, //編集保存ボタン表示
            confirmbutton: true, //本月勤怠管理ボタン表示
            isDropdownValue: false, //月の選択を行うボタン
            selectedMonth: "January", //何月か判断する
            Monthly: "<1/1>～<1/31>", //表示用
            selectedAttendance: "全て", //勤怠フィルタリング判断
            isDropdownAttendance: false, //勤怠ドロップダウンリスト
            filterOption: { //平日休日判定
                weekday: false,
                weekend: false,
            },
            weekdayMap: { //平日休日判定
                Monday: "Weekday",
                Tuesday: "Weekday",
                Wednesday: "Weekday",
                Thursday: "Weekday",
                Friday: "Weekday",
                Saturday: "Weekend",
                Sunday: "Weekend",
            },
            months: [ //何月判定
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            Attendances: [//出勤判定
                '全て','出勤','休暇'
            ],
            variables: {
                A: { start: '1/1', end: '1/31' },
                B: { start: '2/1', end: '2/28' },
                C: { start: '3/1', end: '3/31' },
                D: { start: '4/1', end: '4/30' },
                E: { start: '5/1', end: '5/31' },
                F: { start: '6/1', end: '6/30' },
                G: { start: '7/1', end: '7/31' },
                H: { start: '8/1', end: '8/31' },
                I: { start: '9/1', end: '9/30' },
                J: { start: '10/1', end: '10/31' },
                K: { start: '11/1', end: '11/30' },
                L: { start: '12/1', end: '12/31' },
                },
            headers: ['日付','曜日','勤休','出勤','退勤','仕事内容'],
            items: [ //表の要素記入
                { day: '', youbi: '', workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },//この行をテストとする
                { day: '', youbi: '', workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },//この行をテストとする
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Thursday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Friday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Saturday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Sunday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Monday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Tuesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "休暇", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
                { day: 1, youbi: "Wednesday", workrest: "出勤", startwork: "9:00", endwork: "18:00", note: "" },
            ]
        };
    },
    mounted() {
        this.fetchday();
        this.fetchyoubi();
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                const dayOfWeek = item.youbi;
                const filterValue = this.$data.weekdayMap[dayOfWeek];
                const attendanceFilter = this.selectedAttendance === '全て' || item.workrest === this.selectedAttendance;

                if (this.filterOption.weekday && filterValue === "Weekday" && attendanceFilter) {
                    return true;
                }
                if (this.filterOption.weekend && filterValue === "Weekend" && attendanceFilter) {
                    return true;
                }
                if (!this.filterOption.weekday && !this.filterOption.weekend && attendanceFilter) {
                    return true;
                }
                return false;
            });
        }
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
        AttendanceDropdown() {
            this.isDropdownAttendance = !this.isDropdownAttendance;
        },
        selectMonth(month) {
            this.selectedMonth = month;
            this.isDropdownValue = false;
        },
        selectAttendance(Attendance) {
            this.selectedAttendance = Attendance;
            this.isDropdownAttendance = false;
        },
        //勤務表編集機能
        toggleButtons(clickedButton) {
            this.showButton1 = !this.showButton1;
            this.showButton2 = !this.showButton2;
            this.confirmbutton = !this.confirmbutton;
            if (clickedButton == 'B') {
                console.log();
                // alert('今月の勤務時間を保存しますか？');
                var alarm = confirm('今月の勤務時間を保存しますか？');
                if (!alarm) {
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
    position: relative; left: 65%;
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