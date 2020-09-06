<template>
  <div class="hello">
    <p>{{count}}</p>
    <p>{{}}</p>
    <h1>hello</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      count:this.$store.state.count,
      message:""
    }
  },
  computed:{
    messageGet:function(){
      return this.$store.getters.getMessage
    },
    getCount:function(){
      return this.$store.getters.getCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
