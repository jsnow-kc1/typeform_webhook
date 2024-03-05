import { IFormQuestionMaping, IRelationProperty, ICertanityForChoice, IDesiredRoofingSurface, IFuturePlanWithHome, IInterestInEnrgyEfficient, IFundingChoices, ILastJobChoice, IColorScheme, ISizeSolarSystemChoice, ILeaseChoice, IPowerConsumptionIncrease } from "./_types"
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
    const question_maping: IFormQuestionMaping = {
        "4cuN82S4W58r":{
            question:"Do you have a timeframe for these projects?",
            hubsport_property_name:"desired_timeframe",
            replace:{
                'I have a hard due date.':{hubspot_valie_replace:IDesireTimeFrame.hard_due_date},
                'I have a goal but am flexible.':{hubspot_valie_replace:IDesireTimeFrame.goal_but_flexible},
                'I do not have a time frame yet.':{hubspot_valie_replace:IDesireTimeFrame.not_have_timeframe_yet},
                'I am not in a rush.':{hubspot_valie_replace:IDesireTimeFrame.not_in_rush},
            }
        },
        "XvNSfdXAGrzP":{
            question:"What is the date?",
            hubsport_property_name:"desired_timeline_date"
        },
        "EDNFsBFKXUrn":{
            question:"How important is a warranty to you?",
            hubsport_property_name:"warranty_importance"
        },
        "WyIQyOIG8Yia":{
            question:"How should we size your solar system?",
            hubsport_property_name:"desired_pv_system_size",
            replace:{
                'Offset as much electricity as possible.':{hubspot_valie_replace:ISizeSolarSystemChoice.offset_as_possible}, 
                'I want a starter system.':{hubspot_valie_replace:ISizeSolarSystemChoice.starter_system},
                'I want something in between.':{hubspot_valie_replace:ISizeSolarSystemChoice.something_between}
            }
        },
        "S7NAqJ3eHfZ0":{
            question:"Would you prefer to lease or own?",
            hubsport_property_name:"pv_system_leasing",
            replace:{
                'Own':{hubspot_valie_replace:ILeaseChoice.own}, 
                'Lease':{hubspot_valie_replace:ILeaseChoice.lease}, 
                'Not Sure.':{hubspot_valie_replace:ILeaseChoice.not_sure}
            }
        },
        "j2b0PkA8DDJ7":{
            question:"Do you expect your power consumption to increase?",
            hubsport_property_name:"power_consumption_expectation",
            replace:{
                'I do not expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.do_not_expect_increase}, 
                'I expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_increase},
                'I expect a decrease':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_decrease},
                'Not Sure':{hubspot_valie_replace:IPowerConsumptionIncrease.not_sure}
            }
        },
        "9Td5MpVlBvHL":{
            question:"How will you fund this project?",
            hubsport_property_name:"desired_funding___financing__cloned_",
            replace:{
                'Cash':{hubspot_valie_replace:IFundingChoices.cash}, 
                'I have financing arranged':{hubspot_valie_replace:IFundingChoices.financed_arranged}, 
                "I'd like to get help getting financing":{hubspot_valie_replace:IFundingChoices.help_getting_finance}, 
                'Other':{hubspot_valie_replace:IFundingChoices.Other}
            }
        },
        "1hgbq4KYN6GH":{
            question:"Any last comments or requests that you'd like to share?",
            hubsport_property_name:"additional_comments_on_form",
        },
        "QucTL99eLmZC":{
            question:"What are these requests?",
            hubsport_property_name:"form_comments___request"
        }
    }
    return question_maping
}


