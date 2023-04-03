'use strict'
const dis = document.querySelector('[data-display]'),
 form = document.querySelector('form'),
 themeButton =document.querySelector('[data-check-input]');


/* ============================
Event
==============================*/

// ^ for controlling the theme
const  ThemeCtrl = (()=>{
    themeButton.addEventListener('click',(e)=>{
        if(e.target.classList.contains('checkFirst')){
            e.target.classList.remove('checkFirst');
            e.target.classList.add('checkSecond');
            ThemeChange.themeTwo()
        }else if(e.target.classList.contains('checkSecond')){
            e.target.classList.remove('checkSecond');
            e.target.classList.add('checkThird');
            ThemeChange.themeThree()
        }
        else if(e.target.classList.contains('checkThird')){
            e.target.classList.add('checkFirst');
            e.target.classList.remove('checkThird')
            ThemeChange.themeOne()
        }
    })
})();
// ^ for updating the ui
const ThemeChange=(()=>{
        function Ui(){
            this.mainBackground = document.body
            this.keyboardBackground= form
            this.keysBackground = document.querySelectorAll('input[type = "button"]')
            this.toggleBackground = document.querySelector('.toggle')
            this.toggleButton =themeButton
            this.display = dis
            this.deleteButton = document.querySelector('[data-delete]')
            this.resetButton = document.querySelector('[data-reset]')
            this.equalButton = document.querySelector('[data-equal]')
            this.nav = document.querySelector('nav')
            this.developer = document.querySelector('.attribution')
        }
        const ui = new Ui();
        return{
            themeOne:()=>{
                ui.toggleBackground.style.backgroundColor ='hsl(223, 31%, 20%)';
                ui.toggleButton.style.backgroundColor = 'hsl(6, 63%, 50%)';
                ui.display.style.backgroundColor = 'hsl(224, 36%, 15%)';
                ui.display.style.color = ' #FFF';
                ui.mainBackground.style.backgroundColor = 'hsl(222, 26%, 31%)';
                ui.keyboardBackground.style.backgroundColor = 'hsl(223, 31%, 20%)';
                ui.keysBackground.forEach(key=>{
                        key.style.backgroundColor = 'hsl(30, 25%, 89%)';
                        key.style.color = 'hsl(221, 14%, 31%)';
                        key.style.boxShadow = ' 0px 3px 0px hsl(28, 16%, 65%) ';
                     });
                /*==========
                for delete, reset & equal button
                ===========*/
                ui.deleteButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
                ui.deleteButton.style.boxShadow = ' 0px 3px 0px hsl(224, 28%, 35%)';
                ui.deleteButton.style.color = '#fff';
                ui.resetButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
                ui.resetButton.style.boxShadow = ' 0px 3px 0px hsl(224, 28%, 35%)';
                ui.resetButton.style.color = '#fff';
                ui.equalButton.style.backgroundColor = ' hsl(6, 63%, 50%)';
                ui.equalButton.style.boxShadow = ' 0px 3px 0px hsl(6, 70%, 34%)';
                ui.equalButton.style.color = '#fff';
                /*==========
                for NAV 
                ===========*/
                ui.nav.style.color = '#fff';
                // dev Name
                ui.developer.style.color = '#fff';
            
            },
            themeTwo:()=>{
                ui.toggleBackground.style.backgroundColor =' hsl(0, 5%, 81%)';
                ui.toggleButton.style.backgroundColor = 'hsl(25, 98%, 40%)';
                ui.display.style.backgroundColor= 'hsl(0, 0%, 93%)';
                ui.display.style.color = 'hsl(60, 10%, 19%)';
                ui.mainBackground.style.backgroundColor = 'hsl(0, 0%, 90%)';
                ui.keyboardBackground.style.backgroundColor = 'hsl(0, 5%, 81%)';
                ui.keysBackground.forEach(key=>{
                    key.style.backgroundColor = 'hsl(45, 7%, 89%)';
                    key.style.color = ' hsl(60, 10%, 19%)';
                    key.style.boxShadow = ' 0px 3px 0px hsl(35, 11%, 61%) ';
                });
                 /*==========
                for delete, reset & equal button
                ===========*/
                ui.deleteButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
                ui.deleteButton.style.boxShadow = ' 0px 3px 0px hsl(185, 58%, 25%) ';
                ui.deleteButton.style.color = '#fff';
                ui.resetButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
                ui.resetButton.style.boxShadow = ' 0px 3px 0px hsl(185, 58%, 25%) ';
                ui.resetButton.style.color = '#fff';
                ui.equalButton.style.backgroundColor = 'hsl(25, 98%, 40%)';
                ui.equalButton.style.boxShadow = ' 0px 3px 0px hsl(25, 99%, 27%) ';
                ui.equalButton.style.color = '#fff';
                /*==========
                for NAV 
                ===========*/
                ui.nav.style.color = ' hsl(60, 10%, 19%)';
                // dev Name
                ui.developer.style.color = 'hsl(60, 10%, 19%)';
            },
            themeThree:()=>{
                ui.toggleBackground.style.backgroundColor =' hsl(268, 71%, 12%)';
                ui.toggleButton.style.backgroundColor = 'hsl(176, 100%, 44%)';
                ui.display.style.backgroundColor= ' hsl(268, 71%, 12%)';
                ui.display.style.color = 'hsl(52, 100%, 62%)';
                ui.mainBackground.style.backgroundColor = 'hsl(268, 75%, 9%)';
                ui.keyboardBackground.style.backgroundColor = 'hsl(268, 71%, 12%)';
                ui.keysBackground.forEach(key=>{
                    key.style.backgroundColor = 'hsl(268, 47%, 21%)';
                    key.style.color = 'hsl(52, 100%, 62%)';
                    key.style.boxShadow = ' 0px 3px 0px hsl(290, 70%, 36%) ';
                });
                /*==========
                for delete, reset & equal button
                ===========*/
                ui.deleteButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
                ui.deleteButton.style.boxShadow = ' 0px 3px 0px hsl(285, 91%, 52%) ';
                ui.deleteButton.style.color = '#fff';
                ui.resetButton.style.backgroundColor = 'hsl(281, 89%, 26%)';
                ui.resetButton.style.boxShadow = ' 0px 3px 0px hsl(285, 91%, 52%) ';
                ui.resetButton.style.color = '#fff';
                ui.equalButton.style.backgroundColor = 'hsl(176, 100%, 44%)';
                ui.equalButton.style.boxShadow = ' 0px 3px 0px hsl(177, 92%, 70%) ';
                ui.equalButton.style.color = 'hsl(198, 20%, 13%)';
                /*==========
                for NAV 
                ===========*/
                ui.nav.style.color = 'hsl(52, 100%, 62%)';
                // dev Name
                ui.developer.style.color = 'hsl(52, 100%, 62%)';

                /*EXPORT  UI */
            }
        }
    })();

