<template>
<div class="addItem form-group">
  <form @submit.prevent="addItem" role="form" class="form-horizontal" >
    <div class="input-group">
      <input type="text" class="form-control" v-model="input">
      <div class="input-group-btn">
        <button type="submit" class="btn btn-default">Add</button>
      </div>
    </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'addItem',
  data:function(){
    return {
      input:'输入内容！'
    }
  },
  methods:{
    addItem : function(){
       const todo = {
        id : 0,
        desc :'',
      };
      if(this.input==''){
        alert('不能为空');
        return;
      }
      todo.desc = this.input
      //this.$store.dispatch('addNewTodo', todo); 
      this.$store.dispatch('addNewTodo', todo).then(()=>{
              this.input = '';
            }, ()=>{
              alert('出错');
            });
    }
  },
}
</script>
<!-- 样式 -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.addItem{
  width: 520px;
  margin: 0 auto 10px;
  overflow: hidden;
}
</style>
