$(function() {
    submit = function() {
        let username = $(".bsy-text-field-input[name='uname']").val()
        let passward = $(".bsy-text-field-input[name='pwd']").val()
        let pawTip = $(".bsy-text-field-input[name='pwd']+.inputTip")
        let nameTip = $(".bsy-text-field-input[name='uname']+.inputTip")
        pawTip.hide()
        nameTip.hide()
        if (!username) {
            nameTip.show()

        } else if (!passward) {
            pawTip.show()
        } else {
            console.log("ok")
        }

    }
})