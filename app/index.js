import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
  nodes: schema.spec.nodes,
  marks: schema.spec.marks
})


const startState = EditorState.create({
    doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
  });

window.view = new EditorView(document.querySelector("#editor"), {
  //editable: () => false,
  state: EditorState.create({doc: mySchema.node('hard_break')})
})


var target = document.querySelector('.ProseMirror');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log('added', mutation.addedNodes, 'removed', mutation.removedNodes);
  });

  console.log('-----')
});

var config = { attributes: false, childList: true, characterData: false };

observer.observe(target, config);


window.view.updateState(startState);