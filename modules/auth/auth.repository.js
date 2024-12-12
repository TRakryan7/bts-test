import { PostData } from "@/utils/api";

//untuk login data
export const Login = async (data) => {
    const res = await PostData('/login', data)

    return res
}

// untuk register
export const Register = async (data) => {
    const res = await PostData('user/register', data)
    return res
}