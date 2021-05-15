<template>
  <div class="container m-4 p-4">
    <div class="row">
      <h1 class="display-4">Formulario</h1>
      <form @submit.prevent="createDni()" enctype="multipart/form-data">
        <div class="form-group" >
          <label>Lastname pet</label>
          <input type="text" v-model="dni.lastname_pet" class="form-control">
        </div>
        <div class="form-group">
          <label>Name pet</label>
          <input type="text" v-model="dni.name_pet" class="form-control">
        </div>
        <div class="form-group">
          <label>Name pet</label>
          <input type="text" v-model="dni.name_pet" class="form-control">
        </div>
        <div class="form-group">
          <label>Date pet</label>
          <input type="text" v-model="dni.date_birthday" class="form-control">
        </div>
        <div class="form-group">
          <label>Sex pet</label>
          <input type="text" v-model="dni.sex" class="form-control">
        </div>
        <div class="form-group">
          <label>Specie pet</label>
          <input type="text" v-model="dni.specie" class="form-control">
        </div>
        <div class="form-group">
        <label>Breed pet</label>
        <input type="text" v-model="dni.breed" class="form-control">
      </div>
        <div class="form-group">
          <label>Lastname owner pet</label>
          <input type="text" v-model="dni.olastname" class="form-control">
        </div>
        <div class="form-group">
          <label>Name owner pet</label>
          <input type="text" v-model="dni.oname" class="form-control">
        </div>
        <div class="form-group">
          <label>Name ocel pet</label>
          <input type="text" v-model="dni.ocel" class="form-control">
        </div>
        <div class="form-group">
          <label>Correo pet</label>
          <input type="text" v-model="dni.correo" class="form-control">
        </div>
        <div class="form-group">
          <label>Image</label>
          <input type="file" accept="image/*" @change="obtenerImagen" class="form-control">
        </div>
      <figure>
        <img width="200" height="200" :src="imagen" alt="">
      </figure>
        <input type="submit" class="btn btn-success" value="Enviar">
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "SendData",
  data(){
  return{
    imagenMiniatura: '',
    dni:{
      dni_type:'free',
      lastname_pet:'Diaz',
      name_pet:'Monchito',
      date_birthday:'',
      sex:'M',
      specie:'perro',
      breed:'otro',
      imagen:'',
      olastname:'Diaz Perez',
      oname:'Julio',
      ocel:'985400951',
      correo:'jdiaz@gmail.com'
    }
  }
  },
  mounted() {
  // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    let data = new Date();
    let year = data.getFullYear();
    let month = '' + (data.getMonth()+1);
    let day = '' + data.getDate();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    this.dni.date_birthday = year+"-"+month+"-"+day;

    let fecha = this.formatDate('May 05,2021');
    console.log(fecha);
  },
  methods:{
    formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    },
    obtenerImagen(e){
      let file = e.target.files[0];
      this.dni.imagen = file;
      //console.log(this.dni.imagen);
      this.cargarImagen(file);
    },
    cargarImagen(file){
      let reader = new FileReader();
      reader.onload = (e) => {
         this.imagenMiniatura = e.target.result;
      }
      reader.readAsDataURL(file)
    },
    createDni(){
      let formData = new FormData();
      formData.append('url_image_pet',this.dni.imagen);
      formData.append('dni_type_pet',this.dni.dni_type);
      formData.append('lastname_pet',this.dni.lastname_pet);
      formData.append('name_pet',this.dni.name_pet);
      formData.append('birthday_pet',this.dni.date_birthday);
      formData.append('gender_pet',this.dni.sex);
      formData.append('specie_type_pet',this.dni.specie);
      formData.append('breed_pet',this.dni.breed);
      formData.append('lastname_owner',this.dni.olastname);
      formData.append('name_owner',this.dni.oname);
      formData.append('cellphone_owner',this.dni.ocel);
      formData.append('email_owner',this.dni.correo);
      formData.append('country_code','+51');
      this.axios.post('http://127.0.0.1:8000/api/dni',formData).then(
          response => {
            console.log(response)
            alert("DNI GENERADO")
          }
      ).catch(
          console.log("naaa")
      );
    }
    //console.log(formatDate('Sun May 11,2014'));
  },
  computed:{
    imagen(){
      return  this.imagenMiniatura;
    }
  },
}
</script>

<style scoped>

</style>