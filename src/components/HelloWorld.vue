<template>
  <div class="hello">
    <div class="box">
          <p>{{count}}</p>
          <p>{{message}}</p>
    </div>
    <h1>hello</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      count:[],
      message:[]
    }
  },
  async created(){
    await this.messageGet();
    await this.getCount();
    },
  methods:{
    messageGet:function(){
      this.message = this.$store.getters.getMessage
      console.log('get message!');
    },
    getCount:function(){
      this.count = this.$store.getters.getCount
      console.log('get count!');
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
.hello{
  margin: 0 auto;
  text-align: center;
}
.box{
  margin: 0 auto;
  text-align: center;
  width: 100px;
  background-color: bisque;
}
</style>
