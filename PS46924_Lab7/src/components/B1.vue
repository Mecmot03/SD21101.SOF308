<template>
        <div class="col-sm-4 p-5">
            <h3 class="text-center">Bài 1 - Form quản lý công việc</h3>

            <!-- FORM  -->
            <form @submit.prevent="addList">
                <div class="mb-3">
                    <label class="form-label">Tên công việc: </label>
                    <input type="text" class="form-control" placeholder="Nhập tên công việc" v-model="newTodo">
                </div>
                <button type="submit" class="btn btn-primary">Thêm công việc</button>
            </form>

            <!-- LIST  -->
            <ul class="list-group mt-4">
                <li class="list-group-item d-flex justify-content-between align-items-center"
                    v-for="(todo, index) in todos" :key="index">
                    {{ todo }}
                    <button class="btn btn-danger btn-sm" @click="removeList(index)">Xóa</button>
                </li>
            </ul>
        </div>
</template>

<script setup>
import { ref } from "vue";

const newTodo = ref(' ');
const todos = ref(['Ăn sáng', 'Đánh răng', 'Rửa mặt']);

const addList = () => {
    if (newTodo.value.trim()) {
        todos.value.push(newTodo.value);
        newTodo.value = ' ';
    }
};

const removeList = (index) => {
    todos.value.splice(index, 1);
};
</script>

<style></style>