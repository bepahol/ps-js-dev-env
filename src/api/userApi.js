import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError); // this isn't working...
    /* console.log( "get: " + fetch(url).then(onSuccess, onError) );
    return [
        {"id": 1, "firstName":"Bob",   "lastName":"Smith",  "email":"bob@gmail.com"},
        {"id": 2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@yahoo.com"}
    ];*/
}

// Can't name the function "delete" since it's a reserved word in js
function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}