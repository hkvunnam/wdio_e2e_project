import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^open (.*)$/, async function (url) {
  console.log(`>>URL: ${url}`);
  //for maximizing the window
  await browser.maximizeWindow();
  await browser.url(url);
  browser.pause(7000);
});

When(/^search for (.*)$/, async function (search) {
  let ele = await $(`[name=q ]`);
  //for entering vales in inputs
  await ele.setValue(search);
  await browser.pause(2000);
  await browser.keys("Enter")
});

Then(/^click on wdio webpage$/, async function () {
  let wdioPage = await $(`<h3>`);
  //Performs click operations
  await wdioPage.click();
  await browser.pause(2000);
  //gives the current url
  let url = await browser.getUrl();
  console.log(`>>Current URL: ${url}`);
});

Then(/^url should match (.*)$/, async function (expectedUrl) {
    let url = await browser.getUrl();
    //assertion for string comparision
    chai.expect(url).to.equal(expectedUrl)
})

Given(/^Open a browser$/, async function () {
  //appending the existing baseurl
  await browser.url("/inputs")
  //setting timeouts before execution as failure
  await browser.setTimeout({implicit:1500, pageLoad: 2000})
  await browser.maximizeWindow
  await browser.pause(2000)
})

When(/^Perform Webinteractions$/, async function(){
  //let inputLink = await $(`//a[contains(.,'Inputs')]`)
  let inputBox = await $(`<input>`)
  //chai.expect(inputLink.isEnabled).to.true
  //inputLink.click
  //chai.expect(inputBox.isEnabled).to.true
  //Move to the Element 
  inputBox.scrollIntoView
  //setting value
  inputBox.setValue("25")
  let value = 2256
  //converts to string
  let single = value.toString()
  //to get length
  let count = single.length
  //for entering single letter
  inputBox.click
  for(let i = 0; i<count; i++){
    await browser.keys(single.charAt(i))
    await browser.pause(1000)
  }
  //adds to the exisiting value
  inputBox.addValue("35")
  await browser.pause(1000)
  //clears the values in the input box at the start
  inputBox.clearValue
})

Then(/^Close the browser$/, async function(){
  //closes the current window
  await browser.closeWindow
})