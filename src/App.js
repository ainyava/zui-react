import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';
import Select from './components/Select';
import Chips from './components/Chips';
import { useState } from 'react';

function App() {

  const [val, setVal] = useState('Hamed');
  const [color, setColor] = useState('#c0392b');

  return (
    <div className="hamed">
      <TextField value={val} onChange={(e) => setVal(e.target.value)}></TextField><Button onClick={() => {
        setVal('Hamed');
        setColor('#c0392b');
      }}>Reset</Button>
      <Select
        label="Color"
        onChange={(e) => setColor(e.target.value)}
        options={[
          { key: 'red', value: '#c0392b', label: 'Red', selected: true },
          { key: 'blue', value: '#2980b9', label: 'Blue' },
          { key: 'orange', value: '#e67e22', label: 'Orange' },
          { key: 'purple', value: '#9b59b6', label: 'Purple' },
          { key: 'green', value: '#27ae60', label: 'Green' },
        ]}
        value={color}
      />
      <div>
        <h1 style={{ color }}>Hello: {val}</h1>
        <Chips items={['Chips 1', 'Chips 2', 'Chips 3', 'Chips 4']} />
      </div>
    </div>
  );
}

export default App;
