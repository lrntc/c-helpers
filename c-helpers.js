var _c = {
    //
    //Base
    //
    print: function(obj) {

        console.log(obj);

    },
    parseInt: (value, radix = 10) => { //Safely parse an integer using the radix method source: https://eslint.org/docs/rules/radix
      return parseInt(value, radix);
    },
    each: function(querySelector, callback) { //Callback function should have following params: element, index

        let elements = document.querySelectorAll(querySelector);
        Array.prototype.forEach.call(elements, callback);

    },
    eachString: function(arrayCollection, callback) {

        Array.prototype.forEach.call(arrayCollection, callback);

    },
    eachArrayObject: function(arrayCollection, callback) {

        Array.prototype.forEach.call(arrayCollection, callback);

    },
    elementExcists: function(querySelector, callback = null){

        if(document.getElementById(querySelector)) {

            return true;

        }

        return false;

    },
    classExcists: function(querySelector){

        if(document.querySelectorAll(querySelector).length != 0) {

            return true;

        }

        return false;

    },
    addEventListener: function(querySelector, eventName, callback) { //Add an event listener to a single element

        let target = document.getElementById(querySelector);

        if(target) {

            target.addEventListener(eventName, callback);

        } else {
            this.print(querySelector + ' not found in DOM');
        }

    },
    addEventListeners: function(querySelector, eventName, callback) { //Add an event listener to a multiple elements query

        let targets = document.querySelectorAll(querySelector);

        if(targets) {

            for (let i = 0; i < targets.length; i++) {
                targets[i].addEventListener(eventName, callback);
            }

        } else {
            this.print(querySelector + ' not found in DOM');
        }

    },
    //
    //DOM manipalation
    //
    clearElement: function(target) {

        target.innerHTML = '';

    },
    appendHtmlElement: function(target, htmlString) {

        let div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        target.appendChild(div.firstChild);

    },
    appendSelectOption: function(target, obj) {

        let elm = document.getElementById(target);
        let option = document.createElement("option");
        option.value = obj.value;
        option.text = obj.text;
        elm.add(option);

    },
    // appendHtmlElements: function (htmlString) {
    //     var div = document.createElement('div');
    //     div.innerHTML = htmlString.trim();
    //
    //     return div.childNodes;
    // },

    //
    //WWW
    //
    getParameterByName: function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    //
    //Effects
    //
    scrollTo: function(element, to, duration) { //Thanks to https://gist.github.com/andjosh/6764939
        var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

        var animateScroll = function(){
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
}



//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};


export default _c;
