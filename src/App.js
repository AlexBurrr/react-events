import './App.scss';

import Nav from './components/Nav'
import Hero from './components/Hero'
import Button from './components/Button'


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero>
        <Button />
      </Hero>
    </div>
  );
}

export default App;
