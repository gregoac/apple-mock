import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greetings="iPhone 12" subtitle="Blast fast past." span="From $29.12/mo. for 24 mo. or $699 before trade-in"></ItemListContainer>
      <ItemCount stock="10" initial="4" onAdd={function(){console.log(this.state.contador)}}></ItemCount>
    </div>
  );
}

export default App;
