<template>
  <header class="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
    <nav class="flex flex-col items-center md:flex-row md:justify-between">
      <h1 class="text-xl font-bold">Site Motocross</h1>
      <ul class="flex flex-col items-center mt-2 md:mt-0 md:flex-row md:space-x-4">
        <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
        <!-- Ajoutez d'autres liens ici si nécessaire -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
