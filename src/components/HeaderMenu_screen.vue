<template>
    <div id="HeaderMenu">
        <div class="Header">
            <el-header>
                <el-select v-model="value" clearable placeholder="メニュー">
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
                { value: '', label: '' },
                { value: '', label: '' },
                { value: 'Option6', label: 'ログアウト' },
            ],
            value: '',
        }
    }
}
</script>

<style>

</style>