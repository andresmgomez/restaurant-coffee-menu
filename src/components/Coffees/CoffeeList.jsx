import { useEffect, useState } from "react";
import CoffeeDetail from "../Coffee/CoffeeDetail";
import './CoffeeList.css'

export default function CoffeeList() {
   // Set default state for our list of coffees
   const [coffeeList, setCoffeeList] = useState([]);

   useEffect(() => {
      // Fetch the list of coffees from the REST API
      const getCoffeeAPI = async () => {
         const response = await fetch(`https://api.sampleapis.com/coffee/hot`)
         const hotCoffees = await response.json();
         await setCoffeeList(hotCoffees);
      }
      getCoffeeAPI();
   }, [])

   return (
      <>
         <div className="row">
            <div className="col-sm-12 col-lg-6 col-xl-3">
               {coffeeList && (
                  <article className="coffee-list">
                     {coffeeList.map(eachCoffee => {
                        return <CoffeeDetail title={eachCoffee.title} description={eachCoffee.description} />
                     })}
                  </article>
               )}
            </div>
         </div>
      </>
   )
}