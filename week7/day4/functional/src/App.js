import './App.css';
import GroceryList from './Componentss/GroceryList';
import UserForm from './Componentss/UserForm';

function App() {
  return (
    <div className="App">
      <UserForm />
      <GroceryList
        listz={["pearl onions", "thyme", "cremini mushrooms", "butter"]}
      />
    </div>
  )
}

export default App;
