function postOrder(root) {
  if (!root) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  process.stdout.write(root.data + " ");
}
