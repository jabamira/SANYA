<template>
  <p v-if="pokaz">{{ user }}</p>
  <p>{{ password }}</p>
  <h1>Ваш счет: {{ count }}</h1>
  <h1>Заработок за клик {{ earn }}</h1>
  <button @click="click_button">AAAAAAAAAAA</button>
  <input type="password" v-model="password" >
</template>
<script>
  export default {
    data() {
      return {
        test: 123,
        user: "Артем кликер legend хамстер комбат",
        count: 0,
        earn :1,
        password : "",
        pokaz: true,
      }
    },
    methods:{
      click_button() {
        this.count += this.earn
        if(this.count % 3 == 0)this.earn++
        this.pokaz = !this.pokaz
      }
    }
  }
</script>

<style scoped>
  .h1 {
    font-family: Arial, Helvetica, sans-serif ;
    color: red;
  }
</style>