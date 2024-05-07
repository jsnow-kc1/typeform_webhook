import { NextRequest, NextResponse } from "next/server"
import { ITypeFormType } from "../typeform/_types";
import { inspectionFormQuestionMaping } from "./_question_maping";
import * as hubspot from "@hubspot/api-client"
import { AssociationSpecAssociationCategoryEnum } from "@hubspot/api-client/lib/codegen/crm/deals";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { getOrCreateContact, createDeal, dealToCompanyAssociate } from "./_utils";
export const revalidate = 0;

export async function POST(request: NextRequest) {
    try {
        const requestData: ITypeFormType = await request.json()
        const { inssurence_type, answer_required } = inspectionFormQuestionMaping({ form_id: requestData.form_response.form_id, data: requestData.form_response.answers })

        // ===== basic validation =====
        let dealname = answer_required.owner_first_name + " " + answer_required.owner_last_name
        dealname = "testing deal - 123" // TODO - TEMPRARY
        if (!inssurence_type) return new Response("Invalid insurence company.", { status: 400 })
        if (!(dealname.trim().length > 0)) return new Response("Invalid first and last name.", { status: 400 })
        if (!answer_required.company_id) return new Response("Invalid company id.", { status: 400 })
        let adjuster_contact_id = answer_required.adjuster_contact_id

        // ===== getting adjuster contact id if not exist
        if (!adjuster_contact_id && answer_required.new_adjuster_contact_detail) {
            let form_contact_detail = answer_required.new_adjuster_contact_detail
            form_contact_detail = { // TODO: TEMPRARY
                email: "testing@gmail.com",
                firstName: "testing",
                lastName: "testing last",
                phone: ""
            }
            const { contact_id } = await getOrCreateContact({
                email: form_contact_detail.email,
                firstName: form_contact_detail.firstName,
                lastName: form_contact_detail.lastName,
                phone: form_contact_detail.phone
            })
            adjuster_contact_id = contact_id
        }
        if (!adjuster_contact_id) throw new Error("Adjuster contact not found.")

        // ===== Creating deal object. =====
        let insurance_deal: any = {
            pipeline: "1973319",
            dealstage: "6845960",
            dealtype: "Insurance Inspection",
            amount: "200",
            dealname
        }
        let resedential_roofing_deal = {
            pipeline: "1919787",
            dealstage: "173202291",
            dealtype: "Residential Roofing",
            dealname
        }

        // ========== Creating the deal (resedential roofing deal). ==========
        const resedential_deal_create_response = await createDeal({ properties: resedential_roofing_deal })
        const resedential_roofing_deal_id = resedential_deal_create_response.data.id
        await dealToCompanyAssociate({ company_id: answer_required.company_id, deal_id: resedential_roofing_deal_id, })

        // ========== Creating the deal (insurance deal). ===========
        const insurence_deal_create_response = await createDeal({
            properties: insurance_deal, association: [{
                to: { id: resedential_roofing_deal_id },
                types: [
                    {
                        "associationCategory": AssociationSpecAssociationCategoryEnum.UserDefined,
                        associationTypeId: 328,
                    }
                ]
            }]
        })
        const insurence_deal_id = insurence_deal_create_response.data.id
        await dealToCompanyAssociate({ company_id: answer_required.company_id, deal_id: insurence_deal_id })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error)
        return new Response("Something went wrong.", { status: 400 })
    }
}



