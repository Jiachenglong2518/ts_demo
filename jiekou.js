function initLab(label) {
    console.log(label);
    var obj = { name: "I am obj" };
    if (label.name) {
        obj.name = label.name;
    }
    console.log(obj);
    return obj;
}
var lab = { label: " I am string" };
initLab(lab);
