import { getSecret } from "astro:env/server";
const API_URL = `https://toteatglobal.appspot.com/mw/or/1.0/products?xir=${getSecret('TOTEAT_XIR')}&xil=${getSecret('TOTEAT_XIL')}&xiu=${getSecret('TOTEAT_XIU')}&xapitoken=${getSecret('TOTEAT_API_TOKEN')}&activeProducts=true`;

export async function OPTIONS(request: Request) {

    return Response.json({
        response:'Testing',
        request
    });
}

export async function GET(request: Request) {

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