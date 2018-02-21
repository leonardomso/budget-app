
var budgetController = (function() {



})();

var UIController = (function() {

    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };

})();

var controller = (function(budgetCtrl, UICtrl) {

    const ctrlAddItem = () => {

        // 1. Get the filed input data.
        const input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller.

        // 3. Add the item to the UI.

        // 4. Calculate the budget.

        // 5. Display the budget on the UI.

        console.log('It works.');
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);
