"use strict";
export const SearchResponse = validate10;
const schema11 = {"type":"object","properties":{"search_results":{"type":"object","properties":{"english_results":{"type":"array","items":{"type":"object","properties":{"categories":{"description":"A list of categories this word belongs in.","type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.\n\nTODO Will need special Markdown support for linking to other dictionary words\nand possibly autocomplete in the frontend editor.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\nThis includes the last creation or deletion time of the\nsuggestion or translation linked to this word.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"},"suggested_translations":{"description":"Suggested slovene translations of this word.","type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}},"translations":{"description":"Slovene translations of this word.","type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}}},"required":["categories","created_at","id","last_modified_at","lemma","suggested_translations","translations"]}},"slovene_results":{"type":"array","items":{"type":"object","properties":{"categories":{"type":"array","items":{"type":"object","properties":{"created_at":{"description":"Format: date-time","type":"string"},"english_name":{"type":"string"},"id":{"description":"Format: int32","type":"number"},"last_modified_at":{"description":"Format: date-time","type":"string"},"slovene_name":{"type":"string"}},"required":["created_at","english_name","id","last_modified_at","slovene_name"]}},"created_at":{"description":"When the word was created.","type":"string"},"description":{"description":"A short description of the word. Supports Markdown.","type":["null","string"]},"disambiguation":{"description":"If there are multiple similar words, the disambiguation\nhelps distinguish the word from other words at a glance.","type":["null","string"]},"id":{"description":"Internal UUID of the word.","type":"string"},"last_modified_at":{"description":"When the word was last modified.\n\nTODO In the future, this might include last modification time\nof the linked suggestion and translation relationships.","type":"string"},"lemma":{"description":"An abstract or base form of the word.","type":"string"}},"required":["categories","created_at","id","last_modified_at","lemma"]}}},"required":["english_results","slovene_results"]}},"required":["search_results"],"$schema":"http://json-schema.org/draft-07/schema#","$id":"#/schemas/SearchResponse"};

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="#/schemas/SearchResponse" */
    let vErrors = null;
    let errors = 0;
    if(errors === 0){
        if(data && typeof data == "object" && !Array.isArray(data)){
            let missing0;
            if((data.search_results === undefined) && (missing0 = "search_results")){
                validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
                return false;
            }
            else {
                if(data.search_results !== undefined){
                    let data0 = data.search_results;
                    const _errs1 = errors;
                    if(errors === _errs1){
                        if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
                            let missing1;
                            if(((data0.english_results === undefined) && (missing1 = "english_results")) || ((data0.slovene_results === undefined) && (missing1 = "slovene_results"))){
                                validate10.errors = [{instancePath:instancePath+"/search_results",schemaPath:"#/properties/search_results/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
                                return false;
                            }
                            else {
                                if(data0.english_results !== undefined){
                                    let data1 = data0.english_results;
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
                                                        if((((((((data2.categories === undefined) && (missing2 = "categories")) || ((data2.created_at === undefined) && (missing2 = "created_at"))) || ((data2.id === undefined) && (missing2 = "id"))) || ((data2.last_modified_at === undefined) && (missing2 = "last_modified_at"))) || ((data2.lemma === undefined) && (missing2 = "lemma"))) || ((data2.suggested_translations === undefined) && (missing2 = "suggested_translations"))) || ((data2.translations === undefined) && (missing2 = "translations"))){
                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0,schemaPath:"#/properties/search_results/properties/english_results/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];
                                                            return false;
                                                        }
                                                        else {
                                                            if(data2.categories !== undefined){
                                                                let data3 = data2.categories;
                                                                const _errs7 = errors;
                                                                if(errors === _errs7){
                                                                    if(Array.isArray(data3)){
                                                                        var valid4 = true;
                                                                        const len1 = data3.length;
                                                                        for(let i1=0; i1<len1; i1++){
                                                                            let data4 = data3[i1];
                                                                            const _errs9 = errors;
                                                                            if(errors === _errs9){
                                                                                if(data4 && typeof data4 == "object" && !Array.isArray(data4)){
                                                                                    let missing3;
                                                                                    if((((((data4.created_at === undefined) && (missing3 = "created_at")) || ((data4.english_name === undefined) && (missing3 = "english_name"))) || ((data4.id === undefined) && (missing3 = "id"))) || ((data4.last_modified_at === undefined) && (missing3 = "last_modified_at"))) || ((data4.slovene_name === undefined) && (missing3 = "slovene_name"))){
                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1,schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];
                                                                                        return false;
                                                                                    }
                                                                                    else {
                                                                                        if(data4.created_at !== undefined){
                                                                                            const _errs11 = errors;
                                                                                            if(typeof data4.created_at !== "string"){
                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1+"/created_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                return false;
                                                                                            }
                                                                                            var valid5 = _errs11 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid5 = true;
                                                                                        }
                                                                                        if(valid5){
                                                                                            if(data4.english_name !== undefined){
                                                                                                const _errs13 = errors;
                                                                                                if(typeof data4.english_name !== "string"){
                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1+"/english_name",schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                    return false;
                                                                                                }
                                                                                                var valid5 = _errs13 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid5 = true;
                                                                                            }
                                                                                            if(valid5){
                                                                                                if(data4.id !== undefined){
                                                                                                    let data7 = data4.id;
                                                                                                    const _errs15 = errors;
                                                                                                    if(!((typeof data7 == "number") && (isFinite(data7)))){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1+"/id",schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    var valid5 = _errs15 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid5 = true;
                                                                                                }
                                                                                                if(valid5){
                                                                                                    if(data4.last_modified_at !== undefined){
                                                                                                        const _errs17 = errors;
                                                                                                        if(typeof data4.last_modified_at !== "string"){
                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1+"/last_modified_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid5 = _errs17 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid5 = true;
                                                                                                    }
                                                                                                    if(valid5){
                                                                                                        if(data4.slovene_name !== undefined){
                                                                                                            const _errs19 = errors;
                                                                                                            if(typeof data4.slovene_name !== "string"){
                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1+"/slovene_name",schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                            var valid5 = _errs19 === errors;
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
                                                                                else {
                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories/" + i1,schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                    return false;
                                                                                }
                                                                            }
                                                                            var valid4 = _errs9 === errors;
                                                                            if(!valid4){
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                    else {
                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/categories",schemaPath:"#/properties/search_results/properties/english_results/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                        return false;
                                                                    }
                                                                }
                                                                var valid3 = _errs7 === errors;
                                                            }
                                                            else {
                                                                var valid3 = true;
                                                            }
                                                            if(valid3){
                                                                if(data2.created_at !== undefined){
                                                                    const _errs21 = errors;
                                                                    if(typeof data2.created_at !== "string"){
                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/created_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                        return false;
                                                                    }
                                                                    var valid3 = _errs21 === errors;
                                                                }
                                                                else {
                                                                    var valid3 = true;
                                                                }
                                                                if(valid3){
                                                                    if(data2.description !== undefined){
                                                                        let data11 = data2.description;
                                                                        const _errs23 = errors;
                                                                        if((data11 !== null) && (typeof data11 !== "string")){
                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/description",schemaPath:"#/properties/search_results/properties/english_results/items/properties/description/type",keyword:"type",params:{type: schema11.properties.search_results.properties.english_results.items.properties.description.type},message:"must be null,string"}];
                                                                            return false;
                                                                        }
                                                                        var valid3 = _errs23 === errors;
                                                                    }
                                                                    else {
                                                                        var valid3 = true;
                                                                    }
                                                                    if(valid3){
                                                                        if(data2.disambiguation !== undefined){
                                                                            let data12 = data2.disambiguation;
                                                                            const _errs25 = errors;
                                                                            if((data12 !== null) && (typeof data12 !== "string")){
                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/disambiguation",schemaPath:"#/properties/search_results/properties/english_results/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.search_results.properties.english_results.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                return false;
                                                                            }
                                                                            var valid3 = _errs25 === errors;
                                                                        }
                                                                        else {
                                                                            var valid3 = true;
                                                                        }
                                                                        if(valid3){
                                                                            if(data2.id !== undefined){
                                                                                const _errs27 = errors;
                                                                                if(typeof data2.id !== "string"){
                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/id",schemaPath:"#/properties/search_results/properties/english_results/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                    return false;
                                                                                }
                                                                                var valid3 = _errs27 === errors;
                                                                            }
                                                                            else {
                                                                                var valid3 = true;
                                                                            }
                                                                            if(valid3){
                                                                                if(data2.last_modified_at !== undefined){
                                                                                    const _errs29 = errors;
                                                                                    if(typeof data2.last_modified_at !== "string"){
                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/last_modified_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                        return false;
                                                                                    }
                                                                                    var valid3 = _errs29 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid3 = true;
                                                                                }
                                                                                if(valid3){
                                                                                    if(data2.lemma !== undefined){
                                                                                        const _errs31 = errors;
                                                                                        if(typeof data2.lemma !== "string"){
                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/lemma",schemaPath:"#/properties/search_results/properties/english_results/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                            return false;
                                                                                        }
                                                                                        var valid3 = _errs31 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid3 = true;
                                                                                    }
                                                                                    if(valid3){
                                                                                        if(data2.suggested_translations !== undefined){
                                                                                            let data16 = data2.suggested_translations;
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
                                                                                                                if((((((data17.categories === undefined) && (missing4 = "categories")) || ((data17.created_at === undefined) && (missing4 = "created_at"))) || ((data17.id === undefined) && (missing4 = "id"))) || ((data17.last_modified_at === undefined) && (missing4 = "last_modified_at"))) || ((data17.lemma === undefined) && (missing4 = "lemma"))){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2,schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/required",keyword:"required",params:{missingProperty: missing4},message:"must have required property '"+missing4+"'"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                else {
                                                                                                                    if(data17.categories !== undefined){
                                                                                                                        let data18 = data17.categories;
                                                                                                                        const _errs37 = errors;
                                                                                                                        if(errors === _errs37){
                                                                                                                            if(Array.isArray(data18)){
                                                                                                                                var valid8 = true;
                                                                                                                                const len3 = data18.length;
                                                                                                                                for(let i3=0; i3<len3; i3++){
                                                                                                                                    let data19 = data18[i3];
                                                                                                                                    const _errs39 = errors;
                                                                                                                                    if(errors === _errs39){
                                                                                                                                        if(data19 && typeof data19 == "object" && !Array.isArray(data19)){
                                                                                                                                            let missing5;
                                                                                                                                            if((((((data19.created_at === undefined) && (missing5 = "created_at")) || ((data19.english_name === undefined) && (missing5 = "english_name"))) || ((data19.id === undefined) && (missing5 = "id"))) || ((data19.last_modified_at === undefined) && (missing5 = "last_modified_at"))) || ((data19.slovene_name === undefined) && (missing5 = "slovene_name"))){
                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3,schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing5},message:"must have required property '"+missing5+"'"}];
                                                                                                                                                return false;
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                if(data19.created_at !== undefined){
                                                                                                                                                    const _errs41 = errors;
                                                                                                                                                    if(typeof data19.created_at !== "string"){
                                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3+"/created_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                        return false;
                                                                                                                                                    }
                                                                                                                                                    var valid9 = _errs41 === errors;
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    var valid9 = true;
                                                                                                                                                }
                                                                                                                                                if(valid9){
                                                                                                                                                    if(data19.english_name !== undefined){
                                                                                                                                                        const _errs43 = errors;
                                                                                                                                                        if(typeof data19.english_name !== "string"){
                                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3+"/english_name",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                            return false;
                                                                                                                                                        }
                                                                                                                                                        var valid9 = _errs43 === errors;
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        var valid9 = true;
                                                                                                                                                    }
                                                                                                                                                    if(valid9){
                                                                                                                                                        if(data19.id !== undefined){
                                                                                                                                                            let data22 = data19.id;
                                                                                                                                                            const _errs45 = errors;
                                                                                                                                                            if(!((typeof data22 == "number") && (isFinite(data22)))){
                                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3+"/id",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                                                                                return false;
                                                                                                                                                            }
                                                                                                                                                            var valid9 = _errs45 === errors;
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            var valid9 = true;
                                                                                                                                                        }
                                                                                                                                                        if(valid9){
                                                                                                                                                            if(data19.last_modified_at !== undefined){
                                                                                                                                                                const _errs47 = errors;
                                                                                                                                                                if(typeof data19.last_modified_at !== "string"){
                                                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3+"/last_modified_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                                    return false;
                                                                                                                                                                }
                                                                                                                                                                var valid9 = _errs47 === errors;
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                var valid9 = true;
                                                                                                                                                            }
                                                                                                                                                            if(valid9){
                                                                                                                                                                if(data19.slovene_name !== undefined){
                                                                                                                                                                    const _errs49 = errors;
                                                                                                                                                                    if(typeof data19.slovene_name !== "string"){
                                                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3+"/slovene_name",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                                        return false;
                                                                                                                                                                    }
                                                                                                                                                                    var valid9 = _errs49 === errors;
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
                                                                                                                                        else {
                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories/" + i3,schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                                                                            return false;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                    var valid8 = _errs39 === errors;
                                                                                                                                    if(!valid8){
                                                                                                                                        break;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/categories",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                        }
                                                                                                                        var valid7 = _errs37 === errors;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        var valid7 = true;
                                                                                                                    }
                                                                                                                    if(valid7){
                                                                                                                        if(data17.created_at !== undefined){
                                                                                                                            const _errs51 = errors;
                                                                                                                            if(typeof data17.created_at !== "string"){
                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/created_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                return false;
                                                                                                                            }
                                                                                                                            var valid7 = _errs51 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid7 = true;
                                                                                                                        }
                                                                                                                        if(valid7){
                                                                                                                            if(data17.description !== undefined){
                                                                                                                                let data26 = data17.description;
                                                                                                                                const _errs53 = errors;
                                                                                                                                if((data26 !== null) && (typeof data26 !== "string")){
                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/description",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/description/type",keyword:"type",params:{type: schema11.properties.search_results.properties.english_results.items.properties.suggested_translations.items.properties.description.type},message:"must be null,string"}];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid7 = _errs53 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid7 = true;
                                                                                                                            }
                                                                                                                            if(valid7){
                                                                                                                                if(data17.disambiguation !== undefined){
                                                                                                                                    let data27 = data17.disambiguation;
                                                                                                                                    const _errs55 = errors;
                                                                                                                                    if((data27 !== null) && (typeof data27 !== "string")){
                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/disambiguation",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.search_results.properties.english_results.items.properties.suggested_translations.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                                                                        return false;
                                                                                                                                    }
                                                                                                                                    var valid7 = _errs55 === errors;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    var valid7 = true;
                                                                                                                                }
                                                                                                                                if(valid7){
                                                                                                                                    if(data17.id !== undefined){
                                                                                                                                        const _errs57 = errors;
                                                                                                                                        if(typeof data17.id !== "string"){
                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/id",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                            return false;
                                                                                                                                        }
                                                                                                                                        var valid7 = _errs57 === errors;
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        var valid7 = true;
                                                                                                                                    }
                                                                                                                                    if(valid7){
                                                                                                                                        if(data17.last_modified_at !== undefined){
                                                                                                                                            const _errs59 = errors;
                                                                                                                                            if(typeof data17.last_modified_at !== "string"){
                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/last_modified_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                return false;
                                                                                                                                            }
                                                                                                                                            var valid7 = _errs59 === errors;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            var valid7 = true;
                                                                                                                                        }
                                                                                                                                        if(valid7){
                                                                                                                                            if(data17.lemma !== undefined){
                                                                                                                                                const _errs61 = errors;
                                                                                                                                                if(typeof data17.lemma !== "string"){
                                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2+"/lemma",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                    return false;
                                                                                                                                                }
                                                                                                                                                var valid7 = _errs61 === errors;
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
                                                                                                                }
                                                                                                            }
                                                                                                            else {
                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations/" + i2,schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
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
                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/suggested_translations",schemaPath:"#/properties/search_results/properties/english_results/items/properties/suggested_translations/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                                    return false;
                                                                                                }
                                                                                            }
                                                                                            var valid3 = _errs33 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid3 = true;
                                                                                        }
                                                                                        if(valid3){
                                                                                            if(data2.translations !== undefined){
                                                                                                let data31 = data2.translations;
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
                                                                                                                    if((((((data32.categories === undefined) && (missing6 = "categories")) || ((data32.created_at === undefined) && (missing6 = "created_at"))) || ((data32.id === undefined) && (missing6 = "id"))) || ((data32.last_modified_at === undefined) && (missing6 = "last_modified_at"))) || ((data32.lemma === undefined) && (missing6 = "lemma"))){
                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4,schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/required",keyword:"required",params:{missingProperty: missing6},message:"must have required property '"+missing6+"'"}];
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        if(data32.categories !== undefined){
                                                                                                                            let data33 = data32.categories;
                                                                                                                            const _errs67 = errors;
                                                                                                                            if(errors === _errs67){
                                                                                                                                if(Array.isArray(data33)){
                                                                                                                                    var valid12 = true;
                                                                                                                                    const len5 = data33.length;
                                                                                                                                    for(let i5=0; i5<len5; i5++){
                                                                                                                                        let data34 = data33[i5];
                                                                                                                                        const _errs69 = errors;
                                                                                                                                        if(errors === _errs69){
                                                                                                                                            if(data34 && typeof data34 == "object" && !Array.isArray(data34)){
                                                                                                                                                let missing7;
                                                                                                                                                if((((((data34.created_at === undefined) && (missing7 = "created_at")) || ((data34.english_name === undefined) && (missing7 = "english_name"))) || ((data34.id === undefined) && (missing7 = "id"))) || ((data34.last_modified_at === undefined) && (missing7 = "last_modified_at"))) || ((data34.slovene_name === undefined) && (missing7 = "slovene_name"))){
                                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5,schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing7},message:"must have required property '"+missing7+"'"}];
                                                                                                                                                    return false;
                                                                                                                                                }
                                                                                                                                                else {
                                                                                                                                                    if(data34.created_at !== undefined){
                                                                                                                                                        const _errs71 = errors;
                                                                                                                                                        if(typeof data34.created_at !== "string"){
                                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5+"/created_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                            return false;
                                                                                                                                                        }
                                                                                                                                                        var valid13 = _errs71 === errors;
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        var valid13 = true;
                                                                                                                                                    }
                                                                                                                                                    if(valid13){
                                                                                                                                                        if(data34.english_name !== undefined){
                                                                                                                                                            const _errs73 = errors;
                                                                                                                                                            if(typeof data34.english_name !== "string"){
                                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5+"/english_name",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                                return false;
                                                                                                                                                            }
                                                                                                                                                            var valid13 = _errs73 === errors;
                                                                                                                                                        }
                                                                                                                                                        else {
                                                                                                                                                            var valid13 = true;
                                                                                                                                                        }
                                                                                                                                                        if(valid13){
                                                                                                                                                            if(data34.id !== undefined){
                                                                                                                                                                let data37 = data34.id;
                                                                                                                                                                const _errs75 = errors;
                                                                                                                                                                if(!((typeof data37 == "number") && (isFinite(data37)))){
                                                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5+"/id",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                                                                                    return false;
                                                                                                                                                                }
                                                                                                                                                                var valid13 = _errs75 === errors;
                                                                                                                                                            }
                                                                                                                                                            else {
                                                                                                                                                                var valid13 = true;
                                                                                                                                                            }
                                                                                                                                                            if(valid13){
                                                                                                                                                                if(data34.last_modified_at !== undefined){
                                                                                                                                                                    const _errs77 = errors;
                                                                                                                                                                    if(typeof data34.last_modified_at !== "string"){
                                                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5+"/last_modified_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                                        return false;
                                                                                                                                                                    }
                                                                                                                                                                    var valid13 = _errs77 === errors;
                                                                                                                                                                }
                                                                                                                                                                else {
                                                                                                                                                                    var valid13 = true;
                                                                                                                                                                }
                                                                                                                                                                if(valid13){
                                                                                                                                                                    if(data34.slovene_name !== undefined){
                                                                                                                                                                        const _errs79 = errors;
                                                                                                                                                                        if(typeof data34.slovene_name !== "string"){
                                                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5+"/slovene_name",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                                            return false;
                                                                                                                                                                        }
                                                                                                                                                                        var valid13 = _errs79 === errors;
                                                                                                                                                                    }
                                                                                                                                                                    else {
                                                                                                                                                                        var valid13 = true;
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories/" + i5,schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                                                                                return false;
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                        var valid12 = _errs69 === errors;
                                                                                                                                        if(!valid12){
                                                                                                                                            break;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/categories",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                            }
                                                                                                                            var valid11 = _errs67 === errors;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            var valid11 = true;
                                                                                                                        }
                                                                                                                        if(valid11){
                                                                                                                            if(data32.created_at !== undefined){
                                                                                                                                const _errs81 = errors;
                                                                                                                                if(typeof data32.created_at !== "string"){
                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/created_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                                var valid11 = _errs81 === errors;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                var valid11 = true;
                                                                                                                            }
                                                                                                                            if(valid11){
                                                                                                                                if(data32.description !== undefined){
                                                                                                                                    let data41 = data32.description;
                                                                                                                                    const _errs83 = errors;
                                                                                                                                    if((data41 !== null) && (typeof data41 !== "string")){
                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/description",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/description/type",keyword:"type",params:{type: schema11.properties.search_results.properties.english_results.items.properties.translations.items.properties.description.type},message:"must be null,string"}];
                                                                                                                                        return false;
                                                                                                                                    }
                                                                                                                                    var valid11 = _errs83 === errors;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    var valid11 = true;
                                                                                                                                }
                                                                                                                                if(valid11){
                                                                                                                                    if(data32.disambiguation !== undefined){
                                                                                                                                        let data42 = data32.disambiguation;
                                                                                                                                        const _errs85 = errors;
                                                                                                                                        if((data42 !== null) && (typeof data42 !== "string")){
                                                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/disambiguation",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.search_results.properties.english_results.items.properties.translations.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                                                                            return false;
                                                                                                                                        }
                                                                                                                                        var valid11 = _errs85 === errors;
                                                                                                                                    }
                                                                                                                                    else {
                                                                                                                                        var valid11 = true;
                                                                                                                                    }
                                                                                                                                    if(valid11){
                                                                                                                                        if(data32.id !== undefined){
                                                                                                                                            const _errs87 = errors;
                                                                                                                                            if(typeof data32.id !== "string"){
                                                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/id",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                return false;
                                                                                                                                            }
                                                                                                                                            var valid11 = _errs87 === errors;
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            var valid11 = true;
                                                                                                                                        }
                                                                                                                                        if(valid11){
                                                                                                                                            if(data32.last_modified_at !== undefined){
                                                                                                                                                const _errs89 = errors;
                                                                                                                                                if(typeof data32.last_modified_at !== "string"){
                                                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/last_modified_at",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                    return false;
                                                                                                                                                }
                                                                                                                                                var valid11 = _errs89 === errors;
                                                                                                                                            }
                                                                                                                                            else {
                                                                                                                                                var valid11 = true;
                                                                                                                                            }
                                                                                                                                            if(valid11){
                                                                                                                                                if(data32.lemma !== undefined){
                                                                                                                                                    const _errs91 = errors;
                                                                                                                                                    if(typeof data32.lemma !== "string"){
                                                                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4+"/lemma",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                                                        return false;
                                                                                                                                                    }
                                                                                                                                                    var valid11 = _errs91 === errors;
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
                                                                                                                    }
                                                                                                                }
                                                                                                                else {
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations/" + i4,schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
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
                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0+"/translations",schemaPath:"#/properties/search_results/properties/english_results/items/properties/translations/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                }
                                                                                                var valid3 = _errs63 === errors;
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
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        validate10.errors = [{instancePath:instancePath+"/search_results/english_results/" + i0,schemaPath:"#/properties/search_results/properties/english_results/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
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
                                            validate10.errors = [{instancePath:instancePath+"/search_results/english_results",schemaPath:"#/properties/search_results/properties/english_results/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                            return false;
                                        }
                                    }
                                    var valid1 = _errs3 === errors;
                                }
                                else {
                                    var valid1 = true;
                                }
                                if(valid1){
                                    if(data0.slovene_results !== undefined){
                                        let data46 = data0.slovene_results;
                                        const _errs93 = errors;
                                        if(errors === _errs93){
                                            if(Array.isArray(data46)){
                                                var valid14 = true;
                                                const len6 = data46.length;
                                                for(let i6=0; i6<len6; i6++){
                                                    let data47 = data46[i6];
                                                    const _errs95 = errors;
                                                    if(errors === _errs95){
                                                        if(data47 && typeof data47 == "object" && !Array.isArray(data47)){
                                                            let missing8;
                                                            if((((((data47.categories === undefined) && (missing8 = "categories")) || ((data47.created_at === undefined) && (missing8 = "created_at"))) || ((data47.id === undefined) && (missing8 = "id"))) || ((data47.last_modified_at === undefined) && (missing8 = "last_modified_at"))) || ((data47.lemma === undefined) && (missing8 = "lemma"))){
                                                                validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6,schemaPath:"#/properties/search_results/properties/slovene_results/items/required",keyword:"required",params:{missingProperty: missing8},message:"must have required property '"+missing8+"'"}];
                                                                return false;
                                                            }
                                                            else {
                                                                if(data47.categories !== undefined){
                                                                    let data48 = data47.categories;
                                                                    const _errs97 = errors;
                                                                    if(errors === _errs97){
                                                                        if(Array.isArray(data48)){
                                                                            var valid16 = true;
                                                                            const len7 = data48.length;
                                                                            for(let i7=0; i7<len7; i7++){
                                                                                let data49 = data48[i7];
                                                                                const _errs99 = errors;
                                                                                if(errors === _errs99){
                                                                                    if(data49 && typeof data49 == "object" && !Array.isArray(data49)){
                                                                                        let missing9;
                                                                                        if((((((data49.created_at === undefined) && (missing9 = "created_at")) || ((data49.english_name === undefined) && (missing9 = "english_name"))) || ((data49.id === undefined) && (missing9 = "id"))) || ((data49.last_modified_at === undefined) && (missing9 = "last_modified_at"))) || ((data49.slovene_name === undefined) && (missing9 = "slovene_name"))){
                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7,schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/required",keyword:"required",params:{missingProperty: missing9},message:"must have required property '"+missing9+"'"}];
                                                                                            return false;
                                                                                        }
                                                                                        else {
                                                                                            if(data49.created_at !== undefined){
                                                                                                const _errs101 = errors;
                                                                                                if(typeof data49.created_at !== "string"){
                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7+"/created_at",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                    return false;
                                                                                                }
                                                                                                var valid17 = _errs101 === errors;
                                                                                            }
                                                                                            else {
                                                                                                var valid17 = true;
                                                                                            }
                                                                                            if(valid17){
                                                                                                if(data49.english_name !== undefined){
                                                                                                    const _errs103 = errors;
                                                                                                    if(typeof data49.english_name !== "string"){
                                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7+"/english_name",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/properties/english_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                        return false;
                                                                                                    }
                                                                                                    var valid17 = _errs103 === errors;
                                                                                                }
                                                                                                else {
                                                                                                    var valid17 = true;
                                                                                                }
                                                                                                if(valid17){
                                                                                                    if(data49.id !== undefined){
                                                                                                        let data52 = data49.id;
                                                                                                        const _errs105 = errors;
                                                                                                        if(!((typeof data52 == "number") && (isFinite(data52)))){
                                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7+"/id",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];
                                                                                                            return false;
                                                                                                        }
                                                                                                        var valid17 = _errs105 === errors;
                                                                                                    }
                                                                                                    else {
                                                                                                        var valid17 = true;
                                                                                                    }
                                                                                                    if(valid17){
                                                                                                        if(data49.last_modified_at !== undefined){
                                                                                                            const _errs107 = errors;
                                                                                                            if(typeof data49.last_modified_at !== "string"){
                                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7+"/last_modified_at",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                return false;
                                                                                                            }
                                                                                                            var valid17 = _errs107 === errors;
                                                                                                        }
                                                                                                        else {
                                                                                                            var valid17 = true;
                                                                                                        }
                                                                                                        if(valid17){
                                                                                                            if(data49.slovene_name !== undefined){
                                                                                                                const _errs109 = errors;
                                                                                                                if(typeof data49.slovene_name !== "string"){
                                                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7+"/slovene_name",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/properties/slovene_name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                var valid17 = _errs109 === errors;
                                                                                                            }
                                                                                                            else {
                                                                                                                var valid17 = true;
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    else {
                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories/" + i7,schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                                                        return false;
                                                                                    }
                                                                                }
                                                                                var valid16 = _errs99 === errors;
                                                                                if(!valid16){
                                                                                    break;
                                                                                }
                                                                            }
                                                                        }
                                                                        else {
                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/categories",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/categories/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                                            return false;
                                                                        }
                                                                    }
                                                                    var valid15 = _errs97 === errors;
                                                                }
                                                                else {
                                                                    var valid15 = true;
                                                                }
                                                                if(valid15){
                                                                    if(data47.created_at !== undefined){
                                                                        const _errs111 = errors;
                                                                        if(typeof data47.created_at !== "string"){
                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/created_at",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/created_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                            return false;
                                                                        }
                                                                        var valid15 = _errs111 === errors;
                                                                    }
                                                                    else {
                                                                        var valid15 = true;
                                                                    }
                                                                    if(valid15){
                                                                        if(data47.description !== undefined){
                                                                            let data56 = data47.description;
                                                                            const _errs113 = errors;
                                                                            if((data56 !== null) && (typeof data56 !== "string")){
                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/description",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/description/type",keyword:"type",params:{type: schema11.properties.search_results.properties.slovene_results.items.properties.description.type},message:"must be null,string"}];
                                                                                return false;
                                                                            }
                                                                            var valid15 = _errs113 === errors;
                                                                        }
                                                                        else {
                                                                            var valid15 = true;
                                                                        }
                                                                        if(valid15){
                                                                            if(data47.disambiguation !== undefined){
                                                                                let data57 = data47.disambiguation;
                                                                                const _errs115 = errors;
                                                                                if((data57 !== null) && (typeof data57 !== "string")){
                                                                                    validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/disambiguation",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/disambiguation/type",keyword:"type",params:{type: schema11.properties.search_results.properties.slovene_results.items.properties.disambiguation.type},message:"must be null,string"}];
                                                                                    return false;
                                                                                }
                                                                                var valid15 = _errs115 === errors;
                                                                            }
                                                                            else {
                                                                                var valid15 = true;
                                                                            }
                                                                            if(valid15){
                                                                                if(data47.id !== undefined){
                                                                                    const _errs117 = errors;
                                                                                    if(typeof data47.id !== "string"){
                                                                                        validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/id",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                        return false;
                                                                                    }
                                                                                    var valid15 = _errs117 === errors;
                                                                                }
                                                                                else {
                                                                                    var valid15 = true;
                                                                                }
                                                                                if(valid15){
                                                                                    if(data47.last_modified_at !== undefined){
                                                                                        const _errs119 = errors;
                                                                                        if(typeof data47.last_modified_at !== "string"){
                                                                                            validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/last_modified_at",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/last_modified_at/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                            return false;
                                                                                        }
                                                                                        var valid15 = _errs119 === errors;
                                                                                    }
                                                                                    else {
                                                                                        var valid15 = true;
                                                                                    }
                                                                                    if(valid15){
                                                                                        if(data47.lemma !== undefined){
                                                                                            const _errs121 = errors;
                                                                                            if(typeof data47.lemma !== "string"){
                                                                                                validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6+"/lemma",schemaPath:"#/properties/search_results/properties/slovene_results/items/properties/lemma/type",keyword:"type",params:{type: "string"},message:"must be string"}];
                                                                                                return false;
                                                                                            }
                                                                                            var valid15 = _errs121 === errors;
                                                                                        }
                                                                                        else {
                                                                                            var valid15 = true;
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
                                                            validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results/" + i6,schemaPath:"#/properties/search_results/properties/slovene_results/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
                                                            return false;
                                                        }
                                                    }
                                                    var valid14 = _errs95 === errors;
                                                    if(!valid14){
                                                        break;
                                                    }
                                                }
                                            }
                                            else {
                                                validate10.errors = [{instancePath:instancePath+"/search_results/slovene_results",schemaPath:"#/properties/search_results/properties/slovene_results/type",keyword:"type",params:{type: "array"},message:"must be array"}];
                                                return false;
                                            }
                                        }
                                        var valid1 = _errs93 === errors;
                                    }
                                    else {
                                        var valid1 = true;
                                    }
                                }
                            }
                        }
                        else {
                            validate10.errors = [{instancePath:instancePath+"/search_results",schemaPath:"#/properties/search_results/type",keyword:"type",params:{type: "object"},message:"must be object"}];
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
