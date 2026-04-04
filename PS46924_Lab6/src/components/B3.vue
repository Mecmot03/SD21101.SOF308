<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4 d-flex" v-for = "(item, index) in items" :key = "index">
                <div class="card h-100 w-100">
                    <img :src="item.image" alt="Hình ảnh {{ index }}" />
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info text-first">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import img1 from '../assets/images/spinach_300x300.jpg';
import img2 from '../assets/images/sesameoil_300x300.jpg';
import img3 from '../assets/images/eat-clean.png';

const items = [
    { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là...', image: img1 },
    { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại...', image: img2 },
    { title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng...', image: img3 },
];
</script>

<style></style>