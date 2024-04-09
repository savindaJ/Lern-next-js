
export const getCusIds = async () => {
    const response = await fetch('http://localhost:8080/customer/get/ids');
    const data = await response.json();
    console.log(data);
    return data;
}

export const getItemIds = async () => {
    const response = await fetch('http://localhost:8080/item/get/ids');
    const data = await response.json();
    console.log(data);
    return data;
}

export const getOrderId = async () => {
    const response = await fetch('http://localhost:8080/');
    console.log('ssssssssssssssssssssss',response);
    const data = await response.json();
    return data;
}