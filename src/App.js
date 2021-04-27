
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
//import './assets/css/tabler.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';
import MapComponent from './components/MapComponent';
import SuccessComponent from './components/SuccessComponent';
import PromotionComponent from './components/PromotionComponent';
import HomeComponent from './components/HomeComponent';
import SearchPageComponent from './components/SearchPageComponent'
import SearchSideComponent from './components/SearchSideComponent'
import LoginComponent from './components/LoginComponent';
import MyPageComponent from './components/MyPageComponent';
import ManageComponent from './components/ManageComponent';
import FindIdPwComponent from './components/FindIdPwComponent';
import SignupComponent from './components/SignupComponent';
import Auth from './components/Auth';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        {/* <div style={{float:"right",width:"500px"}}>
                    <SearchSideComponent ></SearchSideComponent>
                </div> */}
         <div className="container"  style={{width: "100%"}}>
        
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route> {/*나중에 홈 화면 jsx 만들 것 */}
            <Route path="/board" component={HomeComponent}></Route>
            <Route path="/create-board/:num" component={CreateBoardComponent}></Route>{/*생성페이지*/}
            <Route path="/read-board/:num" component={ReadBoardComponent}></Route>{/*상세페이지*/}
            <Route path="/category-board/:category" component={ListBoardComponent}></Route> {/*카테고리별 리스트 보여줌*/}
            <Route path="/category-map/:category" component={MapComponent}></Route>{/*지도 페이지*/}
            <Route path="/success" component={SuccessComponent}></Route> {/*성공페이지 */}
            <Route path="/promotion" component={PromotionComponent}></Route>
            <Route path="/search-board/:search" component={SearchPageComponent}></Route>
            <Route path="/searchside" component={SearchSideComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/mypage" component={MyPageComponent}></Route>
            <Route path="/manage" component={ManageComponent}></Route>
            <Route path="/find" component={FindIdPwComponent}></Route>{/*Id/Pw 찾기 */}
            <Route path="/Signup" component={SignupComponent}></Route> {/*성공페이지 */}
          </Switch>
         
          
        </div>
        

      </Router>
      
     <FooterComponent />
    </div>
  );
}

export default App;
