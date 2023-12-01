<template>
    <div class="frame">
        <h1 style="text-align: center;">東進ソリューションズ株式会社 出勤登録システム</h1>
        <div class="login_id">
            <!-- ログインID入力 -->
            <label for="login" id="login_id">ログインID</label>
            <input type="text" name="login_id" v-model="login_id"/>
        </div>
        <div class="password_id">
            <!-- パスワード入力 -->
            <label for="password" id="password_id">パスワード </label>
            <input type="password" name="password" v-model="password"/>
            <!-- エラーメッセージ -->
            <div class="error_message" v-show="ErrorState" >{{ ErrorMessage }}</div>
        </div>
        <div class="login_btn">
            <!-- ログインボタン -->
            <button @click="login" id="login_btn">ログイン</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login_screen',
    data() {
        return {
            login_id: "",
            password: "",
            ErrorMessage: "",
            ErrorState: false,
        }
    },
    methods: {
        // エラーチェック
        login() {

            if (this.login_id === "" || this.password === "") {
                this.ErrorState = true;
                this.ErrorMessage = "＊ログインID、またはパスワードが未入力です。";
            }
            else {
                this.ErrorState = false;
                this.ErrorMessage = "";
                this.$router.push('Employee')
            }
        }
    }
}
</script>

<style>
.login_id{
    text-align: center;
}
.password_id{
    text-align: center;
}
.login_btn{
    text-align: center;
}
.error_message {
    color: red;
}
</style>