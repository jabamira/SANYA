<template>

<p v-if="pokaz">{{ user }}</p>
  <p>{{ password }}</p>
  <h1>Ваш счет: {{ count }}</h1>
  <div>
    <p v-for="i in info">{{ i.Title }}, {{ i.Year }}, {{ i.id }}</p>
  </div>

  <h1>Заработок за клик {{ earn }}</h1>
  <button @click="click_button">Заработать</button>
  <button @click="perehodHome">Назад</button>
  <button @click="perehodBook">Книги</button>


</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      test: 123,
      count: 0,
      earn :1,
      password : "",
     
      info: null,
      idBook: 1,

    }
  },
  methods:{

    click_button() {
      this.count += this.earn
      if(this.count % 3 == 0)
      {
          if(this.earn==0 || this.earn==1) this.earn++
          else this.earn*=this.earn
      }
    
    },
    click_buttonId() {
    console.log(this.get_book(this.idBook).data)
  
    },
    perehodHome()
    {
      this.$router.push('/Home')
    },
    perehodBook()
    {
      this.$router.push('/Book')
    },
    perehodClicker()
    {
      this.$router.push('/Click')
    },
  },
}
</script>
<style scoped>
 .h1 {
    font-family: Arial, Helvetica, sans-serif ;
    color: red;
  }
</style>