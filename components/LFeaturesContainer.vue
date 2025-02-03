<template>
  <section class="container p-4 mb-16 text-white">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl py-1">This page is built using ButterCMS Components</h2>
        <h3 class="text-primary-200 font-bold py-1">Trello Clone Features</h3>
        <p class="py-1">This page is example of utilizing Butter Components which allow you to build dynamic loading pages by choosing Components from a Component Library, Reuse and reorder Components in any way you want!</p>
      </div>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-4 mt-16 gap-16">
      <LFeature 
        src="https://cdn-icons-png.flaticon.com/512/4862/4862362.png"
        title="Components on the page"
        description="This sample page has four component types: hero, two column with image, features and testimonials"
        link="https://vueschool.io"
        link-text="Learn more"
      />
      <LFeature 
        src="https://cdn-icons-png.flaticon.com/512/8297/8297314.png"
        title="Build your own"
        description="This page is just a example set of Components. You can build your own custom Component library!"
        link="https://vueschool.io"
        link-text="Learn more"
      />
      <LFeature 
        src="https://cdn-icons-png.freepik.com/512/7173/7173707.png"
        title="Reordem them"
        description="Components are great because you can reorder them for your Butter dashboard"
        link="https://vueschool.io"
        link-text="Learn more"
      />
      <LFeature 
        src="https://cdn-icons-png.flaticon.com/512/5090/5090295.png"
        title="Infinite possibilities"
        description="Build carousels, call to actions, testimonials and much more. There's infinite flexibility"
        link="https://vueschool.io"
        link-text="Learn more"
      />
    </ul>
  </section>
</template>

<script lang="ts" setup>
import LFeature from './LFeature.vue';
</script>
