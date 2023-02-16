
// second part
document.getElementById('btn-calculate').addEventListener('click', function(){
    const foodField = document.getElementById('food-field');
    const foodFieldElement = foodField.value;
    const totalElementOfFoodField = parseFloat(foodFieldElement);
     
    
    const RentField = document.getElementById('rent-field');
    const RentFieldElement = RentField.value;
    const totalElementOfRentField = parseFloat(RentFieldElement);
    
    const ClothField = document.getElementById('cloth-field');
    const ClothFieldElement = ClothField.value;
    const totalElementOfClothField = parseFloat(ClothFieldElement);
    

    const TotalExpense = document.getElementById('total-expense');
    const totalExpenseString = TotalExpense.innerText;
    const totalExpenseNumber = parseFloat(totalExpenseString);

    const TotalExpenseSum = totalElementOfFoodField + totalElementOfRentField + totalElementOfClothField;
    // console.log(totalExpense);
    TotalExpense.innerText = TotalExpenseSum;

    foodField.value = "";
    RentField.value = "";
    ClothField.value = "";

    // first part

    const Income = document.getElementById('income');
    const totalIncomeString = Income.value
    const totalIncomeNumber =  parseFloat(totalIncomeString);
    
    // middle part of remaining balance 
    const balance = document.getElementById('Balance');
    const balanceString = balance.innerText;
    const remainBalanceNo = parseFloat(balanceString);
    
    // so total remain balance after expense
    const Balance = totalIncomeNumber - TotalExpenseSum;
    balance.innerText = Balance;


    


})

