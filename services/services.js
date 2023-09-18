const postData = async (url, data) => {
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Cloud not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postDatam}
export {getResource}