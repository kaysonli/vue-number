# vue-number

[![npm](https://img.shields.io/npm/v/vue-number.svg)](https://www.npmjs.com/package/vue-number)
[![npm](https://img.shields.io/npm/dt/vue-number.svg)](https://www.npmjs.com/package/vue-number)
[![npm](https://img.shields.io/npm/dm/vue-number.svg)](https://www.npmjs.com/package/vue-number)
[![Build Status](https://travis-ci.org/kevinongko/vue-number.svg?branch=master)](https://travis-ci.org/kevinongko/vue-number)
[![Codecov](https://img.shields.io/codecov/c/github/kevinongko/vue-number.svg)](https://codecov.io/gh/kevinongko/vue-number)
[![npm](https://img.shields.io/npm/l/vue-number.svg)](http://opensource.org/licenses/MIT)

Number input component to display currency value based on [Vue](https://vuejs.org/).

[Live Demo](https://kevinongko.github.io/vue-number/)

`Works with Vue 2.*`

## Installation

```sh
$ npm install vue-number --save
```

### Install as Component
```js
import Vue from 'vue'
  
export default {
  name: 'App',

  components: {
    VueNumber
  }
}
```

### Install as Plugin
```js
import Vue from 'vue'
import VueNumber from 'vue-number'
  
Vue.use(VueNumber)
```

## Usage

![screen shot 2016-12-08 at 2 19 31 pm](https://cloud.githubusercontent.com/assets/15880638/21001265/f2322438-bd51-11e6-8985-f31a45702484.png)

### Quick example

```vue
<template>
  <vue-number currency="$" v-model="price"></vue-number>
</template>

<script>
import VueNumber from 'vue-number'

export default {

  name: 'App',

  components: {
    VueNumber
  },

  data: () => ({
    price: ''
  }),
}
</script>

```

### Currency prefix

adding currency prefix to the input by using `currency` props.

```vue
<vue-number currency="$"></vue-number>
```


## License

vue-number is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
