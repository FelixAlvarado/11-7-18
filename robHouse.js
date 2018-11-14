//house robber 3

// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

var rob = function(root) {
    let res = robSub(root);
    return Math.max(res[0], res[1]);
};

function robSub(root) {
    if (root === null) return [0,0];
    
    let left = robSub(root.left);
    let right = robSub(root.right);
    let res = new Array(2);

    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0];
    
    return res;
}