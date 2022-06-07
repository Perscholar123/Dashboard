// class Header extends React.Component {
//     render() {
//       return(
//           <div>
//                <h2>Commence Dashboard Creation!</h2>
//           </div>
//       )
//     }
//   }

  
  class Sidebar extends React.Component {
    render () {
      return (
        <div className="sidebar">
          <p>Dashboard</p>
          <p>Widget</p>
          <p>Reviews</p>
          <p>Customers</p>
          <p>Online Analysis</p>
          <p>Widget</p>
        </div>
      )
    }
  }

  class Square1 extends React.Component {
    render () {
      return (
        <div className="square1">
          <p>Reviews</p>
          <h3>1,281</h3>
        </div>
      )
    }
  }

  
  class Square2 extends React.Component {
    render () {
      return (
        <div className="square2">
          <p>Average Rating</p>
          <h3>4.6</h3>
        </div>
      )
    }
  }

  
  class Square3 extends React.Component {
    render () {
      return (
        <div className="square3">
          <p>Sentiment Analysis</p>
          <h3>960</h3>
          <h3>122</h3>
          <h3>321</h3>
        </div>
      )
    }
  }

  
  class Rect1 extends React.Component {
    render () {
      return (
        <div className="rect1">
          <p>Website Visitors</p>
          <h3>821</h3>
          <div className="rect2">      
         </div>
        </div>
      )
    }
  }
 

class App extends React.Component {
    render() {
        return (
           <div>
                <Sidebar />
                <Square1 />
                <Square2 />
                <Square3 />
                <Rect1 />                           
           </div>
               )
    }
}

ReactDOM.render(<App />,document.querySelector("main"));