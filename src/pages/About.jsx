import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
        <div className="mb-20"><Navbar></Navbar></div>
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-red-500 mb-6">About MegaMerx</h1>
      <p className="mb-4 text-lg">
        MegaMerx is a leading B2B wholesale marketplace connecting verified
        suppliers with businesses worldwide. Whether you’re looking to buy in
        bulk or sell wholesale, our platform makes it simple, secure, and
        profitable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Browse our extensive wholesale product categories.</li>
        <li>Connect directly with verified suppliers.</li>
        <li>Negotiate bulk deals and complete secure transactions.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Wide variety of wholesale products.</li>
        <li>Verified and trusted sellers.</li>
        <li>Secure payment and delivery process.</li>
        <li>Global reach with local support.</li>
      </ul>
    </div>
    <div><Footer></Footer></div>
    </div>
  );
};

export default About;
