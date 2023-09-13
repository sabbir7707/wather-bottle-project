import propTypes from 'prop-types';
import './cart.css'
const Cart = ({cart,handelremovefromCart }) => {
    return (
        <div className="cart-container"> 
             <h4>cart:{cart.length}</h4>

            
            
             <div>
                {cart.map(bottle => <div key={bottle.id}  > 
                    <img src={bottle.img}></img>
                    <button onClick={ () =>handelremovefromCart (bottle.id)}> Remove</button>

                </div> )}
             </div>
         
        </div>
        
    );
};
 Cart.propTypes={
    cart:propTypes.array.isRequired
 }
export default Cart;