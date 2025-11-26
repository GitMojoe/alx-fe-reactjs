export async function fetchGithubUser(){
    if(!username) throw new Error("username is required");
    const res = await fetch(`${BASE}/users/${encodeURIComponent(username)}`);
    if(!res.ok){
        const error = new Error("GitHub user not found");
        error.status = res.status;
        throw error;
    }
    const data = await res.json();
    return data;
}