"use strict";
export const UserPermissionListResponse = validate10;
const schema11 = {"type":"object","properties":{"permissions":{"type":"array","items":{"type":"string"}}},"required":["permissions"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/UserPermissionListResponse"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/UserPermissionListResponse" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((data.permissions === undefined) && (missing0 = "permissions")){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.permissions !== undefined){
                    let data0 = data.permissions;
                    const _errs1 = errors;
                    if(errors === _errs1){
                        if(Array.isArray(data0)){
                            var valid1 = true;
                            const len0 = data0.length;
                            for(let i0=0; i0<len0; i0++){
                                const _errs3 = errors;
                                if(typeof data0[i0] !== "string"){
                                    validate10.errors = [{instancePath:instancePath+"/permissions/" + i0,schemaPath:"#/properties/permissions/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                    return false;
                                }
                                var valid1 = _errs3 === errors;
                                if(!valid1){
                                    break;
                                }
                            }
                        }
                        else {
                            validate10.errors = [{instancePath:instancePath+"/permissions",schemaPath:"#/properties/permissions/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                            return false;
                        }
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
