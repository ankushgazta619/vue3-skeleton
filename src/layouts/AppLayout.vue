<template>
    <TheHeader />
    <main class="flex-shrink-0">
        <router-view />
    </main>
    <TheFooter />
</template>

<script>
import TheHeader from '@/partials/TheHeader.vue'
import TheFooter from '@/partials/TheFooter.vue'

export default {
  name: 'AppLayout',
  components: {
      TheHeader,TheFooter
  }
}
</script>