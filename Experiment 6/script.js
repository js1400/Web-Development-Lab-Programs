function calculate(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    const operation=document.getElementById('operation').value;
    let result;
    if (isNaN(num1) || isNaN(num2)){
        result="Please enter valid numbers.";
    }
    else{
        switch(operation){
            case 'sum':
                result=Number(num1) + Number(num2);
                break;
            case 'diff':
                result=num1 - num2;
                break;
            case 'product':
                result=num1 * num2;
                break;
            case 'remainder':
                result=num1 % num2;
                break;
            case 'quotient':
                result=num1 / num2;
                break;
            case 'power':
                result=num1 ** num2;
                break;
            case 'square-root':
                result=Math.sqrt(num1);
                break;
            case 'square':
                result=num1 **2;
                break;
            default:
                result="Unknown operation.";
        }
    }
    document.getElementById('output').textContent="The Result is "+ result;
}