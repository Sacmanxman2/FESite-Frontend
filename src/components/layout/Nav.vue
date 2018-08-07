<template>
  <div id="nav">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item" :class="buttonClass('/')">Home</router-link>
            <router-link to="/About" class="navbar-item" :class="buttonClass('/About')">About Us</router-link>
            <router-link to="/Contact" class="navbar-item" :class="buttonClass('/Contact')">Contact</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navIsActive: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.navIsActive = !this.navIsActive
    },
    buttonClass (path) {
      return {
        'is-active': this.$route.path === path
      }
    }
  }
}
</script>

<style>

</style>
