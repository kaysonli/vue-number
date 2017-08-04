<template>
	<vue-number currency="" separator="," v-model="price" @input="onInput"></vue-number>
</template>
<script>
	export default {
		data() {
			return {
				price: '123'
			}
		},
		methods: {
			onInput(val) {
				console.log(val);
			}
		}
	}
</script>