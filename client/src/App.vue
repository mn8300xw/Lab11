<script setup>

import { onMounted } from 'vue'

import StudentMessage from './components/StudentMessage.vue'
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'

import { useStudentStore } from './stores/StudentStore'

const studentStore = useStudentStore()


onMounted( () => {
  studentStore.getAllStudents()
})

</script>

<template>

  <StudentMessage></StudentMessage>
  <NewStudentForm></NewStudentForm>
  <StudentTable></StudentTable>
</template>

<style>

</style>
