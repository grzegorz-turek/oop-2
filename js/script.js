'use strict';
(function(){

    function Button(text1, text2) {
        this.text1 = text1 || 'Hello';
        this.text2 = text2 || 'Click me!';
    };

    Button.prototype.create = function() {
        this.element = document.createElement('button');
        document.body.appendChild(this.element);
        this.element.innerText = this.text2;
        var self = this;
        this.element.addEventListener('click', function(){
            alert(self.text1);
            document.body.innerHTML += 'Displayed by innerHTML: ' + self.text1;
        });
    };

    var btn1 = new Button('Hola Hola!', 'Click me quick!');
    btn1.create();

})();