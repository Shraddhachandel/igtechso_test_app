const Footer = () => {
    return (
      <footer className="bg-white py-16 px-6 text-gray-800">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              {["Support Center", "Customer Support", "About Us", "Copyright", "Popular Campaign"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline cursor-pointer block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Our Information */}
          <div>
            <h3 className="font-semibold mb-4">Our Information</h3>
            <ul className="space-y-2">
              {["Return Policy", "Privacy Policy", "Terms & Conditions", "Site Map", "Store Hours"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline cursor-pointer block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* My Account */}
          <div>
            <h3 className="font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              {["Press inquiries", "Social media", "directories", "Images & B-roll", "Permissions"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline cursor-pointer block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Policy */}
          <div>
            <h3 className="font-semibold mb-4">Policy</h3>
            <ul className="space-y-2">
              {["Application security", "Software principles", "Unwanted software policy", "Responsible supply chain"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline cursor-pointer block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;