// eslint-disable-next-line no-unused-vars
const catalogue = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10 },
  { title: "Dracula", author: "Bram Stoker", quantity: 0 },
  { title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9 },
  { title: "Wolf Hall", author: "Hilary Mantel", quantity: 33 },
  { title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31 },
  { title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11 },
  { title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8 },
  { title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43 },
  { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12 },
  { title: "Conversations With Friends", author: "Sally Rooney", quantity: 1 },
  { title: "Normal People", author: "Sally Rooney", quantity: 2 },
  { title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6 },
  { title: "2666", author: "Robert Bolaño", quantity: 17 },
  { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 },
  { title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3 },
  { title: "Oliver Twist", author: "Charles Dickens", quantity: 7 },
  { title: "Great Expectations", author: "Charles Dickens", quantity: 1 },
  { title: "The Blind Assassin", author: "Margaret Atwood", quantity: 8 },
  { title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19 },
  { title: "The Origin of Species", author: "Charles Darwin", quantity: 50 }
];
function countBooksByAuthor(author) {
  let count = 0;
  // Your code here
  for (let i = 0; i < catalogue.length; i++) {
    let string = catalogue[i].author;
    if (string === author) {
      count++;
    };
  };
  return count;
};
function checkBookByTitle(title) {
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title === title) {
      return true
    };
  };
  return false;
};
function countBooksByFirstLetter(letter) {
  let count = 0;
  for (i = 0; i < catalogue.length; i++) {
    let word = catalogue[i].title;
    if (word.charAt(0).toUpperCase() === letter.toUpperCase()) {
      count++
    };
  };
  return count;
};
function getQuantity(title) {
  // Your code here
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title === title) {
      return catalogue[i].quantity;
    };
  };
  return "notinstock";
};
function getBooksByAuthor(author) {
  let bookAuthor = [];
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue[i].author === author) {
      bookAuthor.push(catalogue[i]);
    };
  };
  return bookAuthor;
};
// function checkQuantity(title, quantity) {
//   for (i = 0; i < catalogue.length; i++) {
//     if (catalogue[i].title.toUpperCase === title.toUpperCase && catalogue[i].quantity >= quantity) {
//       return true;
//     }
//   }
//   return false;
// }


// function checkQuantity(title, quantity) {
//   for (i = 0; i < catalogue.length; i++) {
//     let bookSearch = catalogue[i].title
//     bookSearch = bookSearch.toUpperCase;
//     if (title.toUpperCase !== bookSearch) {
//       return "not in catalogue";
//     } else if (catalogue[i].quantity >= quantity) {
//       console.log(bookSearch);
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// function checkQuantity(title, quantity) {
//   for (let i = 0; i < catalogue.length; i++) {
//     let bookSearch = catalogue[i].title

//     if (title !== bookSearch) {
//       return "Sorry, We don't hold that title";
//     } else if (title === bookSearch && catalogue[i].quantity >= quantity) {
//       console.log(bookSearch);
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// function checkQuantity(title, quantity) {
//   for (let i = 0; i < catalogue.length; i++) {


//     if (title === catalogue[i].title && catalogue[i].quantity >= quantity) {
//       // console.log(bookSearch);
//       return true;
//     } else if (title === catalogue[i].title && catalogue[i].quantity < quantity) {
//       return false;
//     } else {
//       return "Sorry, We don't hold that title";
//     }
//   }
// }

//This is the function that took forever to figure out - Make note of how the validation loop works
function checkQuantity(title, quantity) {
  for (i = 0; i < catalogue.length; i++) {
    if (catalogue[i].title.toUpperCase() === title.toUpperCase() && catalogue[i].quantity >= quantity) {
      return true;
    }
    else if (catalogue[i].title.toUpperCase() === title.toUpperCase()) {
      return "not enough copies in stock";
    }
  };
  return "Sorry, We don't hold that title";
};

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};