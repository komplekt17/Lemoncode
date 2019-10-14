import { IMemberEntity } from "../types"
import axios, { AxiosResponse } from "axios"
import { ILoginEntity } from "../types"

const gitHubURL = "https://api.github.com"
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`

const mapMemberListApiToModel = ({
	data,
}: AxiosResponse<any[]>): IMemberEntity[] =>
	data.map(gitHubMember => ({
		id: gitHubMember.id,
		login: gitHubMember.login,
		avatar_url: gitHubMember.avatar_url,
	}))

const getMembersCollection = (): Promise<IMemberEntity[]> => {
	const promise = new Promise<IMemberEntity[]>((resolve, reject) => {
		try {
			axios
				.get<IMemberEntity[]>(gitHubMembersUrl)
				.then(response => resolve(mapMemberListApiToModel(response)))
		} catch (ex) {
			reject(ex)
		}
	})

	return promise
}

// Just a fake loginAPI
const isValidLogin = (loginInfo: ILoginEntity): boolean =>
	loginInfo.login === "admin" && loginInfo.password === "test"

export { getMembersCollection, isValidLogin }
