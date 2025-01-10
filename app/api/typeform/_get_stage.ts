import { IDealStageChoice } from "./_types"

export const get_updated_deal_stage = ({currentDealStage}:{currentDealStage:number})=>{
    const stageBeforeEstimation:number[] = [
        IDealStageChoice.needs_inspection_residential_deals_Pipeline,
        IDealStageChoice.appointment, //Appointment Set (Residential Deals Pipeline)
        IDealStageChoice.inspection_performed // Inspection Performed (Residential Deals Pipeline)
    ]
    if(stageBeforeEstimation.includes(currentDealStage)){
        return  IDealStageChoice.estimating
    }
    return currentDealStage
}
