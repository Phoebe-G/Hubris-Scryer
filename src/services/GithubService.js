import axios from 'axios'
import { onMounted, ref } from 'vue'

const from = '/';
const clientId = import.meta.env.VITE_GITHUB_OAUTH_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_GITHUB_OAUTH_REDIRECT_URL;
const authURL = 'https://github.com/login/oauth/authorize'
const tokenURL = 'https://github.com/login/oauth/access_token'
const oauth_code = ref(null);


const authClient = axios.create({
    baseURL: "https://github.com/login/oauth",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


const apiClient = axios.create({
    baseURL: "https://api.github.com/repos/Phoebe-G/Intro-to-Vue-3",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})



export default {
    oauthLoginLink () {
        const qs = new URLSearchParams( {
            client_id: clientId,
            redirect_uri: redirectUrl,
            scope: 'user:repo',
            state: from,
        });
    
        return  `${authURL}?${qs.toString()}`;
    },
    setOAuthCode(code) {
        oauth_code.value = code;
        console.log("Successful authentication and got code", oauth_code.value)

        const qs = new URLSearchParams({
            client_id: clientId,
            client_secret: import.meta.env.VITE_GITHUB_OAUTH_CLIENT_SECRET,
            code: oauth_code.value,
            redirect_uri: redirectUrl

        });

        authClient.post(`${tokenURL}?${qs.toString()}`)
        .then((result) => {
            console.log("Got a client token!", result)
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
    },
    getBlob(blob) {
        return apiClient.get(blob)
                .then((response) => {
                    console.log(response)
                    return response
                })
    },
    isLoggedOut() {
        return !!!oauth_code.value;
    }
}