export async function load({params, fetch}) {
    let res = await fetch("http://localhost:8080/api/v1/posts/" + params.id)
    let result = await res.json();
    
    return result;
}