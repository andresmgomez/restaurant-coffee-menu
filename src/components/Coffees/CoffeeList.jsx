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
               {coffeeList.map(eachCoffee => {
                  return (
                     <div className="col-12 col-lg-6 col-xl-4">
                        <section className="coffee-list">
                           <CoffeeDetail title={eachCoffee.title} description={eachCoffee.description} />
                        </section>
                     </div>
                  )
               })}
         </div>
      </>
   )
}