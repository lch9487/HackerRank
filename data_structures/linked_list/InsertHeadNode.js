function insert(head, data) {
  let node = new Node(data);
  node.next = head;

  return node;
}
