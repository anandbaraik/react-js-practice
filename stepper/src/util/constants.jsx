export const  CHECKOUT_STEPS = [
    {
        name: `Customer Info`,
        component : () => <div className="text-center mb-5"><h2>Provide your contact details.</h2></div>
    },
    {
        name : `Shipping Info`,
        component : () => <div className="text-center mb-5"><h2>Enter your shipping address.</h2></div>
    },
    {
        name : `Payment`,
        component : () => <div className="text-center mb-5"><h2>Complete payment for your order.</h2></div>
    },
    {
        name : `Order`,
        component : () => <div className="text-center mb-5"><h2>Place your order</h2></div>
    }
];