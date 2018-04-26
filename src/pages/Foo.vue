<template>
	<div>Foo</div>
</template>


<script>
	
	import { fetch } from '../utils/Fetch'

	export default {
		created() {
			console.log(fetch.get())
		}
	}

</script>