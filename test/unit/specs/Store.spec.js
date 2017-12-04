// import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import store from '@/store/'

const app = store.state.app
const dispatch = store.dispatch
const commit = store.commit
const getters = store.getters

describe('storeテスト', () => {

  describe('初期状態テスト', () => {
    it('stateの初期状態', () => {
      expect(app.name).to.equal('')
      expect(app.age).to.equal(null)
    })
    it('gettersの初期状態', () => {
      expect(getters.isNameError).to.equal(true)
      expect(getters.isAgeError).to.equal(true)
      expect(getters.disabled).to.equal(true)
    })
  })

  describe('入力テスト', () => {
    it('nameを入力', () => {
      dispatch('input', {key: 'name', value: 'myname'})
      expect(app.name).to.equal('myname')
    })
    it('ageを入力', () => {
      dispatch('input', {key: 'age', value: 3})
      expect(app.age).to.equal(3)
    })
    it('バリデーションテストエラーが起きない、submitボタンが押せる', () => {
      expect(getters.isNameError).to.equal(false)
      expect(getters.isAgeError).to.equal(false)
      expect(getters.disabled).to.equal(false)
    })
    it('ageを0と入力してageエラーを起こす', () => {
      dispatch('input', {key: 'age', value: 0})
      expect(getters.isAgeError).to.equal(true)
    })
    it('nameをabcと入力して文字数が足りず、エラーになる', () => {
      dispatch('input', {key: 'name', value: 'abc'})
      expect(getters.isNameError).to.equal(true)
    })
    it('nameとageをエラーが起きないように入力する、ボタンが押せるようになる', () => {
      dispatch('input', {key: 'name', value: 'abcdef'})
      dispatch('input', {key: 'age', value: 4})
      expect(getters.isNameError).to.equal(false)
      expect(getters.isAgeError).to.equal(false)
      expect(getters.disabled).to.equal(false)
    })
    it('Clearを押して初期化する->またエラーになる', () => {
      commit('INIT')
      expect(getters.isNameError).to.equal(true)
      expect(getters.isAgeError).to.equal(true)
      expect(getters.disabled).to.equal(true)
    })
  })


})
