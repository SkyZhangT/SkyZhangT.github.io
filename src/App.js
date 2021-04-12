import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ResponsiveDrawer from "./components/drawer";
import "./App.css";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2e1667",
		},
	},
	typography: {
		fontFamily: ["Roboto"],
		h4: {
			fontWeight: 600,
			fontSize: 28,
			lineHeight: "2rem",
		},
		h6: {
			fontWeight: 100,
			lineHeight: "2rem",
		},
	},
});

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ResponsiveDrawer />
			</ThemeProvider>
		</div>
	);
}

export default App;
