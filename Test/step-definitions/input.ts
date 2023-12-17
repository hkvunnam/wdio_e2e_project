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
  await browser.url("/frames")
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

Given(/^Open a browser Dropdown$/, async function(){
  await browser.maximizeWindow
  await browser.url("/dropdown")
  await browser.setTimeout({implicit:10000, pageLoad:15000})
})

When(/^verify the presence of Dropdown$/, async function(){
  let drop = await $(`//select/option[@selected="selected"]`)
  let text = await drop.getText()
  //chai assertion to compare text
  chai.expect(text).to.equal("Please select an option")
})

Then(/^Select the option in Dropdown$/, async function(){
  //let drop = await $(`select#dropdown`)
  //if the webelement is delect we can use the SelectByIndex, SelectByAttribyte, SelectByVisibleText options
  //drop.selectByIndex(1)
  //await browser.pause(1000)
  //for selecting the list of webelements
  let elearr = await $$(`//select/option`)
  for(let i = 0; i<elearr.length; i++){
    //getting element in array or user elearr[i]
    let ele = elearr.at(i)
    let opt = await ele.getText()
    await browser.pause(1000)
    console.log(opt)
    ele.click()
  }
})

Given(/^open a Checkbox browser$/, async function(){
  await browser.url("/checkboxes")
  await browser.maximizeWindow
  await browser.setTimeout({implicit:1000, pageLoad:1000})
})

When(/^Verify the presence of Checkbox$/, async function(){
  let check = await $(`//div/h3`)
  let text = await check.getText()
  chai.expect(text).to.equal("Checkboxes")
  console.log(text)
})

Then(/^Select a checkbox$/, async function(){
  let check = await $$(`//form/input`)
  for(let i = 0; i<check.length; i++){
    let box = await check[i]
    await box.click()
    browser.pause(1000)
  }
})

/*Given(/^open the browser for window Handeling$/, async function(){
  await browser.url("/windows")
  await browser.setTimeout({implicit:1000, pageLoad:1000})
  browser.maximizeWindow
})*/


Then(/^Click on the link and traverse through the windows opened$/, async function () {
  // await $(`=Click Here`).click();
  // await $(`=Elemental Selenium`).click();
  // console.log(await browser.getTitle());
  // //to get windowhandles array of string
  // let titles = await browser.getWindowHandles();
  // for (let i = 0; i < titles.length; i++) {
  //   await browser.switchToWindow(titles[i]);
  //   console.log(await browser.getTitle());
  // }
  // await browser.switchToWindow(titles[0]);
  // console.log(await browser.getTitle());

  //Handeling JS Alerts
  // await $(`//button[@onclick="jsAlert()"]`).click()
  // //Check for alert opened or not
  // if(await browser.isAlertOpen()){
  //   //for accepting the alert
  //   await browser.acceptAlert()
  //   await browser.pause(1000)
  //   //let alt = await $(`p#result`).getText
  //   //chai.expect(alt).to.equal("You successfully clicked an alert")
  // }
  // await browser.pause(1000)
  // await $(`//button[@onclick="jsConfirm()"]`).click()
  // if(await browser.isAlertOpen()){
  //   //for getting text in alert
  //   let txt = await browser.getAlertText()
  //   console.log(txt)
  // }
  // await browser.pause(1000)
  // await $(`//button[@onclick="jsPrompt()"]`).click()
  // if(await browser.isAlertOpen()){
  //   //for sending text in alert
  //   await browser.sendAlertText("Hello World")
  //   await browser.acceptAlert()
  // }
  
  //file upload handeling
  // await $(`input#file-upload`).addValue("C:/Users/dell/Documents/wdio_e2e_project/data/fileupload/test.txt") 
  // await $(`input#file-submit`).click()

  //Handeling Frames

  await $(`=iFrame`).click()
  let frame = await $(`#mce_0_ifr`)
  await browser.switchToFrame(frame)
  await $(`#tinymce`).click()
  await browser.keys(["Control","A"])
  await browser.pause(1000)
  await browser.keys("Delete")
  await $(`#tinymce`).addValue("Typing in frames")
  await browser.switchToParentFrame()
  await browser.debug();


})