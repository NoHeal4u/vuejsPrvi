<template>

  <div>
 <!--  <form @submit.prevent="addContact">

  <label>First Name</label>
  <input v-model = "newContact.firstName" type = "text" placeholder = "First Name" />

  <label>Last Name</label>
  <input v-model = "newContact.lastName" type = "text" placeholder = "Last Name" />

  <label>email</label>
  <input v-model = "newContact.email" type = "text" placeholder = "email" />

  <button type = "submit">Add Contact</button>
  

  </form>
 -->
  

  <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Email</th>
    <th>&nbsp;</th>
  </tr>

  <tr  v-for="(contact,key) in contacts" :key="key">
      <td>{{contact.firstName}}</td>
      <td>{{contact.lastName}}</td>
      <td>{{contact.email}}</td>
      <td><button @click = "removeContact(contact)">Remove</button></td>
  </tr>
  
</table>

  </div>


</template>


<script>


export default {

  name : 'ContactsList',

  data(){

    return{

      contacts: [
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
  this.contacts.push(this.newContact)
  },

  removeContact(contact){
  this.contacts.splice(this.contacts.indexOf(contact),1)
  }



  }


}

</script>

