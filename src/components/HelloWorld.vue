<template>
  <div class="hello">
    <p>{{getM}}</p>
    <p>{{count}}</p>
    <p>foo</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      count:"1000",
      message:""
    }
  },
  computed:{
    getM:function(){
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
