import * as Yup from 'yup';
export const SignupSchema= Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    password:Yup.string()
    .min(8,'Mật khẩu phải có ít nhất 8 ký tự!')
    .max(20,'Mật khẩu phải có tối đa 20 ký tự')
    .required('Mật khẩu không được để trống'),
})
