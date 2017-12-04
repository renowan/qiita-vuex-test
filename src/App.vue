<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <h1>Vuex Test</h1>
        </div>

        <div class="col-xs-12">
          <h3>仕様</h3>
          <ul>
            <li>名前、年齢必須</li>
            <li>名前は4文字以上</li>
            <li>年齢は数字のみ、かつ0以上</li>
            <li>名前、年齢入力済み、エラーなしの場合、Submitが押せるようになる</li>
            <li>Clearを押したらデータが初期化される</li>
          </ul>
        </div>

        <div class="col-xs-12">
          <div class="form-group" :class="{'has-error': isNameError}">
            <label for="mmm">Name {{isNameError ? 'エラー' : ''}}</label>
            <input type="text" class="form-control" placeholder="" v-model="name">
          </div>
        </div>
        <div class="col-xs-12">
          <div class="form-group" :class="{'has-error': isAgeError}">
            <label for="">Age {{isAgeError ? 'エラー' : ''}}</label>
            <input type="text" class="form-control" placeholder="" v-model="age">
          </div>
        </div>
        <div class="col-xs-12">
          <button type="button" class="btn btn-default" @click="clear">
            Clear
          </button>
          <button type="button" class="btn btn-default btn-primary" :disabled="disabled">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'app',
      'isAgeError',
      'isNameError',
      'disabled'
    ]),
    name: {
      get () {
        return this.app.name
      },
      set (value) {
        this.$store.dispatch('input', {key: 'name', value})
      }
    },
    age: {
      get () {
        return this.app.age
      },
      set (value) {
        this.$store.dispatch('input', {key: 'age', value})
      }
    }
  },
  methods: {
    clear () {
      console.log('cc', this.$store)
      // 初期化
      this.$store.commit('INIT')
    }
  }
}
</script>

<style>

</style>
