import { FilterOperatorEnum, PublicAssociationsForObject } from "@hubspot/api-client/lib/codegen/crm/companies"
import { IFormQuestionMaping } from "../typeform/_types"
import * as hubspot from "@hubspot/api-client"
import axios from "axios"

export interface InspectionRequiredDataType {
    is_same_contact: boolean,
    owner_first_name: string,
    owner_last_name: string,
    company_id: null | string,
    adjuster_contact_id: null | string
    new_adjuster_contact_detail?: {
        email: string,
        phone: string,
        firstName: string,
        lastName: string,
    },
    owner_contact_detail?: {
        email: string,
        phone: string,
        firstName: string,
        lastName: string,
    },
    attachment: string | null
}

export const isLandAdjusterMaping = () => {
    const values: { [key: string]: { id: string | null } } = {
        "Otaguro, Devan": {
            id: "452003"
        },
        "Okabe, Mark": {
            id: "452242"
        },
        "Saole, Lini": {
            id: "449100"
        },
        "Takeuchi, Willow": {
            id: "448640"
        },
        "Tsuda, Steven": {
            id: "463601"
        },
        "Other": {
            id: null
        }
    }
    return values
}
export const isZephrAdjusteraping = () => {
    const values: { [key: string]: { id: string | null } } = {
        "King, Ashley": {
            id: "5185151"
        },
        "Novelo, Pastor": {
            id: "3253351"
        },
        "Moss, Trevor": {
            id: "6204451"
        },
        "Soyanco, Jahdiel": {
            id: "2358251"
        },
        "Bain, Richard": {
            id: "447218"
        },
        "Stewart, Todd": {
            id: "4705401"
        },
        "Cravalho, Michael": {
            id: "8124801"
        },
        "Ilustre, Ramon": {
            id: "6603201"
        },
        "Jiskra, Jacob": {
            id: "446370"
        },
        "Other": {
            id: null
        }
    }
    return values
}


export const questionForInspectionIsland_N2mr1fjE = () => {
    const question_maping: IFormQuestionMaping = {
        "a4n8BFzi4wlp": {
            question: "Please Select Adjuster",
            hubsport_property_name: ""
        },
        "0fN3suzfkN65": {
            question: "First name",
            hubsport_property_name: ""
        },
        "D7ugU39XakcU": {
            question: "Last name",
            hubsport_property_name: ""
        },
        "qmhf47kbeC2y": {
            question: "Phone number",
            hubsport_property_name: ""
        },
        "2NKxRvdO3EOI": {
            question: "Email",
            hubsport_property_name: ""
        },
        "aNloEcAicmzG": {
            question: "What is the Reason for the Inspection?",
            hubsport_property_name: ""
        },
        "ej09HFzuIofJ": {
            question: "Is the Insured, the same contact for correspondence?",
            hubsport_property_name: ""
        },
        "CDZtdRtR165O": {
            question: "First name", // owner first name
            hubsport_property_name: ""
        },
        "Ogtnj2Eva4zH": {
            question: "Last name", // owner last name
            hubsport_property_name: ""
        },
        "c4QjtB1t7uwV": {
            question: "Phone number",
            hubsport_property_name: ""
        },
        "iIjLsUNgMtgR": {
            question: "Email",
            hubsport_property_name: ""
        },
        "xK274aNBevUg": {
            question: "First name",
            hubsport_property_name: ""
        },
        "MfCJcxgemgxG": {
            question: "Last name",
            hubsport_property_name: ""
        },
        "SYYrAsbdVLz0": {
            question: "Phone number",
            hubsport_property_name: ""
        },
        "aKl0EUHKXCnJ": {
            question: "Email",
            hubsport_property_name: ""
        },
        "CkDmWnVHzCIE": {
            question: "First name",
            hubsport_property_name: ""
        },
        "NvzQmepsM1m9": {
            question: "Last name",
            hubsport_property_name: ""
        },
        "uqHRGlyxS9dx": {
            question: "Phone number",
            hubsport_property_name: ""
        },
        "iEaRhrPO5SsV": {
            question: "Email",
            hubsport_property_name: ""
        },
        "qiojEazCv64d": {
            question: "Address",
            hubsport_property_name: ""
        },
        "crtzXE8VYD9Q": {
            question: "Address line 2",
            hubsport_property_name: ""
        },
        "eFHUQkJfa2vA": {
            question: "City/Town",
            hubsport_property_name: ""
        },
        "hT8ob5CnHcCm": {
            question: "State/Region/Province",
            hubsport_property_name: ""
        },
        "YURldd6zmA21": {
            question: "Zip/Post Code",
            hubsport_property_name: ""
        },
        "uA2KdOLmtpd5": {
            question: "Country",
            hubsport_property_name: ""
        },
        "aPx5o366ItuO": {
            question: "Please upload the appraisal sheet and any other relevant attachments",
            hubsport_property_name: ""
        }
    }
    return question_maping
}



