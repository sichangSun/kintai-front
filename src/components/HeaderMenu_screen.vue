<template>
    <div id="HeaderMenu" class="Header">
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
</template>

<script>

export default {
    name: 'HeaderMenu_screen',
    data() {
        return {
            options: [
                { value: 'Option1', label: 'パスワード修正' },
                { value: 'Option2', label: '社員管理', disabled: true },
                { value: 'Option3', label: '新規社員追加', disabled: true },
                { value: 'Option4', label: '管理者メイン画面', },
                { value: 'Option5', label: 'ログアウト' },
            ],
            value: '',
        };
    },
}
</script>

<style>

.Header{
    border: 1px solid #a9a9a9;
    width: 100%;
    height: 65px;
}
.in_Header{
    margin-left: 85%;
}
.el-header{
    line-height: 60px;
}
</style>