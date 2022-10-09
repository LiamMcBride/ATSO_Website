const copyTexts = {
    "accessible-button-html": "<button class='accessible-button'>Submit</button>",
    "accessible-button-css": ".accessible-button {\n\tbackground-color: #8C1E41;\n\tpadding: 10px;\n\tcursor: pointer;\n\tbox-shadow: black 2px 2xp;\n}\n\n.accessible-button:hover, .accessible-button::selection {\n\tbox-shadow: black 3px 3px;\n}\n\n.accessible-button:active {\n\tbox-shadow: none;\n}",
    "accessible-toggle-html": "<label class='switch'>\n\t<input type='checkbox'>\n\t<span class='slider round'></span>\n</button>",
    "accessible-toggle-css": `
    /*Accessible Toggle Switch via W3 Schools*/
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}
  
/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
  
/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}
  
.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
  
input:checked + .slider {
    background-color: #2196F3;
}
  
input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}
  
input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
  
/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}
  
.slider.round:before {
    border-radius: 50%;
}
`,
}


function copyText(copyText){
    navigator.clipboard.writeText(copyTexts[copyText]);
}
