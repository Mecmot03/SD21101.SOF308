<template>
    <div class="container">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ isEdit ? 'Sửa công việc' : 'Thêm công việc' }}</h5>
                <form @submit.prevent="handleSubmit">
                    <div class="row mb-2">
                        <div class="col-3 ">
                            <span class="form-label mb-0">Chức danh</span>
                        </div>
                        <div class="col-9">
                            <input v-model="form.title" type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-3 ">
                            <span class="form-label mb-0">Lương</span>
                        </div>
                        <div class="col-9">
                            <input v-model.number="form.salary" type="number" class="form-control" min="1" required>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-3">
                            <span class="form-label mb-0">Kỹ năng</span>
                        </div>
                        <div class="col-9">
                            <input v-model="form.skills" type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <input v-model="searchTitle" type="text" class="form-control" placeholder="Tìm theo chức danh...">
                        </div>
                        <div class="col-6">
                            <label class="form-label">Lọc lương lớn hơn:</label>
                            <input
                                v-model.number="searchSalary"
                                type="range"
                                class="form-range"
                                min="0"
                                max="4000"
                                step="100"
                            >
                            <span class="ms-2">{{ searchSalary }}</span>
                        </div>
                    </div>
                    <div v-if="error" class="alert alert-danger py-1">{{ error }}</div>
                    <button type="submit" class="btn btn-primary me-2">{{ isEdit ? 'Cập nhật' : 'Thêm' }}</button>
                    <button v-if="isEdit" type="button" class="btn btn-secondary" @click="resetForm">Hủy</button>
                </form>
            </div>
        </div>

        <table class="table table-bordered mt-3 ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Chức danh</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="job in filteredJobs" :key="job.id">
                    <td @click="goToDetail(job.id)">{{ job.id }}</td>
                    <td @click="goToDetail(job.id)">{{ job.title }}</td>
                    <td>
                        <button class="btn btn-sm btn-warning me-1" @click="editJob(job)">Sửa</button>
                        <button class="btn btn-sm btn-danger" @click="deleteJob(job.id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { jobList } from '../data/jobList.js';

const router = useRouter();
const jobListRef = ref(jobList);

function goToDetail(id) {
    router.push(`/job/${id}`);
}

const form = ref({ id: null, title: '', salary: '', skills: '' });
const isEdit = ref(false);
const error = ref('');

function validateForm() {
    if (!form.value.title.trim() || !form.value.skills.trim()) {
        error.value = 'Không được để trống các trường!';
        return false;
    }
    if (!form.value.salary || form.value.salary < 1) {
        error.value = 'Lương phải lớn hơn 0!';
        return false;
    }
    error.value = '';
    return true;
}

function handleSubmit() {
    if (!validateForm()) return;
    if (isEdit.value) {
        // Update
        const idx = jobListRef.value.findIndex(j => j.id === form.value.id);
        if (idx !== -1) jobListRef.value[idx] = { ...form.value };
        isEdit.value = false;
    } else {
        // Add
        const newId = jobListRef.value.length ? Math.max(...jobListRef.value.map(j => j.id)) + 1 : 1;
        jobListRef.value.push({ ...form.value, id: newId });
    }
    resetForm();
}

function editJob(job) {
    form.value = { ...job };
    isEdit.value = true;
    error.value = '';
}

function deleteJob(id) {
    if (confirm('Bạn có chắc muốn xóa?')) {
        jobListRef.value = jobListRef.value.filter(j => j.id !== id);
        if (isEdit.value && form.value.id === id) resetForm();
    }
}
function resetForm() {
    form.value = { id: null, title: '', salary: '', skills: '' };
    isEdit.value = false;
    error.value = '';
}

const searchTitle = ref('');
const searchSalary = ref('');

const filteredJobs = computed(() => {
  return jobListRef.value.filter(job => {
    const matchTitle = job.title.toLowerCase().includes(searchTitle.value.toLowerCase());
    const matchSalary = !searchSalary.value || job.salary >= searchSalary.value;
    return matchTitle && matchSalary;
  });
});
</script>

<style></style>