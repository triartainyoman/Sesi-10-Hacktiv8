import React from "react";
import "./App.css";
import Counter from "./Counter";
import Hero from "./Hero";
import Users from "./Users";
import UsersNew from "./UsersNew";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>My First React App</h1>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          exercitationem nesciunt eligendi fugiat quos aperiam quaerat nobis,
          libero ut hic ex, error cupiditate excepturi sint distinctio
          voluptatem animi deserunt incidunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          libero laborum molestias repellendus debitis dolores vero numquam,
          voluptatem labore fugit similique, aliquid magni ipsam quis, esse
          aperiam aspernatur corporis consequatur?
        </p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>My Self - 2022</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
        <hr />
        <Users />
        <hr />
        <UsersNew />
        <hr />
        <Counter />
        <hr />
        <Hero />
      </div>
    );
  }
}

export default App;
