import Title from './components/Title/Title';
import ColumnContainer from './components/ColumnContainer/ColumnContainer';
import Gear from './components/Gear/Gear';
import Description from './components/Description/Description';



import './App.css';

function App() {
  return (
    <div className='App'>
      <Title />
      <Gear />
      <Description />
      <ColumnContainer />
    </div>
  );
}

export default App;
