/**
 * @param {number[]} head
 * @return {number}
 */
var deleteDuplicates = function (head) {
    let element = 0
    for (let i = 0; i < head.length; i++) {
         
        element = head[i]
        for (let j = i+1; j < head.length;) {
            if (element == head[j]) {
                head.splice(j, 1)
            }
            else {
                j++
            }
        }
    }
        return head

}
head = [1,1,2]
console.log(deleteDuplicates(head))
