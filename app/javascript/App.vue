<template>
  <div>
    <p>Hi from app/javascript/App.vue</p>
    <Counter propMessage="This is a prop message in the counter component." />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
export default {
  components: {
    Counter,
  },
};
</script>

<style>
</style>