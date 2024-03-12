import * as Yup from 'yup';
export const NewPasswordSchema= Yup.object().shape({
    newpassword:Yup.string()
    .min(8,'Mật khẩu phải có ít nhất 8 ký tự!')
    .max(20,'Mật khẩu phải có tối đa 20 ký tự')
    .required('Trường này là bắt buộc'),
    confirmpassword:Yup.string()
    .min(8,'Mật khẩu phải có ít nhất 8 ký tự!')
    .max(20,'Mật khẩu phải có tối đa 20 ký tự')
    .required('Trường này là bắt buộc'),
    
})