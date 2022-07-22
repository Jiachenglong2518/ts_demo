// 接口
interface LabelVal {
  label: string
  name?: string // 可选参数
  readonly age ?: number
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

let lab = {label: " I am string", age: 13}

initLab(lab)
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
