import { IMemberEntity } from "../types"
import { members } from "./mockData"

const baseURL = "https://api.github.com/orgs/lemoncode"
let mockMembers = members

const fetchMembers = (): Promise<IMemberEntity[]> => {
	return Promise.resolve(mockMembers)
}

const fetchMembersAsync = (): Promise<IMemberEntity[]> => {
	const membersURL = `${baseURL}/members`

	return fetch(membersURL)
		.then(response => response.json())
		.then(mapToMembers)
}

const mapToMembers = (githubMembers: any[]): IMemberEntity[] => {
	return githubMembers.map(mapToMember)
}

const mapToMember = (githubMember): IMemberEntity => {
	return {
		id: githubMember.id,
		login: githubMember.login,
		avatar_url: githubMember.avatar_url,
	}
}

const saveMember = (member: IMemberEntity): Promise<boolean> => {
	const index = mockMembers.findIndex(m => m.id === member.id)

	index >= 0 ? updateMember(member, index) : insertMember(member)

	return Promise.resolve(true)
}

const updateMember = (member: IMemberEntity, index: number) => {
	mockMembers = [
		...mockMembers.slice(0, index),
		member,
		...mockMembers.slice(index + 1),
	]
}

const insertMember = (member: IMemberEntity) => {
	member.id = mockMembers.length

	mockMembers = [...mockMembers, member]
}

const fetchMemberById = (id: number): Promise<IMemberEntity> => {
	const index: number = mockMembers.findIndex(m => m.id === id)
	const member: IMemberEntity =
		index >= 0
			? mockMembers[index]
			: {
					id: -1,
					login: "",
					avatar_url: "",
			  }

	return Promise.resolve(member)
}

export const memberAPI = {
	fetchMembers,
	fetchMembersAsync,
	saveMember,
	fetchMemberById,
}
