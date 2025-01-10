import { NextRequest, NextResponse } from "next/server"
import {IDealStageChoice, ITypeFormType} from './_types'
import {formPropertMaping} from './_maping'
import * as hubspot from "@hubspot/api-client"
import { get_updated_deal_stage } from "./_get_stage";
export const revalidate = 0; 

export async function POST(request: NextRequest) {
    try {
        const requestData: ITypeFormType = await request.json();
        const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN as string });

        // ===== Getting associated inputs to update =====
        let property_to_update = formPropertMaping({
            form_id: requestData.form_response.form_id,
            data: requestData.form_response.answers,
        });

        if(property_to_update.dealstage)
            delete property_to_update.dealstage

        try {
            const deal_detail = await hubspotClient.crm.objects.basicApi.getById("deal",requestData.form_response.hidden.deal_id)
            const updatedDealStage = get_updated_deal_stage({
                currentDealStage:Number(deal_detail.properties.dealstage)
            })
            await hubspotClient.crm.objects.basicApi.update(
                "deal",
                requestData.form_response.hidden.deal_id,
                {
                    properties: {
                        ...property_to_update,
                        typeform_complete: true,
                        dealstage: updatedDealStage
                    },
                }
            );
        } catch (e: any) {
            const error_detail = e?.body || {};
            return new Response(
                JSON.stringify({
                    error_detail: "HubSpot update failed",
                    payload: property_to_update,
                    ...error_detail,
                }),
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true, data_updated: property_to_update });
    } catch (error) {
        console.log(error);
        return new Response("Something went wrong.", { status: 400 });
    }
}

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({})
    } catch (error) {
        console.error(error)
        return NextResponse.json([])
    }
}
