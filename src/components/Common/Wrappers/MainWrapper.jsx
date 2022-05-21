import './MainWrapper.css';
import MainSection from '../Sections/MainSection'

export default function MainWrapper() {
   return (
      <>
         <div className="main-wrapper">
            <div className="container">
               <MainSection 
                  title="Our Best Selection" 
                  subtitle="Variety of Types in Hot Coffees" 
               />
            </div>
         </div>
      </>
   )
}