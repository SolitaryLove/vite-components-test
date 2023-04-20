<template>
    <Checkbox v-model="checkState" />
</template>

<script setup lang='ts'>
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import { ref } from 'vue';
let checkState = ref(false);

</script>
<style scoped>
</style>
