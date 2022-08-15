function initLab(label) {
    console.log(label);
    var obj = { name: "I am obj" };
    if (label.name) {
        obj.name = label.name;
    }
    console.log(obj);
    // label.age = 13 只读属性
    return obj;
}
var lab = { label: " I am string", age: 13, sex: "1" };
initLab(lab);
initLab({ label: " I am string", age: 13, sex: "1" });
// a
// b
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13 git cherry-pick b3d0ea
// 14
