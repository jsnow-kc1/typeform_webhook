import { IFormQuestionMaping, IRelationProperty, ICertanityForChoice, IDesiredRoofingSurface, IFuturePlanWithHome, IInterestInEnrgyEfficient, IFundingChoices, ILastJobChoice, IColorScheme } from "./_types"
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
        "tePRz87i1w2d": {
            question: "Do you have a timeframe for these projects?",
            hubsport_property_name: "desired_timeframe",
            replace: {
                'I have a hard due date.': { hubspot_valie_replace: IDesireTimeFrame.hard_due_date },
                'I have a goal but am flexible.': { hubspot_valie_replace: IDesireTimeFrame.goal_but_flexible },
                'I do not have a time frame yet.': { hubspot_valie_replace: IDesireTimeFrame.not_have_timeframe_yet },
                'I am not in a rush.': { hubspot_valie_replace: IDesireTimeFrame.not_in_rush },
            }
        },
        "B6lSl96I1dE5": {
            question: "What is the date?",
            hubsport_property_name: "desired_timeline_date"
        },
        "NZCGd4aEzqfh": {
            question: "What are your plans for the home?",
            hubsport_property_name: "future_plans_with_home",
            replace: {
                'I plan to sell soon': {hubspot_valie_replace:IFuturePlanWithHome.plan_to_sell_soon},
                'This is my forever home.': {hubspot_valie_replace:IFuturePlanWithHome["forever+home"]},
                'I plan to pass this home on to family': {hubspot_valie_replace:IFuturePlanWithHome.plan_to_pass_this_home_on_to_family},
                'I am not sure': {hubspot_valie_replace:IFuturePlanWithHome.not_sure}
            }
        },
        "3wdppI4tm2Kg": {
            question: "Are you interested in energy-efficient upgrades?",
            hubsport_property_name: "interest_in_energy_efficient_upgrades",
            replace:{
                "Yes":{hubspot_valie_replace:IInterestInEnrgyEfficient.yes},
                "No":{hubspot_valie_replace:IInterestInEnrgyEfficient.no},
                "Possibly Interested":{hubspot_valie_replace:IInterestInEnrgyEfficient.possibly_interested}
            }
        },
        "TZnVJvTgSLvv": {
            question: "How will you fund this project?",
            hubsport_property_name: "desired_funding___financing__cloned_",
            replace: {
                'Cash': {hubspot_valie_replace:IFundingChoices.cash},
                'I have financing arranged': {hubspot_valie_replace:IFundingChoices.financed_arranged},
                "I'd like to get help getting financing": {hubspot_valie_replace:IFundingChoices.help_getting_finance},
                "Other": {hubspot_valie_replace:IFundingChoices.Other}
            }
        },
        "DoJO4kpkIsh5": {
            question: "When was the last paint job on your home?",
            hubsport_property_name: "last_time_home_was_painted",
            replace:{
                "Less than 5 Years":{hubspot_valie_replace:ILastJobChoice.less_then_5_years},
                "5-10 Years":{hubspot_valie_replace:ILastJobChoice["5_to_10_years"]},
                "10+ years":{hubspot_valie_replace:ILastJobChoice["10_plus_years"]},
                "I do not remember / am unsure":{hubspot_valie_replace:ILastJobChoice.i_do_not_remember}
            }
        },
        "WPr8QZFEnWnV": {
            question: "What color scheme would you like?",
            hubsport_property_name: "desired_color_scheme",
            replace:{
                'The Same Color Scheme':{hubspot_valie_replace:IColorScheme.same_color_scheme}, 
                'Complete Different Scheme':{hubspot_valie_replace:IColorScheme.complete_difference_scheme},
                'Similar Scheme':{hubspot_valie_replace:IColorScheme.similar_scheme},
                'Not Sure Yet':{hubspot_valie_replace:IColorScheme.not_sure_yet}
            }
        },
        "UlxjmlMfmBXj": {
            question: "Any last comments or requests that you'd like to share?",
            hubsport_property_name: "additional_comments_on_form"
        },
        "QSAxB3ypHjRx": {
            question: "What are these requests?",
            hubsport_property_name: "form_comments___request"
        }
    }
    return question_maping
}

export const quastionarySolarServiceForm_Mch6ZqYb = ()=>{
    
}