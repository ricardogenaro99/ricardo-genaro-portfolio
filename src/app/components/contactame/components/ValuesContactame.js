import { Enumeracion } from "../../../shared/components";
import { CodeStyleContainer } from "../../../shared/styles/CodeStyle";
import { ContainerOneColumnGapTemplate } from "../../../templates/Templates";

const gapPadding = "25px";
const gapCode = "0 0.5em";
const ValuesContactame = ({ form }) => {
	return (
		<Enumeracion>
			<ContainerOneColumnGapTemplate gap={gapPadding}>
				<section>
					<CodeStyleContainer gap={gapCode}>
						<span className="code-purple">const</span>
						<span className="code-green">btn</span>
						<span className="code-simb">{"="}</span>
						<span className="code-orange code-join">
							document
							<span className="code-simb">.</span>
							querySelector
							<span className="code-simb">(</span>
							<span className="code-cream">'#sendBtn'</span>
							<span className="code-simb">)</span>
						</span>
					</CodeStyleContainer>
				</section>
				<section>
					<CodeStyleContainer gap={gapCode}>
						<span className="code-purple">const</span>
						<span className="code-green">mensaje</span>
						<span className="code-simb">{"="}</span>
						<span className="code-simb">{"{"}</span>
					</CodeStyleContainer>
					{Object.entries(form).map(([key, value], i) => (
						<CodeStyleContainer
							key={i}
							padding={gapPadding}
							gap={gapCode}
						>
							<span className="code-orange">{key}</span>
							<span className="code-simb">{":"}</span>
							<span className="code-cream code-join">
								'{value}',
							</span>
						</CodeStyleContainer>
					))}
					<CodeStyleContainer padding={gapPadding} gap={gapCode}>
						<span className="code-orange">fecha</span>
						<span className="code-simb">{":"}</span>
						<span className="code-cream code-join">
							'{new Date().toDateString()}'
						</span>
					</CodeStyleContainer>
					<CodeStyleContainer gap={gapCode}>
						<span className="code-simb">{"}"}</span>
					</CodeStyleContainer>
				</section>
				<section>
					<CodeStyleContainer gap={gapCode}>
						<span className="code-orange code-join">
							btn
							<span className="code-simb">.</span>
							addEventListener
							<span className="code-simb">(</span>
							<span className="code-cream">'click'</span>
						</span>
						<span className="code-simb">, </span>
						<span className="code-simb">()</span>
						<span className="code-simb">{"=>"}</span>
						<span className="code-simb">{"{"}</span>
					</CodeStyleContainer>
					<CodeStyleContainer padding={gapPadding} gap={gapCode}>
						<span className="code-purple code-join">
							form
							<span className="code-simb">.</span>
							send
							<span className="code-simb">(</span>
							<span className="code-green">mensaje</span>
							<span className="code-simb">)</span>
						</span>
					</CodeStyleContainer>
					<CodeStyleContainer gap={gapCode}>
						<span className="code-simb">{"}"}</span>
					</CodeStyleContainer>
				</section>
			</ContainerOneColumnGapTemplate>
		</Enumeracion>
	);
};

export default ValuesContactame;
