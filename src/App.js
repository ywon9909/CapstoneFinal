
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';
import MapComponent from './components/MapComponent';
import SuccessComponent from './components/SuccessComponent';
import CalendarComponent from './components/CalendarComponent';


function App() {
  return (
    <div> 
      <Router>           
        <HeaderComponent/> 
          <div className="container">
            <Switch>      
              <Route path = "/category-board/:category" exact component = {ListBoardComponent}></Route> {/*나중에 홈 화면 jsx 만들 것 */}
              <Route path = "/board" component = {ListBoardComponent}></Route>
              <Route path = "/create-board/:num" component ={CreateBoardComponent}></Route>{/*생성페이지*/}
              <Route path = "/read-board/:num" component = {ReadBoardComponent}></Route>{/*상세페이지*/}
              <Route path = "/category-board/:category" component={ListBoardComponent}></Route> {/*카테고리별 리스트 보여줌*/}
              <Route path = "/category-map/:category" component={MapComponent}></Route>{/*지도 페이지*/}
              <Route path = "/success" component={SuccessComponent}></Route> {/*성공페이지 */}
              <Route path = "/calendar" component={CalendarComponent}></Route> 

            </Switch>
          </div>
        <FooterComponent/> 
      </Router>
    </div>
  );
}

export default App;
