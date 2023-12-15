<template>
  <div>
    <HeaderMenu_screen/>
    <div>
    <h1>社員管理画面</h1>
      検索：
      <el-input type="text" v-model="employNumber" style="width:350px;" placeholder="名前か社員番号を入力してください" clearable @clear="clearQuery" ref="getValue">
      </el-input>    
      <el-button slot="append" icon="el-icon-search" @click="inquireMember()"></el-button>
      <div>
        <el-button class="btn1" type="primary" @click="manageAll()">一括管理</el-button>
      </div>
       
    </div>
    <br>
    <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'number', order: 'descending'}"
    >
    <el-table-column
      prop="number"
      label="社員番号"
      sortable
      width="180" align="center">
    </el-table-column>

    <el-table-column
      prop=""
      label="区分"
      width="180" align="center">
    </el-table-column>

    <el-table-column
      prop="name"
      label="名前"
      sortable
      width="180" align="center">
    </el-table-column>

    <el-table-column
      prop="sex"
      label="性別"
      width="180" align="center">
    </el-table-column>

    <el-table-column
      prop="note"
      label="備考"
      width="180" align="center">
    </el-table-column>

    <el-table-column label="操作" width="180" align="center">
    <template slot-scope="scope">
      <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          
    </template>
    </el-table-column>
  </el-table>
  <!-- <EditTable class="edit-table" :data-source="tableData" >
    <EditTableColumn prop="number" label="社員番号" sortable>
      <template #edit="{ row }">
        <input v-model="row.number" />
      </template>

    <EditTableColumn prop="kubun" label="区分">
    </EditTableColumn>
      <template #edit="{ row }">
        <input v-model="row.kubun" />
      </template>
    </EditTableColumn>

    <EditTableColumn prop="name" label="姓名" sortable>
      <template #edit="{ row }">
        <input v-model="row.name" />
      </template>
    </EditTableColumn>

    <EditTableColumn prop="sex" label="性別">
      <template #edit="{ row }">
        <input v-model="row.sex" />
      </template>
    </EditTableColumn>

    <EditTableColumn prop="note" label="備考">
      <template #edit="{ row }">
        <input v-model="row.address" />
      </template>
    </EditTableColumn>

    <EditTableColumn label="操作">
      <template #default="{ actions, $index }">
        <button @click="actions.startEditable($index)">操作</button>
      </template>
      <template #edit="{ actions, $index }">
        <button @click="actions.saveEditable($index)">保存</button>
        <button @click="actions.cancelEditable($index)">取消</button>
      </template>
    </EditTableColumn>
  </EditTable> -->

      <div>
        <button class="btn2" @click="Employee" >メイン画面に戻る</button>
      </div>
  </div>
  
</template>

<script>
import HeaderMenu_screen from './HeaderMenu_screen.vue';

const mockData = [
  {
    number:123,
    name:'jjj',
    sex:'M'
  },{
    number:234,
    name:'kkk',
    sex:'M'
  }
]

export default {
  name:'MemberManage',
  data(){
   return{
    employNumber: "",
    tableData:[],
     mockData: [
  {
    number:123,
    name:'jjj',
    sex:'M'
  },{
    number:234,
    name:'kkk',
    sex:'M'
  }
]
   };
  },
  mounted(){
    this.tableData = mockData
  }, 
  methods:{
    Employee({ name, y }){
      name
      y
      this.$router.push('Employee')
    },

    inquireMember(){
      this.tableData = mockData.filter(item => item.number === parseInt(this.employNumber))
    },
    clearQuery(){
      this.tableData = mockData
    }
  },
  components: { HeaderMenu_screen }
};

</script>

<style>
 .btn1{
  position: relative;left: 70%;
 }

 .btn2{
  position: relative;left: 75%;
 }
</style>
