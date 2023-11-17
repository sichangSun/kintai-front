<template>
    <div class="frame">
        <title></title>
        <div>
            <label for="login" id="login_id">ログインID</label>
            <input type="text" name="login_id" v-model="login_id" />
        </div>
        <div>
            <label for="password" id="password_id">パスワード</label>
            <input type="password" name="password" v-model="password" />
            <div class="error_message" v-show="ErrorState">{{ ErrorMessage }}</div>
        </div>
        <button @click="login()" id="login_btn">ログイン</button>
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
        login() {
            if (this.login_id === "" || this.password === "") {
                this.ErrorState = true;
                this.ErrorMessage = "＊ログインID、またはパスワードが未入力です。";
            }
            else {
                this.ErrorState = false;
                this.ErrorMessage = "";
            }
        }
    }
}
</script>

<style>
.error_message {
    color: red;
}
</style>