<template>
  <div id="home" class="container">
    <section class="section content">
      <h2 class="title is-3">Contact Us</h2>
      <p>Per eos patrioque vero possim cu? Apeirian veniam ei porta eros justo accusam pertinax id solet nam moderatius. Disputando fuisset pede fabulas ante quos indoctum mi scriptorem te wisi tota sem justo altera. Ex viderer ac eum an dico imperdiet nusquam admodum omnium dicat. Appetere o elit intellegat mei ante prompta prompta egestas audiam ornare mentitum fugit amet vis. </p>
      <b-field grouped>
        <b-field label="Name" expanded>
          <b-input name="name" placeholder="Amy Smith" v-model="contactName"></b-input>
        </b-field>
        <b-field label="Email" expanded>
          <b-input name="email" placeholder="amy@example.com" type="email" v-model="contactEmail"></b-input>
        </b-field>
      </b-field>

      <b-field label="Message">
        <b-input type="textarea" placeholder="Type your message here please" v-model="contactMessage"></b-input>
      </b-field>

      <b-field>
        <p class="control">
          <button class="button-is-primary" @click.prevent="sendMessage">Send Message</button>
        </p>
      </b-field>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function () {
    return {
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    }
  },
  methods: {
    sendMessage: function () {
      alert(`Would send an email with the following:
to: contact@faithfulenvoy.org
from: ${this.contactEmail}
subject: New email from ${this.contactEmail}
message: 
${this.contactMessage}`)
    }
  }
}
</script>

<style>

</style>
