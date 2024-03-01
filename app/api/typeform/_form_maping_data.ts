import { IFormQuestionMaping, IRelationProperty, ICertanityForChoice, IDesiredRoofingSurface, IFuturePlanWithHome, IInterestInEnrgyEfficient, IFundingChoices } from "./_types"
import { IDesireTimeFrame } from "./_types"

// ===== Customer Questionnaire for Roofing Services =====
export const quastionaryForRoofing_bUXAVAKr = () => {
    const question_maping: IFormQuestionMaping = {
        "hW02sqqItZDa": {
            question: "Which of these best describe you?",
            hubsport_property_name: "relation_to_property",
            replace: {
                "Homeowner": { hubspot_valie_replace: IRelationProperty.homeowner },
                "Property Manager": { hubspot_valie_replace: IRelationProperty.property_manager },
                "Realtor": { hubspot_valie_replace: IRelationProperty.realtor },
                "General Contractor": { hubspot_valie_replace: IRelationProperty.general_contractor },
                "Other": { hubspot_valie_replace: IRelationProperty.other },
            }
        },
        "yhbgMYgzMiQ5": {
            question: "Do you have a timeframe for this project?",
            hubsport_property_name: "desired_timeframe",
            replace: {
                'I have a hard due date.': { hubspot_valie_replace: IDesireTimeFrame.hard_due_date },
                'I have a goal but am flexible.': { hubspot_valie_replace: IDesireTimeFrame.goal_but_flexible },
                'I do not have a time frame yet.': { hubspot_valie_replace: IDesireTimeFrame.not_have_timeframe_yet },
                'I am not in a rush.': { hubspot_valie_replace: IDesireTimeFrame.not_in_rush },
            }
        },
        "Gwxo5N5I3N6H": {
            question: "What is the date?",
            hubsport_property_name: "desired_timeline_date"
        },
        "CM4CEu1uTAhW": {
            question: "How certain are you about the choices you want for your house?",
            hubsport_property_name: "certainty_for_choices",
            replace: {
                "I know exactly what I want.": { hubspot_valie_replace: ICertanityForChoice.i_know_what_i_want },
                "I think I know what I want.": { hubspot_valie_replace: ICertanityForChoice.i_think_i_know_what_i_want },
                "I need some advice!": { hubspot_valie_replace: ICertanityForChoice.i_need_some_advice }
            }
        },
        "PcX13hDlEYpM": {
            question: "What type of roofing services are you looking for?",
            hubsport_property_name: "desired_roofing_service",
            replace: {
                "Replacement": { hubspot_valie_replace: IDesiredRoofingSurface.replacement },
                "Repair, if feasible. Replacement if not.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_if_feasible_but_replacement_if_not },
                "Repair is my preference.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_is_my_preference },
                "Not Sure": { hubspot_valie_replace: IDesiredRoofingSurface.not_sure }
            }
        },
        "K6VsbVlcYHIf": {
            question: "How important is a roof warranty to you?",
            hubsport_property_name: "warranty_importance"
        },
        "Ehn69gAVK0lF": {
            question: "What are your plans for the home?",
            hubsport_property_name: "future_plans_with_home",
            replace: {
                'I plan to sell soon.': { hubspot_valie_replace: IFuturePlanWithHome.plan_to_sell_soon },
                'This is my forever home.': { hubspot_valie_replace: IFuturePlanWithHome["forever+home"] },
                'I plan to pass this home on to family.': { hubspot_valie_replace: IFuturePlanWithHome.plan_to_pass_this_home_on_to_family },
                'I am not sure.': { hubspot_valie_replace: IFuturePlanWithHome.not_sure }
            }
        },
        "mJvuJu2lmmLj": {
            question: "Are you interested in energy-efficient upgrades?",
            hubsport_property_name: "interest_in_energy_efficient_upgrades",
            replace: {
                'Yes': { hubspot_valie_replace: IInterestInEnrgyEfficient.yes },
                'No': { hubspot_valie_replace: IInterestInEnrgyEfficient.no },
                'Possibly Interested': { hubspot_valie_replace: IInterestInEnrgyEfficient.possibly_interested }

            }
        },
        "X4SgMdyjd918": {
            question: "How will you fund this project?",
            hubsport_property_name: "desired_funding___financing__cloned_",
            replace: {
                'Cash': { hubspot_valie_replace: IFundingChoices.cash },
                'I have financing arranged': { hubspot_valie_replace: IFundingChoices.financed_arranged },
                "I'd like help getting financing": { hubspot_valie_replace: IFundingChoices.help_getting_finance }
            }
        },
        "RelrlMlVXUwb": {
            question: "Any last comments or requests that you'd like to share?",
            hubsport_property_name: "additional_comments_on_form"
        },
        "g3bFE5YBFy0I": {
            question: "What are these requests?",
            hubsport_property_name: "form_comments___request"
        }
    }
    return question_maping
}




export const quastionaryForPaintingService_UsSzHcnl = () => {
    const question_maping: IFormQuestionMaping = {
        "7e3a3368-e59a-4ea5-96d7-0a9c24e379bb": {
            question: "Do you have a timeframe for these projects?",
            hubsport_property_name: "",
            replace: {
                'I have a hard due date.': { hubspot_valie_replace: "I have a hard due date" },
                'I have a goal but am flexible.': { hubspot_valie_replace: "I have a goal but am flexible" },
                'I do not have a time frame yet.': { hubspot_valie_replace: "I do not have a time frame yet" },
                'I am not in a rush.': { hubspot_valie_replace: "I am not in a rush" },
            }
        },
        "1fabfaf0-3655-4856-bffa-cd96c5fd7443": {
            question: "What is the date?",
            hubsport_property_name: ""
        },
        "66cc7ab4-6258-4bdd-9117-6307c619529b": {
            question: "What are your plans for the home?",
            hubsport_property_name: "",
            replace: {
                'I plan to sell soon': {},
                'This is my forever home.': {},
                'I plan to pass this home on to family': {},
                'I am not sure': {}
            }
        },
        "c2101365-cf6b-42ea-8265-2d0267f7c3db": {
            question: "Are you interested in energy-efficient upgrades?",
            hubsport_property_name: ""
        },
        "06d0fd32-6286-4b56-8ff4-7cc97b390b97": {
            question: "How will you fund this project?",
            hubsport_property_name: "",
            replace: {
                'Cash': {},
                'I have financing arranged': {},
                "I'd like to get help getting financing": {},
                "Other": {}
            }
        },
        "01444d22-cbd8-43a1-9c0f-9f2c9f3f4574": {
            question: "When was the last paint job on your home?",
            hubsport_property_name: ""
        },
        "2d4af7c5-f38b-45cb-92be-e1c969cc2751": {
            question: "What color scheme would you like?",
            hubsport_property_name: ""
        },
        "55963d1a-49d3-412d-ab63-9f2234151672": {
            question: "Any last comments or requests that you'd like to share?",
            hubsport_property_name: ""
        },
        "6fcb7406-9842-4f09-a9e9-52202813f0f6": {
            question: "What are these requests?",
            hubsport_property_name: ""
        }


    }
    return question_maping
}