export const questionForInpsecectionZephyr_QI6IgxgG = () => {
    const question_maping: IFormQuestionMaping = {}
    return question_maping
}



export const getOrCreateContact = async ({ email, phone, firstName, lastName }: { email: string, phone: string, firstName: string, lastName: string }) => {
    const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN as string })
    if (!email && !phone) throw new Error('Email or phone is required')
    const filterGroups = []
    if (email) {
        filterGroups.push({
            filters: [
                {
                    operator: FilterOperatorEnum.Eq,
                    propertyName: "email",
                    value: email
                }
            ]
        })
    }
    if (phone) {
        filterGroups.push({
            filters: [
                {
                    operator: FilterOperatorEnum.Eq,
                    propertyName: "phone",
                    value: phone
                }
            ]
        })
    }
    const contact_detail_response = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: filterGroups,
        after: "",
        limit: 1,
        properties: ["email", "phone", "firstname", "lastName"],
        query: "",
        sorts: []
    })
    if (contact_detail_response.results[0]) {
        return { contact_id: contact_detail_response.results[0].id }
    }
    const created_contact_detail_response = await hubspotClient.crm.contacts.basicApi.create({
        associations: [],
        properties: {
            email: email,
            phone: phone,
            firstname: firstName?.toLowerCase() || "",
            lastname: lastName?.toLowerCase() || ""
        }
    })
    return { contact_id: created_contact_detail_response.id }
}

export const createDeal = async ({ properties, association }: { properties: { [key: string]: string }, association?: PublicAssociationsForObject[] }) => {
    const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN as string })
    const response = await hubspotClient.crm.deals.basicApi.createWithHttpInfo({
        properties: { ...properties },
        associations: association || []
    })
    return response
}
export const dealToCompanyAssociate = async ({ company_id, deal_id }: { company_id: string, deal_id: string }) => {
    const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN as string })
    const association_response = await hubspotClient.crm.associations.batchApi.createWithHttpInfo("0-2", "0-3", {
        inputs: [
            {
                _from: {
                    id: company_id
                },
                to: {
                    id: deal_id
                },
                type: "insurance_company"
            }
        ]
    })
    if ((association_response.data as any).numErrors && (association_response.data as any).numErrors > 0) throw new Error("Failed to associate company with deal.")
    return association_response
}
export const contactToDealAssociate = async ({ contact_id, deal_id, type }: { contact_id: string, deal_id: string, type: string }) => {
    const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN as string })
    const association_response = await hubspotClient.crm.associations.batchApi.createWithHttpInfo("0-1", "0-3", {
        inputs: [
            {
                _from: {
                    id: contact_id
                },
                to: {
                    id: deal_id
                },
                type: type
            }
        ]
    })
    if ((association_response.data as any).numErrors && (association_response.data as any).numErrors > 0) throw new Error("Failed to associate contact to deal.")
    return association_response
}

export const uploadFile = async ({ url }: { url: string }) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`,
        }
    }
    const attachment_url = url
    const parts = attachment_url.split('.');
    const extension = parts[parts.length - 1];
    const name = "assignment_sheet" + "." + extension
    const file = await axios.post("https://api.hubapi.com/files/v3/files/import-from-url/async", {
        "access": "PUBLIC_INDEXABLE",
        "name": name,
        "duplicateValidationStrategy": "NONE",
        "overwrite": false,
        "url": attachment_url,
        "folderId": "157533015194"
    }, config);
    let file_id: string | null = null
    const file_uploaded_data = file.data
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
        const url = `https://api.hubapi.com/files/v3/files/import-from-url/async/tasks/${file_uploaded_data.id}/status`;
        try {
            const response = await axios.get(url, config);
            const response_json = response.data;
            if (response_json.status === "COMPLETE") {
                file_id = response_json.result.id;
                break;
            }
        } catch (error) {
            console.error("Error occurred:", error);
            break;
        }
    }
    if (!file_id) throw new Error("FAiled to upload attachment.")
    return file_id
}

export const attachFileToDeal = async ({ file_id, deal_id }: { file_id: string, deal_id: string }) => {
    // ===== creating the note =====
    const config = {
        headers: {
            'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`,
        }
    }
    const currentTimeUTCString = new Date().toISOString();
    await axios.post("https://api.hubapi.com/crm/v3/objects/notes", {
        "properties": {
            "hs_timestamp": currentTimeUTCString,
            "hs_note_body": "Attachment Sheet from typeform insurence form.",
            "hs_attachment_ids": file_id
        },
        "associations": [{
            "to": {
                "id": deal_id
            },
            "types": [
                {
                    "associationCategory": "HUBSPOT_DEFINED",
                    "associationTypeId": 214
                }
            ]
        }]
    }, config)
}