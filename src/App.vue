<script setup>
import { ref, onMounted } from "vue";
import { getGrades } from "@/services/GradeService.js";
import Header from "@/components/Header.vue";
import Basic from "@/components/Basic.vue";
import Tab from "@/components/Tab.vue";

const grades = ref([]);

onMounted(async () => {
  const response = await getGrades();
  grades.value = response.data;
  document.body.style.backgroundColor = "#dee2e5";
});
</script>

<template>
  <Header />
  <div class="sidebar">
    <Basic />
  </div>
  <div class="content">
    <Tab :grades="grades" />
  </div>
</template>

<style scoped lang="scss">
.content {
  position: relative;
  top: 65px;
  left: 150px;
}
.sidebar {
  position: absolute;
  left: 0;
  top: 65px;
  width: 140px;
}
</style>
