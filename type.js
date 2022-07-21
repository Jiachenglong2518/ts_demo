var isDone = true;
var list = [1, 2, 3];
var arr = [1, 2, 3];
console.log(arr);
// 枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var r = Color.red;
console.log(r);
var sa = Color[2];
console.log(sa);
