import data from '../fixtures/addExamption.json'
import 'cypress-file-upload';
import { addExempt_1 } from './05-18/addForm';
import { offcAP_2 } from './05-18/05-18offcAP';
import { areaAP_3 } from './05-18/05-18areaAP';
import { offcinformOrigin_4 } from './05-18/offcAckExemption'
import { offcOriginAck_5 } from './05-18/offc-origin-ack'
import { offcinformDest_6 } from './05-18/offc-inform-dest'
import { docCodeExempt } from '../integration/shared/docCode'


describe("create 05-18", () => {
    
    // ไปสถานที่เก็บ : str ,ไปdutyfree : duty
    let dest:string = 'duty'
    // // ส่งแก้ไข : edit , ไม่อนุมัติ : disAP
    let edit:boolean = false
    let disAP:boolean = false

    addExempt_1(dest);
    // // if()
        
    offcAP_2(data.exempCode,'exemp',edit);
    areaAP_3(data.exempCode,'exemp',disAP);
    offcinformOrigin_4(data.exempCode,'');
    offcOriginAck_5(data.exempCode,'','offc');
    
    if(dest == 'duty'){
    offcinformOrigin_4(data.exempCode,'');
    offcinformDest_6(data.exempCode,'offcDuty')
    }
})