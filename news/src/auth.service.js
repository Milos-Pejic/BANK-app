let token = null;

export const setToken=(inputToken)=>{
    token= inputToken;
    console.log(token)
    localStorage.setItem('token', token);
}

 export const getToken=()=>{
    return token ? token : localStorage.getItem('token') ? localStorage.getItem('token') :null
}

export const logOut=()=>{
    token=null
    localStorage.removeItem('token')
}
export const isLogin=()=>{
    console.log(token)
    console.log(localStorage.getItem('token'))
    return token || localStorage.getItem('token')
    
}
 export const setHeader =()=>{
    if(isLogin()){
        return{'Authorization': getToken()}
    }else{
        return{}
    }
}


