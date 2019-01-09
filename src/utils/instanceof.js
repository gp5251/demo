export default function (left, right) {
    const proto = right.prototype
    left = left.__proto__

    while (true) {
        if (left === null) {
            return false
        }

        if (left === proto) {
            return true
        }

        left = left.__proto__
    }
}