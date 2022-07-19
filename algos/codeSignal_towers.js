/*
given an array of integers, towers, calcualte how many increases/decrease you need to make per tower to make the towers array
consecutively increasing or consecutively decreasing

[1, 4, 3, 2] // return 4, since you need to add 4 to index 0 to make the array [5, 4, 3, 2]

[5, 7, 9, 10, 11] // return 3, since you need to add 2 to index 0 and 1 to index 1 to make the array [7, 8, 9, 10, 11]

You are given the height of towers towers and asked to make the towers either consecutively increasing or decreasing in height To do so, you can make moves in which you add one block to the top of any tower. You can make any number of these moves, but each move only allowes you to add to one tower. Your task is to find the minimum number of moves required to make the towers either consecutively taller or shorter - whichever requires fewer noves.

Example
. For towers = [1, 4, 3, 2], the output should be solution(towers) = 4.
Optimal solution is to add:
. Four blocks to the top of the first tower
The final height of the towers will be: [5, 4, 3, 21
• For towers = [5, 7, 9, 4, 111, the output should be
solution (towers) = 9
Optimal solution is to add:

Optimal solution is to add

Four blocks to the top of the first tower
The final height of the towers will be [5, 4, 3, 2]
For towers [5, 7, 9, 4, 11), the output should be
solution(towers)=9.
Optimal solution is to add
Two blocks to the top of the first tower,
One block to the top of the second tower,
Six blocks to the top of the fourth tower.
The final height of the towers will be [7, 8, 9, 10, 11]
*/

function makeConsecutive(towers) {
  let increasingArray = [];
  let decreasingArray = [];
  let increasingAdds = 0;
  let decreasingAdds = 0;

  for (let i = 0; i < towers.length; i++) {
    increasingArray.push(towers[i]);

    if (increasingArray.length > 1) {

    }
  }
}