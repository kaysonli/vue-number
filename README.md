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
  <vue-number currency="$" separator="," v-model="price"></vue-number>
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

### Minimum & maximum constraint

Limit minimum and maximum input by using `min, max` props.

- `min` default to `0`.
- `min, max` accept `String` and `Number`.

```vue
<vue-number min="2000" v-bind:max="10000"></vue-number>
```

### Disable/enable minus value
- `minus` default to `false`.

```vue
<vue-number v-bind:minus="false"></vue-number>
```

### Enable decimal value
By default the decimal value is disabled, to use decimal value add `precision` props.
- `precision` accept `String` and `Number` numeric value.

```vue
<vue-number v-bind:precision="2"></vue-number>
```

### Thousand separator
- Default thousand separator's symbol is `,`.
- Use `separator` props to change separator's symbol.
- `separator` only accept either `,` or `.` value.
- When using `.` separator symbol, to input decimal value use `,` and vice versa.

```vue
<vue-number separator="."></vue-number>
```

### Input placeholder when empty
```vue
<vue-number placeholder="only number allowed"></vue-number>
```

## Props
|Props|Description|Required|Type|Default|
|-----|-----------|--------|----|-------|
|currency|Currency prefix|false|String|-|
|currency-symbol-position|Position for the symbol|false|String|'prefix'|
|max|Maximum value allowed|false|Number, String|-|
|min|Minimum value allowed|false|Number, String|0|
|minus|Enable/disable minus value|false|Boolean|false|
|placeholder|Input placeholder|false|String|-|
|precision|Number of decimals|false|Number, String|-|
|separator|Thousand separator type ( accept either `.` or `,` )|false|String|,|
|read-only|Hide input field and show the value in text|false|Boolean|false|
|read-only-class|Class for read-only element|false|String|''|

## License

vue-number is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
