class Contact {

    firstName;
    lastName
    age;
    phoneNumber;
    birthDate;
    static country = "Nigeria";
    static count = 0;
    
    constructor(firstName, lastName, phoneNumber, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.birthDate = birthDate;
        this.age = birthDate + 12;
        Contact.count++
    }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }

    get getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get getAge() {
        return this.age;
    }

    get getPhoneNumber() {
        return this.phoneNumber;
    }

    get getBirthDate() {
        return this.birthDate;
    }

    set setName(newName) {
        const [firstName, lastName] = newName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    set setBirthDate(birthDate) {
        this.birthDate = birthDate;
        this.age = birthDate + 15;
    }

    static get getCountry() {
        return (`These are your contacts in ${Contact.country}`);
    }

    static get getCount() {
        return (`You have ${Contact.count} contacts`);
    }

    contactDetails() {
        return (`Name: ${this.firstName} ${this.lastName}\n`
                + `Phone Number: ${this.phoneNumber}\n`
                + `Date of Birth: ${this.birthDate}\n`
                + `Age: ${this.age}\n`);
    }

}

//Using the Constructor to create new contacts
ada = new Contact("Adaobi", "Chuks", "08022222222", "07-03-2000");
john = new Contact("John", "Davis", "08044444444", "14-06-2002");
jane = new Contact("Jane", "Seth", "08066666666", "21-09-2004");
chris = new Contact("Chris", "Bryan", "08088888888", "28-12-2006");

const contactList = [ada, john, jane, chris];

//Accessing the Static methods
console.log(Contact.getCountry + "\n");
console.log(Contact.getCount + "\nThey include: \n");

//Accessing the Class method
for (let i = 0; i < contactList.length; i++) {
    console.log(contactList[i].contactDetails());
}

//Accessing two of the setters
ada.setPhoneNumber = "09011111111";
ada.setBirthDate = "17-08-2000";

//Acessing one of the getter
console.log(`${ada.getName} contact details is now:`);

console.log(ada.contactDetails());

//Accessing the last setter
console.log(`${jane.getName} has changed her name to ${jane.setName = "Mady Ray"}`);

const arya = new Contact("Arya", "Star", "08055555555", "01-01-2001");
contactList.push(arya);

//Acessing the remaining getter and a static property
console.log("\nYou just got a new Contact in " + Contact.country + ".\nHer name is " 
            + arya.getName + ", she was born on " + arya.getBirthDate + ", she is " 
            + arya.getAge + " years old and her Phone Number is " + arya.getPhoneNumber + ".");

//Accessing the last static property
console.log(`\nYou now have ${Contact.count} contacts in total`);
