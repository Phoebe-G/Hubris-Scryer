import { createRouter, createWebHistory } from 'vue-router'
import SummaryView from '@/views/SummaryView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'summary-view',
            component: SummaryView
        }
    ]
})


export default router