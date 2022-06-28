/*
As the owner of an online store, you need to fulfill orders everyday. To optimize the packing of each order, you decide to write an algorithm to match boxes and items based on their respective sizes.
You have access to the following two boxes:
- A medium box (identifier: M)
- A large box (identifier: L)
When possible, you should try to fit multiple items in the same box but boxes can only contain one type of product.
This is the list of items you sell along with associated boxes:
- Camera (identifier: Cam): one can fit in a medium box, and up to two can fit in a large box
- Gaming Console (identifier: Game): too big for a medium box, but up to two can fit in a large box
- max of 2 g consoles can fit in 1 box
- Bluetooth speaker (identifier: Blue): one can fit in a large box . max is 1 per large box
Your goal is to design a function that takes a list of items and returns the box & item matches (examples below).
Your solution should work for any number of each item greater than or equal to zero.
Input = [], Output = []
## Input/Output expectations
*/
/*
- you have two boxes: M & L
- boxes can only contain one type of product
- products:
Camera - 'Cam'; 1M, 2L
Gaming Console - 'Game'; 0M, 2L
Bluetooth Speaker - 'Blue'; 0M, 1L

approach:
- create a map of the items to be packed
- iterate over the map and generate packages

- boxItems(item, count)
  - if item is camera and count is even
    - create large boxes
  - if count is odd
    - create 1 medium, rest large
  - if item is gaming console
    - create large boxes
  - if item is bluetooth speaker
    -create large boxes
*/


function generatePackages(list) {
  let itemMap = {};
  let packages = [];

  for (const item of list) {
    if (itemMap[item] === undefined) {
      itemMap[item] = 1;
    } else {
      itemMap[item] += 1;
    }
  }

  for (const item in itemMap) {
    let boxedItem = boxItems(item, itemMap[item]);
    // console.log(boxedItem);
    packages = packages.concat(boxedItem);
  }

  return packages;
}

function boxItems(item, count) {
  let result = [];

  if (item === 'Cam') {
    while (count > 0) {
      if (count % 2 === 0) {
        result.push({L: ['Cam', 'Cam']});
        count -= 2;
      } else {
        result.push({M: ['Cam']});
        count -= 1;
      }
    }
  }

  if (item === 'Game') {
    while (count > 0) {
      if (count % 2 === 0) {
        result.push({L: ['Game', 'Game']});
        count -= 2;
      } else {
        result.push({L: ['Game']});
        count -= 1;
      }
    }
  }

  if (item === 'Blue') {
    while (count > 0) {
      result.push({L: ['Blue']});
      count -= 1;
    }
  }
  return result;
}

//tests
console.log(generatePackages(["Cam"])); // [M: ["Cam"]]
console.log(generatePackages(["Cam", "Game"])); // [M: ["Cam"], L: ["Game"]]
console.log(generatePackages(["Game", "Blue"])); // [L: ["Game"], L : ["Blue"]]
console.log(generatePackages(["Game", "Game", "Blue"])); // [L: ["Game", "Game"], L : ["Blue"]]
console.log(generatePackages(["Cam", "Cam", "Game", "Game"])); // [L: ["Cam", "Cam"], L: ["Game", "Game"]]
console.log(generatePackages(["Cam", "Cam", "Cam", "Game", "Game", "Game", "Cam", "Blue"]));
// [L: ["Cam", "Cam"], L: ["Cam", "Cam"], L: ["Game", "Game"], L: ["Game"], L: ["Blue"]]
console.log(generatePackages(["Cam", "Cam", "Cam", "Game", "Game", "Cam", "Cam", "Blue", "Blue"]));
//[L: ["Cam", "Cam"] , L: ["Cam", "Cam"] , M: ["Cam"] , L: ["Game", "Game"] , L: ["Blue"] , L: ["Blue"]]