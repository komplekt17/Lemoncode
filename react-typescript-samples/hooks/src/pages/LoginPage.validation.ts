import {
	createFormValidation,
	ValidationConstraints,
	Validators,
} from "lc-form-validation"

const loginFormValidationConstraints: ValidationConstraints = {
	fields: {
		login: [{ validator: Validators.required }],
		password: [{ validator: Validators.required }],
	},
}

const loginFormValidation = createFormValidation(
	loginFormValidationConstraints
)

export { loginFormValidation }
