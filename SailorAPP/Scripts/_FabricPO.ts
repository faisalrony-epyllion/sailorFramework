enum EventType {
    Create,
    Delete,
    Update,
    View
}
class FabricPO {

    po_id?: number | null;
    pr_id?: number | null;
    event_id?: number | null;
    fiscal_year_id?: number | null;
    item_structure_group_id?: number | null;
    po_no?: string | null;
    po_date?: Date | null;
    delivery_start_date?: Date | null;
    delivery_end_date?: Date | null;
    supplier_id?: number | null;
    delivery_unit?: number | null;
    delivery_address?: number | null;
    currency_id?: number | null;
    documents: string = '';
    po_details: string = '';
    terms_conditions: string = '';
    is_submitted?: number | null;
    status?: number | null;
    added_by?: number | null;
    updated_by?: number | null;
    date_added?: Date | null;
    date_updated?: Date | null;
    is_approved?: number | null;
    is_bill_submitted?: number | null;
    approved_by?: number | null;
    approved_date?: Date | null;
    vat_amount: number = 0;
    discount_amount: number = 0;
    final_amount: number = 0;
    supplier_concern_person: string = '';
    supplier_address: string = '';
    status_remarks?: string | null;


    constructor(event: EventType) {
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

function Insert(obj: FabricPO) {


}


function Update(obj: FabricPO) {


}


function View(obj: FabricPO) {


}
const objFabricPOCreate = new FabricPO(EventType.Create);
const objFabricPOUpdate = new FabricPO(EventType.Update);
const objFabricPODelete = new FabricPO(EventType.Delete);