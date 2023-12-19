import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^launch browser and Navigate to url$/, async function(){
    await browser.maximizeWindow
    await browser.url("https://opensource-demo.orangehrmlive.com")
    await browser.pause(2000)
})

Given(/^Verify the (.*)$/, async function(actualUrl){
    let url = await browser.getUrl()
    chai.expect(actualUrl).to.equal(url)
})

When(/^login with (.*) and (.*)$/, async function(user, pass){
    let userName = await $(`input[name=username]`)
    let passWd = await $(`input[name=password]`)
    let login = await $(`button[type=submit]`)
    userName.setValue(process.env.user)
    passWd.setValue(process.env.password)
    login.click
    await browser.pause(2000)
})

Then(/^Verify the login status$/, async function(){
    let dashboard = await $(`h6[class*=oxd-text]`).isDisplayed
    chai.expect(dashboard).to.true
})
