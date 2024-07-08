import React from 'react';

const Test = () => {

  const makePayment = async () => {
    const response = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 30000,  
        name: '<CUSTOMER NAME>',
        email: '<CUSTOMER EMAIL>',
        contact: '<CUSTOMER PHONE>',
        reference_doctype: 'Conference Participant', // real doctype kodkkanam
        reference_docname: '12345',  // reference docname
        receipt: '12345',  // receipt ID
      }),
    });

    const data = await response.json();

    const options = {
      key: 'rzp_test_dA2EJLIvDe4Amr',
      amount: 1000,
      currency: 'INR',  
      name: '<CHECKOUT MODAL TITLE>',
      description: '<CHECKOUT MODAL DESCRIPTION>',
      image: '<CHECKOUT MODAL LOGO>',
      order_id: data.id,
      handler: function(response) {
        console.log(response);
        alert('Payment successful!');
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.contact,
      },
      theme: {
        color: '<MODAL COLOR>',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button
        className="mt-2 w-100"
        style={{ fontSize: "25px" }}
        onClick={() => makePayment()}
      >
        Pay
      </button>
    </div>
  );
};

export default Test;
