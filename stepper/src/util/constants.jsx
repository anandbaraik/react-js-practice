export const  CHECKOUT_STEPS = [
    {
        name: `Customer Info`,
        component : () => <div>Provide your contact details.</div>
    },
    {
        name : `Shipping Info`,
        component : () => <div>Enter your shipping address.</div>
    },
    {
        name : `Payment`,
        component : () => <div>Complete payment for your order.</div>
    },
    {
        name : `Ordered`,
        component : () => <div>Your order has been placed.</div>
    }
];