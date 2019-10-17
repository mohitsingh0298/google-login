import LoginselectorPO from "/Users/mohitsingh/Desktop/prog_tut/test1/LoginselectorPO.js";
import globaldata from "/Users/mohitsingh/Desktop/prog_tut/test1/globaldata.json";

const loginselectorPO = new LoginselectorPO();
const Gmail_url = globaldata.gmail.url;
const username = globaldata.logincredentials.username;
const password = globaldata.logincredentials.password;

fixture`gmail`;

    test("test",async t => {
        await t.navigateTo(Gmail_url);
        await t.maximizeWindow(); 
        await t.typeText(loginselectorPO.email, username);
        await t.click(loginselectorPO.nextem);
        await t.typeText(loginselectorPO.password, password);
        await t.click(loginselectorPO,nextpwd);
    }
    );