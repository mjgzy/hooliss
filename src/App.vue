<template>
  <div id="app">
    <!-- 导入头部 内容-->
    <router-link to="/"/>
    <router-view/>
    <!-- 导入底部 -->
    <h-footer></h-footer>
  </div>
</template>
<script>
  import index from './views/Index'
  import HHeader from "./components/HHeader";
  import HFooter from "./components/HFooter";
    export default {
      name:'App',
      components:{
        index ,
        HHeader,
        HFooter,
      },
      data(){
        return {
          result: ''
        }
      },
    }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
