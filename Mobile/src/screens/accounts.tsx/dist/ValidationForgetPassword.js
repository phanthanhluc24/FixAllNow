"use strict";
exports.__esModule = true;
exports.ForgotPasswordSchema = void 0;
var Yup = require("yup");
exports.ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email không đúng định dạng!').required('Email không được để trống')
});
