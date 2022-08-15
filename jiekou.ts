// 接口
interface LabelVal {
  label: string;
  name?: string; // 可选参数
  readonly age ?: number;
  [propName: string]: any //添加一个字符串索引签名， 可添加任意数量其他属性 [m1]
}
function initLab( label: LabelVal ) {
  console.log(label);
  let obj = {name: "I am obj"}
  if (label.name) {
    obj.name = label.name
  }
  console.log(obj);
  // label.age = 13 只读属性
  return obj
  
}

let lab = {label: " I am string", age: 13, sex: "1"} // [m2]

initLab(lab)
// sex ，TypeScript会认为这段代码可能存在bug。 对象字面量会被特殊对待而且会经过 
// 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
//  解决方法： 1 [m1]添加一个字符串索引签名  2 [m2] 赋值给一个变量 initLab(lab)
initLab ({label: " I am string", age: 13, sex: "1"})
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
// 接口
interface LabelVal {
  label: string
  name?: string // 可选参数
  readonly age ?: number
}

