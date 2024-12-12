const BASE_URL_API = process.env.NEXT_PUBLIC_API_STAGING_URL;


export const GetData = async (url) => {
    try {
        const response = await fetch(`${BASE_URL_API+url}`, {
            method:'GET',
        })

        const resJson = await response.json()
        return resJson
    } catch (e) {
        return e
    }
};




export const PostData = async (url, data) => {
    try {
        const response = await fetch(`${BASE_URL_API+url}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Credentials":"True",
            },
            body:JSON.stringify(data)
        })
        const resJson = await response.json()
        return resJson
    } catch (e) {
        return (e)
   }
};



export const GetDataWithToken = async (url, token = '') => {
    let tokenSession

    if (token !== '') {
        tokenSession = token
    } else {
        tokenSession = getToken()
    }

    try {
        const response = await fetch(`${BASE_URL_API + url}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${tokenSession}`
            }
        })
        const resJson = await response.json()
        return resJson
    } catch (e) {
        return e
    }
    

};