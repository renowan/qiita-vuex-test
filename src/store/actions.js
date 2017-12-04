import * as types from './mutationsTypes'

// actions
export default {
  // 入力
  input ({ commit, state }, data) {
    let value = data.value
    // name
    if (data.key === 'name') {
      commit(types.INPUT_NAME, value)
    }
    // age
    if (data.key === 'age') {
      // 数字なら数字に変換する
      if (Number.isInteger(Number(value))) {
        value = Number(value)
      }
      commit(types.INPUT_AGE, value)
    }
  }
}
