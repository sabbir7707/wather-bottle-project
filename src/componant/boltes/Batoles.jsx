import propTypes from 'prop-types'
import './botal.css'
const Batoles = ({botle , handleAddTocart}) => {
/* 
    console.log(botle); */
    const { name ,img ,price } = botle;
/*     console.log(); */
    return (
              
               

      <div className="bottle">
             <h2>Name: {name}</h2>
             <img src={img}></img>
             <p>Price:{price} </p>
             <button onClick={() => handleAddTocart(botle)}> Parches</button>
     </div>

     
       
    );
};
Batoles.propTypes={
    botle: propTypes.object.isRequired,
    handleAddTocart: propTypes.func.isRequired,
}
export default Batoles;