import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  // const items = ['New-York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color='primary' onClick={() => console.log('Clicked')}>
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
