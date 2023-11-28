<template>
    <div id="HeaderMenu">
        <div class="Header">
            <el-header>
                <el-select class="in_Header" v-model="value" clearable placeholder="メニュー">
                    <el-option 
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled">
                    </el-option>
                </el-select>
            </el-header>
        </div>
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
    el: '#HeaderManu',
    name: 'HeaderMenu_screen',
    data() {
        return {
            options: [
                { value: 'Option1', label: 'パスワード修正' },
                { value: 'Option2', label: '社員管理', disabled: true },
                { value: 'Option3', label: '新規社員追加', disabled: true },
                { value: 'Option4', label: 'ログアウト' },
            ],
            value: '',
        }
    }
}
</script>

<style>

.Header{
    border: 1px solid #a9a9a9;
    width: 100%;
    height: 65px;
}
.in_Header{
    float: left;
}
.el-header{
    line-height: 60px;
}


table{
  width: 80%;
  margin: auto;
}
th{
  width: 15%;
  border:solid 1px #aaaaaa;
}

td{
  width: 30%;
  border:solid 1px #aaaaaa;
}
</style>