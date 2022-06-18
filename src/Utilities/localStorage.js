import Swal from "sweetalert2";

// data sore function 
const storeData = (data) =>{
    localStorage.setItem('card-info', JSON.stringify(data));
} 

// get data function
const getData = () => {
   return localStorage.getItem('card-info');
}

// Store a new product 
const storeDataToLocalStorage = (info) => {
    const { orderQuantity, _id:id} = info;

    // get previous card info
    const previousInfo = getData();

    if(previousInfo){
      let totalStoredQuantity = 0;
      // Parse product info;
      const currentProductInfo = JSON.parse(previousInfo);
      currentProductInfo.map(i => totalStoredQuantity += i.orderQuantity);

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
        const isStored = currentProductInfo.find(i => i._id === id);
        console.log(isStored);
        if(isStored){
            const updatedData = isStored;
            updatedData.orderQuantity += orderQuantity;
            const restData = currentProductInfo.filter(r => r._id !== id);

            const newInfo = [...restData, updatedData];
            storeData(newInfo);
        }
        else{
            const newInfo = [...currentProductInfo, info];
            storeData(newInfo);
        }
      }
    }
    else{
      const storeData = [info];
      localStorage.setItem('card-info', JSON.stringify(storeData));
    }
}



export {
    storeDataToLocalStorage,
}