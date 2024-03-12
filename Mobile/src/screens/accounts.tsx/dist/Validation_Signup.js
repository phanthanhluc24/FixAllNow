"use strict";
exports.__esModule = true;
exports.Signup_Schema = void 0;
var Yup = require("yup");
exports.Signup_Schema = Yup.object().shape({
    role: Yup.string()
        .oneOf(['repairman', 'repairman finder'], 'Vui lòng chọn công việc')
        .defined(),
    job: Yup.string().required('Vui lòng chọn công việc!'),
    full_name: Yup.string()
        .min(5, 'Tên phải có ít nhất 5 ký tự!')
        .max(30, 'Tên phải có tối đa 30 ký tự!')
        .required('Họ tên không để trống'),
    email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    number_phone: Yup.string()
        .min(10, 'Điện thoại phải có ít nhất 10 ký tự!')
        .max(10, 'Điện thoại phải có tối đa 10 ký tự!')
        .required('Số điện thoại không để trống'),
    password: Yup.string()
        .min(8, 'Mật khẩu cần dài ít nhất 8 ký tự!')
        .max(20, 'Mật khẩu phải có tối đa 20 ký tự!')
        .required('Mật khẩu không để rỗng'),
    address: Yup.string()
        .min(10, 'Địa chỉ phải có ít nhất 10 ký tự!')
        .max(100, 'Địa chỉ phải có tối đa 100 ký tự!')
        .required('Địa chỉ không để trỗng')
});
