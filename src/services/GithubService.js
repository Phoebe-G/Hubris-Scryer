import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://api.github.com/repos/Phoebe-G/Intro-to-Vue-3",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    oauthLogin() {
        return apiClient.get("https://github.com/login/oauth/authorize")
            .then((response) => {
                console.log("response to oauth authorize call", response)
            })
    },
    getBranch(branch) {
        return apiClient.get(branch)
                .then((response) => {
                    return response
                })
    },
    getTree(tree) {
        return apiClient.get(tree)
                .then((response) => {
                    return response
                })
    }
}