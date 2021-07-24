import { css } from "lit-element";

const styles = css`
	.header {
		border-bottom: 1px solid #e5e5e5;
		position: fixed;
		width: 85%;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		background-color: #fff;
		padding-top: 20px;
		z-index: 10;
	}

	.header h3 {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 40px;
	}

	.header a {
		text-decoration: none;
		color: #337ab7;
	}
	.header a:visited {
		color: #337ab7;
	}
	.header a:active {
		color: #23527c;
	}
`;

export default styles;
