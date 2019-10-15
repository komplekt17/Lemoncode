import { History } from "history"

interface IMemberEntity {
	id: number;
	login: string;
	avatar_url: string;
}

interface IMembersPage {
	members: IMemberEntity[];
}

interface IPropsMembersPage {}

interface IMemberRowProps {
	member: IMemberEntity;
}

interface IFormInputProps {
	name: string;
	label: string;
	placeholder?: string;
	value: string;
	onChange: (fieldName: string, value: string) => void;
	error?: string;
}

interface IFormButtonProps {
	label: string;
	className: string;
	onClick: () => void;
}

interface IMemberFormProps {
	member: IMemberEntity;
	onChange: (fieldName: string, value: string) => void;
	onSave: () => void;
}

interface IPageProps {
	member: IMemberEntity;
	onChange: (fieldName: string, value: string) => void;
	onSave: () => void;
}

interface IPageContainerState {
	member: IMemberEntity;
}

interface IPageContainerProps {
	history: History;
}

export {
	IMemberEntity,
	IMembersPage,
	IPropsMembersPage,
	IMemberRowProps,
	IMemberFormProps,
	IPageProps,
	IPageContainerState,
	IPageContainerProps,
	IFormInputProps,
	IFormButtonProps,
}
