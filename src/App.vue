<template>
  <div id="app">
    
    <!-- <ContactsList/> -->
    <PropsExample :message = "message"
    @notify-parent = "handleNotifyParent"
    />
    
    
  </div>

</template>

<script>

import ContactsList from './components/ContactsList.vue'
import PropsExample from './components/PropsExample.vue'

export default {
  name: 'app',
  components: {
    ContactsList,
    PropsExample
  },
  data() {
    return {
      message:'Hello, World!'
    }
  },

  created() {
    setTimeout(()=>{
      this.message = 'New message'
    }, 3000)
  },

  methods: {
    handleNotifyParent(message) {
      this.message = message
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