export const quastionarySolarServiceForm_MKTrhFzL = ()=>{
    const question_maping: IFormQuestionMaping = {
        "Xp2rznAfflH4":{
            question:"Which of these best describe you?",
            hubsport_property_name:"relation_to_property",
            replace:{
                'Homeowner':{hubspot_valie_replace:IRelationProperty.homeowner}, 
                'Property Manager':{hubspot_valie_replace:IRelationProperty.property_manager}, 
                'Realtor':{hubspot_valie_replace:IRelationProperty.realtor}, 
                'General Contractor':{hubspot_valie_replace:IRelationProperty.general_contractor}, 
                'Other':{hubspot_valie_replace:IRelationProperty.other}
            }
        },
        "6OORa9jQyQeF":{
            question:"Do you have a timeframe for these projects?",
            hubsport_property_name:"desired_timeframe",
            replace:{
                'I have a hard due date.':{hubspot_valie_replace:IDesireTimeFrame.hard_due_date}, 
                'I have a goal but am flexible.':{hubspot_valie_replace:IDesireTimeFrame.goal_but_flexible}, 
                'I do not have a time frame yet.':{hubspot_valie_replace:IDesireTimeFrame.not_have_timeframe_yet}, 
                'I am not in a rush.':{hubspot_valie_replace:IDesireTimeFrame.not_in_rush},
            }
        },
        "HyhVQls5nD24":{
            question:"What is the date?",
            hubsport_property_name:"desired_timeline_date"
        },
        "K5Ak5BL14g6U":{
            question:"How certain are you about the choices you want for your house?",
            hubsport_property_name:"certainty_for_choices",
            replace:{
                'I know exactly what I want.':{hubspot_valie_replace:ICertanityForChoice.i_know_what_i_want}, 
                'I think I know what I want.':{hubspot_valie_replace:ICertanityForChoice.i_think_i_know_what_i_want}, 
                'I need some advice!':{hubspot_valie_replace:ICertanityForChoice.i_need_some_advice}
            }
        },
        "XcHq9Ltkqb85":{
            question:"What are your plans for the home?",
            hubsport_property_name:"future_plans_with_home",
            replace:{
                'I plan to sell soon.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_sell_soon}, 
                'This is my forever home.':{hubspot_valie_replace:IFuturePlanWithHome["forever+home"]}, 
                'I plan to pass this home on to family.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_pass_this_home_on_to_family}, 
                'I am not sure.':{hubspot_valie_replace:IFuturePlanWithHome.not_sure}

            }
        },
        "PaQhBjujzpD3":{
            question:"Are you interested in energy-efficient upgrades?",
            hubsport_property_name:"interest_in_energy_efficient_upgrades",
            replace:{
                'Yes':{hubspot_valie_replace:IInterestInEnrgyEfficient.yes}, 
                'No':{hubspot_valie_replace:IInterestInEnrgyEfficient.no}, 
                'Possibly Interested':{hubspot_valie_replace:IInterestInEnrgyEfficient.possibly_interested}
            }
        },
        "UXdT8jPzQw9V":{
            question:"How should we size your solar system?",
            hubsport_property_name:"desired_pv_system_size",
            replace:{
                'Offset as much electricity as possible.':{hubspot_valie_replace:ISizeSolarSystemChoice.offset_as_possible}, 
                'I want a starter system.':{hubspot_valie_replace:ISizeSolarSystemChoice.starter_system}, 
                'I want something in between.':{hubspot_valie_replace:ISizeSolarSystemChoice.something_between}
            }
        },
        "v2jiueyMF7qb":{
            question:"Would you prefer to lease or own?",
            hubsport_property_name:"pv_system_leasing",
            replace:{
                'Own':{hubspot_valie_replace:ILeaseChoice.own}, 
                'Lease':{hubspot_valie_replace:ILeaseChoice.lease}, 
                'Not Sure.':{hubspot_valie_replace:ILeaseChoice.not_sure}
            }
        },
        "Tr38oFYFc1XD":{
            question:"Do you expect your power consumption to increase?",
            hubsport_property_name:"power_consumption_expectation",
            replace:{
                'I do not expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.do_not_expect_increase}, 
                'I expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_increase}, 
                'I expect a decrease':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_decrease}, 
                'Not Sure':{hubspot_valie_replace:IPowerConsumptionIncrease.not_sure}
            }
        },
        "CufgcIAHcX1J":{
            question:"How will you fund this project?",
            hubsport_property_name:"desired_funding___financing__cloned_",
            replace:{
                'Cash':{hubspot_valie_replace:IFundingChoices.cash}, 
                'I have financing arranged':{hubspot_valie_replace:IFundingChoices.financed_arranged}, 
                "I'd like to get help getting financing":{hubspot_valie_replace:IFundingChoices.help_getting_finance}, 
                'Other':{hubspot_valie_replace:IFundingChoices.Other}
            }
        },
        "53UfBDwI8817":{
            question:"When was the last paint job on your home?",
            hubsport_property_name:"last_time_home_was_painted",
            replace:{
                'Less than 5 Years':{hubspot_valie_replace:ILastJobChoice.less_then_5_years}, 
                '5-10 Years':{hubspot_valie_replace:ILastJobChoice["5_to_10_years"]}, 
                '10+ years':{hubspot_valie_replace:ILastJobChoice["10_plus_years"]}, 
                'I do not remember / am unsure':{hubspot_valie_replace:ILastJobChoice.i_do_not_remember}

            }
        },
        "h9jCBHAR52fu":{
            question:"What color scheme would you like?",
            hubsport_property_name:"desired_color_scheme",
            replace:{
                'The Same Color Scheme':{hubspot_valie_replace:IColorScheme.same_color_scheme}, 
                'Complete Different Scheme':{hubspot_valie_replace:IColorScheme.complete_difference_scheme}, 
                'Similar Scheme':{hubspot_valie_replace:IColorScheme.similar_scheme}, 
                'Not Sure Yet':{hubspot_valie_replace:IColorScheme.not_sure_yet}
            }
        },
        "sS0BZqpE6zkK":{
            question:"Any last comments or requests that you'd like to share?",
            hubsport_property_name:"additional_comments_on_form"
        },
        "4usXvlVtXG72":{
            question:"What are these requests?",
            hubsport_property_name:"form_comments___request"
        }
    }
    return question_maping
}


