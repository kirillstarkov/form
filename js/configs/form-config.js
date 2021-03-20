import { isNotEmpty, maxLength, isNumber } from "./../library/validator.js";

export const formGroupConfig = {
    "firstname": [isNotEmpty, maxLength(16)],
    "lastname": [isNotEmpty, maxLength(20)],
    "age": [isNotEmpty, isNumber]
};