<template>
    <div>
        <div>
            名前  社員番号<button @click="basic_info()" id="change_btn">基本情報編集</button>
        </div>
        <div class="Main">
            <el-main>
                <table>
                    <tr>
                        <th>本月総日数</th> <td>xx日</td> <th>稼働時間</th> <td></td>
                    </tr>
                    <tr>
                        <th>平日日数</th> <td></td> <td></td> <td></td>
                    </tr>
                    <tr>
                        <th>休日日数</th> <td></td> <td></td> <td></td>
                    </tr>
                </table>
            </el-main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ad(ministrator_screen',
    data() {
        return {
            
        }
    }
}
</script>