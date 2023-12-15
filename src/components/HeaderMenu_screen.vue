<template>
    <div id="HeaderMenu" class="Header">
        <el-header>
            {{ time }}
            <el-select class="in_Header" v-model="value" clearable placeholder="メニュー" @change="Headermenuchenge">
                
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
                { value: 'Option1', label: 'メイン画面' },
                { value: 'Option2', label: 'パスワード修正' },
                { value: 'Option3', label: '社員管理', disabled: false },
                { value: 'Option4', label: '新規社員追加', disabled: false },
                { value: 'Option5', label: 'ログアウト' },
            ],
            value: '',
            time: '',
        };
    },
    mounted() {
        setInterval(this.updateTime, 100);
    },
    methods:{
        updateTime() {
            var nowTime = new Date(); //  現在日時を得る
            var nowHour = ('0' + nowTime.getHours()).slice(-2); // 時を抜き出す
            var nowMin = ('0' + nowTime.getMinutes()).slice(-2); // 分を抜き出す
            var nowSec = ('0' + nowTime.getSeconds()).slice(-2); // 秒を抜き出す

            this.time = nowHour + ':' + nowMin + ':' + nowSec;
        },
        Headermenuchenge() {
            if (this.value == 'Option1') {
                this.$router.push('Employee')
            }
            if (this.value == 'Option2') {
                this.$router.push('PasswordChange')
            }
            if (this.value == 'Option3') {
                this.$router.push('MemberManage')
            }
            if (this.value == 'Option5') {
                this.$router.push('Registration')
            }
        }
    },
}
</script>

<style>

.Header{
    border: 1px solid #a9a9a9;
    width: 100%;
    height: 65px;
}
.el-header{
    margin-left: 75%;
    line-height: 60px;
}
</style>