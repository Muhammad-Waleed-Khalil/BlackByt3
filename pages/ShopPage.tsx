import React from 'react';
import { SHOP_CONTENT } from '../constants';
import { ShoppingBag, Calendar, Package } from 'lucide-react';

const ShopPage: React.FC = () => {
  const shopItems = [
    {
      title: "Training Session Booking",
      description: "Reserve a slot for dedicated training or consultation.",
      type: "booking",
      price: "Book Now",
      icon: Calendar,
      details: "1-on-1 or group sessions available"
    },
    {
      title: "Black Byt3 Swag Pack",
      description: "Hoodie, stickers, and physical challenge coin.",
      type: "product", 
      price: "$49.99",
      icon: Package,
      details: "Limited edition merchandise"
    },
    {
      title: "Certification Voucher",
      description: "Exam voucher for Practical AWS Certified.",
      type: "product",
      price: "$199.00",
      icon: Package,
      details: "Valid for 1 year"
    },
    {
      title: "Red Team Assessment Package",
      description: "Comprehensive red team engagement with full report.",
      type: "service",
      price: "Custom Quote",
      icon: ShoppingBag,
      details: "Contact for pricing"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            08_SHOP
          </h2>
          <h1 className="text-4xl md:text-5xl font-['Unica_One'] leading-none mb-8 text-white">
            Acquire Assets
          </h1>
          <p className="font-mono text-gray-400 text-lg max-w-3xl">
            From training sessions to certification vouchers, get the tools and knowledge you need to advance your cybersecurity journey.
          </p>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {shopItems.map((item, i) => (
            <div key={i} className="bg-black border border-gray-800 p-6 hover:border-red-600 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <item.icon className="text-red-900 group-hover:text-red-500 transition-colors w-6 h-6" />
                  <span className="text-xs font-mono border border-red-900/30 px-2 py-1 text-gray-500 uppercase">{item.type}</span>
                </div>
                <h4 className="text-xl font-['Unica_One'] text-white mb-2">{item.title}</h4>
                <p className="text-sm font-mono text-gray-400 mb-4">{item.description}</p>
                <p className="text-xs font-mono text-gray-500 mb-6">{item.details}</p>
              </div>
              <button className="w-full border border-gray-700 text-white py-2 font-mono text-xs uppercase hover:bg-red-600 hover:border-red-600 hover:text-black transition-colors">
                {item.price}
              </button>
            </div>
          ))}
        </div>

        {/* Featured Product */}
        <div className="bg-red-900/5 border border-red-900/30 p-8 text-center">
          <ShoppingBag className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h3 className="text-2xl font-['Unica_One'] text-white mb-4">Custom Security Solutions</h3>
          <p className="text-gray-400 font-mono text-sm mb-6 max-w-2xl mx-auto">
            Need a tailored security assessment, training program, or consulting service? 
            We create custom packages designed specifically for your organization's needs.
          </p>
          <button className="bg-red-600 text-black font-mono font-bold text-xs px-6 py-3 hover:bg-white transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;