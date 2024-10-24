var EventType;
(function (EventType) {
    EventType[EventType["Create"] = 0] = "Create";
    EventType[EventType["Delete"] = 1] = "Delete";
    EventType[EventType["Update"] = 2] = "Update";
    EventType[EventType["View"] = 3] = "View";
})(EventType || (EventType = {}));
class FabricPO {
    constructor(event) {
        this.documents = '';
        this.po_details = '';
        this.terms_conditions = '';
        this.vat_amount = 0;
        this.discount_amount = 0;
        this.final_amount = 0;
        this.supplier_concern_person = '';
        this.supplier_address = '';
        if (event === EventType.Create) {
        }
        if (event === EventType.Delete) {
            console.log(`Event Captured :${event}`);
        }
        if (event === EventType.Update) {
            console.log(`Event Captured :${event}`);
        }
        if (event === EventType.View) {
            console.log(`Event Captured :${event}`);
        }
    }
}
function Insert(obj) {
}
function Update(obj) {
}
function View(obj) {
}
const objFabricPOCreate = new FabricPO(EventType.Create);
const objFabricPOUpdate = new FabricPO(EventType.Update);
const objFabricPODelete = new FabricPO(EventType.Delete);
//# sourceMappingURL=_FabricPO.js.map