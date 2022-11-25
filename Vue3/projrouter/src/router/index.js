import { createWebHistory, createRouter } from "vue-router";
import Estudiantes from '../views/Estudiantes.vue'
import Login from '../views/Login.vue'
import Ejercicio1 from '../components/Test.vue'
import Ejercicio2 from '../components/Test2.vue'
import Ejercicio3 from '../components/Test3.vue'
import Ejercicio4 from '../components/Test4.vue'
import Ejercicio5 from '../components/Test5.vue'
import Ejercicio6 from '../components/Test6.vue'
import Ejercicio7 from '../components/Test7.vue'
import Ejercicio8 from '../components/Test8.vue'

const routes = [
    {
        path: '/Login',
        name: 'TLogin',
        component: Login
    },
    {
        path: '/Estudiantes',
        name: 'TEstudiantes',
        component: Estudiantes
    },
    {
        path: '/Ejercicio1',
        name: 'TEjercicio1',
        component: Ejercicio1
    },
    {
        path: '/Ejercicio2',
        name: 'TEjercicio2',
        component: Ejercicio2
    },
    {
        path: '/Ejercicio3',
        name: 'TEjercicio3',
        component: Ejercicio3
    },
    {
        path: '/Ejercicio4',
        name: 'TEjercicio4',
        component: Ejercicio4
    },
    {
        path: '/Ejercicio5',
        name: 'TEjercicio5',
        component: Ejercicio5
    },
    {
        path: '/Ejercicio6',
        name: 'TEjercicio6',
        component: Ejercicio6
    },
    {
        path: '/Ejercicio7',
        name: 'TEjercicio7',
        component: Ejercicio7
    },
    {
        path: '/Ejercicio8',
        name: 'TEjercicio8',
        component: Ejercicio8
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router