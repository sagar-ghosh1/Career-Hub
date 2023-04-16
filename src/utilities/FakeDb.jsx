
const addToDb = (id) =>{
    let shoppingCart;

    const StoreItem = localStorage.getItem("Show-details");
    if(StoreItem){
        shoppingCart = JSON.parse(StoreItem);
    }
    else{
        shoppingCart = {};
    }

       let quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem("Show-details", JSON.stringify(shoppingCart));
}


const GetDataToDb = () =>{
    let shoppingCart = {};

    const StoreItems = localStorage.getItem("Show-details");
    if(StoreItems){
        shoppingCart = JSON.parse(StoreItems);
    }
    return shoppingCart;

}


export { addToDb , GetDataToDb };