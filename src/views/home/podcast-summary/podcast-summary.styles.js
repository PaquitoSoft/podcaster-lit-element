import { css } from "lit";

const styles = css`
	.podcast-summary {
		width: 225px;
		min-height: 350px;
	}

	.box {
		border-radius: 3px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
		padding: 10px 10px;
		padding-bottom: 5px;
		text-align: right;
		display: block;
		margin-top: 60px;

		cursor: pointer;
		margin-bottom: 30px;
	}
	.box:hover {
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.52);
	}
	.box-icon {
		border-radius: 50%;
		display: table;
		height: 125px;
		margin: 0 auto;
		width: 125px;
		margin-top: -61px;
	}
	.box-icon span {
		color: #fff;
		display: table-cell;
		text-align: center;
		vertical-align: middle;
	}
	.box-icon img {
		border-radius: 100%;
		width: 100%;
	}
	.box .info p > span {
		display: block;
	}
	.box a, .box a:hover {
		color: #000000;
		text-decoration: none;
	}

	.info h4 {
		font-size: 16px;
		text-transform: uppercase;
	}
	.info > p {
		color: #717171;
		font-size: 16px;
		text-align: justify;
	}
	.info > a {
		background-color: #03a9f4;
		border-radius: 2px;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
		color: #fff;
		transition: all 0.5s ease 0s;
	}
	.info > a:hover {
		background-color: #0288d1;
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
		color: #fff;
		transition: all 0.5s ease 0s;
	}
`;

export default styles;
