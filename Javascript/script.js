var firstnum=0,secondnum=0,operator,result=0;
function openCalculator()
{
  firstnum=0,secondnum=0,operator=null,result=0;
  calculator=document.createElement("div");
  calculator.setAttribute("class","calculator");

  displayResult=document.createElement("div");
  displayResult.setAttribute("class","displayResult");
  calculator.append(displayResult);

  displayButton=document.createElement("div");
  displayButton.setAttribute("class","displayButton");
  calculator.append(displayButton);

  digit7=document.createElement("button");
  digit7.innerHTML=7;
  displayButton.append(digit7);
  digit7.setAttribute("onclick","performOperation(7)");
  digit8=document.createElement("button");
  digit8.innerHTML="8";
  displayButton.append(digit8);
  digit8.setAttribute("onclick","performOperation(8)");
  digit9=document.createElement("button");
  digit9.innerHTML="9";
  displayButton.append(digit9);
  digit9.setAttribute("onclick","performOperation(9)");
  divide=document.createElement("button");
  divide.innerHTML="/";
  displayButton.append(divide);
  divide.setAttribute("onclick",'performOperation("/")');
  digit4=document.createElement("button");
  digit4.innerHTML="4";
  displayButton.append(digit4);
  digit4.setAttribute("onclick","performOperation(4)");
  digit5=document.createElement("button");
  digit5.innerHTML="5";
  displayButton.append(digit5);
  digit5.setAttribute("onclick","performOperation(5)");
  digit6=document.createElement("button");
  digit6.innerHTML="6";
  displayButton.append(digit6);
  digit6.setAttribute("onclick","performOperation(6)");
  multiply=document.createElement("button");
  multiply.innerHTML="*";
  displayButton.append(multiply);
  multiply.setAttribute("onclick",'performOperation("*")');
  digit1=document.createElement("button");
  digit1.innerHTML="1";
  displayButton.append(digit1);
  digit1.setAttribute("onclick","performOperation(1)");
  digit2=document.createElement("button");
  digit2.innerHTML="2";
  displayButton.append(digit2);
  digit2.setAttribute("onclick","performOperation(2)");
  digit3=document.createElement("button");
  digit3.innerHTML="3";
  displayButton.append(digit3);
  digit3.setAttribute("onclick","performOperation(3)");
  substract=document.createElement("button");
  substract.innerHTML="-";
  displayButton.append(substract);
  substract.setAttribute("onclick",'performOperation("-")');
  digit0=document.createElement("button");
  digit0.innerHTML="0";
  displayButton.append(digit0);
  digit0.setAttribute("onclick","performOperation(0)");
  decimal=document.createElement("button");
  decimal.innerHTML=".";
  displayButton.append(decimal);
  decimal.setAttribute("onclick",'performOperation(".")');
  equal=document.createElement("button");
  equal.innerHTML="=";
  displayButton.append(equal);
  equal.setAttribute("onclick",'performOperation("=")');
  add=document.createElement("button");
  add.innerHTML="+";
  displayButton.append(add);
  add.setAttribute("onclick",'performOperation("+")');

  var container=document.getElementsByTagName('body')[0];
  container.append(calculator);
}

function performOperation(value)
{
  if (value=="+" ||value=="-" ||value=="*"||value=="/")
  {
    if(firstnum!=null)
    {
      operator=value;
      displayResult.append(value);
    }
    else
    {
      alert("Click A Number First..");
    }
  }
  else if(value >=0|| value <=9)
  {
    if(firstnum==null || operator==null)
    {
      firstnum =firstnum*10+value;
      displayResult.append(value);
    }
    else
    {
      if(operator!=null)
      {
        secondnum =secondnum*10+value;
        displayResult.append(value);
      }
    }
  }
  else if (value =="=")
  {
    if(firstnum!=null && secondnum!=null && operator !=null)
    {
      displayResult.append("=");
      switch (operator)
      {
        case "+": result=firstnum+secondnum;
                  break;
        case "-": result=firstnum-secondnum;
                  break;
        case "*": result=firstnum*secondnum;
                  break;
        case "/": result=firstnum/secondnum;
                  break;
      }
      displayResult.append(result);
    }
    else
    {
      alert("Click A Number First..");
    }
  }
}
