import React from "react";

const Manuscript_Style_Information = () => {
	return (
		<div>
			<h2>Manuscript Style Information</h2>
			<ul className="p-2 text-lg">
				<li className="m1">
					The paper size is <b>U.S. letter size.</b>
				</li>
				<li className="m2">
					Use the U.S. letter size predefined by your word processor
					or typesetting software.
				</li>
				<li className="m2">
					Do not manually set the paper size using mm or inch scale.
				</li>
				<li className="m1">
					Only papers prepared in <b>PDF</b> format will be accepted.
				</li>
				<li className="m2">
					The .pdf file format should be free from formatting errors
					(e.g. corrupt equations, missing or low-resolution figures)
					and free from password protection.
				</li>
				<li className="m2">
					Paper Length: <b>6 pages,</b> including figures, tables &
					references.
				</li>
				<li className="m2">
					Paper Formatting: double column, single spaced, #10 point
					Times Roman font.
				</li>
				<li className="m2">
					Margins: Left, Right, and Bottom: 0.75″ (19mm). The top
					margin must be 0.75″ (19 mm), except for the title page
					where it must be 1″ (25 mm).
				</li>
				<li className="m0">
					The abstract should not exceed 250 words.
				</li>
				<li className="m0">
					Figures in image format should be of minimum 400 dpi.
				</li>
				<li className="m0">
					Line art figures in Image format should be of minimum 600
					dpi.
				</li>
				<li className="m0">
					A thorough proofread should be conducted to check the
					standard of English and be ensured that wordings are clear
					and concise.
				</li>
				<li className="m0">
					Ensure that all permissions have been obtained for any
					material within the manuscript, which is not from the
					submitted original work, or from previously published work.
				</li>
				<li className="m0">
					Reference list should be checked for accuracy. References
					can only be linked via Crossref if they are correct and
					complete.
				</li>
				<li className="m0">
					All the references given in the list of references should be
					cited in the body of a text.
				</li>
				<li className="m0">
					The Citation should be given by number, whether sequential
					by order of citation or according to the sequence in an
					alphabetized list (For Example):
				</li>
				<li className="m2">Single citation: [9].</li>
				<li className="m2">
					Multiple citation: [4–6, 9]. The citations should be in
					numerical order.
				</li>
				<li className="m2">
					Sequential citation by order of citation: reference 7 cannot
					be cited before reference 5.
				</li>
				<li className="m0">
					Authors are advised to follow APA style of reference
					citation.
				</li>
				<li className="m1">
					No page numbers, please. We will insert the page numbers for
					you.
				</li>
				<li className="m0">
					<b>
						Note: Violations of any of the above specifications may
						result in rejection of your paper.
					</b>
				</li>
				<li className="m0">
					All submitted papers will be checked for plagiarism through
					the IEEE CrossCheck system. Papers with significant overlap
					with the authors own papers or other papers will be rejected
					without review.
				</li>
				<li className="m0">
					Important things to check before submission:
				</li>
				<li className="m2">
					US letter paper (A4 and others not accepted).
				</li>
				<li className="m2">6-page limit.</li>
			</ul>
		</div>
	);
};

export default Manuscript_Style_Information;
