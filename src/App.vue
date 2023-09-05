<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  document.body.className = 'font-josefin-sans mobile-wallpaper'
})
</script>

<template>
  <div class="flex flex-col items-center justify-start min-h-screen">

    <!-- Page Layout -->
    <div class="flex flex-col items-center">

      <!-- Banner-->
      <div class="flex flex-row justify-start items-center w-full p-8">

        <!-- Name and Logo -->
        <div class="flex flex-row gap-2">

          <!-- Logo -->
          <div class="w-5 h-5 border-2 border-solid border-desaturated-red rounded-full"></div>

          <!-- Brand Name -->
          <div class="flex flex-col">
            <p class="w-10 text-[11px] font-bold tracking-[3px] leading-3 text-dark-grayish-red">
              BASE APPAREL
            </p>
          </div>
        </div>
      </div>  

      <img class="w-full" src="./assets/hero-mobile.jpg" alt="woman">

      <!-- Bottom Card -->
      <div class="flex flex-col gap-3 p-8">

        <!-- Coming Soon -->
        <div class="flex flex-col justify-center items-center pt-2">
          <p class="p-2 w-full text-[40px] text-center tracking-[10px] font-semibold text-dark-grayish-red leading-10">
            <span class="font-light tracking-[10px] text-desaturated-red">
              WE'RE
            </span> 
            COMING SOON
          </p>
        </div>

        <p class="px-4 pb-6 text-sm text-center text-desaturated-red">
          Hello fellow shoppers! We're currently building 
          our new fashion store. Add your email below to stay
          up-to-date with announcements and our launch deals.
        </p>

        <!-- Email Button -->
        <div class="relative flex flex-row">
          <input 
            class="
              w-full
              p-3
              px-7

              text-sm
              outline-none
              
              border-2
              border-solid
              border-desaturated-red/50
              
              rounded-full
              
              placeholder-desaturated-red/50
              text-dark-grayish-red/75
            " 
            type="text" 
            placeholder="Email Address">

          <!-- Submit Icon -->
          <div class="
            absolute 

            flex
            flex-row
            items-center
            justify-center

            w-16
            h-12

            -right-0
            
            button-wallpaper
            rounded-full   
            shadow-xl
            shadow-desaturated-red
            
            hover:cursor-pointer
            ">
            <img src="./assets/icon-arrow.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .mobile-wallpaper {
    background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
  }
  
  .button-wallpaper {
    background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  }

  .button-wallpaper:hover {
    background: linear-gradient(135deg, hsl(0, 80%, 94%), hsl(0, 74%, 80%));
  }
</style>
