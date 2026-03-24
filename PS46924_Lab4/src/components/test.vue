<template>
    <div>
        <h1 :class="className" style="font-size: 5rem">Caculator: 15-Giả Hủ</h1>
<h2 v-html="content" :style="styleData"></h2>
        <h3>Count {{ count }}</h3>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
        <button @click="changeClassName">Change class</button>

        <h2 v-html="count" :style="styleData"></h2>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => { count.value++ 
styleData.value = "font-size: " + count.value + "rem;"
}
const decrement = () => { count.value--
styleData.value = "font-size: " + count.value + "rem;"
}
const reset = () => { count.value = 0
styleData.value = "font-size: 5rem;"
}

const content = "xin chào các bạn"
const className = ref("text-red")
const styleData = ref("font-size: 5rem;")
const changeClassName = () => {
    if (className.value === "text-red")
        className.value = "text-blue"
    else {
        className.value = "text-red"
    }
}
</script>

<style scoped>
.text-red {
    color: red;
}

.text-blue {
    color: blue;
}
</style>