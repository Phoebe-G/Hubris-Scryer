import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://phoebe-g.github.io/vue-db1",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCourse() {
        return apiClient.get('/lessons.json')
        .then((response) => {
            return response.data.course
        })
    },

    getLessons() {
        return apiClient.get('/lessons.json')
        .then((response) => {
            return response.data.lessons
        })
    },

    getLesson(id) {
        return apiClient.get('/lessons.json')
        .then((response) => {
            return response.data.lessons[id]
        })
    }
}