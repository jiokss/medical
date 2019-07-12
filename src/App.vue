<template>
  <div id="app">
    <mt-header fixed :title="headerTitle">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      headerTitle:'加减医学'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
  background: #fafafa
}
ul{list-style:none}
a{text-decoration: none;}
img{vertical-align:top;border:none}

.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}
</style>
