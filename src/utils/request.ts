export function request(url:string,method:string,property:any){
    const token = window.localStorage.getItem("token")
    return fetch(url,{
        method: method,
        headers: {
            'Content-type': 'application/json',
            token: token+""
        },
        ...property
    }).then(res=>res.json())
}