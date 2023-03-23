import "../styles/globals.css";
  
export default function Layout({ children }) {
	return (
		<html>
			<body className="wrapper">
				{children}
			</body>
		</html>
	)
}
