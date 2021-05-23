import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './style/style.css'
// import swaggerUi from 'swagger-ui-express'

//Root_of_Equation
import Bisection from './pages/Root_of_Equation/Bisection';
import False_position from './pages/Root_of_Equation/False_position';
import Newton_raphson from './pages/Root_of_Equation/Newton_raphson';
import Onepoint from './pages/Root_of_Equation/Onepoint';
// import Secant from './pages/Root_of_Equation/Secant';
import Secant from './pages/Root_of_Equation/Secant';

// import Swagger from '.API/swagger' 
// import Home from './pages/Home'


const { Content} = Layout;

const { SubMenu } = Menu;

class App extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };
 
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      'NavItemActive': ''
    }
  }

  render() {
    return (
      <Router>

        <nav className="navbar navbar-static-top">
          <ul className="nav navbar-nav">
            <span className="Navtop"> NUMERICAL MATHOD </span>
            
          </ul><p className="proname">Phakkapon Chintoo 6004062636289</p>
        </nav>

        <nav className="nav">
          <ul>

            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                RootofEquation
                        </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a class="dropdown-item " href="/Bisection">Bisection</a></li>
                <li><a class="dropdown-item " href="/False_position">False Position</a></li>
                <li><a class="dropdown-item " href="/Newton_raphson">Newton Raphson</a></li>
                <li><a class="dropdown-item " href="/Onepoint">One point Iteration</a></li>
                <li><a class="dropdown-item " href="/Secant">Secant</a></li>
              </ul>

              <botton class="btn btn2">
                <li><a type="botton" class="btn btn-secondary" href="/Home"  > Swagger </a></li>
              </botton>
              {/* <Menu.Item key="menu_swagger"><Link to='/Swagger'>Swagger</Link></Menu.Item> */}
            </div>

             

            
          </ul>
          
        </nav>

     
          
            
       

        <Layout style={{ minHeight: "100vh" }}>
          <Layout >
            <Layout>

              <Content style={{ padding: 24, margin: 0, minHeight: 280, background: "#000000" }}>
               
                {/*Root_of_Equation*/}
                <Route path="/Bisection" component={Bisection} />
                <Route path="/False_position" component={False_position} />
                <Route path="/Newton_raphson" component={Newton_raphson} />
                <Route path="/Onepoint" component={Onepoint} />
                <Route path="/Secant" component={Secant} />
                {/* <Route path='/Swagger' component={Swagger}/> */}
                {/* <Route path="/Home" component={Home} /> */}
              </Content>

            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
