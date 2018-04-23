<template>

  <div>
  <form @submit.prevent="addContact">

  <label>First Name</label>
  <input v-model = "newContact.firstName" type = "text" placeholder = "First Name" />

  <label>Last Name</label>
  <input v-model = "newContact.lastName" type = "text" placeholder = "Last Name" />

  <label>email</label>
  <input v-model = "newContact.email" type = "text" placeholder = "email" />

  <button type = "submit">Add Contact</button>
  

  </form>

  {{newContact}}

  <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Email</th>
  </tr>

  <tr  v-for="(user,key) in users" :key="key">
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td>{{user.email}}</td>
  </tr>
  
</table>

  </div>


</template>


<script>


export default {

  name : 'ContactsList',

  data(){

    return{

      users: [
      { firstName: 'Pera' , lastName: 'Peric' , email: 'peraperic@gmail.com'},
      { firstName: 'Sima' , lastName: 'Simic' , email: 'simasimic@gmail.com'},
      { firstName: 'Laza' , lastName: 'Lazic' , email: 'lazalazic@gmail.com'}

        ],

        newContact: {
        firstName: '',
        lastName: '',
        email: ''
        }

    }
  },
  methods:{
  addContact(){
  this.users.push(this.newContact)
  }
  }
}

</script>

