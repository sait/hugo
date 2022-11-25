<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
        <li><router-link :to="{name: 'TEjercicio1'}">Ejercicio 1</router-link></li>
        <li><router-link :to="{name: 'TEjercicio2'}">Ejercicio 2</router-link></li>
        <li><router-link :to="{name: 'TEjercicio3'}">Ejercicio 3</router-link></li>
        <li><router-link :to="{name: 'TEjercicio4'}">Ejercicio 4</router-link></li>
        <li><router-link :to="{name: 'TEjercicio5'}">Ejercicio 5</router-link></li>
        <li><router-link :to="{name: 'TEjercicio6'}">Ejercicio 6</router-link></li>
        <li><router-link :to="{name: 'TEjercicio7'}">Ejercicio 7</router-link></li>
        <li><router-link :to="{name: 'TEjercicio8'}">Ejercicio 8</router-link></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>
