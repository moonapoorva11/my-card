import React from 'react'
import ProductCard from './productcard';
import Burger from '../burger.jpg';
import Pizza from '../pizza.jpg';
import Sandwitch from '../sandwitch.jpg'
import Chips from '../chips.jpg';
import ColdCoffe from '../coldcoffe.jpg';
import Idli from '../idli.jpg';
import Pastry from '../pastry.jpg';
import Cookies from '../cookies.jpg';


const Card = () => {
  return (
    <div className='product'>
        <ProductCard image={Burger}
        name="Burger" 
        price="$4.60"
        description=" A hamburger is a type of sandwich that involves a ground beef patty served between two halves of a round bun"/>
       
        <ProductCard image={Pizza}
         name="Pizza" 
         price="$7.60"
         description="The taste of pizza can be described as a combination of different flavors that work together to create a delicious experience for the taste buds. "/>
        
        <ProductCard image={Sandwitch}
         name="Sandwitch" 
         price="$9.60"
         description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. "/>

        <ProductCard image={Chips}
         name="Chips" 
         price="$5.60"
         description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. "/>

<ProductCard image={ColdCoffe}
         name="ColdCoffe" 
         price="$5.90"
         description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. "/>

<ProductCard image={Idli}
         name="Idli" 
         price="$7.80"
         description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. "/>

<ProductCard image={Pastry }
         name="Pastry" 
         price="$4.60"
         description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. "/>

<ProductCard image={Cookies}
         name="Cookies" 
         price="$4.70"
         description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. "/>
    </div>
  )
}

export default Card ;
