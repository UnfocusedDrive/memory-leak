import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx';
import Progress from './components/Progress/Progress.jsx';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
      asdsadaszzz asdsad
      <Button>
        Button 1
      </Button>
      <Button>
        Button 2
      </Button>
      <Progress>
        P
      </Progress>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body
);