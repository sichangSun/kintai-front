<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>日付</th><th>曜日</th><th>勤休</th><th>出勤</th><th>退勤</th><th>仕事内容</th>
                </tr>
                <tbody>
                    <tr v-for="item in items" :key="item">
                        <td>{{ item.day }}</td>
                        <td>{{ item.day }}</td>
                        <td>{{ item.day }}</td>
                        <td>{{ item.day }}</td>
                        <td>{{ item.day }}</td>
                        <td>{{ item.day }}</td>
                    </tr>
                </tbody>
            </thead>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Record_screen',
    date() {
        return {
            items: [
                {day: 1, weeks: "水", workrest: "勤", adwork: "9:00", lvwork: "18:00", note:""}
            ]
        }
    },
}
</script>

<style>
.btn{
    position: relative;
    left: 70%;
}

</style>