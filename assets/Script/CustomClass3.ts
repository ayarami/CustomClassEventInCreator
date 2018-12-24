export default class CustomClass3{

    _eventTarget: cc.EventTarget = new cc.EventTarget();

    on (type:string, callback:Function, target?:any, useCapture?:boolean) {
        this._eventTarget.on(type, callback, target, useCapture);
    }
    
    off (type:string, callback?:Function, target?:any) {
        this._eventTarget.off(type, callback, target);
    }

    emit (type: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        this._eventTarget.emit(type, arg1, arg2, arg3, arg4, arg5);
    }

    dispatchEvent(event: cc.Event) {
        this._eventTarget.dispatchEvent(event);
    }

    /**
     *
     */
    constructor() {
        this.on("customevnet1", ()=>{
            cc.log("yyyyyyyyy customevnet1");
        })
    }
}