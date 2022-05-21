import './MainWrapper.css';
import MainSection from '../Sections/MainSection'

export default function MainWrapper() {
   return (
      <>
         <div className="site-wrapper">
            <div className="container">
               <MainSection />
            </div>
         </div>
      </>
   )
}