export default {
  app: state => state,
  // nameが未入力、または4文字未満
  isNameError: state => {
    const name = state.name
    return name === '' || name.length < 4
  },
  // ageは数字以外、または1未満
  isAgeError: state => {
    const age = state.age
    return !(Number.isInteger(age) && age > 0)
  },
  // name と ageどっちがエラー
  disabled: (state, getters) => {
    return getters.isNameError || getters.isAgeError
  }
}
