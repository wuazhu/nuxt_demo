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
  fetch({ store }) {
    // 执行的时间点早于组件创建 以及 asyncData 事件
    // fetch 方法的第一个参数是页面组件的上下文对象 context，我们可以用 fetch 方法来获取数据填充应用的状态树。为了让获取过程可以异步，你需要返回一个 Promise，Nuxt.js 会等这个 promise 完成后再渲染组件。 https://zh.nuxtjs.org/api/pages-fetch
    console.log('fetch', store)
    return getUsers().then((res) => {
      console.log(res)
      store.commit('user/setUsers', res)
    })
    // console.log(users)
  },
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
    // ...mapMutations('user', {
    //   setUsers: 'setUsers'
    // })
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
