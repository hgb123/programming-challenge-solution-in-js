/*
HackerRank > Balanced System Files Partition
*/

function Node(size) {
  this.size = size;
  this.total = size;
  this.children = [];
}

function calculateTotal(root) {
  if (root.children.length === 0) {
    return root.size;
  }
  for (const node of root.children) {
    root.total += calculateTotal(node);
  }
  return root.total;
}

function calculateMostBalancedPartition(root, total, ref) {
  if (!root) return;
  const partitionOne = root.total;
  const partitionTwo = total - root.total;
  ref.res = Math.min(ref.res, Math.abs(partitionOne - partitionTwo));
  for (const node of root.children) {
    calculateMostBalancedPartition(node, total, ref);
  }
}

function mostBalancedPartition(parent, filesSize) {
  const nodes = [];
  let root;
  for (let i = 0; i < parent.length; i++) {
    const node = new Node(filesSize[i]);
    nodes.push(node);
    if (parent[i] !== -1) {
      nodes[parent[i]].children.push(node);
    } else {
      root = node;
    }
  }

  const total = calculateTotal(root);
  const ref = { res: total };
  calculateMostBalancedPartition(root, total, ref);

  return ref.res;
}
