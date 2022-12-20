import Header from './components/Header/Header'
import List from './components/List/List'
import './App.css';
import Mensagem from './components/Mensagem/Mensagem';

function App() {
  return (
    <div className="App">
      <Header />
      <Mensagem conteudo="Uhull"/>
      <List />
    </div>
  );
}

export default App;
