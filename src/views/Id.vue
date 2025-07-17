<script setup>
import { reactive, onMounted } from 'vue';
import { getDeptList } from '@/services/accountService';


const state = reactive ({
    items:[]
});

onMounted( async()=>{
    const res = await getDeptList();
    state.items = res.data;
    console.log(state.items[0])
})

</script>

<template>
<h1>아이디 찾기</h1>
<div class="findId">
    <div class="container">
        <div class="form-floating">
           <div>
                학과 : 
                <select name="department" id="dept" >
                <option v-for="item in state.items">{{ item.name }}</option>
                <label for="dept">학과</label>
                </select>   
            </div>
            <div>    
                이름 :
                <input type="text" class="form-control" id="name" placeholder="이름">
            </div>
            <div>
                생년월일 :
                <input type="date" class="form-control" id="birth_date">
            </div>
            <div>
                입학년도 :
                <input type="text">
            </div>
        
        </div>
    </div>
</div>
</template>

<style scoped>

</style>