

function get(url)
{
    let  req = fetch(url, {
        method: 'get'
    })
    return req
}

function post(url, data) {
    let req = fetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return req
}

function upload(url, data) {
    let req = fetch(url, {
        method: 'post',
        body: data
    })
    return req
}

function processResponse(response)
{
    return response.json()
}