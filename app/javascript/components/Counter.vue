<template lang="">
  <div>
    <p>Hi from app/javascript/components/Counter.vue</p>
    <p>{{ propMessage }}</p>
    <p>Vue version: {{ version }}</p>
    <button id="counter-button" @click="increment">Increment</button>
    <p>Count is: {{ count }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      propMessage: String,
    },
    data() {
      return {
        count: 0,
        version: this.$version
      }
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  }
</script>
<style lang="css">
  #counter-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 15px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
  }

  #counter-button:hover {
    background-color: #3e8e41;
    cursor: pointer;
  }
</style>