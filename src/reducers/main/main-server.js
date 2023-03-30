import {instance} from "../../utils/axios-instance";

const category = "/category/"
const categoryID = "/product_list"
const categoryItem = "/product_detail"
const review = "/review"
const filter = "/filter"

export const mainServer = {
    getFilterPage : async (data) => {
        return await instance.get(`${filter}/?title=${data}`)
    },
    getCategory : async () => {
        return await instance.get(`${category}`)
    },
    getCategoryId : async (data) => {
        return await instance.get(`${categoryID}/${data}`)
    },
    getCategoryItem : async (data) => {
        return await instance.get(`${categoryItem}/${data}/`)
    },
    getPart : async () => {
        return await instance.get("/partner/")
    },
    getPortfolio : async () => {
        return await instance.get("/portfolio")
    },
    getPortfolioId : async (id) => {
        return await instance.get(`/portfolio/${id}`)
    },
    getReview : async () => {
        return await instance.get(`${review}`)
    }
}