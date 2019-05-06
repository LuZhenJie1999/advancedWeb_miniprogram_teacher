    function ifnull(txt) {
        if (txt.length == 0) {
            return true;
        }
        var $reg = /\s+/;
        return $reg.test(txt);
    }

$("#username").blur(function(){
    if(ifnull($(this).val())){
        $("#username_msg").html("用户名不能为空");
    }else{
        $("#username_msg").html("");
    }
});

//在id为password的元素失去焦点时进行密码的验证
$("#password").blur(function(){
    if(ifnull($(this).val())){
        $("#password_msg").html("密码不能为空");
    }else{
        $("#password_msg").html("");

    }
});

function checkForm() {
    //验证用户名
    if (ifnull($("#username").val())) {
        $("#username_msg").html("请填写用户名哦！");
        return false;
    }

    //验证密码
    if (ifnull($("#password").val())) {
        $("#password_msg").html("请填写密码哦！");
        return false;
    }
    return true;
}

//验证数据库中的用户名和密码
function checkPassword(){
    //Connection coon = ;
    //to do
}