export const quastionaryPaintingAndRoofForm_ThDlcaCK = ()=>{
    const question_maping: IFormQuestionMaping = {
        "DsBLwltBASIe":{
            question:"Which of these best describe you?",
            hubsport_property_name:"relation_to_property",
            replace:{
                'Homeowner':{hubspot_valie_replace:IRelationProperty.homeowner}, 
                'Property Manager':{hubspot_valie_replace:IRelationProperty.property_manager}, 
                'Realtor':{hubspot_valie_replace:IRelationProperty.realtor}, 
                'General Contractor':{hubspot_valie_replace:IRelationProperty.general_contractor}, 
                'Other':{hubspot_valie_replace:IRelationProperty.other}
            }
        },
        "r81mdf7xF5RN":{
            question:"Do you have a timeframe for these projects?",
            hubsport_property_name:"desired_timeframe",
            replace:{
                'I have a hard due date.':{hubspot_valie_replace:IDesireTimeFrame.hard_due_date}, 
                'I have a goal but am flexible.':{hubspot_valie_replace:IDesireTimeFrame.goal_but_flexible}, 
                'I do not have a time frame yet.':{hubspot_valie_replace:IDesireTimeFrame.not_have_timeframe_yet}, 
                'I am not in a rush.':{hubspot_valie_replace:IDesireTimeFrame.not_in_rush},

            }
        },
        "7fl57IQTlOGJ":{
            question:"What is the date?",
            hubsport_property_name:"desired_timeline_date",
        },
        "lVSw0hoBHogd":{
            question:"How certain are you about the choices you want for your house?",
            hubsport_property_name:"certainty_for_choices",
            replace:{
                'I know exactly what I want.':{hubspot_valie_replace:ICertanityForChoice.i_know_what_i_want}, 
                'I think I know what I want.':{hubspot_valie_replace:ICertanityForChoice.i_think_i_know_what_i_want}, 
                'I need some advice!':{hubspot_valie_replace:ICertanityForChoice.i_need_some_advice}
            }
        },
        "CEACHcmBX467":{
            question:"What type of roofing services are you looking for?",
            hubsport_property_name:"desired_roofing_service",
            replace: {
                "Replacement": { hubspot_valie_replace: IDesiredRoofingSurface.replacement },
                "Repair, if feasible. Replacement if not.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_if_feasible_but_replacement_if_not },
                "Repair is my preference.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_is_my_preference },
                "Not Sure": { hubspot_valie_replace: IDesiredRoofingSurface.not_sure }
            }
        },
        "xwDb5l20FbSf":{
            question:"How important is a roof warranty to you?",
            hubsport_property_name:"warranty_importance",
        },
        "kY6tc2sDmNaR":{
            hubsport_property_name:"future_plans_with_home",
            question:"What are your plans for the home?",
            replace:{
                'I plan to sell soon.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_sell_soon}, 
                'This is my forever home.':{hubspot_valie_replace:IFuturePlanWithHome["forever+home"]}, 
                'I plan to pass this home on to family.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_pass_this_home_on_to_family}, 
                'I am not sure.':{hubspot_valie_replace:IFuturePlanWithHome.not_sure}

            }
        },
        "Fo70blw5LDz5":{
            hubsport_property_name:"interest_in_energy_efficient_upgrades",
            question:"Are you interested in energy-efficient upgrades?",
            replace:{
                'Yes':{hubspot_valie_replace:IInterestInEnrgyEfficient.yes}, 
                'No':{hubspot_valie_replace:IInterestInEnrgyEfficient.no}, 
                'Possibly Interested':{hubspot_valie_replace:IInterestInEnrgyEfficient.possibly_interested}
            }
        },
        "VnCb9bFRlglT":{
            question:"How will you fund this project?",
            hubsport_property_name:"desired_funding___financing__cloned_",
            replace:{
                'Cash':{hubspot_valie_replace:IFundingChoices.cash}, 
                'I have financing arranged':{hubspot_valie_replace:IFundingChoices.financed_arranged}, 
                "I'd like to get help getting financing":{hubspot_valie_replace:IFundingChoices.help_getting_finance}, 
                'Other':{hubspot_valie_replace:IFundingChoices.Other}
            }
        },
        'C0czrgPFGSa8':{
            question:"When was the last paint job on your home?",
            hubsport_property_name:"last_time_home_was_painted",
            replace:{
                'Less than 5 Years':{hubspot_valie_replace:ILastJobChoice.less_then_5_years}, 
                '5-10 Years':{hubspot_valie_replace:ILastJobChoice["5_to_10_years"]}, 
                '10+ years':{hubspot_valie_replace:ILastJobChoice["10_plus_years"]}, 
                'I do not remember / am unsure':{hubspot_valie_replace:ILastJobChoice.i_do_not_remember}
            }
        },
        "DPQfTI8wsudq":{
            question:"what color scheme would you like?",
            hubsport_property_name:"desired_color_scheme",
            replace:{
                'The Same Color Scheme':{hubspot_valie_replace:IColorScheme.same_color_scheme}, 
                'Complete Different Scheme':{hubspot_valie_replace:IColorScheme.complete_difference_scheme}, 
                'Similar Scheme':{hubspot_valie_replace:IColorScheme.similar_scheme}, 
                'Not Sure Yet':{hubspot_valie_replace:IColorScheme.not_sure_yet}
            }
        },
        "GLtiWPS773Zm":{
            hubsport_property_name:"additional_comments_on_form",
            question:"Any last comments or requests that you'd like to share?"
        },
        "XBsGroYxgWC3":{
            hubsport_property_name:"form_comments___request",
            question:"What are these requests?"
        }

    }
    return question_maping
}


