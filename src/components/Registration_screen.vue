<template>
    <div class="frame">
        <h1 style="text-align: center;">社員登録</h1>
        <div class="login_id">
            <!-- ログインID入力 -->
            <label for="login" id="login_id">社員番号</label>
            <input type="text" name="login_id" v-model="login_id" />
        </div>
        <div class="password_id">
            <!-- パスワード入力 -->
            <label for="password" id="password_id">パスワード</label>
            <input type="password" name="password" v-model="password" />
            <!-- エラーメッセージ -->
            <div class="error_message" v-show="ErrorState">{{ ErrorMessage }}</div>
        </div>
        <div class="login_btn">
            <!-- ログインボタン -->
            <button @click="Registration" id="Registration_btn">登録</button><button @click="cancel">キャンセル</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Registration_screen',
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
        Registration() {
            if (this.login_id == "" || this.password == "") {
                this.ErrorState = true;
                this.ErrorMessage = "社員番号、またはパスワードが未入力です";
            }
            else if (!/^[0-9]+$/.test (this.login_id)) {
                this.ErrorState = true;
                this.ErrorMessage = "数字で入力してください";
            }
            else if (this.login_id == this.password) {
                var result = confirm('この内容でよろしいでしょうか\r社員番号 : ' + this.login_id);
                if (result) {
                    alert('登録完了');
                    this.$router.push('MemberManage')
                }
            }
            else {
                this.ErrorState = true;
                this.ErrorMessage = "社員番号とパスワードは同じである必要があります";
            }
        },
        cancel() {
            this.$router.push('MemberManage')
        }
    }
}
</script>

<style>
.login_id {
    text-align: center;
}

.password_id {
    text-align: center;
}

.login_btn {
    text-align: center;
}

.error_message {
    color: red;
}</style>