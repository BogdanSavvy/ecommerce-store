"use client";

import { useState, useEffect } from "react";

interface CurrencyProps {
  value?: string | number;
}

const formattrer = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">
      {formattrer.format(Number(value))}
   </div>
  );
};

export default Currency;
