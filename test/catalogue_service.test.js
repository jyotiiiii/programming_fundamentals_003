const catalogueService = require("../app/catalogue_service");
describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(true);
    });
    test("returns false if the book does not exist", () => {
      expect(
        catalogueService.checkBookByTitle(
          "Harry Potter"
        )
      ).toBe(false);
    });
  });
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns number of books starting with given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
  });
  test("returns number of books starting with given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("a")).toBe(2);
  });
  test("returns number of books starting with given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("h")).toBe(0);
  });
  describe("catalogueService.getQuantity", () => {
    test("returns quantity of books based on title", () => {
      expect(catalogueService.getQuantity("Wolf Hall")).toBe(33);
    });
  });
  test("returns quantity of books based on title", () => {
    expect(catalogueService.getQuantity("Harry Potter")).toBe("notinstock");
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("produce list of books in stock by author", () => {
      expect(catalogueService.getBooksByAuthor("Hilary Mantel")).toEqual([
        { title: "Wolf Hall", author: "Hilary Mantel", quantity: 33 },
        { title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31 },
        { title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11 },
        { title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8 },
        { title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43 }
      ]);
    });
  });
  describe("catalogueService.checkQuantity", () => {
    test("confirm book is in stock", () => {
      expect(catalogueService.checkQuantity("The Catcher in the Rye", 9)).toBe(true);
    });
  });
  test("confirm not enough copies of book", () => {
    expect(catalogueService.checkQuantity("the origin of species", 55)).toBe("not enough copies in stock");
  });
  test("confirm not enough copies of book", () => {
    expect(catalogueService.checkQuantity("The Origin of Species", 5)).toBe(true);
  });
  test("confirm book not in catalogue", () => {
    expect(catalogueService.checkQuantity("A Made Up Book", 5)).toBe("Sorry, We don't hold that title");
  });
});