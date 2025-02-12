export interface ITypeFormType {
    event_id: string,
    event_type: string,
    form_response: {
        form_id: string,
        token: string,
        landed_at: string, // '2024-03-01T15:30:18Z'
        submitted_at: string, // '2024-03-01T15:30:46Z',
        hidden: {
            deal_id: string
        }
        answers: {
            type: "choice" | "date" | "number" | "boolean" | "text",

            // depending on type one of the following will exist
            choice: {
                id: string, // this is id of anmswer
                label: string, // this is answer
                ref: string
            },
            date: string,
            number: number,
            boolean: boolean,
            text: string,


            field: {
                id: string,
                type: "multiple_choice" | "date" | "yes_no" | "long_text",
                ref: string
            }
        }[]
    }
}

export enum IDesireTimeFrame {
    "hard_due_date" = "I have a hard due date",
    "goal_but_flexible" = "I have a goal but am flexible",
    "not_have_timeframe_yet" = "I do not have a time frame yet",
    "not_in_rush" = "I am not in a rush"
}

export enum IRelationProperty {
    "homeowner" = "Homeowner",
    "property_manager" = "Property Manager",
    "realtor" = "Realtor",
    "general_contractor" = "General Contractor",
    "other" = "Other"

}


export enum ILeaseChoice {
    "own"='Own', 
    "lease"='Lease', 
    "not_sure"='Not Sure'
}


export enum IPowerConsumptionIncrease {
    "do_not_expect_increase"='I do not expect and increase', 
    "expect_increase"='I expect an increase', 
    "expect_decrease"='I expect a decrease', 
    "not_sure"='Not Sure'

}

export enum ISizeSolarSystemChoice {
    "offset_as_possible"='Offset as much electricity cost as possible', 
    "starter_system"='I want a starter system', 
    "something_between"='I want something in between'
}


export enum ICertanityForChoice {
    "i_know_what_i_want" = "I know exactly what I want",
    "i_think_i_know_what_i_want" = "I think I know what I want",
    "i_need_some_advice" = "I need some advice!"
}


export enum IDesiredRoofingSurface { // not approve
    "replacement" = "Replacement",
    "repair_if_feasible_but_replacement_if_not" = "Repair, if feasible - Replacement if not",
    "repair_is_my_preference" = "Repair is my preference",
    "not_sure" = "Not Sure"
}

export enum IFuturePlanWithHome {
    "plan_to_sell_soon" = "I plan to sell soon",
    "forever+home" = "This my forever home",
    "plan_to_pass_this_home_on_to_family" = "I plan to pass this home on to family",
    "not_sure" = "I am not sure"
}


export enum IInterestInEnrgyEfficient {
    "yes" = "Yes",
    "no" = "No",
    "possibly_interested" = "Possibly Interested"
}


export enum IFundingChoices {
    "cash"="Cash",
    "financed_arranged"="I have financing",
    "help_getting_finance"="I’d like help getting financing",
    "Other"="Other"
}


export enum ILastJobChoice {
    "less_then_5_years"='Less than 5 Years',
    "5_to_10_years"="5-10 Years",
    "10_plus_years"="10+ years",
    "i_do_not_remember"="I do not remember / am unsure"
}


export enum IColorScheme {
    "same_color_scheme"="The Same Color Scheme",
    "complete_difference_scheme"="Complete Different Scheme",
    "similar_scheme"="Similar Scheme",
    "not_sure_yet"="Not Sure Yet"
}


export enum IDealStageChoice {
    "needs_inspection_residential_deals_Pipeline"=173202291,
    "appointment"=6838853,
    "inspection_performed"=105591194,
    "estimating"=6838854,
    "quote_given"=6838855,
    "job_sold"=6838856,
    "need_work_order"=6838860,
    "execution"=6838861,
    "mobilization"=6838858,
    "wip"=161310780,
    "closed_out"=105591193
}


export interface IFormQuestionMapingReplace {
    [key: string]: {
        hubspot_valie_replace?: string
    }
}
export interface IFormQuestionMaping {
    [key: string]: {
        question: string,
        hubsport_property_name: string,
        replace?: IFormQuestionMapingReplace
    }
}