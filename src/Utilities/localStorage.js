import Swal from "sweetalert2";

// data sore function 
const storeData = (data) =>{
    localStorage.setItem('card-info', JSON.stringify(data));
} 

// get data function
const getData = () => {
    const currentData = localStorage.getItem('card-info');
    const parseData = JSON.parse(currentData);
    return parseData;
}

// Store a new product 
const storeDataToLocalStorage = (info) => {
    const { orderQuantity,totalAmount, _id:id} = info;

    // get previous card info
    const previousInfo = getData();

    if(previousInfo){
      let totalStoredQuantity = 0;
      // Parse product info;
      previousInfo.map(i => totalStoredQuantity += i.orderQuantity);

      if((totalStoredQuantity + orderQuantity) > 5){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can add up to five products.',
            footer: '<h2>You have already added five products.</h2>'
        })
      }
      else{
        // Is this product already stored?
        const isStored = previousInfo.find(i => i._id === id);

        if(isStored){
            const updatedData = isStored;
            updatedData.orderQuantity += orderQuantity;
            updatedData.totalAmount += totalAmount;
            const restData = previousInfo.filter(r => r._id !== id);

            const newInfo = [...restData, updatedData];
            storeData(newInfo);
        }
        else{
            const newInfo = [...previousInfo, info];
            storeData(newInfo);
        }
      }
    }
    else{
      const storeData = [info];
      localStorage.setItem('card-info', JSON.stringify(storeData));
    }
}

// get all items
const getProductFromLocalStorage = () => {
    return getData();
}

// get all stored quantity and total price
const cardInfo = () => {
    const currentInfo = getData();
    const quantity = currentInfo?.reduce((sum, product)=> product.orderQuantity + sum, 0)
    const price = currentInfo?.reduce((sum, product) => product.totalAmount + sum, 0);
    return {quantity, price};
}
// Delete product
const deleteItemFromLocalStorage = (id) => {
    const currentItems = getData();
    const rest = currentItems.filter(item => item._id !== id);
    storeData(rest);
    return getData();
}

export {
    storeDataToLocalStorage,
    cardInfo,
    getProductFromLocalStorage,
    deleteItemFromLocalStorage,
}