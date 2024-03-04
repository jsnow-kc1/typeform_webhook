import {IFormQuestionMaping, ITypeFormType,IFormQuestionMapingReplace} from './_types'
import {quastionaryForPaintingService_UsSzHcnl, quastionaryForRoofing_bUXAVAKr} from './_form_maping_data'



const mapChoices=({answer,maping}:{answer:ITypeFormType['form_response']['answers'][0]['choice'],maping?:IFormQuestionMapingReplace})=>{
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


