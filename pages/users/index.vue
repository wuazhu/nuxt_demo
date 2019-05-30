<template>
  <div :class="prefix">
    user 页面
    <ul>
      <li
        v-for="user in users"
        :key="user.id">{{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const PREFIX = 'user'
function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'wuazhu' }, { id: 2, name: 'vicson' }])
    }, 2000)
  })
}
export default {
  layout: 'users',
  async asyncData() {
    // asyncData 会阻塞页面
    // console.log(this)
    const users = await getUsers()
    return { users }
  },
  data() {
    return {
      prefix: PREFIX
    }
  },
  methods: {
    // getUsers() {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve([{ id: 1, name: "wuazhu" }, { id: 2, name: "vicson" }])
    //     }, 1000)
    //   })
    // }
  }
}
</script>

<style scoped lang="stylus"></style>
