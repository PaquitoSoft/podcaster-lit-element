class FetchDataController {
	context = {
		isLoading: false,
		data: null,
		error: null
	};

	#abortController;

	constructor(host) {
		this.host = host;
		this.host.addController(this);
	}

	async fetchData(loader) {
		this.context.isLoading = true;
		this.host.requestUpdate();

		try {
			this.context.data = await loader({ signal: this.#abortController });
		} catch (error) {
			this.context.error = error;
		} finally {
			this.context.isLoading = false;
			this.host.requestUpdate();
		}
	}

	cancel() {
		this.#abortController?.abort();
	}

	hostDisconnected() {
		this.cancel();
	}
}

export default FetchDataController;
