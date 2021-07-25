import { html, LitElement, css } from "lit";

import './views/shared/header/header';
import './views/home/home-view';

const mainStyles = css`
	.main-content {
		position: relative;
		top: 100px;
		width: 83%;
		margin-left: auto;
		margin-right: auto
	}
`;

export class App extends LitElement {
	static styles = [mainStyles];

	render() {
		return html`
			<div>
				<podcaster-header></podcaster-header>
				<main class="main-content">
					<podcaster-home-view></podcaster-home-view>
				</main>
			</div>
		`;
	}
};

window.customElements.define('podcaster-app', App);

// const $main = html`<podcaster-app></podcaster-app>`;

// render($main, document.getElementById('root'));
