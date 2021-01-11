// import Users from './Components/Users';
import Tabs from './Components/Tabs';

function App() {
  const stuff = [
    {
      label: 'Tab 1',
      content: 'Stuff from tab 1'
    },
    {
      label: 'Tab 2',
      content: 'Stuff from tab 2'
    },
    {
      label: 'Tab 3',
      content: 'Stuff from tab 3'
    },
  ]
  return (
    // <Users />
    <Tabs items={stuff} />
  )
}

export default App;
