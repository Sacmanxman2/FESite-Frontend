<template>
  <div>
    <div id="header" class="hero is-dark">
      <div class="hero-head">
        <VNav></VNav>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Faithful Envoy</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/layout/Nav'

export default {
  name: 'Header',
  components: {
    VNav: Nav
  }
}
</script>

<style>

</style>