export const quastionarySolarRoofingServiceForm_zT4ZOhYg = ()=>{
    const question_maping: IFormQuestionMaping = {
        "PpnAj1hFZNk3":{
            question:"Which of these best describe you?",
            hubsport_property_name:"relation_to_property",
            replace:{
                'Homeowner':{hubspot_valie_replace:IRelationProperty.homeowner}, 
                'Property Manager':{hubspot_valie_replace:IRelationProperty.property_manager}, 
                'Realtor':{hubspot_valie_replace:IRelationProperty.realtor}, 
                'General Contractor':{hubspot_valie_replace:IRelationProperty.general_contractor}, 
                'Other':{hubspot_valie_replace:IRelationProperty.other}
            }
        },
        "0Aa90Pa3gYhK":{
            question:"Do you have a timeframe for these projects?",
            hubsport_property_name:"desired_timeframe",
            replace:{
                'I have a hard due date.':{hubspot_valie_replace:IDesireTimeFrame.hard_due_date}, 
                'I have a goal but am flexible.':{hubspot_valie_replace:IDesireTimeFrame.goal_but_flexible}, 
                'I do not have a time frame yet.':{hubspot_valie_replace:IDesireTimeFrame.not_have_timeframe_yet}, 
                'I am not in a rush.':{hubspot_valie_replace:IDesireTimeFrame.not_in_rush},
            }
        },
        "rzPGKKQvfoM4":{
            question:"What is the date?",
            hubsport_property_name:"desired_timeline_date"
        },
        "KuRgPoUYrVoq":{
            question:"How certain are you about the choices you want for your house?",
            hubsport_property_name:"certainty_for_choices",
            replace:{
                'I know exactly what I want.':{hubspot_valie_replace:ICertanityForChoice.i_know_what_i_want}, 
                'I think I know what I want.':{hubspot_valie_replace:ICertanityForChoice.i_think_i_know_what_i_want}, 
                'I need some advice!':{hubspot_valie_replace:ICertanityForChoice.i_need_some_advice}
            }
        },
        "3chtmcxUqNce":{
            question:"What type of roofing services are you looking for?",
            hubsport_property_name:"desired_roofing_service",
            replace: {
                "Replacement": { hubspot_valie_replace: IDesiredRoofingSurface.replacement },
                "Repair, if feasible. Replacement if not.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_if_feasible_but_replacement_if_not },
                "Repair is my preference.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_is_my_preference },
                "Not Sure": { hubspot_valie_replace: IDesiredRoofingSurface.not_sure }
            }
        },
        "Dl2Asl5FrkvW":{
            question:"How important is a roof warranty to you?",
            hubsport_property_name:"warranty_importance"
        },
        "J6rr7fgSa4NZ":{
            question:"What are your plans for the home?",
            hubsport_property_name:"future_plans_with_home",
            replace:{
                'I plan to sell soon.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_sell_soon}, 
                'This is my forever home.':{hubspot_valie_replace:IFuturePlanWithHome["forever+home"]}, 
                'I plan to pass this home on to family.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_pass_this_home_on_to_family}, 
                'I am not sure.':{hubspot_valie_replace:IFuturePlanWithHome.not_sure}
            }
        },
        "x996rXsqI6Kc":{
            question:"Are you interested in energy-efficient upgrades?",
            hubsport_property_name:"interest_in_energy_efficient_upgrades",
            replace:{
                'Yes':{hubspot_valie_replace:IInterestInEnrgyEfficient.yes}, 
                'No':{hubspot_valie_replace:IInterestInEnrgyEfficient.no}, 
                'Possibly Interested':{hubspot_valie_replace:IInterestInEnrgyEfficient.possibly_interested}
            }
        },
        "Ki9QCowQZ9Ja":{
            question:"How should we size your solar system?",
            hubsport_property_name:"desired_pv_system_size",
            replace:{
                'Offset as much electricity as possible.':{hubspot_valie_replace:ISizeSolarSystemChoice.offset_as_possible}, 
                'I want a starter system.':{hubspot_valie_replace:ISizeSolarSystemChoice.starter_system}, 
                'I want something in between.':{hubspot_valie_replace:ISizeSolarSystemChoice.something_between}
            }
        },
        "yiD34sgNo4q4":{
            question:"Would you prefer to lease or own?",
            hubsport_property_name:"pv_system_leasing",
            replace:{
                'Own':{hubspot_valie_replace:ILeaseChoice.own}, 
                'Lease':{hubspot_valie_replace:ILeaseChoice.lease}, 
                'Not Sure.':{hubspot_valie_replace:ILeaseChoice.not_sure}
            }
        },
        "TA0A8Av8aDf5":{
            question:"Do you expect your power consumption to increase?",
            hubsport_property_name:"power_consumption_expectation",
            replace:{
                'I do not expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.do_not_expect_increase}, 
                'I expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_increase}, 
                'I expect a decrease':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_decrease}, 
                'Not Sure':{hubspot_valie_replace:IPowerConsumptionIncrease.not_sure}
            }
        },
        "DGEfvkyEvm4E":{
            question:"How will you fund this project?",
            hubsport_property_name:"desired_funding___financing__cloned_",
            replace:{
                'Cash':{hubspot_valie_replace:IFundingChoices.cash}, 
                'I have financing arranged':{hubspot_valie_replace:IFundingChoices.financed_arranged}, 
                "I'd like to get help getting financing":{hubspot_valie_replace:IFundingChoices.help_getting_finance}, 
                'Other':{hubspot_valie_replace:IFundingChoices.Other}
            }
        },
        "mSgtNqvUHKpI":{
            question:"Any last comments or requests that you'd like to share?",
            hubsport_property_name:"additional_comments_on_form"
        },
        "eDuM8TO7PAAS":{
            question:"What are these requests?",
            hubsport_property_name:"form_comments___request"
        }
    }
    return question_maping
}

