var firstNum=0,secondNum=0,operator=null,result=0;
function openCalculator()
{
  firstNum=0,secondNum=0,operator=null,result=0;
  calculator=document.createElement("div");
  calculator.setAttribute("class","calculator");

  displayResult=document.createElement("div");
  displayResult.setAttribute("class","displayResult");
  calculator.append(displayResult);

  displayButton=document.createElement("div");
  displayButton.setAttribute("class","displayButton");
  calculator.append(displayButton);

  buttonArray= [{value:7, method:"operant(7)"},
                {value:8, method:"operant(8)"},
                {value:9, method:"operant(9)"},
                {value:'/' ,method:"operatorPressed('/')"},
                {value:4,method:"operant(4)"},
                {value:5 ,method:"operant(5)"},
                {value:6 ,method:"operant(6)"},
                {value:'*' ,method:'operatorPressed("*")'},
                {value:1 ,method:"operant(1)"},
                {value:2 ,method:"operant(2)"},
                {value:3 ,method:"operant(3)"},
                {value:'-' ,method:"operatorPressed('-')"},
                {value:'.' ,method:"operant('.')"},
                {value:0 ,method:"operant(0)"},
                {value:'=' ,method:"calculateResult()"},
                {value:'+' ,method:"operatorPressed('+')"}

  ];
  let i=0;
  for(i;i<16;i++)
  {
    let button = document.createElement("button");
    button.innerHTML = buttonArray[i].value;
    displayButton.appendChild(button);
    button.setAttribute('onclick', buttonArray[i].method);
  }

  var container=document.getElementsByTagName('body')[0];
  container.append(calculator);
}
function operant(val)
{
    if(firstNum>=0 && operator==null)
    {
      firstNum =firstNum*10+val;
      displayResult.append(val);
    }
    else
    {
      if(operator!=null)
      {
        secondNum =secondNum*10+val;
        displayResult.append(val);
      }
    }
}

function operatorPressed(val)
{
  if(firstNum!=0)
  {
    operator=val;
    displayResult.append(val);
  }
  else
  {
    alert("Click A Number First..");
  }
}
function calculateResult()
{
  if(firstNum!=0 && secondNum!=0 && operator !=null)
  {
    result=eval(displayResult.innerHTML);
    displayResult.append("=");
    displayResult.append(result);
  }
  else
  {
    alert("Click A Number First..");
  }
}
