function inOrder(root) {
  if (!root) {
    return;
  }

  inOrder(root.left);
  process.stdout.write(root.data + " ");
  inOrder(root.right);
}
