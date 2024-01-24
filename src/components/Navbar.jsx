

const Navbar = (props) => {
    // Destructure props and set default values
    const { title = "Default Title", subtitle = "Default Subtitle" } = props;
  
    return (
      <div className="navbar1">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      
    );
    
  };
  
  export default Navbar;  
  