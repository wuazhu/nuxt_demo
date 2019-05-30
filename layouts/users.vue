<template>
  <div :class="prefix">
    <h1>is users layout</h1>
    <nuxt></nuxt>
  </div>
</template>

<script>
const PREFIX = 'users-layout'
export default {
  data() {
    return {
      prefix: PREFIX
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
