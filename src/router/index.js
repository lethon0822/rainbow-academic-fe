import { createRouter, createWebHistory } from 'vue-router';
import AttendanceInput from '../views/AttendanceInput.vue'; // 출결 입력 화면만 사용

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/professor/attendance', // 홈으로 들어오면 출결 입력으로 이동
    },
    {
      path: '/professor/attendance',
      name: 'attendance',
      component: AttendanceInput,
    },
  ],
});

export default router;
