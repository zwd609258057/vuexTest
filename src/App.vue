<template>
  <div id="app">
    <div class="page-header">
      <h1>简单Todo list<small>请用chrome浏览</small></h1>
    </div>
    <AddItem></AddItem>
    <ItemList></ItemList>
  </div>
</template>

<script>
import AddItem from './components/AddItem'
import ItemList from './components/ItemList'
export default {
  name: 'app',
  components: {
    AddItem,
    ItemList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
