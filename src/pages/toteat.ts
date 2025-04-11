import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";
const API_URL = `https://toteatglobal.appspot.com/mw/or/1.0/products?xir=${getSecret('TOTEAT_XIR')}&xil=${getSecret('TOTEAT_XIL')}&xiu=${getSecret('TOTEAT_XIU')}&xapitoken=${getSecret('TOTEAT_API_TOKEN')}&activeProducts=true`;

export const OPTIONS: APIRoute = async ({request}:{request:Request}) => {
    const { searchParams } = new URL(request.url);
    
    try{
        
        const remote = API_URL;
        const fetching = await fetch(remote);
        const response = await fetching.json();
        
        if(searchParams.has('category')){

            const params = searchParams.get("category");
            const filter = response.data.filter((item: any) => item.category === params);
        
            console.log(filter);
        
            return Response.json(filter);
        }else{
            const all = response.data;
        
            console.log(all);
        
            return Response.json(all);
        }

    }catch(error){
        console.log(error);
        return Response.json(error);
    }
}

export const GET: APIRoute = async ({request}: {request:Request}) => {

    const { searchParams } = new URL(request.url);
    
    try{
        
        const remote = API_URL;
        const fetching = await fetch(remote);
        const response = await fetching.json();
        
        if(searchParams.has('category')){

            const params = searchParams.get("category");
            const filter = response.data.filter((item: any) => item.category === params);
        
            console.log(filter);
        
            return Response.json(filter);
        }else{
            const all = response.data;
        
            console.log(all);
        
            return Response.json(all);
        }

    }catch(error){
        console.log(error);
        return Response.json(error);
    }
}