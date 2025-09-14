/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var mergeTwoLists = function (list1, list2) {
    let list = []
    let temp
    
    for (let i = 0; i < list1.length ; i++) {
        temp = list1[i]
        list.push(temp)

    }
     for (let i = 0; i < list2.length; i++) {
        temp = list2[i]
        list.push(temp)
    }
    list.sort()
    console.log(list);
    


};
let list1 = [1, 2, 4], list2 = [1, 3, 4]
mergeTwoLists(list1, list2)