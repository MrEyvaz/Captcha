const input = document.querySelector('.text_input')

const captcha = document.querySelector('.captcha')

function generateCode() {

    const numbers = "0123456789";

    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const combination = numbers.concat(lowerCaseLetters, upperCaseLetters)

    let captchaLength = 6

    function captchaGenerator() {
        for (let i = 0; i < captchaLength; i++) {
            let randomIndex = Math.floor(Math.random() * combination.length)
            captcha.textContent += combination.charAt(randomIndex)
        }
    }

    captchaGenerator()


    input.addEventListener('input', function() {
        if( captcha.textContent == input.value) {
            input.style.outlineColor = 'green'
            input.style.color = 'green'
        } else{
            input.style.outlineColor = 'red'
            input.style.color = 'red'
        }
    }) 

    if (combination.length > 6) {
        input.style.color = 'red'
    }
    }

generateCode()