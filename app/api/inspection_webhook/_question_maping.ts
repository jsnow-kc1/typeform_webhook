import { IFormQuestionMaping, ITypeFormType, } from "../typeform/_types";
import { mapChoices } from "../typeform/_maping";
import { isLandAdjusterMaping, questionForInspectionIsland_N2mr1fjE, questionForInpsecectionZephyr_QI6IgxgG, InspectionRequiredDataType, isZephrAdjusteraping } from "./_utils";



export const inspectionFormQuestionMaping = ({ data, form_id }: { form_id: string, data: ITypeFormType['form_response']['answers'] }) => {
    let question_maping: IFormQuestionMaping | null = null
    let inssurence_type: "zephyr" | 'island' | null = null

    // ===== formating answers by id =====
    const answers_by_id: { [key: string]: typeof data[0] } = {}
    data.map((answer) => answers_by_id[answer.field.id] = answer)

    // ===== required data maped =====
    let answer_required: InspectionRequiredDataType = {
        is_same_contact: false,
        owner_first_name: "",
        owner_last_name: "",
        company_id: null,
        adjuster_contact_id: null,
        attachment: null
    }


    if (form_id === "QI6IgxgG") { // Zephyr - Insurance Adjuster Form
        question_maping = questionForInpsecectionZephyr_QI6IgxgG()
        answer_required = isZephrGetRequiredData({ answers_by_id: answers_by_id })
        inssurence_type = "zephyr"
    }
    if (form_id === "N2mr1fjE") { // Island - 
        question_maping = questionForInspectionIsland_N2mr1fjE()
        answer_required = isLandQuestionData({ answers_by_id: answers_by_id })
        inssurence_type = "island"
    }
    return { question_maping, inssurence_type, answer_required }
}



export const isZephrGetRequiredData = ({ answers_by_id }: { answers_by_id: { [key: string]: ITypeFormType['form_response']['answers'][0] } }) => {
    let answer_required: InspectionRequiredDataType = {
        is_same_contact: false,
        owner_first_name: "",
        owner_last_name: "",
        company_id: null,
        adjuster_contact_id: null,
        attachment: null
    }


    const is_same_contact = answers_by_id['DtwiV6DcrTXY'].boolean
    const attachment = answers_by_id['31VdyZpGZUee']?.file_url
    const selected_adjuster_option = answers_by_id['dspjS0WFhzRn'].choice.label
    const adjuster_values = isZephrAdjusteraping()
    const adjuster_contact_id = adjuster_values[selected_adjuster_option]?.id || null
    let adjuster_contact_detail: InspectionRequiredDataType['new_adjuster_contact_detail'] | null = null
    if (!adjuster_contact_id) {
        const email = answers_by_id['yOJ9xe9W0M6O'].email
        const firstName = answers_by_id['jdJ5HuwckRQK'].text
        const lastName = answers_by_id['2w2uONtHvUqh'].text
        const phone = answers_by_id["GBUEKF0Hh2dv"].phone_number
        adjuster_contact_detail = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        }
    }
    if (!adjuster_contact_detail && !adjuster_contact_id) throw new Error("Nor adjuster contact detail or contact id is given.")

    // ===== getting main point of contact =====
    let main_point_first_name = answers_by_id['Wu6YlH0tSk21']?.text || null;
    let main_point_last_name = answers_by_id['88rezyDhkkfu']?.text || null;
    let main_point_phone = answers_by_id['OPyF1BzXB3qN']?.phone_number || null;
    let main_point_email = answers_by_id['P9x37UhMPGMs']?.email || null;
    

    // ===== Getting first and last name =====
    let owner_first_name = ""
    let owner_last_name = ""
    let owner_phone = ""
    let owner_email = ""
    if (!is_same_contact) {
        owner_first_name = answers_by_id['AtXSpAcoqch3'].text
        owner_last_name = answers_by_id['UFImGtJgXGAR'].text
        owner_phone = answers_by_id['v7jCdMEAw1yy'].phone_number
        owner_email = answers_by_id['B6mKQhPIdaJd'].email
    } else {
        owner_first_name = answers_by_id['Ijo8ZqCf3yJQ'].text
        owner_last_name = answers_by_id['NXIweDhtjMWM'].text
        owner_phone = answers_by_id['TWECjTYNl0xb'].phone_number
        owner_email = answers_by_id['q5o09zLq4qo5'].email
    }

    return {
        ...answer_required,
        is_same_contact: is_same_contact,
        owner_first_name: owner_first_name,
        owner_last_name: owner_first_name,
        adjuster_contact_id: adjuster_contact_id,
        new_adjuster_contact_detail: adjuster_contact_detail || undefined,
        attachment,
        owner_contact_detail: {
            email: owner_email,
            phone: owner_phone,
            firstName: owner_first_name,
            lastName: owner_last_name,
        },
        main_point_of_contact: (main_point_email && main_point_phone) ? {
            email: main_point_email,
            phone: main_point_phone,
            firstName: main_point_first_name || "",
            lastName: main_point_last_name || "",
        } : undefined,
        company_id: "7779580456",
    }
}


