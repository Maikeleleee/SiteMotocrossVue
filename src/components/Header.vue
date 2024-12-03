<template>
  <header class="navbar-fixed">
    <nav class="blue">
      <div class="nav-wrapper container">
        <!-- Bouton menu burger pour petits écrans -->
        <a
          href="#"
          data-target="mobile-menu"
          class="sidenav-trigger left hide-on-large-only"
        >
          <i class="material-icons white-text">menu</i>
        </a>

        <!-- Titre aligné au centre -->
        <a href="#" class="brand-logo center">Site Motocross</a>

        <!-- Menu pour grands écrans -->
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/" class="white-text">Accueil</router-link></li>
          <li><router-link to="/contact" class="white-text">Contact</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Menu mobile pour petits écrans -->
    <ul class="sidenav" id="mobile-menu">
      <li><a href="#" @click="navigateTo('/')">Accueil</a></li>
      <li><a href="#" @click="navigateTo('/contact')">Contact</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateTo(route) {
      this.$router.push(route); // Redirige vers la route spécifiée
      const sidenavInstance = M.Sidenav.getInstance(
        document.querySelector(".sidenav")
      );
      sidenavInstance.close(); // Ferme le menu burger
    },
  },
  mounted() {
    // Initialise le menu burger avec Materialize
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {
      edge: "left",
      draggable: true,
    });
  },
};
</script>

<style scoped>
/* Titre aligné au centre */
.nav-wrapper .brand-logo {
  white-space: nowrap;
  font-size: 1.5rem;
}

/* Bouton menu burger pour petits écrans aligné à gauche */
.sidenav-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

/* Cache le bouton menu burger sur grands écrans */
@media screen and (min-width: 992px) {
  .sidenav-trigger {
    display: none;
  }
}
</style>
