// // sử dụng vòng lặp while.
// // tạo 1 chương trình cho người dùng nhập thêm bớt sửa và đọc phone number
// // khi hoàn thành 1 chức năng sẽ quay lại menu CRUD để người dùng chọn 
// // nếu người dùng  nhập "C" => tạo mới 1 element ==> quay lại menu
// // nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, in ra nó. ==> quay lại menu
// // nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index ==> quay lại menu
// // nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no ==> quay lại menu 



let newArray = [1, 2, 4, 5];

let isLoop = true;

while (isLoop) {
    let input = prompt('Chose the function C/R/U/D:');
    if (input === 'C' || input === 'c') {
        let add = Number(prompt('add Phone number :'));
        newArray.push(add);
        alert(newArray);

    } else if (input === 'R' || input === 'r') {
        let inputIndex = Number(prompt('Enter ur index :'));
        if (inputIndex < 0 || inputIndex > newArray.length) {
            alert('pls  other number ');
        } else {
            alert(newArray[inputIndex]);
        }

    } else if (input === 'U' || input === 'u') {
        let inputIndex2 = Number(prompt('Enter ur index :'));
        let getValue = Number(prompt('enter the new phone :'));
        if (inputIndex2 < 0 || inputIndex2 > newArray.length) {
            alert('pls other number');
        } else {
            newArray[inputIndex2] = getValue;
            alert(newArray);
        }
    } else if (input === 'D' || input === 'd') {
        let del = Number(prompt('enter ur index for delete :'));
        if (del < 0 || del > newArray) {
            alert('pls other number ');

        }else {
            newArray.splice(del , 1 );
            alert(newArray);
        }
    }else {
        alert('something wrong , pls press C/U/R/D');
    }

}