const Calculation = (()=>{
    function Calculator (){
        this.btn = document.querySelectorAll('[data-num]')
        this.deleteBtn = document.querySelector('[data-delete]')
        this.equal = document.querySelector('[data-equal]')
        this.reset = document.querySelector('[data-reset]')
        this.float = document.querySelector('[data-point]')
        this.operator = document.querySelectorAll('[data-operator]')
    }


    const digit = new Calculator();
// ^ numbers
        digit.btn.forEach(button =>{

        button.addEventListener('click',()=>{
            dis.value +=button.value
                if(dis.value.match(/\d(\+|\-|\/|\*)\d/)){
                    dis.value =dis.value.replace(/\,/g,"")
                }

            });
        });
// ^ delete button
        digit.deleteBtn.addEventListener('click',()=>{
            dis.value = dis.value.slice(0,-1)
        })
//^ equal button
        digit.equal.addEventListener('click',()=>{
            let new_v;
            console.log()
  
            if(dis.value === ''){
                return;
            }else if(dis.value.match(/(\d[\.]{2,}|[\.]{2,}|(\+|\-|\*|\/){2,})/g)||dis.value.match(/^\d?(\+|\-|\*|\/){1,}$/g))
            {
                dis.value = 'syntaxError'
                if(dis.value === 'syntaxError'){
                    setTimeout(()=>{
                        dis.value ='';
                    },1000)
                }
            }
            else if(dis.value.match(/^0[^\.]|^(\+|\*|\-|\/)?0\d|^[0-9]*(\+|\*|\-|\/)0\d/g)){
                    dis.value = 'Octal literals are not allowed'
                    if(dis.value === 'Octal literals are not allowed'){
                        setTimeout(()=>{
                            dis.value ='';
                        },1000)
                    }
                }
            else if(dis.value.match(/\,/g)){
               dis.value = dis.value.replace(/\,/g,'')

                }
            else{
                dis.value = eval(dis.value).toLocaleString('en')
            }


        })
// ^ reset button
        digit.reset.addEventListener('click',(e)=>{
        if(e.target.value === 'Reset'){
            dis.value =""
        }
        })
// ^ operator
        digit.operator.forEach((ope)=>{
            ope.addEventListener('click',()=>{
                    dis.value += ope.value;
            })
        })

})();
