<template>
  <div class="hello">
    <ul>
      <li v-for="product in products" :key="product['.key']">
        {{product.name}}
      </li>
    </ul>
    {{status}}
    <button type="button" name="button" @click="setStatus(true)">true</button>
    <button type="button" name="button" @click="setStatus(false)">false</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['setProductsRef', 'setStatus'])
  },
  computed: {
    ...mapGetters(['products', 'status'])
  },
  created () {
    this.setProductsRef()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
