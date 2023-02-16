
// calculate button
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
    // Income.value = "";


        // save button 
        document.getElementById('btn-save').addEventListener('click', function(){
            const saveInputField = document.getElementById('btn-save-field');
            const saveInputString = saveInputField.value;
            const saveInputFieldNo = parseFloat(saveInputString);
        
            
        
            const saveAmount = document.getElementById('save-amount');
            const saveAmountString = saveAmount.innerText;
            const saveAmountNo = parseFloat(saveAmountString);
        
            const percent =  (  saveInputFieldNo / 100 ) * totalIncomeNumber ; 
            saveAmount.innerText = percent;
        
            
        
        })














})




