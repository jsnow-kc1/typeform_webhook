import { NextRequest, NextResponse } from "next/server"
import {IDealStageChoice, ITypeFormType} from './_types'
import {formPropertMaping} from './_maping'
import * as hubspot from "@hubspot/api-client"
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

        if (!property_to_update) return new Response("Nothing to update.", { status: 400 });
        if (Object.keys(property_to_update).length === 0) return new Response("Nothing to update.", { status: 400 });

        // === Fix: Prevent updating dealstage to 'estimating' for specific stages ===
        const stagesNotAllowedToDowngrade = [
            6838855, 6838856, 6838860, 6838861,
            6838858, 161310780, 105591193, 
            163911020, 6838859
        ].map(String);  // Convert to strings to avoid comparison issues

        const currentDealStage = property_to_update.dealstage || "";  // Safeguard against missing dealstage

        if (!stagesNotAllowedToDowngrade.includes(currentDealStage)) {
            property_to_update = { ...property_to_update, dealstage: IDealStageChoice.estimating };
        }

        try {
            await hubspotClient.crm.objects.basicApi.update(
                "deal",
                requestData.form_response.hidden.deal_id,
                {
                    properties: {
                        ...property_to_update,
                        typeform_complete: true,
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
