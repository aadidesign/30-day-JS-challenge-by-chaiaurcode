
// Task 6
const itemModule = (function() {
    let items = [];
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items;
        }
    };
})();
itemModule.addItem('apple');
itemModule.addItem('banana');
console.log(itemModule.listItems());
itemModule.removeItem('apple');
console.log(itemModule.listItems());
