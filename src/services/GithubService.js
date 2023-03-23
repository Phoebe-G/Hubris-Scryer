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
    getBranch(branch) {
        return apiClient.get(branch)
                .then((response) => {
                    console.log("getBranch: ", response);
                    return response
                })
    }
}