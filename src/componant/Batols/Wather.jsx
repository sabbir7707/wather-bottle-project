import { useEffect, useState } from "react";
import Batoles from "../boltes/Batoles";
import './Wather.css'
import { addtol, getStoreCad, removeFromls } from "../../utilits/localstores";
import Cart from "../cart/Cart";


const Wather = () => {
    const [bottles ,setbottles]= useState([])

          const [ cart ,setcart ] = useState([])

    useEffect(()=>{
        fetch('wathches.json')
        .then(res => res.json())
        .then(data => setbottles(data))

    },[])

         // load cart from local storage

         useEffect(()=>{
            console.log('called the useeffectttt', bottles.length);
            if (bottles.length ) {
                const storedCart = getStoreCad();
                console.log(storedCart,bottles);
                     const saveCardevai =[];
                for(const id of storedCart){
                    console.log(id);
                    const bottle = bottles.find(bottle => bottle.id === id);
                    if (bottle) {
                        saveCardevai.push(bottle)
                    }
                }
                console.log(saveCardevai);
                setcart(saveCardevai);
            }
         },[bottles])


    const handleAddTocart = bottle =>
    {
        console.log(bottle)
        const newcart = [...cart ,bottle]
        setcart(newcart);
        addtol(bottle.id)
 
    }
       const handelremovefromCart = id =>{
        const remainungcart =  cart.filter(bottle => bottle.id !== id);
        setcart(remainungcart)

         removeFromls (id)

       }


    return (
        <div>

     
          <h2>Bottles Available:{bottles.length} </h2>

         
          
          <Cart cart={cart} handelremovefromCart={handelremovefromCart}></Cart>

        <div className="botale-container">
        {
            bottles.map(botle => <Batoles key={botle.id} botle ={botle} 
             handleAddTocart = {handleAddTocart}
             
            ></Batoles>)
          }

        </div>
          
        </div>
    );
};

export default Wather;