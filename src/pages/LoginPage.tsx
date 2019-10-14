import * as React from "react"
import { withRouter } from "react-router-dom"
import makeStyles from "@material-ui/styles/makeStyles"
import createStyles from "@material-ui/styles/createStyles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { FormHelperText } from "@material-ui/core"
import { ILoginEntity, ILoginPage } from "../types"
import { NotificationComponent, TextFieldForm } from "../components"
import { isValidLogin } from "../api"
import {
	ILoginFormErrors,
	createDefaultLoginFormErrors,
	loginFormValidation,
} from "../pages"

const createEmptyLogin = (): ILoginEntity => ({
	login: "",
	password: "",
})

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useStyles = makeStyles(theme =>
	createStyles({
		card: {
			maxWidth: 400,
			margin: "0 auto",
		},
	})
)

const LoginPageInner = (props: ILoginPage) => {
	const [loginInfo, setLoginInfo] = React.useState<ILoginEntity>(
		createEmptyLogin()
	)
	const [
		loginFormErrors,
		setLoginFormErrors,
	] = React.useState<ILoginFormErrors>(createDefaultLoginFormErrors())

	const [showLoginFailedMsg, setShowLoginFailedMsg] = React.useState(false)

	const classes = useStyles({})

	const onLogin = () => {
		loginFormValidation
			.validateForm(loginInfo)
			.then(formValidationResult => {
				if (formValidationResult.succeeded) {
					if (isValidLogin(loginInfo)) {
						props.history.push("/pageB")
					} else {
						setShowLoginFailedMsg(true)
					}
				} else {
					alert("error, review the fields")
					const updatedLoginFormErrors = {
						...loginFormErrors,
						...formValidationResult.fieldErrors,
					}
					setLoginFormErrors(updatedLoginFormErrors)
				}
			})
	}

	const onUpdateLoginField = (name: any, value: any) => {
		setLoginInfo({
			...loginInfo,
			[name]: value,
		})

		loginFormValidation
			.validateField(loginInfo, name, value)
			.then(fieldValidationResult => {
				setLoginFormErrors({
					...loginFormErrors,
					[name]: fieldValidationResult,
				})
			})
	}

	return (
		<>
			<Card className={classes.card}>
				<CardHeader title="Login" />
				<CardContent>
					<LoginForm
						onLogin={onLogin}
						onUpdateField={onUpdateLoginField}
						loginInfo={loginInfo}
						loginFormErrors={loginFormErrors}
					/>
				</CardContent>
			</Card>
			<NotificationComponent
				message="Invalid login or password, please type again"
				show={showLoginFailedMsg}
				onClose={() => setShowLoginFailedMsg(false)}
			/>
		</>
	)
}

// const LoginPage = withRouter<ILoginPage>(LoginPageInner)
const LoginPage = withRouter(LoginPageInner)

interface ILoginForm {
	onLogin: () => void;
	onUpdateField: (name: string, value: any) => void;
	loginInfo: ILoginEntity;
	loginFormErrors: ILoginFormErrors;
}

// https://material-ui.com/styles/api/#makestyles-styles-options-hook
const useFormStyles = makeStyles(theme =>
	createStyles({
		formContainer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
	})
)

const LoginForm = (props: ILoginForm) => {
	const classes = useFormStyles({})
	const { onLogin, onUpdateField, loginInfo, loginFormErrors } = props

	// TODO: Enhacement move this outside the stateless component discuss
	// why is a good idea
	const onTexFieldChange = (fieldId: any) => (e: any) => {
		onUpdateField(fieldId, e.target.value)
	}

	return (
		<div className={classes.formContainer}>
			<TextFieldForm
				label="Name"
				name="login"
				value={loginInfo.login}
				onChange={onUpdateField}
				error={loginFormErrors.login.errorMessage}
			/>
			<TextFieldForm
				label="Password"
				type="password"
				name="password"
				value={loginInfo.password}
				onChange={onUpdateField}
				error={loginFormErrors.password.errorMessage}
			/>
			<Button variant="contained" color="primary" onClick={onLogin}>
				Login
			</Button>
		</div>
	)
}

export { LoginPage }
