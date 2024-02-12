"use strict";
export const UserInformationResponse = validate10;
const schema11 = {"type":"object","properties":{"user":{"type":"object","properties":{"display_name":{"description":"Unique display name.","type":"string"},"id":{"description":"Internal user ID.","type":"number"},"joined_at":{"description":"Registration date and time.","type":"string"},"last_active_at":{"description":"Last activity date and time.","type":"string"},"last_modified_at":{"description":"Last modification date and time.","type":"string"},"username":{"description":"Unique username for login.","type":"string"}},"required":["display_name","id","joined_at","last_active_at","last_modified_at","username"]}},"required":["user"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/UserInformationResponse"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/UserInformationResponse" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((data.user === undefined) && (missing0 = "user")){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.user !== undefined){
                    let data0 = data.user;
                    const _errs1 = errors;
                    if(errors === _errs1){
                        if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
                            let missing1;
                            if(((((((data0.display_name === undefined) && (missing1 = "display_name")) || ((data0.id === undefined) && (missing1 = "id"))) || ((data0.joined_at === undefined) && (missing1 = "joined_at"))) || ((data0.last_active_at === undefined) && (missing1 = "last_active_at"))) || ((data0.last_modified_at === undefined) && (missing1 = "last_modified_at"))) || ((data0.username === undefined) && (missing1 = "username"))){
                                validate10.errors = [{instancePath:instancePath+"/user",schemaPath:"#/properties/user/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
                                return false;
                            }
                            else {
                                if(data0.display_name !== undefined){
                                    const _errs3 = errors;
                                    if(typeof data0.display_name !== "string"){
                                        validate10.errors = [{instancePath:instancePath+"/user/display_name",schemaPath:"#/properties/user/properties/display_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                        return false;
                                    }
                                    var valid1 = _errs3 === errors;
                                }
                                else {
                                    var valid1 = true;
                                }
                                if(valid1){
                                    if(data0.id !== undefined){
                                        let data2 = data0.id;
                                        const _errs5 = errors;
                                        if(!((typeof data2 == "number") && (isFinite(data2)))){
                                            validate10.errors = [{instancePath:instancePath+"/user/id",schemaPath:"#/properties/user/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                            return false;
                                        }
                                        var valid1 = _errs5 === errors;
                                    }
                                    else {
                                        var valid1 = true;
                                    }
                                    if(valid1){
                                        if(data0.joined_at !== undefined){
                                            const _errs7 = errors;
                                            if(typeof data0.joined_at !== "string"){
                                                validate10.errors = [{instancePath:instancePath+"/user/joined_at",schemaPath:"#/properties/user/properties/joined_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                return false;
                                            }
                                            var valid1 = _errs7 === errors;
                                        }
                                        else {
                                            var valid1 = true;
                                        }
                                        if(valid1){
                                            if(data0.last_active_at !== undefined){
                                                const _errs9 = errors;
                                                if(typeof data0.last_active_at !== "string"){
                                                    validate10.errors = [{instancePath:instancePath+"/user/last_active_at",schemaPath:"#/properties/user/properties/last_active_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                    return false;
                                                }
                                                var valid1 = _errs9 === errors;
                                            }
                                            else {
                                                var valid1 = true;
                                            }
                                            if(valid1){
                                                if(data0.last_modified_at !== undefined){
                                                    const _errs11 = errors;
                                                    if(typeof data0.last_modified_at !== "string"){
                                                        validate10.errors = [{instancePath:instancePath+"/user/last_modified_at",schemaPath:"#/properties/user/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                        return false;
                                                    }
                                                    var valid1 = _errs11 === errors;
                                                }
                                                else {
                                                    var valid1 = true;
                                                }
                                                if(valid1){
                                                    if(data0.username !== undefined){
                                                        const _errs13 = errors;
                                                        if(typeof data0.username !== "string"){
                                                            validate10.errors = [{instancePath:instancePath+"/user/username",schemaPath:"#/properties/user/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                            return false;
                                                        }
                                                        var valid1 = _errs13 === errors;
                                                    }
                                                    else {
                                                        var valid1 = true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            validate10.errors = [{instancePath:instancePath+"/user",schemaPath:"#/properties/user/type",keyword:"type",params:{type: "object"},message:"must be object"}];
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
