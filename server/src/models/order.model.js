import crypto from "crypto";

let ordersCollection = [];

// Crear una orden
export const createOrder = (coffee, userId) => {
  const newOrder = {
    id: crypto.randomUUID().toString(),
    coffee,
    userId,
  };

  ordersCollection.push(newOrder);

  return newOrder;
};

export const getOrders = (userId) => {
  return ordersCollection.filter((coffee) => coffee.userId === userId);
};

// ! FALTA IMPLEMENTAR (NO SE USA EN EL PROYECTO)
export const getOrderById = async (id, userId) => {
  return (
    ordersCollection.find(
      (coffee) => coffee.id === id && coffee.userId === userId
    ) || null
  );
};


// ! FALTA IMPLEMENTAR (NO SE USA EN EL PROYECTO)
export const deleteOrderById = async (id, userId) => {
  const deletedOrder = ordersCollection.find(
    (coffee) => coffee.id === id && coffee.userId === userId
  );
 const ordersCollection = ordersCollection.filter(
    (coffee) => coffee.id !== id && coffee.userId === userId
  );
  return deletedOrder;
};
