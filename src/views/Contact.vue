<template>
    <div class="container">
      <h1 class="center-align">Contactez-nous</h1>
      <form @submit.prevent="envoyerMessage" class="col s12">
        <div class="input-field">
          <input id="name" type="text" v-model="nom" required />
          <label for="name">Nom</label>
        </div>
        <div class="input-field">
          <input id="email" type="email" v-model="email" required />
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <textarea id="message" class="materialize-textarea" v-model="message" required></textarea>
          <label for="message">Message</label>
        </div>
        <button class="btn blue waves-effect waves-light" type="submit">
          Envoyer
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        nom: '',
        email: '',
        message: '',
      };
    },
    methods: {
      envoyerMessage() {
        alert(`Message envoyé par ${this.nom} (${this.email}) : ${this.message}`);
        // Réinitialise les champs après l'envoi
        this.nom = '';
        this.email = '';
        this.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
  }
  </style>
  