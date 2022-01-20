import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counters from './components/counters.jsx'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }
  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counters[index]};
      counters[index].value++;
      this.setState({counters});
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value--;
    this.setState({counters});
  }
  handleReset = () => {
    console.log("RESET CALLED");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({counters});
  }

  handleRestart = () => {
    console.log("RESTART CALLED");
    window.location.reload();
  }

  render(){
    return(
      <div className='main__wrap'>
        <div className='container'>
          <div className='card__box'>
            <Counters
              counters = {this.state.counters}
              onReset = {this.handleReset}
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
              onDelete = {this.handleDelete}
              onRestart = {this.handleRestart}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
