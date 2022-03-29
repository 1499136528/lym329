<template>
      <div>
          <el-table :data='arrs'>
              <el-table-column prop='id' label="文章标题"></el-table-column>
              <el-table-column prop='name' label="作者"></el-table-column>
              <el-table-column prop='count' label="浏览亮"></el-table-column>
               <el-table-column prop='huifu' label="回复"></el-table-column>
              <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
              </el-table-column>
          </el-table>
          

          
      </div>
</template>

<script>
import instance from '../../api/index'
export default {
    data(){
      return {
        arrs:null
      }
    },
    methods:{
      async gettable(){
        const {data}=await instance.get('/homeindex');
        this.arrs=data;
      },
      handleEdit(index, row) {
        console.log(index, row);

      },
      handleDelete(index, row) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          this.deletefn(index);
          
        }).catch(()=>{
          console.log('取消了')
        })
      },
      async deletefn(id){
        const {data}=await instance.delete('/homeindex/'+id);
        this.gettable()
      }
    },
    created(){
      this.gettable()
    }
}
</script>

<style>

</style>