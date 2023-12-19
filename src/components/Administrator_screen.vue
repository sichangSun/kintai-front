<template>
    <div>
        <HeaderMenu_screen/>
        <div>
            名前  社員番号<button @click="basic_info" id="change_btn">基本情報編集</button>
        </div>
        <div class="Main">
            <el-main>
                <table>
                    <tr>
                        <th colspan="4">{{ countmonth }}月累計</th>
                    </tr>
                    <tr>
                        <th>本月総日数</th> <td>{{ countday }}日</td> <th>稼働時間</th> <td>{{ weekdayCount * 8 }}</td>
                    </tr>
                    <tr>
                        <th>平日日数</th> <td>{{ weekdayCount }}日</td> <th>xxxx</th> <td>xx</td>
                    </tr>
                    <tr>
                        <th>休日日数</th> <td>{{ countday - weekdayCount }}日</td> <th>xxxx</th> <td>xx</td>
                    </tr>
                </table>
            </el-main>
        </div>
        <table>
            <thead>
                <tr>
                    <td colspan="6" style="margin: 1px;">
                        <div v-for="(value, key) in variables" :key="key"> 
                            <p v-if="months[0] == selectedMonth && key === '0'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[1] == selectedMonth && key === '1'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[2] == selectedMonth && key === '2'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[3] == selectedMonth && key === '3'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[4] == selectedMonth && key === '4'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[5] == selectedMonth && key === '5'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[6] == selectedMonth && key === '6'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[7] == selectedMonth && key === '7'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[8] == selectedMonth && key === '8'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[9] == selectedMonth && key === '9'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[10] == selectedMonth && key === '10'">{{ value.start }} ～ {{ value.end }}</p>
                            <p v-if="months[11] == selectedMonth && key === '11'">{{ value.start }} ～ {{ value.end }}</p>
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
        <div class="btn3">
            <button v-if="showButton2" @click="toggleButtons('B')">保存</button>
            <button v-if="confirmbackbutton" @click="confirmback">本月の確定を戻す</button>
            <button v-if="MemberManagebackbutton" @click="MemberManage">管理者用メイン画面に戻る</button>
            <button v-if="Employeebackbutton" @click="Employee">メイン画面に戻る</button>
        </div>
    </div>
</template>

<script>
import HeaderMenu_screen from './HeaderMenu_screen.vue';
import axios from 'axios';
export default {
    name: 'Administrator_screen',
    data() {
        return {
            isContentEditable: false, //勤怠編集権限
            showButton1: true, //編集ボタン表示
            showButton2: false, //編集保存ボタン表示
            confirmbackbutton: true,
            MemberManagebackbutton: true,
            Employeebackbutton: true,
            isDropdownValue: false, //月の選択を行うボタン
            selectedMonth: "January", //何月か判断する
            Monthly: "<1/1>～<1/31>", //表示用
            selectedAttendance: "全て", //勤怠フィルタリング判断
            isDropdownAttendance: false, //勤怠ドロップダウンリスト
            countmonth: '', //何月表示
            countday: '', // 今月の日数表示
            weekdayCount: 0, //平日日数表示
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
                '全て', '出勤', '休暇'
            ],
            variables: {//指定された月の月初と月末表示
                0: { start: '1/1', end: '1/31' },
                1: { start: '2/1', end: '2/28' },
                2: { start: '3/1', end: '3/31' },
                3: { start: '4/1', end: '4/30' },
                4: { start: '5/1', end: '5/31' },
                5: { start: '6/1', end: '6/30' },
                6: { start: '7/1', end: '7/31' },
                7: { start: '8/1', end: '8/31' },
                8: { start: '9/1', end: '9/30' },
                9: { start: '10/1', end: '10/31' },
                10: { start: '11/1', end: '11/30' },
                11: { start: '12/1', end: '12/31' },
            },
            headers: ['日付', '曜日', '勤休', '出勤', '退勤', '仕事内容'],//ヘッダー表示
            items: [//勤怠表内容
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
        }
    },
    mounted() {
        this.fetchday();
        this.fetchyoubi();
        this.updateMonth();
        this.updateDay();
        this.updateWeekdayCount();
        this.updateWeekendCount();
    },
    computed: {
        //フィルタリング機能
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
                const response = await axios.get('バックエンドのゲットリクエストURL貼る');

                this.items.day = response.data.nitisuu;
            } catch(error) {
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
        //今月が何月かを判断する
        updateMonth() {
            var monthval = new Date();
            var monthlog = monthval.getMonth()+1;
            this.countmonth = monthlog;
        },
        //今月は何日あるかを判断する
        updateDay() {
            let dayval = new Date();
            dayval.setMonth(dayval.getMonth() + 1, 0);
            this.countday = dayval.getDate();
        },
        //今月の出勤日が何日かを判断する
        updateWeekdayCount() {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

            let weekdayCount = 0;
            for (let day = 1; day <= lastDayOfMonth; day++) {
                const currentDay = new Date(year, month, day).getDay();
                // 0は日曜日、6は土曜日なので、平日の場合は0～5の範囲になります
                if (currentDay >= 1 && currentDay <= 5) {
                    weekdayCount++;
                }
            }
            this.weekdayCount = weekdayCount;
        },
        //画面遷移 基本資料修正画面
        basic_info() {
            this.$router.push('InfoUpdateForm')
        },
        //何月の勤怠を編集したいときに使うボタンの表示非表示
        changeDropdown() {
            this.isDropdownValue = !this.isDropdownValue;
        },
        //勤務日と休暇日をフィルタリングする際に使うボタン
        AttendanceDropdown() {
            this.isDropdownAttendance = !this.isDropdownAttendance;
        },
        //何月の勤怠を編集するか選ぶ
        selectMonth(month) {
            this.selectedMonth = month;
            this.isDropdownValue = false;
        },
        //勤務日と休暇日をフィルタリングする
        selectAttendance(Attendance) {
            this.selectedAttendance = Attendance;
            this.isDropdownAttendance = false;
        },
        confirmback() {
            
        },
        //画面遷移 社員管理画面
        MemberManage() {
            this.$router.push('MemberManage')
        },
        //画面遷移 メイン画面
        Employee() {
            this.$router.push('Employee')
        },
        //勤怠表提出処理
        toggleButtons(clickedButton) {
            this.showButton1 = !this.showButton1;
            this.showButton2 = !this.showButton2;
            this.confirmbackbutton = !this.confirmbackbutton;
            this.MemberManagebackbutton = !this.MemberManagebackbutton;
            this.Employeebackbutton = !this.Employeebackbutton;
            if (clickedButton == 'B') {
                console.log();
                // alert('今月の勤務時間を保存しますか？');
                var alarm = confirm('今月の勤務時間を保存しますか？');
                if (!alarm) {
                    this.showButton1 = !this.showButton1;
                    this.showButton2 = !this.showButton2;
                    this.confirmbackbutton = !this.confirmbackbutton;
                    this.MemberManagebackbutton = !this.MemberManagebackbutton;
                    this.Employeebackbutton = !this.Employeebackbutton;
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
        },
        
    },
    components: { HeaderMenu_screen }
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

.btn3{
    margin-left: 60%;
}
</style>