function calc(){
    const data = document.getElementById('data').value;

    let _data = [];
    i = 0;
    while(i < data.length){
        if('0123456789'.indexOf(data[i]) !== -1 ){
            let num = '';
            while('0123456789'.indexOf(data[i]) !== -1 && i < data.length){
                num += data[i];
                i++;
            }
            _data.push(num);
            continue;
        }
        if('+-*/'.indexOf(data[i]) !== -1){
            _data.push(data[i]);
            i++;
            continue;
        }
        if(data[i] === ' '){
            i++;
            continue;
        }
        throw "ERROR"
    }


    //Отрицательные числа

    //todo:

    function exec(data){
        let mark = null;
        for(let i = data.length; i >= 0; i--){
            if(data[i] === '+' || data[i] === '-'){
                if(mark === null){
                    mark = i;
                }else{
                    if(data[mark] === '/' || data[mark] === '*'){
                        mark = i;
                    }
                }
            }
            if(data[i] === '*' || data[i] === '/'){
                if(mark === null){
                    mark = i;
                }
            }
        }

        console.log(data,mark);

        if(mark === null){
            if(data.length > 1){
                throw "ERROR";
            }else{
                return Number(data[0]);
            }
        }

        let numLeft = data.slice(0, mark);
        let numRight = data.slice(mark + 1);

        let resLeft = exec(numLeft);
        let resRight = exec(numRight);

        switch(data[mark]){
            case '+': return resLeft + resRight;
            case '-': return resLeft - resRight;
            case '*': return resLeft * resRight;
            case '/': return resLeft / resRight;
        }

        throw "Error";

    }


    document.getElementById('result').innerHTML = exec(_data);
}

document.getElementById('run').onclick = calc.bind(this);