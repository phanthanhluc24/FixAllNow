import * as Yup from 'yup';
export const ForgotPasswordSchema= Yup.object().shape({
    email: Yup.string().email('Không đúng định dạng!').required('Trường này là bắt buộc'),
})