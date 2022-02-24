/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
        buttonClick();
        // if the 1x h1 exists then the length will be 1, if 2 x h1 then length = 2
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
 });