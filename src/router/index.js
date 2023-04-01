import { createRouter, createWebHistory } from 'vue-router'
import SummaryView from '@/views/SummaryView.vue'
import LessonView from '@/views/LessonView.vue'
import AuthView from '@/views/AuthView.vue'


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
            component: LessonView
        },
        {
            path: '/api/sessions/oauth/github',
            props: route => ({ code: route.query.code, state: route.query.state }),
            named: 'authd',
            component: AuthView
        }
    ]
})


export default router