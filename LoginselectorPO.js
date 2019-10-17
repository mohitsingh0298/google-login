import { Selector, t } from "testcafe";

export default class LoginselectorPO{

    constructor() {
        this.email = Selector("#identifierId");
        this.nextem = Selector("#identifierNext > div.ZFr60d.CeoRYc");
        this.password = Selector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
        this.nextpwd = Selector("#passwordNext > span > span");
    }
}
