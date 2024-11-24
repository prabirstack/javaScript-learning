console.log(100);
console.log("Hello World!");
console.log(20, "Hello", true);
const x = 700;
console.log(x);
console.table({ name: "Prabir", email: "prabir@email.com" });
console.group("Simple");
console.log(x);
console.error("Alert");
console.warn("Warning!");
console.groupEnd();

// styling console
const styles =
  "padding: 10px; background-color: yellow; color: green; border: 1px solid green; border-radius: 7px";
console.log("%cHello, Prabir", styles);
