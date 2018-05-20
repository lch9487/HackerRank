function insert(head, data) {
  if (!head) {
    head = new Node(data);
  } else {
    let node = head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new Node(data);
  }

  return head;
}
