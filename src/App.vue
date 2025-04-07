<template>
  <p v-if="pokaz">{{ user }}</p>
  <p>{{ password }}</p>
  <h1>Ваш счет: {{ count }}</h1>
  <div>
    <p v-for="i in info">{{ i.Title }}, {{ i.Year }}, {{ i.id }}</p>
  </div>

  <h1>Заработок за клик {{ earn }}</h1>
  <button @click="click_button">AAAAAAAAAAA</button>
  <button @click="click_buttonId">Id book</button>
  <input type="password" v-model="password" >
  <input type="password" v-model="idBook" >
</template>
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        test: 123,
        user: "Артем кликер legend хамстер комбат",
        count: 0,
        earn :1,
        password : "",
        pokaz: true,
        info: null,
        idBook: 1,

      }
    },
    methods:{

      click_button() {
        this.count += this.earn
        if(this.count % 3 == 0)this.earn++
        this.pokaz = !this.pokaz
    
      },
      click_buttonId() {
      console.log(this.get_book(this.idBook).data)
    
      },
      

      get_data()
      {
        axios.get("https://stephen-king-api.onrender.com/api/books").then(res =>
        {
         console.log(res)
         this.info = res.data.data
        })
        .catch (err =>
          {
            console.log(err)
          }
        )
      },
      get_book(id)
      {
        console.log(id)
        axios.get(`https://stephen-king-api.onrender.com/api/book/${id}`)
        .then(res =>
        {
         return res
       
        })
        .catch (err =>
          {
            console.log(err)
          }
        )
      },
     
    },
    mounted()
    {
      this.get_data()
    }
  }
</script>

<style scoped>
  .h1 {
    font-family: Arial, Helvetica, sans-serif ;
    color: red;
  }
</style>