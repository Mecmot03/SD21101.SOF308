<template>
    <div>
<h3 class="text-danger">Count: {{ state.count }}</h3>
<h3 :class="isLarge()">Count: {{ state.count }}</h3>
<h3 :class="changecolor()">Count: {{ state.count }}</h3>
<input type="text" v-model="state.user.name" " placeholder="Name">
<button @click="increment">Increment</button>
<h3>Name: {{ state.user.name }}</h3>
<h3>Age: {{ state.user.age }}</h3>
<h3>City: {{ state.user.address.city }}</h3>
<h3>Country: {{ state.user.address.country }}</h3>

    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup() {
        const state = reactive({
            count: 0,
            user: {
                name: 'Hủ',
                age: 23,
                address: {
                    city: 'HCM',
                    country: 'VN'   
                }
            }
        })
        const increment = () => {//Đây vẫn là biến, dạng hàm
            state.count++
        }
        const isLarge = () => {
            return state.count > 5 ? 'text-blue' : 'text-danger'
        }
        const changecolor = () => {
            return state.user.name == 'text-blue' ? 'text-blue' : 'text-danger'
        }
        return {
            state,
            increment,
            isLarge,
            changecolor
        }
    }
}
</script>

<style scoped>
.text-danger {
    color: red;
}
.text-blue{
    color: blue;
}
</style>