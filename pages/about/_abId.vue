<template>
  <div :class="prefix">
    <p>abbout id page</p>
    <p>id is {{ $route.params.abId }}</p>
  </div>
</template>

<script>
const PREFIX = ''
export default {
  components: {
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
