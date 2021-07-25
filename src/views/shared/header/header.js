import { html, LitElement } from "lit";

import headerStyles from './header.styles';

class Header extends LitElement {
	static styles = [headerStyles];

	render() {
		return html`
			<header class="header clearfix">
				<h3 class="text-muted">
					<a href="/">
						Podcaster
					</a>
					<div class="spinner hidden">
						<div class="double-bounce1"></div>
						<div class="double-bounce2"></div>
					</div>
				</h3>
			</header>
		`;
	}
}

window.customElements.define('podcaster-header', Header);

export default Header;
