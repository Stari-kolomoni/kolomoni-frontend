"use strict";
export const SloveneWord = validate10;
const schema11 = {"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/SloveneWord"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/SloveneWord" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((((((data.categories === undefined) && (missing0 = "categories")) || ((data.created_at === undefined) && (missing0 = "created_at"))) || ((data.id === undefined) && (missing0 = "id"))) || ((data.last_modified_at === undefined) && (missing0 = "last_modified_at"))) || ((data.lemma === undefined) && (missing0 = "lemma"))){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.categories !== undefined){
                    let data0 = data.categories;
                    const _errs1 = errors;
                    if(errors === _errs1){
                        if(Array.isArray(data0)){
                            var valid1 = true;
                            const len0 = data0.length;
                            for(let i0=0; i0<len0; i0++){
                                let data1 = data0[i0];
                                const _errs3 = errors;
                                if(errors === _errs3){
                                    if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
                                        let missing1;
                                        if((((((data1.created_at === undefined) && (missing1 = "created_at")) || ((data1.english_name === undefined) && (missing1 = "english_name"))) || ((data1.id === undefined) && (missing1 = "id"))) || ((data1.last_modified_at === undefined) && (missing1 = "last_modified_at"))) || ((data1.slovene_name === undefined) && (missing1 = "slovene_name"))){
                                            validate10.errors = [{instancePath:instancePath+"/categories/" + i0,schemaPath:"#/properties/categories/items/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
                                            return false;
                                        }
                                        else {
                                            if(data1.created_at !== undefined){
                                                const _errs5 = errors;
                                                if(typeof data1.created_at !== "string"){
                                                    validate10.errors = [{instancePath:instancePath+"/categories/" + i0+"/created_at",schemaPath:"#/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                    return false;
                                                }
                                                var valid2 = _errs5 === errors;
                                            }
                                            else {
                                                var valid2 = true;
                                            }
                                            if(valid2){
                                                if(data1.english_name !== undefined){
                                                    const _errs7 = errors;
                                                    if(typeof data1.english_name !== "string"){
                                                        validate10.errors = [{instancePath:instancePath+"/categories/" + i0+"/english_name",schemaPath:"#/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                        return false;
                                                    }
                                                    var valid2 = _errs7 === errors;
                                                }
                                                else {
                                                    var valid2 = true;
                                                }
                                                if(valid2){
                                                    if(data1.id !== undefined){
                                                        let data4 = data1.id;
                                                        const _errs9 = errors;
                                                        if(!((typeof data4 == "number") && (isFinite(data4)))){
                                                            validate10.errors = [{instancePath:instancePath+"/categories/" + i0+"/id",schemaPath:"#/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                            return false;
                                                        }
                                                        var valid2 = _errs9 === errors;
                                                    }
                                                    else {
                                                        var valid2 = true;
                                                    }
                                                    if(valid2){
                                                        if(data1.last_modified_at !== undefined){
                                                            const _errs11 = errors;
                                                            if(typeof data1.last_modified_at !== "string"){
                                                                validate10.errors = [{instancePath:instancePath+"/categories/" + i0+"/last_modified_at",schemaPath:"#/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                return false;
                                                            }
                                                            var valid2 = _errs11 === errors;
                                                        }
                                                        else {
                                                            var valid2 = true;
                                                        }
                                                        if(valid2){
                                                            if(data1.slovene_name !== undefined){
                                                                const _errs13 = errors;
                                                                if(typeof data1.slovene_name !== "string"){
                                                                    validate10.errors = [{instancePath:instancePath+"/categories/" + i0+"/slovene_name",schemaPath:"#/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                    return false;
                                                                }
                                                                var valid2 = _errs13 === errors;
                                                            }
                                                            else {
                                                                var valid2 = true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        validate10.errors = [{instancePath:instancePath+"/categories/" + i0,schemaPath:"#/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                        return false;
                                    }
                                }
                                var valid1 = _errs3 === errors;
                                if(!valid1){
                                    break;
                                }
                            }
                        }
                        else {
                            validate10.errors = [{instancePath:instancePath+"/categories",schemaPath:"#/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                            return false;
                        }
                    }
                    var valid0 = _errs1 === errors;
                }
                else {
                    var valid0 = true;
                }
                if(valid0){
                    if(data.created_at !== undefined){
                        const _errs15 = errors;
                        if(typeof data.created_at !== "string"){
                            validate10.errors = [{instancePath:instancePath+"/created_at",schemaPath:"#/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                            return false;
                        }
                        var valid0 = _errs15 === errors;
                    }
                    else {
                        var valid0 = true;
                    }
                    if(valid0){
                        if(data.description !== undefined){
                            let data8 = data.description;
                            const _errs17 = errors;
                            if((data8 !== null) && (typeof data8 !== "string")){
                                validate10.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: schema11.properties.description.type},message:"must be null,string"}];
                                return false;
                            }
                            var valid0 = _errs17 === errors;
                        }
                        else {
                            var valid0 = true;
                        }
                        if(valid0){
                            if(data.disambiguation !== undefined){
                                let data9 = data.disambiguation;
                                const _errs19 = errors;
                                if((data9 !== null) && (typeof data9 !== "string")){
                                    validate10.errors = [{instancePath:instancePath+"/disambiguation",schemaPath:"#/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.disambiguation.type},message:"must be null,string"}];
                                    return false;
                                }
                                var valid0 = _errs19 === errors;
                            }
                            else {
                                var valid0 = true;
                            }
                            if(valid0){
                                if(data.id !== undefined){
                                    const _errs21 = errors;
                                    if(typeof data.id !== "string"){
                                        validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                        return false;
                                    }
                                    var valid0 = _errs21 === errors;
                                }
                                else {
                                    var valid0 = true;
                                }
                                if(valid0){
                                    if(data.last_modified_at !== undefined){
                                        const _errs23 = errors;
                                        if(typeof data.last_modified_at !== "string"){
                                            validate10.errors = [{instancePath:instancePath+"/last_modified_at",schemaPath:"#/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                            return false;
                                        }
                                        var valid0 = _errs23 === errors;
                                    }
                                    else {
                                        var valid0 = true;
                                    }
                                    if(valid0){
                                        if(data.lemma !== undefined){
                                            const _errs25 = errors;
                                            if(typeof data.lemma !== "string"){
                                                validate10.errors = [{instancePath:instancePath+"/lemma",schemaPath:"#/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                return false;
                                            }
                                            var valid0 = _errs25 === errors;
                                        }
                                        else {
                                            var valid0 = true;
                                        }
                                    }
                                }
                            }
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
