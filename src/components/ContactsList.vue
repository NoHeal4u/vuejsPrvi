<template>

  <div>

  <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Email</th>
  </tr>

  <tr  v-for="(user,key) in users" :key="key" v-if = "user.name === 'Pera' ">
      <td>{{user.name}}</td>
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
      { name: 'Pera' , lastName: 'Peric' , email: 'peraperic@gmail.com'},
      { name: 'Sima' , lastName: 'Simic' , email: 'simasimic@gmail.com'},
      { name: 'Laza' , lastName: 'Lazic' , email: 'lazalazic@gmail.com'}

        ]

    }
  }
}

</script>

