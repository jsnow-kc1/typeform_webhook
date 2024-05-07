import {IFormQuestionMaping, ITypeFormType,IFormQuestionMapingReplace} from './_types'
import {quastionaryForPaintingService_UsSzHcnl, quastionaryForRoofing_bUXAVAKr, quastionaryPaintingAndRoofForm_ThDlcaCK, quastionarySolarPaintRoofingServiceForm_ScoUD2eg, quastionarySolarRoofingServiceForm_zT4ZOhYg, quastionarySolarServiceForm_MKTrhFzL, quastionarySolarServiceForm_Mch6ZqYb} from './_form_maping_data'



export const mapChoices=({answer,maping}:{answer:ITypeFormType['form_response']['answers'][0]['choice'],maping?:IFormQuestionMapingReplace})=>{
    if(!maping) return answer.label
    if(!maping[answer.label]) return answer.label
    if(!maping[answer.label].hubspot_valie_replace) return answer.label
    return maping[answer.label].hubspot_valie_replace
}
export const formPropertMaping=({form_id,data}:{form_id:string,data:ITypeFormType['form_response']['answers']})=>{
    let question_maping:IFormQuestionMaping | null = null
    if(form_id==="bUXAVAKr"){
        question_maping = quastionaryForRoofing_bUXAVAKr()
    }else if(form_id==="UsSzHcnl"){
        question_maping = quastionaryForPaintingService_UsSzHcnl()
    }else if(form_id==="Mch6ZqYb"){
        question_maping =  quastionarySolarServiceForm_Mch6ZqYb()
    }else if(form_id==="MKTrhFzL"){
        question_maping =  quastionarySolarServiceForm_MKTrhFzL()
    }else if(form_id==="ThDlcaCK"){
        question_maping = quastionaryPaintingAndRoofForm_ThDlcaCK()
    }
    else if(form_id==="zT4ZOhYg"){
        question_maping = quastionarySolarRoofingServiceForm_zT4ZOhYg()
    }else if(form_id==="ScoUD2eg"){
        question_maping=quastionarySolarPaintRoofingServiceForm_ScoUD2eg()
    }
    if(!question_maping) return null

    const data_to_update:any={}
    data.map((answer)=>{
        const question_detail = question_maping?.[answer.field.id]
        if(!question_detail) return
        if(answer.type==="choice"){
            const maping = question_detail.replace
            const response = mapChoices({answer:answer.choice,maping:maping})
            data_to_update[question_detail.hubsport_property_name]=response
        }else if(answer.type==="date"){
            const response = answer.date
            data_to_update[question_detail.hubsport_property_name]=response
        }else if(answer.type==="number"){
            const response = answer.number
            data_to_update[question_detail.hubsport_property_name]=response
        }else if(answer.type==="boolean"){
            const response = answer.boolean
            data_to_update[question_detail.hubsport_property_name]=response
        }else if(answer.type==="text"){
            const response = answer.text
            data_to_update[question_detail.hubsport_property_name]=response
        }
    })
    return data_to_update
}


