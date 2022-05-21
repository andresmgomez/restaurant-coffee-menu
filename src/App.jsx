import './App.css'
import CoffeeList from './components/Coffees/CoffeeList';
import MainWrapper from './components/Common/Wrappers/MainWrapper';

export default function App() {
  return (
    <main id="main-area">
      <article id="cafeteria">
        <MainWrapper />
        <CoffeeList />
      </article>
    </main>
  );
}