import React, { useState } from "react";
import laptopImage from './../../img/iphone-13-pro-azul-sierra-real.png 1.png';
import mouseImage from './../../img/iphone-13-pro-azul-sierra-real.png 2.png';
import mousepadImage from './../../img/iphone-13-pro-azul-sierra-real.png 3.png';


const ordersList = [
  {
    id: 1,
    name: "Laptop Galaxy Book 3 Pro,14”",
    storage: "512gb",
    color: "Sierra Blue",
    price: "1 449,99 $",
    delivery: "20$",
    status: "Shipped on 17.01.2024 - Arrival 23.01.2024",
    statusColor: "green",
    quantity: 1,
    image: laptopImage,
  },
  {
    id: 2,
    name: "SVEN RX-200 USB mouse black with backlight",
    storage: "",
    color: "Black",
    price: "9,99 $",
    delivery: "Free Delivery",
    status: "Shipped on 18.01.2024 - Arrival 24.01.2024",
    statusColor: "green",
    quantity: 1,
    image: mouseImage,
  },
  {
    id: 3,
    name: "Mouse pad HAVIT HV-MP839 Black",
    storage: "",
    color: "Black",
    price: "9,99 $",
    delivery: "Free Delivery",
    status: "In Processing until 19.01.2024",
    statusColor: "green",
    quantity: 1,
    image: mousepadImage,
  },
];

const OrdersComponent = () => {
  const [activeTab, setActiveTab] = useState('orders'); 
  const [orders, setOrders] = useState(ordersList); 
  const [cancelledOrders, setCancelledOrders] = useState([]); 
  const [orderCount, setOrderCount] = useState(ordersList.length); 
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const cancelOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    const cancelledOrder = orders.find((order) => order.id === id);
    setOrders(newOrders);
    setCancelledOrders([...cancelledOrders, cancelledOrder]);
    setOrderCount(newOrders.length);
  };

  return (
    <div>
      <h1 className="your-orders-title">Your Orders</h1>
      <div className="order-menu">
        <button 
          className={`order-button ${activeTab === 'orders' ? 'active' : ''}`} 
          onClick={() => handleTabChange('orders')}
        >
          Orders
        </button>
        <button 
          className={`order-button ${activeTab === 'buyAgain' ? 'active' : ''}`} 
          onClick={() => handleTabChange('buyAgain')}
        >
          Buy Again
        </button>
        <button 
          className={`order-button ${activeTab === 'notYetShipped' ? 'active' : ''}`} 
          onClick={() => handleTabChange('notYetShipped')}
        >
          Not Yet Shipped
        </button>
        <button 
          className={`order-button ${activeTab === 'cancelledOrders' ? 'active' : ''}`} 
          onClick={() => handleTabChange('cancelledOrders')}
        >
          Cancelled Orders
        </button>
      </div>
      <div className="order-count">{orderCount} Orders</div>
      <hr className="orange-line" />

      {activeTab === 'orders' && (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-item" key={order.id}>
              <img src={order.image} alt={order.name} />
              <div className="order-info">
                <p>{order.name}</p>
                {order.storage && <p>Storage: {order.storage}</p>}
                <p>Color: {order.color}</p>
                <p>Price: {order.price}</p>
                <p>Delivery: {order.delivery}</p>
                <p style={{ color: order.statusColor }}>{order.status}</p>
              </div>
              <div className="order-actions">
                <p>x{order.quantity}</p>
                <button>Track Order</button>
                <button onClick={() => cancelOrder(order.id)}>Cancelled</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'cancelledOrders' && (
        <div className="cancelled-orders">
          <div className="orders-list">
            {cancelledOrders.map((order) => (
              <div className="order-item cancelled" key={order.id}>
                <img src={order.image} alt={order.name} />
                <div className="order-info">
                  <p>{order.name}</p>
                  {order.storage && <p>Storage: {order.storage}</p>}
                  <p>Color: {order.color}</p>
                  <p>Price: {order.price}</p>
                  <p>Delivery: {order.delivery}</p>
                  <p style={{ color: order.statusColor }}>{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersComponent;
