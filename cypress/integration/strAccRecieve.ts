import data from '../fixtures/addExamption.json'
import rec from '../fixtures/addRecStrAcc.json'
import 'cypress-file-upload';


import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';
import { createAccRec } from './strAcc/addFormRec'
import { offcinformOrigin_4 } from './05-18/offcAckExemption'
import { offcOriginAck_5 } from './05-18/offc-origin-ack'

describe("create 05-18/1 recieve", () => {

    createAccRec();
    // // ส่งแก้ไข : edit , ไม่อนุมัติ : disAP
    let offAP = '1'
    let areaAP = '1'

    offcAP_2(rec.strAccCode, 'rec', offAP);
    if (offAP != 'edit') {
        areaAP_3(rec.strAccCode, 'rec', areaAP);
        if (areaAP != 'disAP') {
            // // Cust do 05-18 untill status ENDORSE          
            offcinformOrigin_4(data.exempCode, '');

            // // OFFC do 05-18 untill status ENDORSE
            offcOriginAck_5(data.exempCode, '', 'offcDes');
        }
    }
})