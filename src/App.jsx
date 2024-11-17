// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
// import { CartProvider } from "./context/CartContext";
// import { useEffect, useState } from "react";


// function App() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch the JSON file from the public folder
//     fetch(`${process.env.PUBLIC_URL}/data.json`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);


//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <div className="container mx-auto mt-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products/:id" element={<ProductDetails />} />
//             {/* Add more routes here */}
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
