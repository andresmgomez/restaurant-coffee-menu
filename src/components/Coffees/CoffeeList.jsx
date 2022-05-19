import CoffeeDetail from "../Coffee/CoffeeDetail";
import './CoffeeList.css'

export default function CoffeeList() {
   return (
      <>
         <div className="row">
            <div className="col-12 col-lg-6 col-xl-3">
               <article className="coffee-list">
               <CoffeeDetail />
               </article>
            </div>
         </div>
      </>
   )
}