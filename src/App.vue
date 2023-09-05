<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  document.body.className = 'font-josefin-sans'
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">

    <!-- Page Layout -->
    <div class="flex flex-col items-center">

      <!-- Banner-->
      <div class="flex flex-row justify-start">

        <!-- Name and Logo -->
        <div class="flex flex-row">

          <!-- Logo -->
          <div></div>

          <!-- Brand Name -->
          <div class="flex flex-col">
            <p>BASE</p>
            <p>APPAREL</p>
          </div>
        </div>
      </div>  

      <img src="./assets/hero-mobile.jpg" alt="woman">

      <!-- Bottom Card -->
      <div class="flex flex-col">

        <!-- Coming Soon -->
        <div class="flex flex-col items-center">
          <p>WE'RE</p>
          <p>COMING</p>
          <p>SOON</p>
        </div>

        <p>
          Hello fellow shoppers! We're currently building 
          our new fashion store. Add your email below to stay
          up-to-date with announcements and our launch deals.
        </p>

        <!-- Email Button -->
        <div class="flex flex-row">
          <input class="outline-none" type="text" placeholder="Email Address">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
