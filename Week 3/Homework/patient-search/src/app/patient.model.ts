export class Patient {
	firstName: string;
	lastName: string;
	emailAddress: string;
	diagnosis: string;
	doctorName: string;
	profileImage: string;

	constructor(firstName: string, lastName: string, emailAddress: string, diagnosis: string, doctorName: string, profileImage?: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.diagnosis = diagnosis;
		this.doctorName = doctorName;
		this.profileImage = profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
	}
}