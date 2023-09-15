"use server"

import { revalidatePath } from "next/cache"

export async function create(formData){
    let data = Object.fromEntries(formData);
    console.log(data);
    data.numVoo = parseFloat(data.numVoo);
    data.portao = parseFloat(data.portao);
    console.log(data);
    const url = "http://localhost:8080/myflights/api/voo"
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        return {message: "Erro ao cadastrar"}
    }
    
    revalidatePath("/contas")
    return {message: "ok"}
       
}
