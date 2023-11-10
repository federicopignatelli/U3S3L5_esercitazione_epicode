import { Container, Row } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import Player from './component/Player';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Sidebar />
          <Main />
          <Player />
        </Row>
      </Container>
    </div>
  );
}

export default App;

//ci ho messo tanto tempo a ricreare la pagina e ho provato a far comparire le card con redux, fallendo...
//ho provato a fare delle card statiche per mancanza di tempo ma non ha funzionato comunque.
//il componente Rowcard è dentro Main ed è commentato
