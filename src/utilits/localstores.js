 const getStoreCad =() =>{
    const storedCartString =localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
 }
 const  savecardtols = cart => {
    const  cartStringfiled = JSON.stringify(cart);
    localStorage.setItem ('cart' , cartStringfiled);

 }
 const addtol = id =>{
    const  cart = getStoreCad();
    cart.push(id);
    // save  to local  storage  
    savecardtols(cart);
 }

 const removeFromls = id =>{
   const  cart = getStoreCad();
   const  remainanig = cart.filter(isx => idx !== id)
   savecardtols(remainanig);
 }
 export{addtol,getStoreCad ,removeFromls}