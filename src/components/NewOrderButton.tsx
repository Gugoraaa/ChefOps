import { useState } from "react";
import NewOrderModal from "./NewOrderModal";

type Props={
  orderSwitch?: ()=> void
}

export default function NewOrderButton({orderSwitch}:Props) {
  const [isOpen, setIsOpen] = useState(false);
  

  

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black/90 text-white text-lg px-4 py-2 rounded hover:bg-black transition duration-300 font-semibold gap-2 fixed bottom-6 left-1/2 transform -translate-x-1/2"
      >
        New Order
      </button>

      <NewOrderModal isOpen={isOpen} onClose={() => setIsOpen(false)} orderSwitch= {orderSwitch}/>
    </>
  );
}
