import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const getCardType = (number) => {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    if (visaPattern.test(number)) return 'visa';
    if (mastercardPattern.test(number)) return 'mastercard';
    return 'unknown';
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.join(' ');
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const cardType = getCardType(cardNumber.replace(/\s/g, ''));

  const CardLogo = () => {
    switch (cardType) {
      case 'visa':
        return <div className="text-xl font-bold text-blue-400">VISA</div>;
      case 'mastercard':
        return (
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded-full opacity-75"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full opacity-75 -ml-3"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <motion.div
        className="relative w-[340px] h-[216px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-6 text-white overflow-hidden"
        whileHover={{ y: -5, rotate: -2, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-center mb-4">
            <div className="w-12 h-8 border-2 border-white rounded-md"></div>
          </div>
          <input
            type="text"
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-2xl mb-4 placeholder-gray-400"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="19"
          />
          <div className="flex justify-between mb-4">
            <input
              type="text"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white placeholder-gray-400"
              placeholder="Card Holder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
            <input
              type="text"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-20 text-center placeholder-gray-400"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              maxLength="5"
            />
          </div>
          <div className="flex justify-between items-end">
            <input
              type="text"
              className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-16 text-center placeholder-gray-400"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
            />
            <CardLogo />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreditCard;