const MySet = require('../solution/index');

describe('Set', () => {
	it('хранит только уникальные значения', () => {
		const set = new MySet([4, 8, 15, 15, 15, 16, 23, 42]);
		expect([...set]).toEqual([4, 8, 15, 16, 23, 42]);
	});
	it('есть свойство size', () => {
		const set = new MySet([4, 8, 15, 16, 23, 42]);
		expect(set.size).toEqual(6);
	});
	it('работает в цикле for-of', () => {
		const array = [4, 8, 15, 16, 23, 42];
		const set = new MySet(array);
		let index = 0;
		for (let element of set) {
			expect(element).toEqual(array[index++]);
		}
	});
	it('есть метод keys', () => {
		const array = [4, 8, 15, 16, 23, 42];
		const set = new MySet(array);
		let index = 0;
		for (let element of set.keys()) {
			expect(element).toEqual(array[index++]);
		}
	});
	it('есть метод values', () => {
		const array = [4, 8, 15, 16, 23, 42];
		const set = new MySet(array);
		let index = 0;
		for (let element of set.values()) {
			expect(element).toEqual(array[index++]);
		}
	});
	it('есть метод entries', () => {
		const array = [4, 8, 15, 16, 23, 42];
		const set = new MySet(array);
		let index = 0;
		for (let element of set.entries()) {
			expect(element).toEqual([array[index], array[index++]]);
		}
	});
	it('есть метод clear', () => {
		const array = [4, 8, 15, 16, 23, 42];
		const set = new MySet(array);
		set.clear();
		expect(set.size).toEqual(0);
	});
	it('есть метод add', () => {
		const set = new MySet();
		set.add(1);
		set.add(2);

		expect(set.size).toEqual(2);
		expect(set.has(1)).toBeTruthy();
		expect(set.has(2)).toBeTruthy();
	});

	it('add может работать в цепочке вызовов', () => {
		const set = new MySet();
		set.add(1).add(2);

		expect(set.size).toEqual(2);
		expect(set.has(1)).toBeTruthy();
		expect(set.has(2)).toBeTruthy();
	});

	it('есть метод delete', () => {
		const array = [4, 8, 15, 16, 23, 42];
		const set = new MySet(array);
		set.delete(15);

		expect(set.size).toEqual(5);
		expect(set.has(15)).toBeFalsy();
	});

	it('может хранить объекты', () => {
		const object = {
			getValue() {
				return this.value;
			},
		};

		const data = {
			value: 42,
		};

		const set = new MySet([object]);

		// есть метод add
		set.add(data);

		expect(set.size).toEqual(2);
		expect(set.has(object)).toBeTruthy();
		expect(set.has(data)).toBeTruthy();
	});
	it('valueOf возвращает множество', () => {
		const set = new MySet();
		expect(set.valueOf()).toEqual(set);
	});

	it('приведение к строке возвращает [object ^_^]', () => {
		const set = new MySet();

		const stringTag = '[object ^_^]';
		expect(String(set)).toEqual(stringTag);
		expect(Object.prototype.toString.call(set)).toEqual(stringTag);
	});

	it('есть forEach, который делает какие-то странные вещи...', () => {
		const object = {
			getValue() {
				return this.value;
			},
		};

		const set = new MySet([object]);

		const data = {
			value: 42,
		};

		let value;
		set.forEach(function (item) {
			value = item.getValue.call(this);
		}, data);

		expect(value).toEqual(42);
	});
});
