import roadme from "../README.md";
import ReactMarkdown from "react-markdown";

export default function Readme() {
	return (
		<>
			<section className="container">
				<div className="markdown-container">
					<ReactMarkdown escapeHtml={false} source={roadme} />
				</div>
			</section>
		</>
	);
}
