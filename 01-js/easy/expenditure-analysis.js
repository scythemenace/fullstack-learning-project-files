/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const tracker = new Map();
    let finalArr = [];

    for (let i = 0; i < transactions.length; i++) {
        //console.log(`curr iteration: ${i}`);
        if (!tracker.has(transactions[i].category)) {
          //console.log(`Category doesn't exist yet: ${transactions[i].category}`);
          tracker.set(transactions[i].category,transactions[i].price);
          //console.log(`To verify it has been added to the map: ${tracker.has(transactions[i].category)}`);
          continue;
        }
        
        //console.log(`Category does exist: ${transactions[i].category} with current value ${tracker.get(transactions[i].category)}`);
        let currprice = tracker.get(transactions[i].category);
        //console.log(`Curr price: ${currprice}`);
        tracker.set(transactions[i].category, transactions[i].price + currprice);
        //console.log(`Curr price updated: ${tracker.get(transactions[i].category)}`)
    }

    //console.log(`Tracker size: ${tracker.size}`);
    const iterator1 = tracker[Symbol.iterator]();
    for (const item of iterator1) {
        let tempobj = {};
        //console.log(`The item in tracker: ${item}`);
        tempobj.category = item[0];
        tempobj.totalSpent = item[1];
        //console.log(tempobj);
        finalArr.push(tempobj);
        //console.log(finalArr);
    }

    //console.log(finalArr);

    return finalArr;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
