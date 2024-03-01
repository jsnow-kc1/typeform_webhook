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


export enum ICertanityForChoice {
    "i_know_what_i_want" = "I know exactly what I want",
    "i_think_i_know_what_i_want" = "I think I know what I want",
    "i_need_some_advice" = "I need some advice!"
}


export enum IDesiredRoofingSurface {
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
    "financed_arranged"="I have financing arranged",
    "help_getting_finance"="I'd like to get help getting financing"
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