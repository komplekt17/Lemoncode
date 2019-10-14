import { IMemberEntity } from "../types"
import { members } from "./mockData"

const fetchMembers = (): Promise<IMemberEntity[]> => {
	return Promise.resolve(members)
}

const memberAPI = {
	fetchMembers,
}

export { memberAPI }
