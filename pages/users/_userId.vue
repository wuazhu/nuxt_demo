<template>
  <div :class="prefix">
    这是 users/userId 页面 id 为 {{ $route.params.userId }}
    <p>
      username: {{ user.name }}
      userid: {{ user.id }}
    </p>
  </div>
</template>

<script>
const PREFIX = ''
export default {
  async asyncData({ $axios, params }) {
    const { code, user } = await $axios.$get(`/api/users/${params.userId}`)
    if (code) {
      return {
        user
      }
    }
    // error({ statusCode: 404, message: 'id 有误' })
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
