"use strict";
export const EnglishWordResponse = validate10;
const schema11 = {"type":"object","properties":{"word":{"type":"object","properties":{"categories":{"description":"A list of categories this word belongs in.","type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.\n\nTODO Will need special Markdown support for linking to other dictionary words\nand possibly autocomplete in the frontend editor.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\nThis includes the last creation or deletion time of the\nsuggestion or translation linked to this word.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"},"suggested_translations":{"description":"Suggested slovene translations of this word.","type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}},"translations":{"description":"Slovene translations of this word.","type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}}},"required":["categories","created_at","id","last_modified_at","lemma","suggested_translations","translations"]}},"required":["word"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/EnglishWordResponse"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/EnglishWordResponse" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((data.word === undefined) && (missing0 = "word")){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.word !== undefined){
                    let data0 = data.word;
                    const _errs1 = errors;
                    if(errors === _errs1){
                        if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
                            let missing1;
                            if((((((((data0.categories === undefined) && (missing1 = "categories")) || ((data0.created_at === undefined) && (missing1 = "created_at"))) || ((data0.id === undefined) && (missing1 = "id"))) || ((data0.last_modified_at === undefined) && (missing1 = "last_modified_at"))) || ((data0.lemma === undefined) && (missing1 = "lemma"))) || ((data0.suggested_translations === undefined) && (missing1 = "suggested_translations"))) || ((data0.translations === undefined) && (missing1 = "translations"))){
                                validate10.errors = [{instancePath:instancePath+"/word",schemaPath:"#/properties/word/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
                                return false;
                            }
                            else {
                                if(data0.categories !== undefined){
                                    let data1 = data0.categories;
                                    const _errs3 = errors;
                                    if(errors === _errs3){
                                        if(Array.isArray(data1)){
                                            var valid2 = true;
                                            const len0 = data1.length;
                                            for(let i0=0; i0<len0; i0++){
                                                let data2 = data1[i0];
                                                const _errs5 = errors;
                                                if(errors === _errs5){
                                                    if(data2 && typeof data2 == "object" && !Array.isArray(data2)){
                                                        let missing2;
                                                        if((((((data2.created_at === undefined) && (missing2 = "created_at")) || ((data2.english_name === undefined) && (missing2 = "english_name"))) || ((data2.id === undefined) && (missing2 = "id"))) || ((data2.last_modified_at === undefined) && (missing2 = "last_modified_at"))) || ((data2.slovene_name === undefined) && (missing2 = "slovene_name"))){
                                                            validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0,schemaPath:"#/properties/word/properties/categories/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];
                                                            return false;
                                                        }
                                                        else {
                                                            if(data2.created_at !== undefined){
                                                                const _errs7 = errors;
                                                                if(typeof data2.created_at !== "string"){
                                                                    validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0+"/created_at",schemaPath:"#/properties/word/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                    return false;
                                                                }
                                                                var valid3 = _errs7 === errors;
                                                            }
                                                            else {
                                                                var valid3 = true;
                                                            }
                                                            if(valid3){
                                                                if(data2.english_name !== undefined){
                                                                    const _errs9 = errors;
                                                                    if(typeof data2.english_name !== "string"){
                                                                        validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0+"/english_name",schemaPath:"#/properties/word/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                        return false;
                                                                    }
                                                                    var valid3 = _errs9 === errors;
                                                                }
                                                                else {
                                                                    var valid3 = true;
                                                                }
                                                                if(valid3){
                                                                    if(data2.id !== undefined){
                                                                        let data5 = data2.id;
                                                                        const _errs11 = errors;
                                                                        if(!((typeof data5 == "number") && (isFinite(data5)))){
                                                                            validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0+"/id",schemaPath:"#/properties/word/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                            return false;
                                                                        }
                                                                        var valid3 = _errs11 === errors;
                                                                    }
                                                                    else {
                                                                        var valid3 = true;
                                                                    }
                                                                    if(valid3){
                                                                        if(data2.last_modified_at !== undefined){
                                                                            const _errs13 = errors;
                                                                            if(typeof data2.last_modified_at !== "string"){
                                                                                validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0+"/last_modified_at",schemaPath:"#/properties/word/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                return false;
                                                                            }
                                                                            var valid3 = _errs13 === errors;
                                                                        }
                                                                        else {
                                                                            var valid3 = true;
                                                                        }
                                                                        if(valid3){
                                                                            if(data2.slovene_name !== undefined){
                                                                                const _errs15 = errors;
                                                                                if(typeof data2.slovene_name !== "string"){
                                                                                    validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0+"/slovene_name",schemaPath:"#/properties/word/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                    return false;
                                                                                }
                                                                                var valid3 = _errs15 === errors;
                                                                            }
                                                                            else {
                                                                                var valid3 = true;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        validate10.errors = [{instancePath:instancePath+"/word/categories/" + i0,schemaPath:"#/properties/word/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                        return false;
                                                    }
                                                }
                                                var valid2 = _errs5 === errors;
                                                if(!valid2){
                                                    break;
                                                }
                                            }
                                        }
                                        else {
                                            validate10.errors = [{instancePath:instancePath+"/word/categories",schemaPath:"#/properties/word/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                            return false;
                                        }
                                    }
                                    var valid1 = _errs3 === errors;
                                }
                                else {
                                    var valid1 = true;
                                }
                                if(valid1){
                                    if(data0.created_at !== undefined){
                                        const _errs17 = errors;
                                        if(typeof data0.created_at !== "string"){
                                            validate10.errors = [{instancePath:instancePath+"/word/created_at",schemaPath:"#/properties/word/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                            return false;
                                        }
                                        var valid1 = _errs17 === errors;
                                    }
                                    else {
                                        var valid1 = true;
                                    }
                                    if(valid1){
                                        if(data0.description !== undefined){
                                            let data9 = data0.description;
                                            const _errs19 = errors;
                                            if((data9 !== null) && (typeof data9 !== "string")){
                                                validate10.errors = [{instancePath:instancePath+"/word/description",schemaPath:"#/properties/word/properties/description/type",keyword:"type",params:{type: schema11.properties.word.properties.description.type},message:"must be null,string"}];
                                                return false;
                                            }
                                            var valid1 = _errs19 === errors;
                                        }
                                        else {
                                            var valid1 = true;
                                        }
                                        if(valid1){
                                            if(data0.disambiguation !== undefined){
                                                let data10 = data0.disambiguation;
                                                const _errs21 = errors;
                                                if((data10 !== null) && (typeof data10 !== "string")){
                                                    validate10.errors = [{instancePath:instancePath+"/word/disambiguation",schemaPath:"#/properties/word/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.word.properties.disambiguation.type},message:"must be null,string"}];
                                                    return false;
                                                }
                                                var valid1 = _errs21 === errors;
                                            }
                                            else {
                                                var valid1 = true;
                                            }
                                            if(valid1){
                                                if(data0.id !== undefined){
                                                    const _errs23 = errors;
                                                    if(typeof data0.id !== "string"){
                                                        validate10.errors = [{instancePath:instancePath+"/word/id",schemaPath:"#/properties/word/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                        return false;
                                                    }
                                                    var valid1 = _errs23 === errors;
                                                }
                                                else {
                                                    var valid1 = true;
                                                }
                                                if(valid1){
                                                    if(data0.last_modified_at !== undefined){
                                                        const _errs25 = errors;
                                                        if(typeof data0.last_modified_at !== "string"){
                                                            validate10.errors = [{instancePath:instancePath+"/word/last_modified_at",schemaPath:"#/properties/word/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                            return false;
                                                        }
                                                        var valid1 = _errs25 === errors;
                                                    }
                                                    else {
                                                        var valid1 = true;
                                                    }
                                                    if(valid1){
                                                        if(data0.lemma !== undefined){
                                                            const _errs27 = errors;
                                                            if(typeof data0.lemma !== "string"){
                                                                validate10.errors = [{instancePath:instancePath+"/word/lemma",schemaPath:"#/properties/word/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                return false;
                                                            }
                                                            var valid1 = _errs27 === errors;
                                                        }
                                                        else {
                                                            var valid1 = true;
                                                        }
                                                        if(valid1){
                                                            if(data0.suggested_translations !== undefined){
                                                                let data14 = data0.suggested_translations;
                                                                const _errs29 = errors;
                                                                if(errors === _errs29){
                                                                    if(Array.isArray(data14)){
                                                                        var valid4 = true;
                                                                        const len1 = data14.length;
                                                                        for(let i1=0; i1<len1; i1++){
                                                                            let data15 = data14[i1];
                                                                            const _errs31 = errors;
                                                                            if(errors === _errs31){
                                                                                if(data15 && typeof data15 == "object" && !Array.isArray(data15)){
                                                                                    let missing3;
                                                                                    if((((((data15.categories === undefined) && (missing3 = "categories")) || ((data15.created_at === undefined) && (missing3 = "created_at"))) || ((data15.id === undefined) && (missing3 = "id"))) || ((data15.last_modified_at === undefined) && (missing3 = "last_modified_at"))) || ((data15.lemma === undefined) && (missing3 = "lemma"))){
                                                                                        validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1,schemaPath:"#/properties/word/properties/suggested_translations/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];
                                                                                        return false;
                                                                                    }
                                                                                    else {
                                                                                        if(data15.categories !== undefined){
                                                                                            let data16 = data15.categories;
                                                                                            const _errs33 = errors;
                                                                                            if(errors === _errs33){
                                                                                                if(Array.isArray(data16)){
                                                                                                    var valid6 = true;
                                                                                                    const len2 = data16.length;
                                                                                                    for(let i2=0; i2<len2; i2++){
                                                                                                        let data17 = data16[i2];
                                                                                                        const _errs35 = errors;
                                                                                                        if(errors === _errs35){
                                                                                                            if(data17 && typeof data17 == "object" && !Array.isArray(data17)){
                                                                                                                let missing4;
                                                                                                                if((((((data17.created_at === undefined) && (missing4 = "created_at")) || ((data17.english_name === undefined) && (missing4 = "english_name"))) || ((data17.id === undefined) && (missing4 = "id"))) || ((data17.last_modified_at === undefined) && (missing4 = "last_modified_at"))) || ((data17.slovene_name === undefined) && (missing4 = "slovene_name"))){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2,schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                else {
                                                                                                                    if(data17.created_at !== undefined){
                                                                                                                        const _errs37 = errors;
                                                                                                                        if(typeof data17.created_at !== "string"){
                                                                                                                            validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2+"/created_at",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                            return false;
                                                                                                                        }
                                                                                                                        var valid7 = _errs37 === errors;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        var valid7 = true;
                                                                                                                    }
                                                                                                                    if(valid7){
                                                                                                                        if(data17.english_name !== undefined){
                                                                                                                            const _errs39 = errors;
                                                                                                                            if(typeof data17.english_name !== "string"){
                                                                                                                                validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2+"/english_name",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                            var valid7 = _errs39 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid7 = true;
                                                                                                                        }
                                                                                                                        if(valid7){
                                                                                                                            if(data17.id !== undefined){
                                                                                                                                let data20 = data17.id;
                                                                                                                                const _errs41 = errors;
                                                                                                                                if(!((typeof data20 == "number") && (isFinite(data20)))){
                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2+"/id",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid7 = _errs41 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid7 = true;
                                                                                                                            }
                                                                                                                            if(valid7){
                                                                                                                                if(data17.last_modified_at !== undefined){
                                                                                                                                    const _errs43 = errors;
                                                                                                                                    if(typeof data17.last_modified_at !== "string"){
                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2+"/last_modified_at",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                        return false;
                                                                                                                                    }
                                                                                                                                    var valid7 = _errs43 === errors;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    var valid7 = true;
                                                                                                                                }
                                                                                                                                if(valid7){
                                                                                                                                    if(data17.slovene_name !== undefined){
                                                                                                                                        const _errs45 = errors;
                                                                                                                                        if(typeof data17.slovene_name !== "string"){
                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2+"/slovene_name",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                            return false;
                                                                                                                                        }
                                                                                                                                        var valid7 = _errs45 === errors;
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        var valid7 = true;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                            else {
                                                                                                                validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories/" + i2,schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                        }
                                                                                                        var valid6 = _errs35 === errors;
                                                                                                        if(!valid6){
                                                                                                            break;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                                else {
                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/categories",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                                    return false;
                                                                                                }
                                                                                            }
                                                                                            var valid5 = _errs33 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid5 = true;
                                                                                        }
                                                                                        if(valid5){
                                                                                            if(data15.created_at !== undefined){
                                                                                                const _errs47 = errors;
                                                                                                if(typeof data15.created_at !== "string"){
                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/created_at",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                    return false;
                                                                                                }
                                                                                                var valid5 = _errs47 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid5 = true;
                                                                                            }
                                                                                            if(valid5){
                                                                                                if(data15.description !== undefined){
                                                                                                    let data24 = data15.description;
                                                                                                    const _errs49 = errors;
                                                                                                    if((data24 !== null) && (typeof data24 !== "string")){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/description",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/description/type",keyword:"type",params:{type: schema11.properties.word.properties.suggested_translations.items.properties.description.type},message:"must be null,string"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    var valid5 = _errs49 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid5 = true;
                                                                                                }
                                                                                                if(valid5){
                                                                                                    if(data15.disambiguation !== undefined){
                                                                                                        let data25 = data15.disambiguation;
                                                                                                        const _errs51 = errors;
                                                                                                        if((data25 !== null) && (typeof data25 !== "string")){
                                                                                                            validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/disambiguation",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.word.properties.suggested_translations.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid5 = _errs51 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid5 = true;
                                                                                                    }
                                                                                                    if(valid5){
                                                                                                        if(data15.id !== undefined){
                                                                                                            const _errs53 = errors;
                                                                                                            if(typeof data15.id !== "string"){
                                                                                                                validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/id",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                            var valid5 = _errs53 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid5 = true;
                                                                                                        }
                                                                                                        if(valid5){
                                                                                                            if(data15.last_modified_at !== undefined){
                                                                                                                const _errs55 = errors;
                                                                                                                if(typeof data15.last_modified_at !== "string"){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/last_modified_at",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                var valid5 = _errs55 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid5 = true;
                                                                                                            }
                                                                                                            if(valid5){
                                                                                                                if(data15.lemma !== undefined){
                                                                                                                    const _errs57 = errors;
                                                                                                                    if(typeof data15.lemma !== "string"){
                                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1+"/lemma",schemaPath:"#/properties/word/properties/suggested_translations/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                    var valid5 = _errs57 === errors;
                                                                                                                }
                                                                                                                else {
                                                                                                                    var valid5 = true;
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
                                                                                    validate10.errors = [{instancePath:instancePath+"/word/suggested_translations/" + i1,schemaPath:"#/properties/word/properties/suggested_translations/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                    return false;
                                                                                }
                                                                            }
                                                                            var valid4 = _errs31 === errors;
                                                                            if(!valid4){
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    else {
                                                                        validate10.errors = [{instancePath:instancePath+"/word/suggested_translations",schemaPath:"#/properties/word/properties/suggested_translations/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                        return false;
                                                                    }
                                                                }
                                                                var valid1 = _errs29 === errors;
                                                            }
                                                            else {
                                                                var valid1 = true;
                                                            }
                                                            if(valid1){
                                                                if(data0.translations !== undefined){
                                                                    let data29 = data0.translations;
                                                                    const _errs59 = errors;
                                                                    if(errors === _errs59){
                                                                        if(Array.isArray(data29)){
                                                                            var valid8 = true;
                                                                            const len3 = data29.length;
                                                                            for(let i3=0; i3<len3; i3++){
                                                                                let data30 = data29[i3];
                                                                                const _errs61 = errors;
                                                                                if(errors === _errs61){
                                                                                    if(data30 && typeof data30 == "object" && !Array.isArray(data30)){
                                                                                        let missing5;
                                                                                        if((((((data30.categories === undefined) && (missing5 = "categories")) || ((data30.created_at === undefined) && (missing5 = "created_at"))) || ((data30.id === undefined) && (missing5 = "id"))) || ((data30.last_modified_at === undefined) && (missing5 = "last_modified_at"))) || ((data30.lemma === undefined) && (missing5 = "lemma"))){
                                                                                            validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3,schemaPath:"#/properties/word/properties/translations/items/required",keyword:"required",params:{missingProperty: missing5},message:"must have required property '"+missing5+"'"}];
                                                                                            return false;
                                                                                        }
                                                                                        else {
                                                                                            if(data30.categories !== undefined){
                                                                                                let data31 = data30.categories;
                                                                                                const _errs63 = errors;
                                                                                                if(errors === _errs63){
                                                                                                    if(Array.isArray(data31)){
                                                                                                        var valid10 = true;
                                                                                                        const len4 = data31.length;
                                                                                                        for(let i4=0; i4<len4; i4++){
                                                                                                            let data32 = data31[i4];
                                                                                                            const _errs65 = errors;
                                                                                                            if(errors === _errs65){
                                                                                                                if(data32 && typeof data32 == "object" && !Array.isArray(data32)){
                                                                                                                    let missing6;
                                                                                                                    if((((((data32.created_at === undefined) && (missing6 = "created_at")) || ((data32.english_name === undefined) && (missing6 = "english_name"))) || ((data32.id === undefined) && (missing6 = "id"))) || ((data32.last_modified_at === undefined) && (missing6 = "last_modified_at"))) || ((data32.slovene_name === undefined) && (missing6 = "slovene_name"))){
                                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4,schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing6},message:"must have required property '"+missing6+"'"}];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        if(data32.created_at !== undefined){
                                                                                                                            const _errs67 = errors;
                                                                                                                            if(typeof data32.created_at !== "string"){
                                                                                                                                validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4+"/created_at",schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                            var valid11 = _errs67 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid11 = true;
                                                                                                                        }
                                                                                                                        if(valid11){
                                                                                                                            if(data32.english_name !== undefined){
                                                                                                                                const _errs69 = errors;
                                                                                                                                if(typeof data32.english_name !== "string"){
                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4+"/english_name",schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid11 = _errs69 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid11 = true;
                                                                                                                            }
                                                                                                                            if(valid11){
                                                                                                                                if(data32.id !== undefined){
                                                                                                                                    let data35 = data32.id;
                                                                                                                                    const _errs71 = errors;
                                                                                                                                    if(!((typeof data35 == "number") && (isFinite(data35)))){
                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4+"/id",schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                                                        return false;
                                                                                                                                    }
                                                                                                                                    var valid11 = _errs71 === errors;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    var valid11 = true;
                                                                                                                                }
                                                                                                                                if(valid11){
                                                                                                                                    if(data32.last_modified_at !== undefined){
                                                                                                                                        const _errs73 = errors;
                                                                                                                                        if(typeof data32.last_modified_at !== "string"){
                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4+"/last_modified_at",schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                            return false;
                                                                                                                                        }
                                                                                                                                        var valid11 = _errs73 === errors;
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        var valid11 = true;
                                                                                                                                    }
                                                                                                                                    if(valid11){
                                                                                                                                        if(data32.slovene_name !== undefined){
                                                                                                                                            const _errs75 = errors;
                                                                                                                                            if(typeof data32.slovene_name !== "string"){
                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4+"/slovene_name",schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                return false;
                                                                                                                                            }
                                                                                                                                            var valid11 = _errs75 === errors;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            var valid11 = true;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories/" + i4,schemaPath:"#/properties/word/properties/translations/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                            }
                                                                                                            var valid10 = _errs65 === errors;
                                                                                                            if(!valid10){
                                                                                                                break;
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                    else {
                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/categories",schemaPath:"#/properties/word/properties/translations/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                }
                                                                                                var valid9 = _errs63 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid9 = true;
                                                                                            }
                                                                                            if(valid9){
                                                                                                if(data30.created_at !== undefined){
                                                                                                    const _errs77 = errors;
                                                                                                    if(typeof data30.created_at !== "string"){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/created_at",schemaPath:"#/properties/word/properties/translations/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    var valid9 = _errs77 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid9 = true;
                                                                                                }
                                                                                                if(valid9){
                                                                                                    if(data30.description !== undefined){
                                                                                                        let data39 = data30.description;
                                                                                                        const _errs79 = errors;
                                                                                                        if((data39 !== null) && (typeof data39 !== "string")){
                                                                                                            validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/description",schemaPath:"#/properties/word/properties/translations/items/properties/description/type",keyword:"type",params:{type: schema11.properties.word.properties.translations.items.properties.description.type},message:"must be null,string"}];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid9 = _errs79 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid9 = true;
                                                                                                    }
                                                                                                    if(valid9){
                                                                                                        if(data30.disambiguation !== undefined){
                                                                                                            let data40 = data30.disambiguation;
                                                                                                            const _errs81 = errors;
                                                                                                            if((data40 !== null) && (typeof data40 !== "string")){
                                                                                                                validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/disambiguation",schemaPath:"#/properties/word/properties/translations/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.word.properties.translations.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                            var valid9 = _errs81 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid9 = true;
                                                                                                        }
                                                                                                        if(valid9){
                                                                                                            if(data30.id !== undefined){
                                                                                                                const _errs83 = errors;
                                                                                                                if(typeof data30.id !== "string"){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/id",schemaPath:"#/properties/word/properties/translations/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                var valid9 = _errs83 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid9 = true;
                                                                                                            }
                                                                                                            if(valid9){
                                                                                                                if(data30.last_modified_at !== undefined){
                                                                                                                    const _errs85 = errors;
                                                                                                                    if(typeof data30.last_modified_at !== "string"){
                                                                                                                        validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/last_modified_at",schemaPath:"#/properties/word/properties/translations/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                    var valid9 = _errs85 === errors;
                                                                                                                }
                                                                                                                else {
                                                                                                                    var valid9 = true;
                                                                                                                }
                                                                                                                if(valid9){
                                                                                                                    if(data30.lemma !== undefined){
                                                                                                                        const _errs87 = errors;
                                                                                                                        if(typeof data30.lemma !== "string"){
                                                                                                                            validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3+"/lemma",schemaPath:"#/properties/word/properties/translations/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                            return false;
                                                                                                                        }
                                                                                                                        var valid9 = _errs87 === errors;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        var valid9 = true;
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
                                                                                        validate10.errors = [{instancePath:instancePath+"/word/translations/" + i3,schemaPath:"#/properties/word/properties/translations/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                        return false;
                                                                                    }
                                                                                }
                                                                                var valid8 = _errs61 === errors;
                                                                                if(!valid8){
                                                                                    break;
                                                                                }
                                                                            }
                                                                        }
                                                                        else {
                                                                            validate10.errors = [{instancePath:instancePath+"/word/translations",schemaPath:"#/properties/word/properties/translations/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                            return false;
                                                                        }
                                                                    }
                                                                    var valid1 = _errs59 === errors;
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
                                }
                            }
                        }
                        else {
                            validate10.errors = [{instancePath:instancePath+"/word",schemaPath:"#/properties/word/type",keyword:"type",params:{type: "object"},message:"must be object"}];
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
