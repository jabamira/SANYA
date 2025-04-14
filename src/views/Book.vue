<template>

<p v-if="pokaz">{{ user }}</p>
<button @click="perehodHome">Назад</button>
<button @click="perehodClicker">Кликер</button>
  <p>{{ password }}</p>
  <h1>Ваш счет: {{ count }}</h1>
  <div>
    <p v-for="i in info">{{ i.Title }}, {{ i.Year }}, {{ i.id }}</p>
  </div>

  <button @click="get_book">Id book</button>
  <input type="" v-model="idBook" >
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      test: 123,
      count: 0,
      info: null,
      idBook: 1,

    }
  },
  methods:{

   
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

    get_data()
    {
      
      axios.get("https://stephen-king-api.onrender.com/api/books")
      .then(res =>
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
    get_book()
    {
      console.log(this.idBook)
      axios.get(`https://stephen-king-api.onrender.com/api/book/${this.idBook}`)
      .then(res =>
      {
        console.log(res)
     
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