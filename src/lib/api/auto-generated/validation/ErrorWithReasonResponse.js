"use strict";
export const ErrorWithReasonResponse = validate10;
const schema11 = {"type":"object","properties":{"reason":{"description":"Error reason.","type":"string"}},"required":["reason"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/ErrorWithReasonResponse"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/ErrorWithReasonResponse" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((data.reason === undefined) && (missing0 = "reason")){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.reason !== undefined){
                    if(typeof data.reason !== "string"){
                        validate10.errors = [{instancePath:instancePath+"/reason",schemaPath:"#/properties/reason/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                        return false;
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
