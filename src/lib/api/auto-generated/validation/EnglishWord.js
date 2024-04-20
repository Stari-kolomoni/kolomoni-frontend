"use strict";
export const EnglishWord = validate10;
const schema11 = {"type":"object","properties":{"categories":{"description":"A list of categories this word belongs in.","type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.\n\nTODO Will need special Markdown support for linking to other dictionary words\nand possibly autocomplete in the frontend editor.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\nThis includes the last creation or deletion time of the\nsuggestion or translation linked to this word.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"},"suggested_translations":{"description":"Suggested slovene translations of this word.","type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}},"translations":{"description":"Slovene translations of this word.","type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}}},"required":["categories","created_at","id","last_modified_at","lemma","suggested_translations","translations"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/EnglishWord"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/EnglishWord" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((((((((data.categories === undefined) && (missing0 = "categories")) || ((data.created_at === undefined) && (missing0 = "created_at"))) || ((data.id === undefined) && (missing0 = "id"))) || ((data.last_modified_at === undefined) && (missing0 = "last_modified_at"))) || ((data.lemma === undefined) && (missing0 = "lemma"))) || ((data.suggested_translations === undefined) && (missing0 = "suggested_translations"))) || ((data.translations === undefined) && (missing0 = "translations"))){
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
                                        if(valid0){
                                            if(data.suggested_translations !== undefined){
                                                let data13 = data.suggested_translations;
                                                const _errs27 = errors;
                                                if(errors === _errs27){
                                                    if(Array.isArray(data13)){
                                                        var valid3 = true;
                                                        const len1 = data13.length;
                                                        for(let i1=0; i1<len1; i1++){
                                                            let data14 = data13[i1];
                                                            const _errs29 = errors;
                                                            if(errors === _errs29){
                                                                if(data14 && typeof data14 == "object" && !Array.isArray(data14)){
                                                                    let missing2;
                                                                    if((((((data14.categories === undefined) && (missing2 = "categories")) || ((data14.created_at === undefined) && (missing2 = "created_at"))) || ((data14.id === undefined) && (missing2 = "id"))) || ((data14.last_modified_at === undefined) && (missing2 = "last_modified_at"))) || ((data14.lemma === undefined) && (missing2 = "lemma"))){
                                                                        validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1,schemaPath:"#/properties/suggested_translations/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];
                                                                        return false;
                                                                    }
                                                                    else {
                                                                        if(data14.categories !== undefined){
                                                                            let data15 = data14.categories;
                                                                            const _errs31 = errors;
                                                                            if(errors === _errs31){
                                                                                if(Array.isArray(data15)){
                                                                                    var valid5 = true;
                                                                                    const len2 = data15.length;
                                                                                    for(let i2=0; i2<len2; i2++){
                                                                                        let data16 = data15[i2];
                                                                                        const _errs33 = errors;
                                                                                        if(errors === _errs33){
                                                                                            if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
                                                                                                let missing3;
                                                                                                if((((((data16.created_at === undefined) && (missing3 = "created_at")) || ((data16.english_name === undefined) && (missing3 = "english_name"))) || ((data16.id === undefined) && (missing3 = "id"))) || ((data16.last_modified_at === undefined) && (missing3 = "last_modified_at"))) || ((data16.slovene_name === undefined) && (missing3 = "slovene_name"))){
                                                                                                    validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2,schemaPath:"#/properties/suggested_translations/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];
                                                                                                    return false;
                                                                                                }
                                                                                                else {
                                                                                                    if(data16.created_at !== undefined){
                                                                                                        const _errs35 = errors;
                                                                                                        if(typeof data16.created_at !== "string"){
                                                                                                            validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2+"/created_at",schemaPath:"#/properties/suggested_translations/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid6 = _errs35 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid6 = true;
                                                                                                    }
                                                                                                    if(valid6){
                                                                                                        if(data16.english_name !== undefined){
                                                                                                            const _errs37 = errors;
                                                                                                            if(typeof data16.english_name !== "string"){
                                                                                                                validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2+"/english_name",schemaPath:"#/properties/suggested_translations/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                            var valid6 = _errs37 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid6 = true;
                                                                                                        }
                                                                                                        if(valid6){
                                                                                                            if(data16.id !== undefined){
                                                                                                                let data19 = data16.id;
                                                                                                                const _errs39 = errors;
                                                                                                                if(!((typeof data19 == "number") && (isFinite(data19)))){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2+"/id",schemaPath:"#/properties/suggested_translations/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                var valid6 = _errs39 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid6 = true;
                                                                                                            }
                                                                                                            if(valid6){
                                                                                                                if(data16.last_modified_at !== undefined){
                                                                                                                    const _errs41 = errors;
                                                                                                                    if(typeof data16.last_modified_at !== "string"){
                                                                                                                        validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2+"/last_modified_at",schemaPath:"#/properties/suggested_translations/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                    var valid6 = _errs41 === errors;
                                                                                                                }
                                                                                                                else {
                                                                                                                    var valid6 = true;
                                                                                                                }
                                                                                                                if(valid6){
                                                                                                                    if(data16.slovene_name !== undefined){
                                                                                                                        const _errs43 = errors;
                                                                                                                        if(typeof data16.slovene_name !== "string"){
                                                                                                                            validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2+"/slovene_name",schemaPath:"#/properties/suggested_translations/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                            return false;
                                                                                                                        }
                                                                                                                        var valid6 = _errs43 === errors;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        var valid6 = true;
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            else {
                                                                                                validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories/" + i2,schemaPath:"#/properties/suggested_translations/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                                return false;
                                                                                            }
                                                                                        }
                                                                                        var valid5 = _errs33 === errors;
                                                                                        if(!valid5){
                                                                                            break;
                                                                                        }
                                                                                    }
                                                                                }
                                                                                else {
                                                                                    validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/categories",schemaPath:"#/properties/suggested_translations/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                    return false;
                                                                                }
                                                                            }
                                                                            var valid4 = _errs31 === errors;
                                                                        }
                                                                        else {
                                                                            var valid4 = true;
                                                                        }
                                                                        if(valid4){
                                                                            if(data14.created_at !== undefined){
                                                                                const _errs45 = errors;
                                                                                if(typeof data14.created_at !== "string"){
                                                                                    validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/created_at",schemaPath:"#/properties/suggested_translations/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                    return false;
                                                                                }
                                                                                var valid4 = _errs45 === errors;
                                                                            }
                                                                            else {
                                                                                var valid4 = true;
                                                                            }
                                                                            if(valid4){
                                                                                if(data14.description !== undefined){
                                                                                    let data23 = data14.description;
                                                                                    const _errs47 = errors;
                                                                                    if((data23 !== null) && (typeof data23 !== "string")){
                                                                                        validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/description",schemaPath:"#/properties/suggested_translations/items/properties/description/type",keyword:"type",params:{type: schema11.properties.suggested_translations.items.properties.description.type},message:"must be null,string"}];
                                                                                        return false;
                                                                                    }
                                                                                    var valid4 = _errs47 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid4 = true;
                                                                                }
                                                                                if(valid4){
                                                                                    if(data14.disambiguation !== undefined){
                                                                                        let data24 = data14.disambiguation;
                                                                                        const _errs49 = errors;
                                                                                        if((data24 !== null) && (typeof data24 !== "string")){
                                                                                            validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/disambiguation",schemaPath:"#/properties/suggested_translations/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.suggested_translations.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                            return false;
                                                                                        }
                                                                                        var valid4 = _errs49 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid4 = true;
                                                                                    }
                                                                                    if(valid4){
                                                                                        if(data14.id !== undefined){
                                                                                            const _errs51 = errors;
                                                                                            if(typeof data14.id !== "string"){
                                                                                                validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/id",schemaPath:"#/properties/suggested_translations/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                return false;
                                                                                            }
                                                                                            var valid4 = _errs51 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid4 = true;
                                                                                        }
                                                                                        if(valid4){
                                                                                            if(data14.last_modified_at !== undefined){
                                                                                                const _errs53 = errors;
                                                                                                if(typeof data14.last_modified_at !== "string"){
                                                                                                    validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/last_modified_at",schemaPath:"#/properties/suggested_translations/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                    return false;
                                                                                                }
                                                                                                var valid4 = _errs53 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid4 = true;
                                                                                            }
                                                                                            if(valid4){
                                                                                                if(data14.lemma !== undefined){
                                                                                                    const _errs55 = errors;
                                                                                                    if(typeof data14.lemma !== "string"){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1+"/lemma",schemaPath:"#/properties/suggested_translations/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    var valid4 = _errs55 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid4 = true;
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
                                                                    validate10.errors = [{instancePath:instancePath+"/suggested_translations/" + i1,schemaPath:"#/properties/suggested_translations/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                    return false;
                                                                }
                                                            }
                                                            var valid3 = _errs29 === errors;
                                                            if(!valid3){
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        validate10.errors = [{instancePath:instancePath+"/suggested_translations",schemaPath:"#/properties/suggested_translations/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                        return false;
                                                    }
                                                }
                                                var valid0 = _errs27 === errors;
                                            }
                                            else {
                                                var valid0 = true;
                                            }
                                            if(valid0){
                                                if(data.translations !== undefined){
                                                    let data28 = data.translations;
                                                    const _errs57 = errors;
                                                    if(errors === _errs57){
                                                        if(Array.isArray(data28)){
                                                            var valid7 = true;
                                                            const len3 = data28.length;
                                                            for(let i3=0; i3<len3; i3++){
                                                                let data29 = data28[i3];
                                                                const _errs59 = errors;
                                                                if(errors === _errs59){
                                                                    if(data29 && typeof data29 == "object" && !Array.isArray(data29)){
                                                                        let missing4;
                                                                        if((((((data29.categories === undefined) && (missing4 = "categories")) || ((data29.created_at === undefined) && (missing4 = "created_at"))) || ((data29.id === undefined) && (missing4 = "id"))) || ((data29.last_modified_at === undefined) && (missing4 = "last_modified_at"))) || ((data29.lemma === undefined) && (missing4 = "lemma"))){
                                                                            validate10.errors = [{instancePath:instancePath+"/translations/" + i3,schemaPath:"#/properties/translations/items/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"}];
                                                                            return false;
                                                                        }
                                                                        else {
                                                                            if(data29.categories !== undefined){
                                                                                let data30 = data29.categories;
                                                                                const _errs61 = errors;
                                                                                if(errors === _errs61){
                                                                                    if(Array.isArray(data30)){
                                                                                        var valid9 = true;
                                                                                        const len4 = data30.length;
                                                                                        for(let i4=0; i4<len4; i4++){
                                                                                            let data31 = data30[i4];
                                                                                            const _errs63 = errors;
                                                                                            if(errors === _errs63){
                                                                                                if(data31 && typeof data31 == "object" && !Array.isArray(data31)){
                                                                                                    let missing5;
                                                                                                    if((((((data31.created_at === undefined) && (missing5 = "created_at")) || ((data31.english_name === undefined) && (missing5 = "english_name"))) || ((data31.id === undefined) && (missing5 = "id"))) || ((data31.last_modified_at === undefined) && (missing5 = "last_modified_at"))) || ((data31.slovene_name === undefined) && (missing5 = "slovene_name"))){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4,schemaPath:"#/properties/translations/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing5},message:"must have required property '"+missing5+"'"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    else {
                                                                                                        if(data31.created_at !== undefined){
                                                                                                            const _errs65 = errors;
                                                                                                            if(typeof data31.created_at !== "string"){
                                                                                                                validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4+"/created_at",schemaPath:"#/properties/translations/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                            var valid10 = _errs65 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid10 = true;
                                                                                                        }
                                                                                                        if(valid10){
                                                                                                            if(data31.english_name !== undefined){
                                                                                                                const _errs67 = errors;
                                                                                                                if(typeof data31.english_name !== "string"){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4+"/english_name",schemaPath:"#/properties/translations/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                var valid10 = _errs67 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid10 = true;
                                                                                                            }
                                                                                                            if(valid10){
                                                                                                                if(data31.id !== undefined){
                                                                                                                    let data34 = data31.id;
                                                                                                                    const _errs69 = errors;
                                                                                                                    if(!((typeof data34 == "number") && (isFinite(data34)))){
                                                                                                                        validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4+"/id",schemaPath:"#/properties/translations/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                    var valid10 = _errs69 === errors;
                                                                                                                }
                                                                                                                else {
                                                                                                                    var valid10 = true;
                                                                                                                }
                                                                                                                if(valid10){
                                                                                                                    if(data31.last_modified_at !== undefined){
                                                                                                                        const _errs71 = errors;
                                                                                                                        if(typeof data31.last_modified_at !== "string"){
                                                                                                                            validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4+"/last_modified_at",schemaPath:"#/properties/translations/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                            return false;
                                                                                                                        }
                                                                                                                        var valid10 = _errs71 === errors;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        var valid10 = true;
                                                                                                                    }
                                                                                                                    if(valid10){
                                                                                                                        if(data31.slovene_name !== undefined){
                                                                                                                            const _errs73 = errors;
                                                                                                                            if(typeof data31.slovene_name !== "string"){
                                                                                                                                validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4+"/slovene_name",schemaPath:"#/properties/translations/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                            var valid10 = _errs73 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid10 = true;
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories/" + i4,schemaPath:"#/properties/translations/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                                    return false;
                                                                                                }
                                                                                            }
                                                                                            var valid9 = _errs63 === errors;
                                                                                            if(!valid9){
                                                                                                break;
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/categories",schemaPath:"#/properties/translations/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                        return false;
                                                                                    }
                                                                                }
                                                                                var valid8 = _errs61 === errors;
                                                                            }
                                                                            else {
                                                                                var valid8 = true;
                                                                            }
                                                                            if(valid8){
                                                                                if(data29.created_at !== undefined){
                                                                                    const _errs75 = errors;
                                                                                    if(typeof data29.created_at !== "string"){
                                                                                        validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/created_at",schemaPath:"#/properties/translations/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                        return false;
                                                                                    }
                                                                                    var valid8 = _errs75 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid8 = true;
                                                                                }
                                                                                if(valid8){
                                                                                    if(data29.description !== undefined){
                                                                                        let data38 = data29.description;
                                                                                        const _errs77 = errors;
                                                                                        if((data38 !== null) && (typeof data38 !== "string")){
                                                                                            validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/description",schemaPath:"#/properties/translations/items/properties/description/type",keyword:"type",params:{type: schema11.properties.translations.items.properties.description.type},message:"must be null,string"}];
                                                                                            return false;
                                                                                        }
                                                                                        var valid8 = _errs77 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid8 = true;
                                                                                    }
                                                                                    if(valid8){
                                                                                        if(data29.disambiguation !== undefined){
                                                                                            let data39 = data29.disambiguation;
                                                                                            const _errs79 = errors;
                                                                                            if((data39 !== null) && (typeof data39 !== "string")){
                                                                                                validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/disambiguation",schemaPath:"#/properties/translations/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.translations.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                                return false;
                                                                                            }
                                                                                            var valid8 = _errs79 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid8 = true;
                                                                                        }
                                                                                        if(valid8){
                                                                                            if(data29.id !== undefined){
                                                                                                const _errs81 = errors;
                                                                                                if(typeof data29.id !== "string"){
                                                                                                    validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/id",schemaPath:"#/properties/translations/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                    return false;
                                                                                                }
                                                                                                var valid8 = _errs81 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid8 = true;
                                                                                            }
                                                                                            if(valid8){
                                                                                                if(data29.last_modified_at !== undefined){
                                                                                                    const _errs83 = errors;
                                                                                                    if(typeof data29.last_modified_at !== "string"){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/last_modified_at",schemaPath:"#/properties/translations/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    var valid8 = _errs83 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid8 = true;
                                                                                                }
                                                                                                if(valid8){
                                                                                                    if(data29.lemma !== undefined){
                                                                                                        const _errs85 = errors;
                                                                                                        if(typeof data29.lemma !== "string"){
                                                                                                            validate10.errors = [{instancePath:instancePath+"/translations/" + i3+"/lemma",schemaPath:"#/properties/translations/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid8 = _errs85 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid8 = true;
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
                                                                        validate10.errors = [{instancePath:instancePath+"/translations/" + i3,schemaPath:"#/properties/translations/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                        return false;
                                                                    }
                                                                }
                                                                var valid7 = _errs59 === errors;
                                                                if(!valid7){
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            validate10.errors = [{instancePath:instancePath+"/translations",schemaPath:"#/properties/translations/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                            return false;
                                                        }
                                                    }
                                                    var valid0 = _errs57 === errors;
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
