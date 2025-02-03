<template>
  <li>
    <img :src="src" width="80" />
    <h3 class="text-xl pb-1 pt-6">{{ title }}</h3>
    <p class="pt-1 pb-8">{{ description }}</p>
    <a :href="link">{{ linkText }}</a>
  </li>
</template>

<script lang="ts" setup>
interface Props {
  src: string
  title: string
  description: string
  link: string
  linkText: string
}

const { src, title, description, link, linkText } = defineProps<Props>()
</script>
