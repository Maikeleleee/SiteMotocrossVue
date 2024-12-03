<template>
  <header class="bg-blue-600 text-white p-4">
    <nav class="flex justify-between items-center">
      <h1 class="text-xl font-bold">Site Motocross</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
        <li><router-link to="/departements" class="hover:underline">Départements</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
