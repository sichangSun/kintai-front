<template>
    <div>
        <div>
              名前  社員番号 <li>{{ Confirm }}</li>
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
                    <td colspan="6" >＜2023/11/01＞～＜2023/11/30＞<button class="btn">編集</button></td>
                </tr>
                <tr>
                    <th>日付</th><th>曜日</th><th>勤休</th><th>出勤</th><th>退勤</th><th>仕事内容</th>
                </tr>
                
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item">
                        <td>{{ item.day }}</td>
                        <td>{{ item.weeks }}</td>
                        <td contenteditable="true">{{ item.workrest }}</td>
                        <td contenteditable="true">{{ item.adwork }}</td>
                        <td contenteditable="true">{{ item.lvwork }}</td>
                        <td contenteditable="true">{{ item.note }}</td>
                    </tr>
                </tbody>
        </table>
        <div class="btns">
            <button @click="ConfirmAlert">本月勤怠確定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Employee_screen',
    data() {
        return {
            Confirm: "本月勤怠未確定",
            items: [
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
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
                { day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note: "" },
            ]
        }
    },
    methods: {
        ConfirmAlert: function () {
            var result = confirm('本月の勤務時間を確定します\r確定後、編集することができなくなります。\r修正が必要になる場合、管理員までご連絡ください')

            if (result) {
                alert('提出完了');
            }
        }
    },
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

button {
    margin: 20px;
}
.btn{
    position: relative;
    left: 70%;
}
.btns {
    position: relative;
    left: 80%;
}
</style>