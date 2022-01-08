import api from "./api";

const apiMiddleware = (store) => (next) => (action) => {

    if(action.type == "obtener-productos")
    {
        api.all().then(console.log);
    }

}