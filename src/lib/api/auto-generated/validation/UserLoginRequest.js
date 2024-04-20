"use strict";
export const UserLoginRequest = validate10;
const schema11 = {"type":"object","properties":{"password":{"description":"Password.","type":"string"},"username":{"description":"Username to log in as.","type":"string"}},"required":["password","username"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/UserLoginRequest"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/UserLoginRequest" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if(((data.password === undefined) && (missing0 = "password")) || ((data.username === undefined) && (missing0 = "username"))){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.password !== undefined){
                    const _errs1 = errors;
                    if(typeof data.password !== "string"){
                        validate10.errors = [{instancePath:instancePath+"/password",schemaPath:"#/properties/password/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                        return false;
                    }
                    var valid0 = _errs1 === errors;
                }
                else {
                    var valid0 = true;
                }
                if(valid0){
                    if(data.username !== undefined){
                        const _errs3 = errors;
                        if(typeof data.username !== "string"){
                            validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                            return false;
                        }
                        var valid0 = _errs3 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                }
            }
        }
        else {
            validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
            return false;
        }
    }
    validate10.errors = vErrors;
    return errors === 0;
}
