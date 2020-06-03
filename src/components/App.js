import React from 'react';
import Header from "../shared/components/layout/Header"
import Footer from "../shared/components/layout/Footer"
import Content from "../shared/components/layout/Content"
import Todo from "./Todo/Todo"
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header  title = "Welcome to CodeJobs"/>
        <Content>
          <Todo />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
