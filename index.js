const input = document.querySelector('.text_input')

const captcha = document.querySelector('.captcha')

function generateCode() {

    const numbers = "0123456789";

    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const combination = numbers.concat(lowerCaseLetters, upperCaseLetters)

    let captchaLength = 6

    let captcha = ''

    for (let i = 0; i<captchaLength; i++) {
        let randomIndex = Math.floor(Math.random*combination.length)
        captcha = combination.charAt(randomIndex)
        captcha.textContent = randomIndex
    }

    if(combination.length>6) {
        input.style.color = 'red'
    }

}

generateCode()