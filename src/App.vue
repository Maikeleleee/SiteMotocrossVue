<template>
  <div id="app">
    <Header /> <!-- Barre de navigation -->
    <router-view /> <!-- Contenu des pages -->
    <Footer /> <!-- Pied de page -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
