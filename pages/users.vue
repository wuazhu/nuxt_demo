<template>
  <div :class="prefix">
    <h1>user 主页面</h1>
    <p>如下是 user 子页面</p>
    <hr>
    <Button>
      <nuxt-link
        :to="{
          name: 'users-userId',
          params: {
            userId: 1
          }
        }"
      >
        /users/1
      </nuxt-link>
    </Button>
    <Button>
      <nuxt-link
      :to="{
        name: 'users-userId',
        params: {
          userId: 2
        }
      }">/users/2</nuxt-link>
    </Button>
    <Button to="/users/detail">
      /users/detail
    </Button>
    <Button to="/">
      HOME
    </Button>
    <nuxt-child />
  </div>
</template>

<script>
const PREFIX = ''
export default {
  layout: 'users',
  head: {
    title: '我是 user 页面的标题'
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
