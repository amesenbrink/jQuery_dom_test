
//For this quiz, you"ll need to add to the DOM tree that already exists.

//"#family2" should be a sibling of and come after "#family1". "#bruce" should be the only immediate child
//of "#family2". "#bruce" should have two divs as children, "#madison" and "#hunter".


 //Your code goes here!
var family1, family2, bruce, madison, hunter;

family1 = $('#family1');
family2 = $('<div id="family2"><h1>family2</h1></div>');
bruce = $('<div id="bruce"><h2>bruce</h2></div>');
madison = $('<div id="madison"><h3>madison</h3></div>');
hunter = $('<div id="hunter"><h3>hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);
