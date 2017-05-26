<template>
  <div class="boxlist" :class="{shows:show}">
    <ul class="list-group">
    <itemTodo v-for='item in getTodoList' :item="item"></itemTodo>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import itemTodo from './itemTodo'

export default{
  name:'ItemList',
  data:function(){
    return {
        show:false,
    }
  },
  components: {itemTodo},
  computed:{
    getTodoList:function(){
      return this.$store.state.lists
      
    },
  }
}
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.xuhao{
  margin-right: 5px;
}
.boxlist{
  width: 520px;
  margin: 0 auto;
}

</style>
