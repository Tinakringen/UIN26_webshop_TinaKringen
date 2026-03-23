const people = {
    name: "people",
    title: "Personer",
    type: "document",
    fields: [
        {
            name: "fullname",
            title: "Fullt navn",
            type: "string"
        },
        {
            name: "image", 
            title: "Bilde", 
            type: "image"
        }
    ]
    //document blir et enkeltstående element.
    //Produkt - document
    //Objekter brukes til å lage egne felttyper, som adresse (Post, postnr, gateadresse, osv..)
}

    export default people
