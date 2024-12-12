import { Login, CheckUser, Register } from "@/modules/auth/auth.repository";    

export const LoginUseCase = async (data) => {

    
    const LoginProses = await Login(data)
    let user = "admin";
    if (LoginProses.original.meta.status =="success") {

        let count = 0
        if(LoginProses.original.data.user.last_count != null){
            count = await LoginProses.original.data.user.last_count.count
        }
        
        const checkAdmin = LoginProses.original.data.user.user_member_position.position_member.json;
        let isAdmin = true;
        let warehouse = true;
        let cashier = true;
        let deskprint = true;

        
        if(checkAdmin){
            const dataAccess = await JSON.parse(checkAdmin);
            isAdmin = false;
            warehouse = dataAccess.gudang; 
            cashier = dataAccess.kasir; 
            deskprint = dataAccess.deskprint;

        }

        if(cashier){
            user = "kasir";
        }
        if(warehouse){
            user = "gudang";
        }
        if(deskprint){
            user="deskprint";
        }

        const getLock = localStorage.getItem("lock");

        if(!getLock){
            localStorage.setItem("lock", JSON.stringify({isLock: false}));
        }
        
        // if(LoginProses.original.data.user.last_count){
        //     count = LoginProses.original.data.user.last_count
        // }

        localStorage.setItem('user-data', JSON.stringify({
            token:LoginProses.original.data.token,
            logo:LoginProses.original.data.logo,
            subscribe_life_time:LoginProses.original.data.subscribe_life_time,
            user_name:LoginProses.original.data.user.name,
            admin: isAdmin,
            warehouse: warehouse,
            position:LoginProses.original.data.user.user_member_position.position_member.role.name,
            cashier: cashier,
            deskprint:deskprint,
            company:{
                name: LoginProses.original.data.user.user_member_position.company.name,
                address: LoginProses.original.data.user.user_member_position.company.address,
                mail: LoginProses.original.data.user.user_member_position.company.mail,
                phone: LoginProses.original.data.user.user_member_position.company.phone,
                description: LoginProses.original.data.user.user_member_position.company.description,
                slug: LoginProses.original.data.user.user_member_position.company.slug,
                company_id: LoginProses.original.data.user.user_member_position.company_id,
            },
            business_setting:{
                foot_note:LoginProses.original.data.business_setting[0].value,
                prefix:LoginProses.original.data.business_setting[1].value,
                tax:{
                    value:parseInt(LoginProses.original.data.business_setting[2].value),
                    status:LoginProses.original.data.business_setting[2].is_active == 1 ? true : false,
                }
            }

        }))
        // console.log("out",count)
        localStorage.setItem('count', JSON.stringify({
            count
        }))
        return { token: LoginProses.original.data.token, user };
        // return false
    }

    if (LoginProses.original.meta.status =="error") return {
        status: false,
        code:LoginProses.original.meta.code,
        slug:LoginProses.original.data ? LoginProses.original.data.user_member_position ? LoginProses.original.data.user_member_position.company.slug : '':''

    }

}


export const CheckLogin = () => {
    if (typeof localStorage != 'undefined') {

        const getItem = localStorage.getItem('user-data')


        if (getItem !== undefined) {

            const userData = JSON.parse(getItem);
    
            if (userData) {
                return userData
            }
        }

        return null

    }

    return false
}

export const CheckNumber = () => {
    if (typeof localStorage != 'undefined') {

        const getItem = localStorage.getItem('count')


        if (getItem !== undefined) {

            const userData = JSON.parse(getItem);
    
            if (userData) {
                return userData
            }
        }

        return null

    }

    return false
}


export const CheckUserUseCase = async (token) => {
    // const user = await Che
}


export const RegisterUseCase = async (data) => {
    
    const RegisterProses = await Register(data)


    if (RegisterProses.success) {

            localStorage.setItem('user-data', JSON.stringify({
                token: RegisterProses.token,
            }))

            return {
                data: {
                    token: RegisterProses.token,
                    // ...userData
                },
                ...RegisterProses
            }
        // }

    }

    return RegisterProses
}