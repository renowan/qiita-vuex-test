import * as types from './mutationsTypes'

export default {
  [types.INIT] (state) {
    state.name = ''
    state.age = null
    state.disabled = true
  },
  [types.INPUT_NAME] (state, data) {
    state.name = data
  },
  [types.INPUT_AGE] (state, data) {
    state.age = data
  }
}
