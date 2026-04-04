<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <h1 v-if="show">FPT PolyTechnic</h1><!-- comment vô hiệu hóa luôn -->
        <hr>
        <h1 v-show="show">{{message}}</h1><!-- ẩn đi nhưng vẫn chiếm không gian -->

        <div>
            <input type="text" v-model="message" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const show = ref(true);
        const message = ref('FPT PolyTechnic');
        return { show, message }
    }
}
</script>

<style lang="scss" scoped></style>