import { html, LitElement } from "lit-element";

import podcastSummaryStyles from './podcast-summary.styles';

class PodcastSummary extends LitElement {
	static styles = [podcastSummaryStyles];

	static get properties() {
		return {
			podcast: { type: Object }
		}
	}

	render () {
		return html`
			<div class="podcast-summary">
				<div class="box">
					<a href="/podcast/${this.podcast.id}">
						<div class="box-icon">
							<img src="${this.podcast.cover}" alt="${this.podcast.name}" />
						</div>
						<div class="info">
							<h4 class="text-center">${this.podcast.name}</h4>
							<p>
								<span class="text-center">
									<span>Author: </span>
									<span>${this.podcast.author}</span>
								</span>
							</p>
						</div>
					</a>
				</div>
			</div>
		`;
	}
}

window.customElements.define('podcaster-podcast-summary', PodcastSummary);

export default PodcastSummary;
