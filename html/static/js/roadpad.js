const BASE_URL = 'https://roadpad-app-template/'


 async function post(method, data) {
    const ndata = data === undefined ? '{}' : JSON.stringify(data)
    return axios
        .post(BASE_URL + method, ndata)
        .then(function (response) {
            try {
                return JSON.parse(response.data)
            } catch (e) {
                return response
            }
        })
        .catch((error) => console.log(error))
}
