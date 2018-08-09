<template>
  <div>
    <div id="header" class="hero is-dark">
      <div class="hero-head">
        <div class="container content hotline">
          <div class="columns">
            <div class="column">Iowa Trafficking Hotline: 800-770-1650 or text "iowahelp" to 20121</div>
            <div class="column has-text-right">National Human Trafficking Hotline: 888-373-7888 or text "Help" to BEFREE (233733)</div>
          </div>
        </div>
        <VNav></VNav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
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
.hotline {
  padding-top: 1rem;
}

</style>
