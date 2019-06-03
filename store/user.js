export const state = () => ({
  userstates: ''
})

export const mutations = {
  set(state) {
    state.userstates = '🐷'
  },
  setUsers(state, userLists) {
    state.users = userLists
  }
}
