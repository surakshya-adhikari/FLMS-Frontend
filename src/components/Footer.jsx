// const Footer = () => {
//     return (
//       <footer className="bg-gray-900 text-white py-6 mt-16">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2025 FutsalTourney. All rights reserved.</p>
//           <div className="mt-4 flex justify-center space-x-6">
//             <a href="#" className="hover:text-green-400">Facebook</a>
//             <a href="#" className="hover:text-green-400">Instagram</a>
//             <a href="#" className="hover:text-green-400">Twitter</a>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
  
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 mb-4">
          © 2025 FutsalTourney. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;