import { FieldValidationResult } from "lc-form-validation"

interface IMemberEntity {
	id: number;
	login: string;
	avatar_url: string;
}

interface IMemberErrors {
	login: FieldValidationResult;
}

interface IPageContainerProps {
	params: { id: string };
}

interface IPageContainerState {
	member: IMemberEntity;
	memberErrors: IMemberErrors;
}

interface IMembersRowProps {
	member: IMemberEntity;
}

interface IMembersPageState {
	members: IMemberEntity[];
}

interface IMembersPageProps {}

interface IMemberPageProps {
	member: IMemberEntity;
	memberErrors: IMemberErrors;
	onChange: (fieldName: string, value: string) => void;
	onSave: () => void;
}

interface IMemberFormProps {
	member: IMemberEntity;
	memberErrors: IMemberErrors;
	onChange: (fieldName: string, value: string) => void;
	onSave: () => void;
}

interface IPropsInput {
	name: string;
	label: string;
	placeholder?: string;
	value: string;
	onChange: (fieldName: string, value: string) => void;
	error?: string;
}

interface IPropsButton {
	label: string;
	className: string;
	onClick: () => void;
}

export {
	IMemberEntity,
	IMemberErrors,
	IPageContainerProps,
	IPageContainerState,
	IMembersRowProps,
	IMembersPageState,
	IMembersPageProps,
	IMemberPageProps,
	IMemberFormProps,
	IPropsInput,
	IPropsButton,
}
