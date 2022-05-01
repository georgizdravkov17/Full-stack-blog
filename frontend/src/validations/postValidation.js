import * as yup from 'yup';

 export const postSchema = yup.object({
   title: yup.string().min(10).max(30).required(),
   description: yup.string().min(10).max(1000).required(),
   picture: yup.string(),
   author: yup.string().min(3).max(15).required()

})
