<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <div class="btnRouter" @click="btnRouter">
        btnRouter
    </div>
    <div class="btnRouter" @click="goback">
        goback
    </div>

    <input type="text" v-model="get" placeholder="get" @click="handleget">
    <input type="text" v-model="post" placeholder="post" @click="handlepost">
    <input type="text" v-model="put" placeholder="put" @click="handleput">
    <input type="text" v-model="handledelete" placeholder="delete" @click="handledelete2">
    <input type="text" v-model="head" placeholder="head" @click="handlehead">
  </div>

</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: 1,
      get: "",
      post: "",
      put: "",
      handledelete: "",
      head: ""
    }
  },
  methods: {
      handleget () {
          axios.get("https://baidu.com")
      },
      handlepost () {
          axios.post(this.post, {abc: 22})
      },
      handleput () {
          axios.put(this.put)
      },
      handledelete2 () {
          axios.delete(this.handledelete)
      },
      handlehead () {
          axios.head(this.head)
      },
      btnRouter () {
          this.$router.push({name: "blank"})
      },
      goback () {
          this.$router.go(-2)
      }
  },
  beforeRouteLeave (to, from, next) {
    //   alert("确定要离开吗")
      next()
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
