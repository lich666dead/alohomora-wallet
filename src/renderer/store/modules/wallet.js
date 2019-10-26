const state = {
  enable: false
}

const mutations = {
  ENABLE (state) {
    state.enable = true
  },
  DISABLE (state) {
    state.enable = false
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('DISABLE')
  }
}

export default {
  state,
  mutations,
  actions
}