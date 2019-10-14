interface IMemberEntity {
	id: number;
	login: string;
	avatar_url: string;
}

interface IMembersPage {
	members: IMemberEntity[];
}

interface IPropsMembersPage {}

interface IMemberRow {
	member: IMemberEntity;
}

export { IMemberEntity, IMembersPage, IPropsMembersPage, IMemberRow }
