import axios from "axios";

export const getAllItems = async () => {
    return await axios
        .get("http://localhost:8080/item")  
        .then((response) => {
        return response.data;
        })
        .catch((error) => {
        console.error(error);
        });
    };