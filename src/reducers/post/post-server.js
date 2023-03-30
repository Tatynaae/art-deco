import {instance} from "../../utils/axios-instance";


const contact = "/contact/"
const message = "/message/"
const calculator= "/calculator_window"
export const postServer = {
    contact : async (data) => {
        return await instance.post(`${contact}`,{
            name: data.name,
            phone_number: `+996${data.phone.slice(1,10)}`
        })
    },
    message : async (data) => {
        return await instance.post(`${message}`,{
            name: data.name,
            phone_number: `+996${data.phone.slice(1,10)}`,
            text: data.desc
        })
    },
    calculator : async (data,id) => {
        return await instance.post(`${calculator}/${id}/`,{
            windows : data
        })
    }
}