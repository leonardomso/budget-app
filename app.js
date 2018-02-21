
var budgetController = (function() {

    const Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            expenses: [],
            incomes: []
        },
        total: {
            expenses: 0,
            incomes: 0
        }
    };

})();

var UIController = (function() {

    const DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };

})();

var controller = (function(budgetCtrl, UICtrl) {

    const setupEventListeners = () => {
        const DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    }

    const ctrlAddItem = () => {

        // 1. Get the filed input data.
        const input = UICtrl.getInput();

        // 2. Add the item to the budget controller.

        // 3. Add the item to the UI.

        // 4. Calculate the budget.

        // 5. Display the budget on the UI.

    };

    return {
        init: function() {

            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
