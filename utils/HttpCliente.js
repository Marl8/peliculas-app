const API = " https://api.themoviedb.org/3";

export const get = (path) => {
    return fetch(API + path, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTUzYjRkOWY1MDlkNGVmM2NjZGQ2MGMyM2M4OTU5NyIsInN1YiI6IjY1OTcyZjkyNWNjMTFkNzdkODdkM2RlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Tdpyr0grmKEYzMXhv5CPIIJfvZbkueIlzfdNFuj1iw',
            "Content-Type": 'application/json;charset=utf-8'
        }
    }).then((results) => results.json())
}

