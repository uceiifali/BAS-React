import myAxiosInstance from "../https"

export const getAllCategories = async() =>{
        const categories = await myAxiosInstance("category")
        return categories.data.category
}