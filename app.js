
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
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            let newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }


            // Create new item base on 'inc' or 'exp' type.
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure.
            data.allItems[type].push(newItem);

            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    }

})();

var UIController = (function() {
    const DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        addListItem: function(obj, type) {
            let html, newHtml, element;

            // 1. Create HTML string with placeholder text.
            if(type === 'inc') {

                element = DOMStrings.incomeContainer;

                html = `<div class="item clearfix" id="income-%id%">
                            <div class="item__description">%description%</div>
                                <div class="right clearfix">
                                    <div class="item__value">%value%</div>
                                    <div class="item__delete">
                                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                    </div>
                                </div>
                        </div>`;
            } else if(type === 'exp') {

                element = DOMStrings.expensesContainer;

                html = `<div class="item clearfix" id="expense-%id%">
                            <div class="item__description">%description%</div>
                                <div class="right clearfix">
                                    <div class="item__value">%value%</div>
                                    <div class="item__percentage">21%</div>
                                    <div class="item__delete">
                                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                    </div>
                                </div>
                        </div>`;
            }

            // 2. Replace the placeholder with some actual data.
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // 3. Insert HTML into the DOM.
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            let fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' +
            DOMStrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach((field) => field.value = '');
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
        let input, newItem;

        // 1. Get the filed input data.
        input = UICtrl.getInput();

        // 2. Add the item to the budget controller.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI.
        UICtrl.addListItem(newItem, input.type);

        // 4. Clear the fields.
        UICtrl.clearFields();

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
