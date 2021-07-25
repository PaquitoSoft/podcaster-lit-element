import { css } from 'lit';

const styles = css`
	.podcasts-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.filter {
		margin-bottom: 30px;
		text-align: right;
	}
	.filter .badge {
		display: inline-block;
		color: #fff;
		font-size: 25px;
		padding: 3px 7px;
		border-radius: 5px;
		position: relative;
		top: 5px;
		min-width: 40px;
		background-color: #337ab7;
		text-align: center;
	}
	.filter input[name="filter-value"] {
		display: inline-block;
		width: 25%;
		margin-left: 10px;
		border: 1px solid #ccc;
		line-height: 28px;
		border-radius: 5px;
		padding: 7px;
		font-size: 14px;
	}
`;

export default styles;
