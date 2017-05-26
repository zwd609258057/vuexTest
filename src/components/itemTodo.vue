<template>
<li class="list-group-item" :class="{showEdit:show}">
   <div class="showlist"> 
        <span class="xuhao" 
              v-text="item.id">0</span>
        <span v-text="item.desc"></span>
        <span class="glyphicon glyphicon-remove-sign" 
              aria-hidden="true" 
              :itemId="item.id" 
              @click="removeItem">
        </span>
        <span class="glyphicon glyphicon-edit"
              @click="editItem"></span> 
    </div>
    <div class="input-group editInput" >
      <input type="text" class="form-control" :value="item.desc">
      <div class="input-group-btn">
        <button type="submit" class="btn btn-default"
                @click="editBtn">确认</button>
      </div>
    </div>

</li>
</template>
<script>
import Vue from 'vue';
import {mapGetters} from 'vuex';
export default{
  name:'ItemList',
  props:['item'],
  data:function(){
    return {
        show:false,
    }
  },
  methods:{
    editItem:function(){
        this.show = true;
    },
    editBtn:function(e){
        const value = e.target.parentNode.parentNode.childNodes[0].value;
        const { item } = this;
        console.log(item);
        if (!value) {
           this.removeItem();
        } else if (this.show) {
           item.desc = value;
           this.$store.dispatch('editTodo', item.id);
           this.show = false;
         }
        // this.$store.dispatch('deleteTodo', item.id); 
    },
    removeItem : function(){
      const itemId = event.target.getAttribute('itemId')
      this.$store.dispatch('deleteTodo', itemId); 
    }
  }
 }
</script>

<style scoped>
@keyframes myfirst
{
from {opacity:0;}
to {opacity:1}
}
@keyframes noMyfirst
{
from {opacity:1;}
to {opacity:0}
}
h1, h2 {
  font-weight: normal;
}

.list-group{

}
.list-group-item{
  text-align: left;
  animation: myfirst 1s;
  -moz-animation: myfirst 1s; /* Firefox */
  -webkit-animation: myfirst 1s;  /* Safari 和 Chrome */
  -o-animation: myfirst 1s;
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
.glyphicon-remove-sign{
  color: red;
  float: right;
  cursor: pointer;
  font-size: 16px;
}
.glyphicon-edit{
    cursor: pointer;
    color: green;
    float: right;
    font-size: 16px;
    margin-right: 10px;
}
.editInput{
    animation: noMyfirst 1s;
    -moz-animation: noMyfirst 1s; /* Firefox */
    -webkit-animation: noMyfirst 1s;  /* Safari 和 Chrome */
    -o-animation: noMyfirst 1s;
    display: none;
}
.showEdit .editInput{
	display: table;
	animation: myfirst 1s;
	-moz-animation: myfirst 1s; /* Firefox */
	-webkit-animation: myfirst 1s;  /* Safari 和 Chrome */
	-o-animation: myfirst 1s;
}
</style>
