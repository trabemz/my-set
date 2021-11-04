module.exports = class {
	constructor(array) {
		this.collection = [];
		this.size = 0;
		if (array) {
			array.forEach((element) => {
				this.add(element);
			});
		}
	}

	has(element) {
		return this.collection.indexOf(element) !== -1;
	}

	values() {
		return this.collection.values();
	}

	keys() {
		return this.collection.values();
	}

	entries() {
		return this.collection.map((value) => [value, value]).values();
	}

	add(element) {
		if (!this.has(element)) {
			this.collection.push(element);
			this.size++;
		}
		return this;
	}

	delete(element) {
		if (this.has(element)) {
			const index = this.collection.indexOf(element);
			this.collection.splice(index, 1);
			this.size--;
		}
		return this;
	}

	forEach(callback, data = this) {
		for (let element of this.values()) {
			callback.call(data, element);
		}
	}

	clear() {
		this.collection = [];
		this.size = 0;
	}

	[Symbol.iterator]() {
		return this.values();
	}

	get [Symbol.toStringTag]() {
		return '^_^';
	}
};
