const {ccclass, property} = cc._decorator;

import CustomClass from "./CustomClass";
import CustomClass2 from "./CustomClass2";
import CustomClass3 from "./CustomClass3";

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property
    _tsObject: CustomClass = null;

    @property
    _tsObject2: CustomClass2 = null;

    @property
    _tsObject3: CustomClass3 = null;

    start () {
        // init logic
        this.label.string = this.text;
        this.create();
    }

    create () {
        this._tsObject = new CustomClass();
        this._tsObject2 = new CustomClass2();
        this._tsObject3 = new CustomClass3();
        this._tsObject3.on("customevnet2", ()=> {
            cc.log("***********");
        })
    }

    clicked () {
        this._tsObject.emit("customevnet1");
        this._tsObject.emit("customevnet2");

        cc.systemEvent.emit("customevnet1");
        
        this._tsObject3.emit("customevnet1");
        this._tsObject3.emit("customevnet2");
    }
}
