// @components/index.js (1-7)
// TODO: Counter and Navbar look like playground/experimental components.
// Either start using them in real screens or remove/move them so this
// barrel file only re-exports production UI pieces.
import { Counter } from './Counter/Counter.jsx';
import { Navbar } from './Navbar/Navbar.jsx';
import { Board } from './Board/Board.jsx';
import { Confirm } from './Confirm/Confirm.jsx';
import { GameTitle } from './GameTitle/GameTitle.jsx';

export { Counter, Navbar, Board, Confirm, GameTitle };
