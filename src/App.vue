<template>
  <div id="app">
    <VHeader></VHeader>
    <router-view></router-view>
    <VFooter></VFooter>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  name: 'App',
  components: {
    VHeader: Header,
    VFooter: Footer
  }
}
</script>

<style lang="scss">
@import '@/assets/colors.scss';
</style>

<style>
</style>
