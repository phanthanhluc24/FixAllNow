"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var url_1 = require("./apiRequest/url");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var axios_1 = require("axios");
var useGetRepairmansPopular = function () {
    var _a = react_1.useState([]), data = _a[0], setData = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(false), isError = _c[0], setIsError = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    var fetchRepairman = function (pageNumber) { return __awaiter(void 0, void 0, void 0, function () {
        var accessToken, response_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, async_storage_1["default"].getItem('accessToken')];
                case 1:
                    accessToken = _a.sent();
                    return [4 /*yield*/, axios_1["default"].get(url_1.url + "/user/repairmans/" + page, {
                            headers: { Authorization: "Bearer " + accessToken }
                        })];
                case 2:
                    response_1 = _a.sent();
                    // console.log(response);
                    setData(function (prevData) { return (pageNumber === 1 ? response_1.data.data : __spreadArrays(prevData, response_1.data.data)); });
                    setPage(pageNumber + 1);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    setIsError(true);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchRepairman(1);
    }, []);
    return { data: data, isLoading: isLoading, isError: isError, fetchMore: function () { return fetchRepairman(page); } };
    // const {data, isLoading, isError}= useQuery({
    //   queryKey:['getRepairman'],
    //   queryFn: async()=>{
    //     try{
    //       const response= await axios.get(`${url}/user/repairmans`);
    //       return response.data.data;
    //     }catch(error){
    //       throw error;
    //     }
    //   }
    // })
    // return{data, isLoading, isError};
};
exports["default"] = useGetRepairmansPopular;
var styles = react_native_1.StyleSheet.create({});
