const salesData = {
  sales: [
    { Product: "Laptop", Quantity: 10, Price: 500 },
    { Product: "SmartPhone", Quantity: 30, Price: 300 },
    { Product: "Tablet", Quantity: 15, Price: 200 },
    { Product: "HeadPhones", Quantity: 25, Price: 50 },
  ],
};
function performance(totalSales) {
  if (totalSales < 5000) {
    return "low performance";
  } else if (totalSales == 5000) {
    return "medium performance";
  } else if (totalSales >= 5000) {
    return "High performance";
  } else {
    return "No Data Available";
  }
}
console.log("Sales Report:");
console.log("_______________________________");
for (const sales of salesData.sales) {
  var totalSales = `${sales.Quantity * sales.Price}`;
  console.log(
    `"Product:"${sales.Product},"\nQuantity sold:" ${
      sales.Quantity
    },"\nPrice per Unit:"${"$" + sales.Price},"\nTotal Sales:" ${
      "$" + totalSales
    },"\nPerformance":${performance(totalSales)}`
  );
  console.log("-------------------------------");
}
