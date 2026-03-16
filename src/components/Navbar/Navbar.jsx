import classes from './Navbar.module.css';

export const Navbar = (props) => {
  const { title } = props;

  // @Navbar.jsx (3-7)
  // TODO: Decide whether this navbar is part of the final UI. If not,
  // move it to a playground folder or remove it to keep components clean.
  return <nav className={classes.title}>{title}</nav>;
};

export default Navbar;
