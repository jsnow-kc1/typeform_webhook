import { NextRequest, NextResponse } from "next/server"
import {ITypeFormType} from './_types'
import {formPropertMaping} from './_maping'
import * as hubspot from "@hubspot/api-client"
export const revalidate = 0; 

export async function POST(request: NextRequest) {
    try {
        const requestData:ITypeFormType = await request.json()
        const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN as string })

        // ===== gettting associated inputs to updated =====
        const property_to_update = formPropertMaping({form_id:requestData.form_response.form_id,data:requestData.form_response.answers})
        if(!property_to_update) return NextResponse.json({error:"nothing to update"})
        if(Object.keys(property_to_update).length===0) return NextResponse.json({error:"nothing to update"})

        await hubspotClient.crm.objects.basicApi.update(
            "deal",
            requestData.form_response.hidden.deal_id,
            {properties:property_to_update}
        )
        return NextResponse.json({success:true})
    } catch (error) {
        return NextResponse.json([])
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
