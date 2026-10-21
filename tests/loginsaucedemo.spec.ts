import {test} from "../tests/pagefixtures";


test('To login', async({saucedemo,page})=>{

   await page.goto('https://www.saucedemo.com/');
   await saucedemo.loginTest("standard_user","secret_sauce");
   console.log('test');


})

