// alert("Hello World !");
let computerChoice;
// Logic to get computer choice
 let getComputerChoice = () => {
    const randomselecter = Math.random();
    alert(randomselecter);
    if (randomselecter < 1/3) {
        alert(computerChoice="Rock");
    }
    else if (randomselecter >1/3 && randomselecter < 2/3){
        alert(computerChoice="Scissors");
    }
    else{
        alert(computerChoice="Paper");
    }
 }
getComputerChoice();