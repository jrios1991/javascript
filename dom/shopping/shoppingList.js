'use strict'
    // Do the following steps in this file, and make sure this file is linked to the shopping-list.html file
    // 1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    let unorderedListSelector = document.querySelector('ul');
    let inputSelector = document.querySelector('input');
    let buttonSelector = document.querySelector('button');
    let inputSaved = '';
    // 2. Create a function that will run in response to the button being clicked.
    // 3. Inside the function body, start off by storing the current value of the input element in a variable.
    // 4. Next, empty the input element by setting its value to an empty string — ''.
    buttonSelector.addEventListener('click', function(){
        //storing variable
        inputSaved = document.getElementById('item').value;
        inputSelector = '';
        // 5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
        let listElement = document.createElement('li');
        let spanElement = document.createElement('span');
        let buttonElement = document.createElement('button');
        // 6. Append the span and the button as children of the list item.
        listElement.appendChild(spanElement);
        listElement.appendChild(buttonElement);
        // 7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
        spanElement.textContent = inputSaved;
        buttonElement.textContent = 'delete';
        // 8. Append the list item as a child of the list.
        unorderedListSelector.appendChild(listElement);
        // 9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
        buttonElement.addEventListener('click', function(){
            unorderedListSelector.removeChild(listElement);
            focusOnThis();
        });
        // 10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
        let focusOnThis = function () {
            document.getElementById('item').value = '';
            document.getElementById('item').focus();
        };
        focusOnThis();
    });