<template>
  <div :class="prefix">
    <p>about home page</p>
    <ul>
      <li>
        <Button to="/about/6666">6666
        </Button>
      </li>
      <li>
        <Button to="/about/6666">777</Button>
      </li>
    </ul>
    <hr>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
const PREFIX = ''
export default {
  components: {
  },
  computed: {
  },
  data() {
    return {
      prefix: PREFIX
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
