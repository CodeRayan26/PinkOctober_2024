const Navbar = () => {
    return (
      <nav className="bg-transparent flex justify-between items-center px-6 py-4 relative">
        <div className="flex items-center space-x-2">
          <img src="../logo.png" alt="Prevena Logo" className="h-14 bg-transparent ml-auto" />
        </div>
  
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-500">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-500">
              About
            </a>
            <a href="#product" className="text-gray-700 hover:text-red-500">
              Product
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-500">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  