export const isLandQuestionData = ({ answers_by_id }: { answers_by_id: { [key: string]: ITypeFormType['form_response']['answers'][0] } }) => {
    let answer_required: InspectionRequiredDataType = {
        is_same_contact: false,
        owner_first_name: "",
        owner_last_name: "",
        company_id: null,
        adjuster_contact_id: null,
        owner_contact_detail: undefined,
        attachment: null
    }
    const is_same_contact = answers_by_id['ej09HFzuIofJ'].boolean
    // ===== gettting adjuster contact id (if any) =====
    const selected_adjuster_option = answers_by_id['a4n8BFzi4wlp'].choice.label
    const attachment = answers_by_id['aPx5o366ItuO']?.file_url || null
    const adjuster_values = isLandAdjusterMaping()
    const adjuster_contact_id = adjuster_values[selected_adjuster_option]?.id || null
    let adjuster_contact_detail: InspectionRequiredDataType['new_adjuster_contact_detail'] | null = null
    if (!adjuster_contact_id) {
        const email = answers_by_id['2NKxRvdO3EOI'].email
        const firstName = answers_by_id['0fN3suzfkN65'].text
        const lastName = answers_by_id['D7ugU39XakcU'].text
        const phone = answers_by_id["qmhf47kbeC2y"].phone_number
        adjuster_contact_detail = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        }
    }
    if (!adjuster_contact_detail && !adjuster_contact_id) throw new Error("Nor adjuster contact detail or contact id is given.")
    
    // ===== getting main point of contact =====
    let main_point_first_name = answers_by_id['xK274aNBevUg']?.text || null;
    let main_point_last_name = answers_by_id['MfCJcxgemgxG']?.text || null;
    let main_point_phone = answers_by_id['SYYrAsbdVLz0']?.phone_number || null;
    let main_point_email = answers_by_id['aKl0EUHKXCnJ']?.email || null;

    // ===== Getting first and last name =====
    let owner_first_name = ""
    let owner_last_name = ""
    let owner_phone = ""
    let owner_email = ""
    if (!is_same_contact) {
        owner_first_name = answers_by_id['CDZtdRtR165O'].text
        owner_last_name = answers_by_id['Ogtnj2Eva4zH'].text
        owner_phone = answers_by_id['c4QjtB1t7uwV'].phone_number
        owner_email = answers_by_id['iIjLsUNgMtgR'].email
    } else {
        owner_first_name = answers_by_id['CkDmWnVHzCIE'].text
        owner_last_name = answers_by_id['NvzQmepsM1m9'].text
        owner_phone = answers_by_id['uqHRGlyxS9dx'].phone_number
        owner_email = answers_by_id['iEaRhrPO5SsV'].email
    }
    // ===== Merging Data =====
    answer_required = {
        ...answer_required,
        is_same_contact: is_same_contact,
        owner_first_name: owner_first_name,
        owner_last_name: owner_first_name,
        company_id: "7617371035",
        adjuster_contact_id: adjuster_contact_id,
        attachment: attachment,
        owner_contact_detail: {
            email: owner_email,
            phone: owner_phone,
            firstName: owner_first_name || "",
            lastName: owner_last_name || ""
        },
        main_point_of_contact: (main_point_email && main_point_phone) ? {
            email: main_point_email,
            phone: main_point_phone,
            firstName: main_point_first_name || "",
            lastName: main_point_last_name || "",
        } : undefined,
        new_adjuster_contact_detail: adjuster_contact_detail || undefined
    }
    return answer_required
}