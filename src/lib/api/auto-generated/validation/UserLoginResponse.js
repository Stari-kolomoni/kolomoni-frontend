"use strict";
export const UserLoginResponse = validate10;
const schema11 = {"type":"object","properties":{"access_token":{"description":"JWT access token.\nProvide in subsequent requests in the `Authorization` header as `Bearer your_token_here`.","type":"string"},"refresh_token":{"description":"JWT refresh token.","type":"string"}},"required":["access_token","refresh_token"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/UserLoginResponse"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/UserLoginResponse" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if(((data.access_token === undefined) && (missing0 = "access_token")) || ((data.refresh_token === undefined) && (missing0 = "refresh_token"))){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.access_token !== undefined){
                    const _errs1 = errors;
                    if(typeof data.access_token !== "string"){
                        validate10.errors = [{instancePath:instancePath+"/access_token",schemaPath:"#/properties/access_token/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                        return false;
                    }
                    var valid0 = _errs1 === errors;
                }
                else {
                    var valid0 = true;
                }
                if(valid0){
                    if(data.refresh_token !== undefined){
                        const _errs3 = errors;
                        if(typeof data.refresh_token !== "string"){
                            validate10.errors = [{instancePath:instancePath+"/refresh_token",schemaPath:"#/properties/refresh_token/type",keyword:"type",params:{type: "string"},message:"must be string"}];
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
