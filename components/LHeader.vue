<template>
  <header>
    <div class="container flex justify-between items-center">
      <div class="col-md-12">
        <a href="/" class="logo">
          <img src="https://vueschool.io/img/logo/vueschool_logo_multicolor_negative.svg" alt="Vue School Trello Demo Logo"
            width="160"  
          >
        </a>
      </div>
      <nav>
        <ul class="flex">
          <li v-for="(menuItem, index) in menuItems" :key="index" class="p-2">
            <a 
              :href="menuItem.url" 
              class="mx-8 flex py-2 text-white group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:group-hover:text-white lg:group-hover:opacity-70">
              {{ menuItem.label }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex">
        <a href="https://vueschool.io" class="py-3 px-7 text-white font-medium hover:opacity-70">Sign in</a>
        <a href="https://vueschool.io" class="py-3 px-6 text-white font-medium hover:opacity-70 rounded-lg bg-white/20">Sign up</a>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
const menuItems = [{
  label: 'Home',
  url: '/'
},
{
  label: 'About',
  url: '/about'
},
{
  label: 'Features',
  url: '/features'
},
{
  label: 'Testimonials',
  url: '/testimonials'
}]
</script>
