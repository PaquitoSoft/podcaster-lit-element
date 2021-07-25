import { ReactiveController } from "lit";

class FetchDataController extends ReactiveController {
	fetchDataContext = {
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
		this.fetchDataContext.isLoading = true;
		this.host.requestUpdate();

		try {
			this.fetchDataContext.data = await loader({ signal: this.#abortController });			
		} catch (error) {
			this.fetchDataContext.error = error;
		} finally {
			this.fetchDataContext.isLoading = false;
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
