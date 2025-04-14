<template>
  <button @click="perehodClicker">Кликер</button>
  <button @click="perehodBook">Книги</button>

</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
    }
  },
  methods:{

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
  mounted()
  {
  
  }
}
</script>
<style scoped>
 .h1 {
    font-family: Arial, Helvetica, sans-serif ;
    color: red;
  }
</style>