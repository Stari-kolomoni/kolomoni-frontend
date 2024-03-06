"use strict";
export const SearchRequest = validate10;
const schema11 = {"type":"object","properties":{"search_query":{"description":"Search query.","type":"string"}},"required":["search_query"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/SearchRequest"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/SearchRequest" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((data.search_query === undefined) && (missing0 = "search_query")){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.search_query !== undefined){
                    if(typeof data.search_query !== "string"){
                        validate10.errors = [{instancePath:instancePath+"/search_query",schemaPath:"#/properties/search_query/type",keyword:"type",params:{type: "string"},message:"must be string"}];
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
