import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Greeting from "./functionComponent";
import AskForHello from './functionClass';
import ItemList from './showHowToUseKey';
import TodoList from './ToDoList/todoList';
import HolidayDesign from './HolidayDesign/HolidayDesign';
import PortfolioMainPage from './Portfolio/PortfolioMainPage';
import Contact from './Portfolio/components/Contact';
import AppleProject from './Portfolio/components/AppleProject';


// import TodoWrapper from './toDoComponents/TodoWrapper'

function App() {
  return (
    <div className="App">
      {/* <AppleProject/> */}
      <PortfolioMainPage className="mainPagePart"/>
      <Contact/>
      {/* <EMovie/> */}
    </div>
  );
}

export default App;
