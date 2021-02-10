/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/
//header
let injectDocument = document.getElementById('inject');
let center = document.createElement('center');
let h1 = document.createElement('h1');
let i = document.createElement('i');
let node1 = document.createTextNode("HTML Practice Exercise TEKcamp.");
let h2 = document.createElement('h2');
let link = document.createElement('a');
let node2 = document.createTextNode('TEKsystems "TEKcamp"');
//header h1
h1.style.fontStyle = 'italic';
injectDocument.appendChild(center);
center.appendChild(h1);
h1.appendChild(node1);
//header h2
center.appendChild(h2);
h2.appendChild(link);
link.appendChild(node2);
link.href = 'https://codepen.io/ayunas-the-scripter/pen/WNQgpqB';
//hr paragraph and ol
let hr = document.createElement('hr');
let paragraph1 = document.createElement('p');
let italics = document.createElement('i');
let node3 = document.createTextNode("I love ");
let node4 = document.createTextNode(" for the following reasons:");
let node5 = document.createTextNode('HTML');
//paragraph 
injectDocument.appendChild(hr);
hr.appendChild(paragraph1);
paragraph1.appendChild(node3);
paragraph1.appendChild(italics);
italics.appendChild(node5);
italics.style.fontStyle = 'italic';
paragraph1.appendChild(node4);
//ol
let orderedList = document.createElement('ol');
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');
let list1 = document.createTextNode('I learned it quickly.');
let list2 = document.createTextNode('I can make web pages using code');
let list3 = document.createTextNode('It’s fun.');
hr.appendChild(orderedList);
orderedList.appendChild(listItem1);
orderedList.appendChild(listItem2);
orderedList.appendChild(listItem3);
listItem1.appendChild(list1);
listItem2.appendChild(list2);
listItem3.appendChild(list3);
//footer
//pargraph2
let paragraph2 = document.createElement('p');
let link2 = document.createElement('a');
link2.href = 'mailto:ayunas@teksystems.com';
let paragraph2Node = document.createTextNode('My instructor’s email address is: ');
let link2Node = document.createTextNode('ayunas@teksystems.com')
injectDocument.appendChild(paragraph2);
paragraph2.appendChild(paragraph2Node);
paragraph2.appendChild(link2);
link2.appendChild(link2Node);
//h1
let lastheader = document.createElement('h1');
let outertext = document.createElement('p');
let lastheaderNode = document.createTextNode('Have a great day!');
let outertextNode = document.createTextNode(" I really look forward to learning how to code!  Have a great day. -[Team 'Git'er Done'] -->");
injectDocument.appendChild(lastheader);
lastheader.appendChild(lastheaderNode);
injectDocument.appendChild(outertext);
outertext.appendChild(outertextNode);