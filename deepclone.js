let deepclone = function (obj , map = new WeakMap()) {
    if ( typeof obj === 'object')
    {
        let _obj = Array.isArray(obj)?[]:{};
        if(map.get(obj)) {
            return map.get(obj);
        }
        map.set(obj, _obj);
        for(key in obj) {
            if(obj.hasOwnproperty(key)){
            _obj[key] = deepclone(obj[key], map);
            }
        }
        return _obj
    }
    else{
        return obj;
    }
}