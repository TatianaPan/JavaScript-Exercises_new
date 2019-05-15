function myBind (fn, obj) {
    return function() {
        fn.call(obj);
    }
}