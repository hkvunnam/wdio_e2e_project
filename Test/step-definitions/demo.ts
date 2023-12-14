import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^open (.*)$/, async function (url) {
  console.log(`>>URL: ${url}`);
  await browser.maximizeWindow();
  await browser.url(url);
  browser.pause(7000);
});

When(/^search for (.*)$/, async function (search) {
  let ele = await $(`[name=q ]`);
  await ele.setValue(search);
  await browser.pause(2000);
  await browser.keys("Enter")
});

Then(/^click on wdio webpage$/, async function () {
  let wdioPage = await $(`<h3>`);
  await wdioPage.click();
  await browser.pause(2000);
  let url = await browser.getUrl();
  console.log(`>>Current URL: ${url}`);
});

Then(/^url should match (.*)$/, async function (expectedUrl) {
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedUrl)
})

Given(/^Open a browser$/, async function () {
  await browser.url("/inputs")
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
  inputBox.setValue("25")
  await browser.pause(1000)
  inputBox.clearValue
})

Then(/^Close the browser$/, async function(){
  await browser.closeWindow
})