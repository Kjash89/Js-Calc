const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
                return
        const key = e.target
        const action = key.dataset.action
        const displayedNum = display.textContent
    }

        
        
});

        if(!action){
            console.log('number key!');
        }
        if(
            action==='add' ,
            action==='subtract' ,
            action==='multiply' ,
            action==='divide'
        ){
        
            console.log('operator key!');
        }
        if( action === 'decimal'){
            console.log('decimal key!');          
        }
        if(action=== 'clear'){
            console.log('clear key!');  
        }
        if(action=== 'calculate'){
            console.log('equal key!');
        }