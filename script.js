const btn = document.getElementById("btn");
let addValue = document.getElementById("addValue")
let result  = document.getElementById("result");

// 할 일 추가하기
function addTodo() {
    if (addValue.value == false) {
        alert("내용을 입력하세요!");
    } else {
        let list  = document.createElement("li");
        let del = document.createElement("button");
        list.innerHTML = addValue.value; //입력한 내용을 list에 담아라
        result.appendChild(list); //addValue.value 값을 list에 추가 
        list.style.marginTop = "10px"
        list.appendChild(del); //삭제 버튼을 del에 담고, list 항목 하나하나에 del 버튼을 추가
        del.innerText = "X" //del에 입력된 텍스트가 없기 때문에 "innerText"로 "X" 를 추가
        del.style.fontSize = "20px";
        del.style.border = "none";
        del.style.float = "right";
        del.style.right = "17px";
        del.style.marginBottom = "10px";
        del.style.cursor = "pointer";
        del.addEventListener("click", deleteList);
        del.style.position = "relative";
        del.style.position = "relative";
        addValue.value = "";
        addValue.focus(); //커서 깜빡임
        list.addEventListener("click" , function () {
            list.style.textDecoration = "line-through";
            list.style.color = "red";
        });
    }
}

// 할 일 목록 삭제시
function deleteList(e) {
    let removeOne = e.target.parentElement;
    removeOne.remove();
}

//전체 삭제시
function allClearList(e) {
    if (confirm("정말 삭제하시겠습니까?") == true) {
        if(result.innerHTML == "") {
            alert("삭제할 목록이 없습니다.");
        } else {
            result.innerText = ""; //전체 삭제
        }
    } else {
        return false; //삭제 취소
    }
}

