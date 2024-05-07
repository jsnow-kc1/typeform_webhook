import { NextRequest, NextResponse } from "next/server"
import { ITypeFormType } from "../typeform/_types";
import { inspectionFormQuestionMaping } from "./_question_maping";
import { AssociationSpecAssociationCategoryEnum } from "@hubspot/api-client/lib/codegen/crm/deals";
import { getOrCreateContact, createDeal, dealToCompanyAssociate, contactToDealAssociate, uploadFile, attachFileToDeal } from "./_utils";
export const revalidate = 0;

export async function POST(request: NextRequest) {
    try {
        const isDevelopment = process.env.ENVIRONMENT === "development"
        const requestData: ITypeFormType = await request.json()
        const { inssurence_type, answer_required } = inspectionFormQuestionMaping({ form_id: requestData.form_response.form_id, data: requestData.form_response.answers })

        // ===== basic validation =====
        let dealname = answer_required.owner_first_name + " " + answer_required.owner_last_name
        if (isDevelopment) { dealname = "testing deal - 123" }

        if (!inssurence_type) return new Response("Invalid insurence company.", { status: 400 })
        if (!(dealname.trim().length > 0)) return new Response("Invalid first and last name.", { status: 400 })
        if (!answer_required.company_id) return new Response("Invalid company id.", { status: 400 })
        let adjuster_contact_id = answer_required.adjuster_contact_id


        // ===== uploading attachment =====
        let attachment_file_id: null | string = null
        if (answer_required.attachment) {
            attachment_file_id = await uploadFile({ url: answer_required.attachment })
        }

        // ===== getting adjuster contact id if not exist
        if (!adjuster_contact_id && answer_required.new_adjuster_contact_detail) {
            let form_contact_detail = answer_required.new_adjuster_contact_detail
            if (isDevelopment) {
                form_contact_detail = {
                    email: "testing@gmail.com",
                    firstName: "testing",
                    lastName: "testing last",
                    phone: ""
                }
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

        // ===== Getting main point of contact id if exist and required =====
        let main_point_of_contact_id = null
        if (answer_required.main_point_of_contact) {
            let form_contact_detail = answer_required.main_point_of_contact
            if (isDevelopment) {
                form_contact_detail = {
                    email: "testing_main_point@gmail.com",
                    firstName: "testing main point",
                    lastName: "testing last",
                    phone: ""
                }
            }
            const { contact_id } = await getOrCreateContact({
                email: form_contact_detail.email,
                firstName: form_contact_detail.firstName,
                lastName: form_contact_detail.lastName,
                phone: form_contact_detail.phone
            })
            main_point_of_contact_id = contact_id
        }


        // ===== Getting owner contact if exist and required =====
        let owner_contact_id = null
        if (answer_required.owner_contact_detail) {
            let form_contact_detail = answer_required.owner_contact_detail
            if (isDevelopment) {
                form_contact_detail = {
                    email: "testing_owner@gmail.com",
                    firstName: "testing owner",
                    lastName: "testing last",
                    phone: ""
                }
            }
            const { contact_id } = await getOrCreateContact({
                email: form_contact_detail.email,
                firstName: form_contact_detail.firstName,
                lastName: form_contact_detail.lastName,
                phone: form_contact_detail.phone
            })
            owner_contact_id = contact_id
        }

        // ===== contacts ids' =====
        const contact_ids = [{id:adjuster_contact_id,type:"adjuster"}]
        if(main_point_of_contact_id){
            contact_ids.push({id:main_point_of_contact_id,type:"main_point_of_contact"})
        }
        if(owner_contact_id){
            contact_ids.push({id:owner_contact_id,type:"owner___trustee_"})
        }

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
        await contactToDealAssociate({ contact_ids: contact_ids, deal_id: resedential_roofing_deal_id })
        if (attachment_file_id) {
            await attachFileToDeal({ file_id: attachment_file_id, deal_id: resedential_roofing_deal_id })
        }

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
        await contactToDealAssociate({ contact_ids: contact_ids, deal_id: insurence_deal_id })
        if (attachment_file_id) {
            await attachFileToDeal({ file_id: attachment_file_id, deal_id: insurence_deal_id })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.log(error)
        return new Response("Something went wrong.", { status: 400 })
    }
}




