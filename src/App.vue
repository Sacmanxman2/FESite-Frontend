<template>
  <div id="app">
    <VHeader></VHeader>
    <router-view/>
    <VFooter></VFooter>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    VHeader: Header,
    VFooter: Footer
  }
}
</script>

<style>
</style>
