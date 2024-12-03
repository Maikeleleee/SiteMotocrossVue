<template>
  <footer class="page-footer blue">
    <div class="container center-align">
      © 2024 - Site Motocross. Tous droits réservés.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* S'assure que le footer reste en bas de l'écran */
.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 10px 0;
}
</style>
