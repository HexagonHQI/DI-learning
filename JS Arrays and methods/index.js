const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove "Banana" using splice (alternative to pop())
fruits.splice(0, 1);  // Removes 1 element starting at index 0

// Sort the array alphabetically
fruits.sort();

// Add "Kiwi" to the end using push
fruits.push("Kiwi");

// Remove "Apples" using filter (alternative to pop() or splice())
const newFruits = fruits.filter((fruit) => fruit !== "Apples");  // Creates a new array without "Apples"

// Assign the new array back to fruits (or you can keep it as newFruits)
fruits.length = 0;  // Clear the existing fruits array
fruits.push(...newFruits);  // Spread operator (...) to add elements from newFruits

// Sort the array in reverse order
fruits.reverse();

console.log(fruits); // Output: ["Kiwi", "Oranges", "Blueberries"]
