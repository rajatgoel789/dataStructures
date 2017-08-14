function Stack() {
    this.__size = 0;
    this.__storage = {};
}

Stack.prototype.push = function (data) {
    this.__size++;
    var size = this.__size;

    this.__storage[size] = data;
}

Stack.prototype.pop = function () {
    var size = this.__size;
   
    var deletedData;
    if (size) {
        deletedData = this.__storage[size];
        delete this.__storage[size];
        this.__size--;
        return deletedData;

    } else {
        return new Error("Stack is Empty");
    }
}

Stack.prototype.top = function () {
    var size = this.__size;
    return this.__storage[size];
}

Stack.prototype.isEmpty = function () {
    var size = this.__size;
    return size ? false : true;
}

Stack.prototype.sort = function () {
    if (typeof this._tmpSt == "undefined") this._tmpSt = new Stack();
    return this.doSort(this);
}

Stack.prototype.doSort = function (s) {
    var size = s.__size;
    var temp,
       _leftSt = new Stack(),
       _rightSt = new Stack(),
        temp = s.pop();
    
    while (s.__size) {
        var y = s.pop();
        y < temp ? _leftSt.push(y) : _rightSt.push(y);
    }
    if (_leftSt.__size) this.doSort(_leftSt);
    if (_rightSt.__size) this.doSort(_rightSt);

    while (_rightSt.__size) {
        this._tmpSt.push(_rightSt.pop());
    }
    this._tmpSt.push(temp);
    while (_leftSt.__size) {
        this._tmpSt.push(_leftSt.pop());
    }

    while (this._tmpSt.__size) {
        s.push(this._tmpSt.pop());
    }
    //  console.log("this==> ",this , this.__storage);
    return this.__storage;
}

var st = new Stack();
st.push(5);
st.push(6);
st.push(8);
st.push(4);
st.push(1);
st.push(9);
st.push(7);
st.push(5);
st.push(11);
st.push(6);

console.log("Sorting is ", st.sort())


