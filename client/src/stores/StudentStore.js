import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {mande} from "mande";

const studentAPI = mande('api/students')

export const useStudentStore = defineStore('students', () => {

    const sortedStudents = ref([])
    const mostRecentStudent = ref({} )
    const addNewStudentErrors = ref( [] )

    function getAllStudents() {
        return studentAPI.get().then( students => {
            sortedStudents.value = students
        })
    }

    function addNewStudent(student) {
        studentAPI.post(student).then( resp => {
        getAllStudents()
    }).catch(err => {
        addNewStudentErrors.value = err.body
    })
    }

    function deleteStudent(studentToDelete) {

    }

    function arrivedOrLeft(student) {
    }

    const studentCount = computed( () => {
        return sortedStudents.value.length
    })

    return {
        sortedStudents,
        mostRecentStudent,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        studentCount,
        getAllStudents,
    }

})