export const quastionarySolarPaintRoofingServiceForm_ScoUD2eg = ()=>{
    const question_maping: IFormQuestionMaping = {
        "Nr3cBPGZ3Ylj":{
            question:"Which of these best describe you?",
            hubsport_property_name:"relation_to_property",
            replace:{
                'Homeowner':{hubspot_valie_replace:IRelationProperty.homeowner}, 
                'Property Manager':{hubspot_valie_replace:IRelationProperty.property_manager}, 
                'Realtor':{hubspot_valie_replace:IRelationProperty.realtor}, 
                'General Contractor':{hubspot_valie_replace:IRelationProperty.general_contractor}, 
                'Other':{hubspot_valie_replace:IRelationProperty.other}
            }
        },
        "F6QVH8an5Eyc":{
            question:"Do you have a timeframe for these projects?",
            hubsport_property_name:"desired_timeframe",
            replace:{
                'I have a hard due date.':{hubspot_valie_replace:IDesireTimeFrame.hard_due_date}, 
                'I have a goal but am flexible.':{hubspot_valie_replace:IDesireTimeFrame.goal_but_flexible}, 
                'I do not have a time frame yet.':{hubspot_valie_replace:IDesireTimeFrame.not_have_timeframe_yet}, 
                'I am not in a rush.':{hubspot_valie_replace:IDesireTimeFrame.not_in_rush},
            }
        },
        "YRLc8BeBt8cN":{
            question:"What is the date?",
            hubsport_property_name:"desired_timeline_date"
        },
        "L2dLvIwfI31q":{
            question:"How certain are you about the choices you want for your house?",
            hubsport_property_name:"certainty_for_choices",
            replace:{
                'I know exactly what I want.':{hubspot_valie_replace:ICertanityForChoice.i_know_what_i_want}, 
                'I think I know what I want.':{hubspot_valie_replace:ICertanityForChoice.i_think_i_know_what_i_want}, 
                'I need some advice!':{hubspot_valie_replace:ICertanityForChoice.i_need_some_advice}
            }
        },
        "2gakYt4ZOUmy":{
            question:"What type of roofing services are you looking for?",
            hubsport_property_name:"desired_roofing_service",
            replace: {
                "Replacement": { hubspot_valie_replace: IDesiredRoofingSurface.replacement },
                "Repair, if feasible. Replacement if not.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_if_feasible_but_replacement_if_not },
                "Repair is my preference.": { hubspot_valie_replace: IDesiredRoofingSurface.repair_is_my_preference },
                "Not Sure": { hubspot_valie_replace: IDesiredRoofingSurface.not_sure }
            }
        },
        "zYZCcz2UbUqc":{
            question:"How important is a roof warranty to you?",
            hubsport_property_name:"warranty_importance"
        },
        "Yci47w8xy52N":{
            question:"What are your plans for the home?",
            hubsport_property_name:"future_plans_with_home",
            replace:{
                'I plan to sell soon.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_sell_soon}, 
                'This is my forever home.':{hubspot_valie_replace:IFuturePlanWithHome["forever+home"]}, 
                'I plan to pass this home on to family.':{hubspot_valie_replace:IFuturePlanWithHome.plan_to_pass_this_home_on_to_family}, 
                'I am not sure.':{hubspot_valie_replace:IFuturePlanWithHome.not_sure}
            }
        },
        "3eDixJQbgSSw":{
            question:"Are you interested in energy-efficient upgrades?",
            hubsport_property_name:"interest_in_energy_efficient_upgrades",
            replace:{
                'Yes':{hubspot_valie_replace:IInterestInEnrgyEfficient.yes}, 
                'No':{hubspot_valie_replace:IInterestInEnrgyEfficient.no}, 
                'Possibly Interested':{hubspot_valie_replace:IInterestInEnrgyEfficient.possibly_interested}
            }
        },
        "b9Y4uAxcFY0m":{
            question:"How should we size your solar system?",
            hubsport_property_name:"desired_pv_system_size",
            replace:{
                'Offset as much electricity as possible.':{hubspot_valie_replace:ISizeSolarSystemChoice.offset_as_possible}, 
                'I want a starter system.':{hubspot_valie_replace:ISizeSolarSystemChoice.starter_system}, 
                'I want something in between.':{hubspot_valie_replace:ISizeSolarSystemChoice.something_between}
            }
        },
        "1jRrIeKkiZbK":{
            question:"Would you prefer to lease or own?",
            hubsport_property_name:"pv_system_leasing",
            replace:{
                'Own':{hubspot_valie_replace:ILeaseChoice.own}, 
                'Lease':{hubspot_valie_replace:ILeaseChoice.lease}, 
                'Not Sure.':{hubspot_valie_replace:ILeaseChoice.not_sure}
            }
        },
        "6M2aM3eCVQX7":{
            question:"Do you expect your power consumption to increase?",
            hubsport_property_name:"power_consumption_expectation",
            replace:{
                'I do not expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.do_not_expect_increase}, 
                'I expect an increase':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_increase}, 
                'I expect a decrease':{hubspot_valie_replace:IPowerConsumptionIncrease.expect_decrease}, 
                'Not Sure':{hubspot_valie_replace:IPowerConsumptionIncrease.not_sure}
            }
        },
        "Eu3iKHGm2ApG":{
            question:"How will you fund this project?",
            hubsport_property_name:"desired_funding___financing__cloned_",
            replace:{
                'Cash':{hubspot_valie_replace:IFundingChoices.cash}, 
                'I have financing arranged':{hubspot_valie_replace:IFundingChoices.financed_arranged}, 
                "I'd like to get help getting financing":{hubspot_valie_replace:IFundingChoices.help_getting_finance}, 
                'Other':{hubspot_valie_replace:IFundingChoices.Other}
            }
        },
        "qm6E1Ew5VSCI":{
            question:"When was the last paint job on your home?",
            hubsport_property_name:"last_time_home_was_painted",
            replace:{
                'Less than 5 Years':{hubspot_valie_replace:ILastJobChoice.less_then_5_years}, 
                '5-10 Years':{hubspot_valie_replace:ILastJobChoice["5_to_10_years"]}, 
                '10+ years':{hubspot_valie_replace:ILastJobChoice["10_plus_years"]}, 
                'I do not remember / am unsure':{hubspot_valie_replace:ILastJobChoice.i_do_not_remember}
            }
        },
        "J3ms1XuFRgzD":{
            question:"What color scheme would you like?",
            hubsport_property_name:"desired_color_scheme",
            replace:{
                'The Same Color Scheme':{hubspot_valie_replace:IColorScheme.same_color_scheme}, 
                'Complete Different Scheme':{hubspot_valie_replace:IColorScheme.complete_difference_scheme}, 
                'Similar Scheme':{hubspot_valie_replace:IColorScheme.similar_scheme}, 
                'Not Sure Yet':{hubspot_valie_replace:IColorScheme.not_sure_yet}
            }
        },
        "dLyGKesOXFkp":{
            question:"Any last comments or requests that you'd like to share?",
            hubsport_property_name:"additional_comments_on_form"
        },
        "r13D7P5y3NvD":{
            question:"What are these requests?",
            hubsport_property_name:"form_comments___request"
        }
    }
    return question_maping
}