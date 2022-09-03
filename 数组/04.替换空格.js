/*
  把字符串 s 中的每个空格替换成"%20"

  输入：s = "We are happy."
  输出："We%20are%20happy."
*/

var replaceSpace = function(s) {
  // 方法一：
  // split将字符串以空格切割成单个元素放入到数组
  let arr = s.split(' ')
  // jion将数组中的元素拼接上%20
  return arr.join('%20')

  // 方法二：
  // var length = s.length;
  // var arr  = s.split(''); 将每个元素切割出来放入数组 空格也被放入到数组了
  // for (var i = 0; i < arr.length; i++){
  //   if(arr[i] == ' '){
  //     arr[i] = '%20'
  //   }
  // }
  // return arr.join('')

  // 方法三：
  // s.replaceAll(' ', '20%')

};
