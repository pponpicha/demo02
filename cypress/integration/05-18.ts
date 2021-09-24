import data from '../fixtures/addExamption.json'
import 'cypress-file-upload';
import { createForm_1 } from './05-18/addForm';
import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';
import { offcinformOrigin_4 } from './05-18/offcAckExemption'
import { offcOriginAck_5 } from './05-18/offc-origin-ack'
import { offcinformDest_6 } from './05-18/offc-inform-dest'


describe("create 05-18", () => {
    
    // ไปสถานที่เก็บ : str ,ไปdutyfree : duty
    let dest = 'str'
    createForm_1(dest);

    // // ส่งแก้ไข : edit , ไม่อนุมัติ : disAP
    offcAP_2(data.exempCode,'exemp','1');
    areaAP_3(data.exempCode,'exemp','1');
    offcinformOrigin_4(data.exempCode,'');
    offcOriginAck_5(data.exempCode,'','offc');
    
    if(dest == 'duty'){
    offcinformOrigin_4(data.exempCode,'');
    offcinformDest_6(data.exempCode,'offcDuty')
    }
})