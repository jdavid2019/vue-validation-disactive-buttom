<template>
 <form @submit.prevent="submit">
    <input type=text class=form-control  name=email placeholder=Email v-model="email" />
     <div class="error" v-if="!$v.email.required">email is required</div>
       <div class="error" v-if="!$v.email.email">No es email</div>
    <input type=text class=form-control  name=tel placeholder=Telefono v-model="tel" />
         <div class="error" v-if="!$v.tel.required">Tel is required</div>
    <br>
    <button :disabled='!isComplete' type=submit>Send Invite</button>
 </form>  
</template>

<script>
import { required,email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Example',
  data(){
    return {
      email: '',
      tel:''
      }
      },
      methods:{
        submit(){
          console.log("ok")
      }
      },
     validations: {
      email: {
        required,
        email,
        minLength: minLength(2)
      },
    tel :{
      required,
      }
      },
      computed: {
  isComplete () {
    return this.email && this.tel;
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
</style>
