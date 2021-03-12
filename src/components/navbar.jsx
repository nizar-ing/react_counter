const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light h3'>
      <span>
        <img
          className='mr-2'
          src='images/in_logo.png'
          alt=''
          style={{ width: "40px", height: "40px" }}
        />
        ReactCounter
        <span className='badge badge-pill badge-success ml-2'>0</span>
      </span>
    </nav>
  );
};

export default Navbar;
