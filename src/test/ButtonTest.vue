<template>
    <Button type="primary" size="small" @click="showInfo">点击</Button>
    <RipplingButton></RipplingButton>
</template>

<script setup lang='ts'>
import Button from '@/components/Button/Button.vue';
import RipplingButton from '@/components/RipplingButton/RipplingButton.vue';

function showInfo(){
    console.log('click...');
}

</script>
<style scoped>

</style>
