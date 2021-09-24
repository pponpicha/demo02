import data from '../fixtures/addExamption.json'
import strAcc from '../fixtures/addRecStrAcc.json'
import 'cypress-file-upload';
import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';
import { createAccExp } from './strAcc/addFormExp';
import { offcinformDest_4 } from './strAcc/offcAckDest'
import { offcinformOrigin_4 } from './05-18/offcAckExemption'


import { offcdestAck_5 } from './strAcc/offc-dest-ack'

describe("create 05-18/1 Exp", () => {

    // CREAT 08-18/1 EXP
    createAccExp();

    // // ส่งแก้ไข : edit , ไม่อนุมัติ : disAP
    let offAP = '1';
    let areaAP = '1';

    offcAP_2(strAcc.strExpAccCode, 'rec', offAP);

    if (offAP != 'edit') {

        areaAP_3(strAcc.strExpAccCode, 'accExp', areaAP);
        if (areaAP != 'disAP') {
            // Cust do 05-18 untill status ENDORSE          
            offcinformOrigin_4(strAcc.strExpAccCode, 'strAcc');

            // OFFC do 05-18 untill status ENDORSE
            offcdestAck_5(strAcc.strExpAccCode, 'strAcc', 'offcDes');

            // แจ้งปลายทาง DEST 
            offcinformOrigin_4(strAcc.strExpAccCode, 'strAcc');
            offcdestAck_5(strAcc.strExpAccCode, 'strAcc', 'offcDuty');
        }
    }
})