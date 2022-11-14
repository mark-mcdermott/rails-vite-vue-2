## Starter Rails 7, Vue 3 and Vite App
Rails views with vue components (running on vite) sprinkled in.

Sources:
- https://www.youtube.com/watch?v=PzyWQm58tlc
- https://github.com/Deanout/vue-vite-rails
- https://www.mathew-paul.nz/posts/how-to-use-vue2-with-vite/

## To Run
- `bundle install`
- `npm intall`
- terminal tab #1: `bin/vite dev`
- terminal tab #2: `rails s`
- in browser, go to `localhost:3000/pages/home`

## To Create
- `rails new <app name>`
- `cd <app name>`
- `bundle add vite_rails slim-rails`
- `bundle exec vite install`
- `npm i vite@2.5.10 @vitejs/plugin-vue@2.3.3 --save`
- `npm i vite-plugin-vue2 vue@2 --save`
- `rails g controller pages home`
- make `vite.config` look like this:
```
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    createVuePlugin()
  ],
  server: {
    hmr: {
     host: 'localhost',
    },
  }
})
```
- make `app/views/layouts/application.html.erb` look like this (note we are deleting the whole `<%= javascript_importmap_tags %>` line on line 10):
```
<!DOCTYPE html>
<html>
  <head>
    <title>Rails · Vite · Vue 2</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag "application", 'https://fonts.googleapis.com/css?family=Roboto:400', "data-turbo-track": "reload" %>
    <%= vite_client_tag %>
    <%= vite_javascript_tag 'application' %>
  </head>
  <body>
    <%= yield %>
  </body>
</html>
```
- make `app/views/pages/home.html.slim` look like this:
```
p Hi from app/views/pages/home.html.slim
div#app 
```
- make `app/javascript/entrypoints/application.js` look like this:
```
console.log('Vite ⚡️ Rails')
import Vue from 'vue';
import App from '../App.vue';
Vue.prototype.$version = Vue.version;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
```
- `mkdir app/javascript/components && touch app/javascript/App.vue && touch app/javascript/components/Counter.vue`
- make `app/javascript/App.vue` look like this:
```
<template>
  <div>
    p Hi from app/javascript/App.vue
    <Counter propMessage="This is a prop message for the counter component" />
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
```
- make `app/javascript/componenents/Counter.vue` looks like this:
```
<template lang="">
  <div>
    <p>Hi from app/javascript/components/Counter.vue</p>
    <p>{{ propMessage }}</p>
    <p>Vue version: {{ version }}</p>
    <button id="counter-button" @click="increment">Increment Counter Component</button>
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
```
- make `app/assets/stylesheets/application.css` look like this:
```
 body { font-family: 'Roboto', Arial, Helvetica, sans-serif; }
 p { margin: 0; }
```
- run the app
  - `bin/vite dev`
  - in a second terminal tab, run `rails s`
- go to localhost:3000/pages/home 
- the page should say:
```
Hi from app/views/pages/home.html.erb
Hi from app/javascript/App.vue
Hi from app/javascript/components/Counter.vue
This is a prop message for the counter component
Vue version: 2.7.14
```
and there should be an Increment Counter Component button that increase a "count" variable below the button
- in the console, it should say "Vite ⚡ Rails" and there shold be no javascript errors
