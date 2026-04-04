<template>
    <div class="container mt-5 col-sm-5">
        <h2 class="mb-4">Top sách bán chạy</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="(product, index) in products">
                <h4>{{ product.name }} - {{ product.price }} VNĐ</h4>
                <button @click="toggleDetails(index)" class="btn btn-info">
                    {{ showDetails[index] ? "Ẩn chi tiết" : "Xem chi tiết" }}
                </button>
                <p v-show="showDetails[index]" class="mt-2">{{ product.description }}</p>
            </li>
        </ul>
    </div>

</template>

<script setup>
import { ref } from 'vue';
const products = ref([
    {
        name: "Vợ Nhặt",
        description: "Tác phẩm 'Vợ Nhặt' của tác giả Kim Lân (1921-2007)...",
        price: 55000,
    },
    {
        name: "LMHT: Riot Games ra mắt tướng mới Ambessa",
        price: 60000,
        description: "Riot Games vừa chính thức công bố tướng mới Ambessa Medarda, một chiến binh tốc độ cao với khả năng cơ động cực mạnh trong top lane.",
    },
    {
        name: "MSI 2025: T1 vô địch sau màn trình diễn xuất sắc",
        price: 75000,
        description: 'Đội tuyển T1 đã giành chức vô địch MSI 2025 với tỷ số 3-1 trước Gen.G, Faker tiếp tục khẳng định vị thế huyền thoại của mình.',
    },
    {
        name: "Bảng ngươi dùng Season 2025: Những thay đổi lớn",
        price: 60000,
        description: "Season 2025 mang đến hàng loạt thay đổi về bản đồ, vật phẩm và cơ chế rồng — ảnh hưởng lớn đến meta hiện tại.",
    }   
]);
// Trạng thái hiển thị chi tiết cho từng cuốn sách
const showDetails = ref(products.value.map(() => false));
// Phương thức để ẩn/hiển thị chi tiết sách
const toggleDetails = (index) => {
    showDetails.value[index] = !showDetails.value[index];
};
</script>

<style></style>