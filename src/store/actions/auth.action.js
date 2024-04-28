import { Login } from "../../service/auth.service";

export const LoginAction = async(dispatch, formPayload) => {
    try {
        dispatch({type : "process"});
    const res = await Login(formPayload);
    if(res.data){
        dispatch({type : "login", payload : res.data})
    }else{
        dispatch({type : "error", payload: res.msg});
    }
    } catch (error) {
        dispatch({type : "error", payload: res.msg});
    }
}