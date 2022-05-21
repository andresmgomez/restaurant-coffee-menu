import './MainSection.css'

export default function MainSection(props) {
   return (
      <>
         <div className="section-heading text-center">
            <h2 className="title">{props.title}</h2>
            <h3 className="subtitle">{props.subtitle}</h3>
         </div>
      </>
   )
}