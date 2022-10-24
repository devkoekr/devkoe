const player = {
  name: "nginx",
  age: 25,
  user: true,
}
console.log("name is " + player.name);
console.log("user config is "+ player.user);
player.name = "apache";
console.log("name is " + player.name);
console.log(player.age);

player.age = player.age + 15;
console.log(player.age);

