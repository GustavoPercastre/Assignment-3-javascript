// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let n = 4;

let string = "";

for(let i = 1; i <= n; i++) 
{
  for(let j = 0; j < i; j++) 
  {
    string += "#";
  }
  string += "\n";
}
for(let i = 1; i <= n - 1; i++) 
{
  for (let j = 0; j < n - i; j++) 
  {
    string += "#";
  }
  string += "\n";
}
console.log(string);