import { FieldValidationResult } from "lc-form-validation"

interface ILoginFormErrors {
	login: FieldValidationResult;
	password: FieldValidationResult;
}

const createDefaultLoginFormErrors = (): ILoginFormErrors => ({
	login: new FieldValidationResult(),
	password: new FieldValidationResult(),
})

export { ILoginFormErrors, createDefaultLoginFormErrors }
