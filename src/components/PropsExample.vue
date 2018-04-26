<template>
	<div>{{ message }}
	<div>
	{{ reversedMessage }}
	</div>
	<input type="text" v-model = "searchTerm">
	<button @click = "notifyParent"> Notify Parent </button>
	
	
	
	</div>
</template>


<script>
	
	export default {
		props: ['message'],
		// created() {
		// 	console.log(this.message)
		// },

		data() {
			return {
				searchTerm: ''
			}
		},

		methods: {
			notifyParent () {
				this.$emit('notify-parent', 'Hello from child component')
			}
		},
		computed: {
			reversedMessage() {
				return this.message.split('').reverse().join('')
			}
		},

		watch: {
			searchTerm(newValue, oldValue){
				console.log('New Value:', newValue)
				console.log('Old Value:', oldValue)
			}
		}

	}
</script>