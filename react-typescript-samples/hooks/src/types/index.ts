import { RouteComponentProps } from "react-router-dom"

interface IColor {
	red: number;
	green: number;
	blue: number;
}

interface IColorBrowser {
	color: IColor;
}

interface IColorPicker {
	color: IColor;
	onColorUpdated: (color: IColor) => void;
}

interface IColorSlider {
	value: number;
	onValueUpdated: (newValue: number) => void;
}

interface IHello {
	userName: string;
}

interface INameEdit {
	initialUserName: string;
	editingName: string;
	onNameUpdated: () => any;
	onEditingNameUpdated: (newEditingName: string) => any;
	disabled: boolean;
}

interface ISideBar {
	isVisible: boolean;
}

interface IMemberEntity {
	id: number;
	login: string;
	avatar_url: string;
}

interface ILoginEntity {
	login: string;
	password: string;
}

interface INotification {
	message: string;
	show: boolean;
	onClose: () => void;
}

interface ILoginPage extends RouteComponentProps {}

interface ITextFieldForm {
	name: string;
	label: string;
	onChange: any;
	value: string;
	error?: string;
	type?: string;
}

interface ISessionContext {
	login: string;
	updateLogin: (value: string) => void;
}

export {
	IColor,
	IHello,
	INameEdit,
	IColorBrowser,
	IColorPicker,
	IColorSlider,
	ISideBar,
	ILoginEntity,
	IMemberEntity,
	INotification,
	ILoginPage,
	ITextFieldForm,
	ISessionContext,
}
