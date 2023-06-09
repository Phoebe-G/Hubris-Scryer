import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
  
app.use(createPinia())
app.use(router)
app.mount("#app")

/*
const app = Vue.createApp({
    data() {
        return {
            course: {
                title: "Intro to Vue 3",
                provider: "Vue Mastery",
                website: "https://www.vuemastery.com"
            },
            lessons: [ 
                { 
                    name: "Lesson 1",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: false
                }, 
                { 
                    name: "Lesson 2" ,
                    summary: "Follow-along code to build out a rudamentary shop type product widget. The Code Challenge was to add a description to the data object and display it using a <p> tag.",
                    code: true
                }, 
                { 
                    name: "Lesson 3",
                    summary: "Follow-along code demonstrating asset binding to display different images when hovering over a colour swatch. The Coding Challenge was to Add a url to the data object and bind the url to 'an' anchor tag's href attribute. I don't remember doing this one lol.",
                    code: true
                }, 
                { 
                    name: "Lesson 4",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                { 
                    name: "Lesson 5",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                { 
                    name: "Lesson 6",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                { 
                    name: "Lesson 7",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                {
                    name: "Lesson 8",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                { 
                    name: "Lesson 9",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                { 
                    name: "Lesson 10",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
                }, 
                { 
                    name: "Lesson 11",
                    summary: "Pretty basic intro lesson. Short and to the point, took this time to start setting up my dev environment.",
                    code: true
               }
            ],
            selectedLesson: null
        }
    },
    methods: {
        updateLesson(lesson) {
            this.selectedLesson = lesson
        }
    }
  })
  
  app.use(createPinia())
  app.use(router)
  app.mount("#app")*/

