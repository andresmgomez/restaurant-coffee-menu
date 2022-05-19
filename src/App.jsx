import './App.css'
import CoffeeList from './components/Coffees/CoffeeList';
import SectionMain from './components/Common/SectionMain/SectionMain';

export default function App() {
  return (
    <main class="main-area">
      <SectionMain />
      <CoffeeList />
    </main>
  );
}
