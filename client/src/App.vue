<script setup>

import { onMounted } from 'vue'

import StudentMessage from './components/StudentMessage.vue'
import NewStudent from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'

import { useStudentStore } from './stores/StudentStore'

const studentStore = useStudentStore()


onMounted( () => {
  studentStore.getAllStudents()
})

</script>

<template>

  <StudentMessage></StudentMessage>
  <NewStudent></NewStudent>
  <StudentTable></StudentTable>
</template>

<style scoped>

</style>
