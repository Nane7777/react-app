import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  // const items = ['New-York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alterVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alterVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color='primary' onClick={() => setAlertVisible(true)}>
        BOUTON !
      </Button>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
