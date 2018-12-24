export default class CustomClass2{
    /**
     *
     */
    constructor() {
        cc.systemEvent.on("customevnet1", ()=>{
            cc.log("xxxxxxxxxx customevnet1");
        })
    }
}
