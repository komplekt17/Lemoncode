import * as React from "react"
import { IColor } from "../types"
import {
	ColorBrowser,
	ColorPicker,
	HelloComponent,
	MemberTableComponent,
	NameEditComponent,
	SidebarComponent,
} from "../components"

export const App = () => {
	const [name, setName] = React.useState("defaultUserName")
	const [editingName, setEditingName] = React.useState("defaultUserName")
	const [color, setColor] = React.useState<IColor>({
		red: 20,
		green: 40,
		blue: 180,
	})
	const [isVisible, setVisible] = React.useState(true)

	const loadUserName = () => {
		setTimeout(() => {
			setName("name from async call")
			setEditingName("name from async call")
		}, 3000)
	}

	React.useEffect(() => {
		loadUserName()
	}, [])

	const setUsernameState = () => {
		setName(editingName)
	}

	return (
		<>
			<SidebarComponent isVisible={isVisible}>
				<h1>Cool Scfi movies</h1>
				<ul>
					<li>
						<a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
					</li>
					<li>
						<a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
					</li>
					<li>
						<a href="https://www.imdb.com/title/tt0062622/">
							2001: a space odyssey
						</a>
					</li>
				</ul>
			</SidebarComponent>
			<MemberTableComponent />
			<ColorBrowser color={color} />
			<ColorPicker color={color} onColorUpdated={setColor} />
			<HelloComponent userName={name} />
			<NameEditComponent
				initialUserName={name}
				editingName={editingName}
				onNameUpdated={setUsernameState}
				onEditingNameUpdated={setEditingName}
				disabled={editingName === "" || editingName === name}
			/>
			<div style={{ float: "right" }}>
				<button onClick={() => setVisible(!isVisible)}>Toggle Sidebar</button>
			</div>
		</>
	)
}
