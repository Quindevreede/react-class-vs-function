import React from 'react';
import './App.css';

function App() {
  const [isLightOn, toggleIsLightOn] = React.useState(true);

  // class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isLightOn: true
  //     };

  function handleClick() {
    toggleIsLightOn(!isLightOn);
  }

//   this.handleClick = this.handleClick.bind(this);
// }
//
// handleClick() {
//   this.setState({
//     isLightOn: !this.state.isLightOn,
//   });
// }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {isLightOn ? 'AAN' : 'UIT'}
    </button>
  );
}

// render() {
//   return (
//       <button
//           type="button"
//           onClick={this.handleClick}
//       >
//         {this.state.isLightOn ? 'AAN' : 'UIT'}
//       </button>
//   );
// }
// }

export default App;
