import { createRouter, createWebHistory } from 'vue-router'
import SummaryView from '@/views/SummaryView.vue'
import LessonView from '@/views/LessonView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'summary-view',
            component: SummaryView
        },
        {
            path: '/lesson/:lessonId',
            name: 'lesson-view',
            props: true,
            component: {
                default: LessonView,
            }
        }
    ]
})


export default router