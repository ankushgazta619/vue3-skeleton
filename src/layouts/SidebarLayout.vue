<template>
    <TheHeader />
    <TheSidebar />
    <router-view />
    <TheFooter />
</template>

<script>
import TheHeader from '@/partials/TheHeader.vue'
import TheFooter from '@/partials/TheFooter.vue'
import TheSidebar from '@/partials/TheSidebar.vue'

export default {
  name: 'SidebarLayout',
  components: {
      TheHeader,TheFooter,TheSidebar
  }
}
</script>
