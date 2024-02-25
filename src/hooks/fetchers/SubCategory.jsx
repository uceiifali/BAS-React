import { useQuery,useMutation ,useQueryClient } from "react-query";
import { addSubCategory, deleteSubCategory, getAllSubCategories, updateSubCategory } from "../../helper/fetchers/SubCategories";



export const useGetAllSubCategories = (categoryId) => {
  const query = useQuery("sub-category", () => getAllSubCategories(categoryId));
    
  return query;
};

export const useAddSubCategory = (onSuccess,categoryId) => {
    const queryClient = useQueryClient()
    // console.log("added to categoryId:",categoryId);
    return useMutation((subcategoryData) => addSubCategory(categoryId,subcategoryData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("category");
                queryClient.invalidateQueries('sub-category')
                onSuccess()
            },
            onError: (error) => {
                // Handle error
            }
        }
    );
}
export const useUpdateSubCategory = (onSuccess,categoryId,subId) => {
    
    const queryClient = useQueryClient()
    return useMutation((data) => updateSubCategory(categoryId,subId,data),{
        onSuccess: () => {
            queryClient.invalidateQueries("category");
            queryClient.invalidateQueries('sub-category')
            onSuccess()
        },
            onError: (error) => {
                // Handle error
            }
        }
    );
}



export const useDeleteSubCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteSubCategory,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("category");
                queryClient.invalidateQueries('sub-category')
            },
            onError: (error) => {
                // Handle error
            }
        }
    );
}