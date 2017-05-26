import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
Vue.use(Vuex)
Vue.use(VueResource)
let idIndex = 0;
export default new Vuex.Store({
  state:{
  	lists:[{id:1,desc:'我是默认数据'}],
  },
  mutations:{
  	addTodo(state,one){
  		state.lists.push(one);

  	},
  	editTodo (state, item){
  		let index=-1;
  		state.lists.forEach((e,i)=>{
  			if(e.id==item.id){
  				index = i
  			}
  		})
  		if(index > -1 ){
  			state.lists[index].desc = item.desc
  		}
  	},
  	deleteTodo (state, itemId){
  		let index = -1;
  		state.lists.filter(function(e,i){
  			if(e.id== itemId){
  				index = i
  			}
  		})
  		if(index > -1 ){
  			state.lists.splice(index,1)
  		}
  	}
  },
  actions:{
  	editTodo({commit},todo){
  		commit('editTodo', todo);
  	},
  	addNewTodo({commit,state},todo){
		todo.id = state.lists.length+1
  		commit('addTodo', todo);
  	},
  	deleteTodo ({commit}, todo){
  	  	commit('deleteTodo', todo);
  	},
  }
})

