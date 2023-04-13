<template>
    <div>
        <button @click="show">显示</button>
    </div>
</template>
  
<script setup lang='ts'>
import { ToastCreator } from '@/components/Toast';

const toast = new ToastCreator({
    message: 'Hello Solitary!',
    duration: 5000
});
function show() {
    toast.present();
}

</script>
<style scoped></style>
  