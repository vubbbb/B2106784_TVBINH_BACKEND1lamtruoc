const { ObjectId } = require('mongodb');

class contactService{
    constructor(client) {
        this.Contact = client.db().collection("contacts");
    }

    // dinh nghia cac phuong thuc truy xuat CSDL su dung mongodb API
    extractContactData(payload){
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        };
        // remove undefined fields
        Object.keys(contact).forEach(
            (key) => contact[key] === undefined && delete contact[key]
        );
        return contact;
    }

    async create(payload){
        const contact = this.extractContactData(payload);
        const result = await this.Contact.findOneAndUpdate(
            contact,
            { $set: { favorite: contact.favorite === true}},
            { returnDocument: "after", upsert: true}
        );
        return result.value;
    }

}