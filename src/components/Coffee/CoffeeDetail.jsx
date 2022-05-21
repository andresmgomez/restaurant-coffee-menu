import './CoffeeDetail.css'

export default function CoffeeDetail(props) {
   return (
      <>
         <div className="coffee-details">
            <h4 className="coffee-title">{props.title}</h4>
            <p className="coffee-description">{props.description}</p>
         </div>
      </>
   )
}