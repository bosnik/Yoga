'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
            div.textContent ='любой текст';
            document.body.appendChild(div);
            div.style.cssText = ` height:${this.height}px;
							    	width:${this.width}px;
								    background-color:${this.bg};
								    font-size:${this.fontSize}px;
								    text-align:${this.textAlign};`;   
    }
}

let style = new Options(200, 300, '#FF5733', 50, 'center');
style.createDiv();