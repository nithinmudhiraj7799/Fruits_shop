import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-100 to-teal-200 py-6 px-4">
      <div className="container mx-auto">
        
        {/* Hero Section - Reduced Height */}
        <div className="relative bg-[url('/images/fruit-bg.jpg')] bg-cover bg-center text-center py-6 rounded-md shadow-md">
          <div className="bg-black bg-opacity-40 p-4 rounded-md">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              Welcome to the Fruit Shop 🍎🍊
            </h1>
            <p className="text-gray-200 mt-1 text-base">
              Fresh, organic, and delicious fruits at the best prices.
            </p>
          </div>
        </div>

        {/* Smaller Carousel Section */}
        <div className="w-full max-w-5xl mx-auto mt-4 h-100">
  <Carousel />
</div>
        {/* Featured Fruits Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  " >
          {[
            { emoji: "🍏", title: "Fresh Fruits", desc: "100% organic and farm-fresh fruits." },
            { emoji: "🍍", title: "Exotic Picks", desc: "Taste the world with unique selections." },
            { emoji: "🍉", title: "Summer Specials", desc: "Beat the heat with juicy favorites." }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-700">{item.emoji} {item.title}</h2>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Navigate to Fruits Page */}
        <div className="text-center mt-6">
          <Link 
            to="/fruits" 
            className="px-5 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white text-base font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Fruits 🍇
          </Link>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
