<template>
  <div>
    <div>
    <h1>社員管理画面</h1>
    検索：
      <el-input style="width:350px;" placeholder="名前か社員番号を入力してください" v-model="input1" ></el-input>    
      <el-button type="primary" icon="el-icon-search" @click="inquireMember()"></el-button>
      <tr> <el-button type="primary" @click="manageAll()">一括管理</el-button></tr>
    </div>
    <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'number', order: 'descending'}"
    >
    <el-table-column
      prop="number"
      label="社員番号"
      sortable
      width="180">
    </el-table-column>

    <el-table-column
      prop=""
      label="区分"
      width="180">
    </el-table-column>

    <el-table-column
      prop="name"
      label="名前"
      sortable
      width="180">
    </el-table-column>

    <el-table-column
      prop="sex"
      label="性別"
      width="180">
    </el-table-column>

    <el-table-column
      prop="note"
      label="備考"
      width="180">
    </el-table-column>

    <el-table-column label="操作" width="180">
    <template slot-scope="scope">
      <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          
    </template>
    </el-table-column>
  </el-table>
      <div>
        <button @click="Employee">メイン画面に戻る</button>
      </div>
  </div>
  
</template>

<script>
// import axios from 'axios';
// import { CheckboxButton } from 'element-ui';

export default {
  data(){
    return{
      input1:'',
  mounted() {
  // axios.get("http:123213/list").then(res => {
  //   console.log(res);
  //   this.tableData = res.data;
  // })
  this.tableData = [
    {
      number:123,
      name:'jjj'
    },{
      number:'234',
      name:'kkk'
    }
  ]
},
    tableData:[]
  }
},


// token -> chen

// chen
// select * from member as m where m.uid = chen  
// class 111{
//    int number;
//    String name;
// }

// List<> res = new ArrayList();
// return res;
methods:{
  handleEdit(){
    
  }
}
}
</script>

<style>
 
</style>