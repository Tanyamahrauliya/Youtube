function calculate(){
    let n  = document.getElementById("num").value;
    let result = document.getElementById("result");
    let fact = 1;

    for(let i = 1;i<=n; i++){
        fact = fact*i;
    }
    result.textContent = `Factorial :${fact}`;
    
};