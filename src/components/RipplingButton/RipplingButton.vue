<template>
    <button ref="button">button</button>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
const button = ref<HTMLElement | null>(null);
onMounted(() => {
    button.value!.addEventListener('click', (e: MouseEvent) => {
        let x = e.offsetX;
        let y = e.offsetY;
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.value!.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    })
});

</script>
<style scoped>
button {
    width: 150px;
    height: 60px;
    margin: 20px;
    border-radius: 40px;
    border: none;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
    background: linear-gradient(to right, #0365CA, #4FDEF8);
    /* background: goldenrod; */
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

button:focus {
    outline: none;
}
</style>

<style>
/* 关于vue的css样式对js动态添加的dom节点不生效问题的解决方法
把style标签的scoped干掉即可 */
button span {
    display: inline-block;
    position: absolute;
    background: white;
    pointer-events: none;
    border-radius: 50%;
    /* 使水波中心点位置保持不变 */
    transform: translate(-50%, -50%);
    animation: animate 1s linear;
}

/* 尺寸和透明度动画效果 */
@keyframes animate {
    0% {
        width: 0px;
        height: 0px;
        opacity: 0.5;
    }

    100% {
        width: 400px;
        height: 400px;
        opacity: 0;
    }
}
</style>