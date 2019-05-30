<template>
  <div :class="prefix">
    这是 users/userId 页面 id 为 {{ $route.params.userId }}
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
  },
  computed: {
  }
}
</script>

<style scoped lang="stylus">
</style>
