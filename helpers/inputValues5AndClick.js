const sel = require('../data/selectors.json');
const path = require('path');

function inputValues5AndClick (name, gender, age, storyType, imageChoice){
    $(sel.nameK).setValue(name);
    $$(sel.genderK)[gender].click();
    $(sel.ageK).setValue(age);
    $(sel.storyClickK).click();
    $$(sel.storyTypeK)[storyType].click();
    const image = $(sel.imageUploadK);
    const filePath = path.join(__dirname, `../data/${imageChoice}`);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    image.waitForDisplayed();
    image.setValue(remoteFilePath);
    const create = $(sel.submitButtonK);
    browser.pause(5000);
    create.waitForClickable();
    create.click();
    browser.pause(5000);
    const story = $(sel.tryAgainK);
    story.waitForClickable();
}

module.exports = inputValues5AndClick;