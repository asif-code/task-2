// Loops in JS_________________________________________

// While Loop
let a = 1;
while (a <= 5) {
  document.write(a + ") Hello World</br>");
  a++;
}

// Do While Loop
let b = 1;
do {
  document.write(b + "Hello world</br>");
  b++;
} while (b <= 5);

// For Loop
for (let i = 1; i <= 5; i++) {
  document.write(i + "Hello world</br>");
}

// Nested Loop - 1
for (let a = 1; a <= 100; a = a + 10) {
  for (let b = a; b < a + 10; b++) {
    document.write(b + " ");
  }
  document.write("</br>");
}

// Nested Loop - 2 Tree view example(1)
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write(b + " ");
  }
  document.write("</br>");
}

// Nested Loop - 2 Tree view example(2)
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= a; b++) {
    document.write(a + " ");
  }
  document.write("</br>");
}

// Nested Loop - 2 Tree view example(3)
for (let a = 5; a >= 1; a--) {
  for (let b = 1; b <= a; b++) {
    document.write(a + " ");
  }
  document.write("</br>");
}

// Nested Loop - 2 Tree view example(4)
for (let a = 5; a >= 1; a--) {
  for (let b = a; b >= 1; b--) {
    document.write(a + " ");
  }
  document.write("</br>");
}
