

$(document).ready(function () {
    $('.sumbit').click(function (event) {
        console.log('Clicked button')

        var name =('.name').val()
        var email =('.email').val()
        var subject =('.subject').val()
        var message =('.message').val()
        var statusElm = ('.status')
        statusElm.empty()

        if(name.length >= 5) {
            statusElm.apprend('<div>Name is valid</div>')
        } else{
            event.preventDefault()
            statusElm.apprend('<div>Name is not valid</div>')
        }
        
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.apprend('<div>Email is valid</div>')
        } else{
            event.preventDefault()
            statusElm.apprend('<div>Email is not valid</div>')
        }

        if(subject.length >= 2) {
            statusElm.apprend('<div>Subject is valid</div>')
        } else{
            event.preventDefault()
            statusElm.apprend('<div>Subject is not valid</div>')
        }

        if(message.length >= 10) {
            statusElm.apprend('<div>Message is valid</div>')
        } else{
            event.preventDefault()
            statusElm.apprend('<div>Message is not valid</div>')
        }
    })
})