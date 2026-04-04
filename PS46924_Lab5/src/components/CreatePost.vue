<template>
    <div>
        <h2>Tạo bài viết mới</h2>
        <input v-model="title" placeholder="Tiêu đề bài viết" />
        <input v-model="author" placeholder="Tên tác giả" />
        <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
        <button @click="createPost">Đăng bài viết</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit  = defineEmits(['add-post']);

const title = ref('');
const author = ref('');
const content = ref('');

function createPost(){
    if(title.value && author.value && content.value){
        const newPost = {
            title: title.value,
            author: author.value,
            content: content.value
        };

        emit('add-post', newPost);


        title.value = '';
        author.value = '';
        content.value = '';
    } else {
        alert('Vui lòng điền đầy đủ thông tin bài viết!');
    }

}

</script>

<style scoped>
input, textarea {
    display: block;
    margin: 10px 0;
    width: 98%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>