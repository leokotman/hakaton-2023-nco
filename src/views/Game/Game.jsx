import classes from './Game.module.css';
import { Navbar, Counter } from '../../components';

export const Game = () => {
  return (
    <>
    <header className="App-header">
        <Navbar title='Hakaton' />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </>
  )
}
