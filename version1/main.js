let mainForm = document.getElementById("main-form");
let userFirstNameInput = document.getElementById("user-first-name");
let userLastNameInput = document.getElementById("user-last-name");
let userFatherNameInput = document.getElementById("user-father-name");
let userBdateInput = document.getElementById("user-bdate");
let menOption = document.getElementById("men-option");
let womenOption = document.getElementById("women-option");
let userCityNameInput = document.getElementById("user-city-name");
let userEmailInput = document.getElementById("user-email");
let userPhoneInput = document.getElementById("user-phone-number");
let infoFormBtn = document.getElementById("person-info-form-btn");

let requestForEducation = document.getElementById("request-for-education");
let yesForEducation = document.getElementById("yes-for-education");
let noForEducation = document.getElementById("no-for-education");
let educationMainDiv = document.getElementById("education-main-div");

mainForm.onsubmit = function (e) {
  e.preventDefault();

  userFirstNameInput.setAttribute("disabled", "");
  userLastNameInput.setAttribute("disabled", "");
  userFatherNameInput.setAttribute("disabled", "");
  userBdateInput.setAttribute("disabled", "");
  menOption.setAttribute("disabled", "");
  womenOption.setAttribute("disabled", "");
  userCityNameInput.setAttribute("disabled", "");
  userEmailInput.setAttribute("disabled", "");
  userPhoneInput.setAttribute("disabled", "");

  infoFormBtn.setAttribute("disabled", "");

  requestForEducation.classList.remove("d-none");
  window.scrollBy(0, 200);
};

yesForEducation.onclick = function () {
  educationMainDiv.classList.remove("d-none");
  yesForEducation.setAttribute("disabled", "");
  noForEducation.setAttribute("disabled", "");
  window.scrollBy(0, 200);
};

// Education Panel

let educationInfo = document.getElementById("education-info");
let addSectionBtn = document.getElementById("add-education-section-btn");
let educationPanel = document.getElementById("education-panel");

let educationModal = document.getElementById("education-modal");
let closeModalBtn = document.getElementById("close-modal-btn");

let educationModalForm = document.getElementById("education-modal-form");

let selectInputDegree = document.getElementById("select-input-degree");
let selectInputUniName = document.getElementById("select-input-uni-name");
let selectInputStartYear = document.getElementById("select-input-start-year");
let selectInputEndYear = document.getElementById("select-input-end-year");
let inputIxtisas = document.getElementById("input-ixtisas");
let inputGbal = document.getElementById("input-gbal");

let degreeDropdownMenu = document.getElementById("degree-dropdown-menu");
let uniNameDropdownMenu = document.getElementById("uni-name-dropdown-menu");
let startYearDropdownMenu = document.getElementById("start-year-dropdown-menu");
let endYearDropdownMenu = document.getElementById("end-year-dropdown-menu");

let confirmFormBtn = document.getElementById("confirm-form-btn");
let modalFooterBtn = document.getElementById("modal-footer-btn");

let degreeOptions = degreeDropdownMenu.querySelectorAll("li");
let nameOptions = uniNameDropdownMenu.querySelectorAll("li");
let startYearOptions = startYearDropdownMenu.querySelectorAll("li");
let endYearOptions = endYearDropdownMenu.querySelectorAll("li");

let educationEndButtonDiv = document.getElementById("education-end-button-div");
let educationEndButton = document.getElementById("education-end-button");

for (let i = 0; i < degreeOptions.length; i++) {
  degreeOptions[i].onclick = function () {
    selectInputDegree.value = degreeOptions[i].innerHTML;
  };
}
for (let i = 0; i < nameOptions.length; i++) {
  nameOptions[i].onclick = function () {
    selectInputUniName.value = nameOptions[i].innerHTML;
  };
}
for (let i = 0; i < startYearOptions.length; i++) {
  startYearOptions[i].onclick = function () {
    selectInputStartYear.value = startYearOptions[i].innerHTML;
  };
}
for (let i = 0; i < endYearOptions.length; i++) {
  endYearOptions[i].onclick = function () {
    selectInputEndYear.value = endYearOptions[i].innerHTML;
  };
}

addSectionBtn.onclick = function () {
  selectInputDegree.value = "";
  selectInputUniName.value = "";
  selectInputStartYear.value = "";
  selectInputEndYear.value = "";
  inputIxtisas.value = "";
  inputGbal.value = "";
  modalFooterBtn.setAttribute("disabled", "");
};

educationModalForm.onsubmit = function (e) {
  e.preventDefault();
  modalFooterBtn.removeAttribute("disabled");
};

modalFooterBtn.onclick = function () {
  let educationSection = document.createElement("div");
  educationSection.style.position = "relative";
  educationSection.classList.add(
    "bg-light",
    "border",
    "rounded",
    "p-4",
    "my-3"
  );

  let uniNamePart = document.createElement("h6");
  uniNamePart.innerHTML = selectInputUniName.value;
  educationSection.appendChild(uniNamePart);

  let uniDegreePart = document.createElement("h6");
  uniDegreePart.innerHTML = selectInputDegree.value;
  educationSection.appendChild(uniDegreePart);

  let uniIxtisasPart = document.createElement("p");
  uniIxtisasPart.innerHTML = inputIxtisas.value;
  educationSection.appendChild(uniIxtisasPart);
  uniIxtisasPart.classList.add("d-none");

  let uniYearsPart = document.createElement("p");
  uniYearsPart.style.color = "gray";
  uniYearsPart.style.fontSize = "14px";
  uniYearsPart.innerHTML =
    selectInputStartYear.value + "-" + selectInputEndYear.value;
  educationSection.appendChild(uniYearsPart);

  let uniGirisBal = document.createElement("p");
  uniGirisBal.innerHTML = inputGbal.value;
  educationSection.appendChild(uniGirisBal);
  uniGirisBal.classList.add("d-none");

  let removeSectionBtn = document.createElement("button");
  removeSectionBtn.classList.add("btn-close", "p-3");
  removeSectionBtn.style.position = "absolute";
  removeSectionBtn.style.top = 0;
  removeSectionBtn.style.right = 0;
  educationSection.appendChild(removeSectionBtn);

  removeSectionBtn.onclick = function () {
    educationSection.remove();
  };

  educationPanel.appendChild(educationSection);

  educationEndButtonDiv.classList.remove("d-none");

  const childsEP = educationPanel.children;
  if (childsEP.length == 1) {
    removeSectionBtn.onclick = function () {
      educationEndButtonDiv.classList.add("d-none");
      educationSection.remove();
    };
  }
  window.scrollBy(0, 900);
};

// Language Panel

let requestForLanguage = document.getElementById("request-for-language");
let yesForLanguage = document.getElementById("yes-for-language");
let noForLanguage = document.getElementById("no-for-language");

noForEducation.onclick = function () {
  requestForLanguage.classList.remove("d-none");
  yesForEducation.setAttribute("disabled", "");
  noForEducation.setAttribute("disabled", "");
  window.scrollBy(0, 200);
};

educationEndButton.onclick = function () {
  requestForLanguage.classList.remove("d-none");
  educationEndButton.setAttribute("disabled", "");
  addSectionBtn.setAttribute("disabled", "");
  let educationPanelCloseButtons = educationPanel.querySelectorAll("button");
  for (let i = 0; i < educationPanelCloseButtons.length; i++) {
    educationPanelCloseButtons[i].classList.add("d-none");
  }
  window.scrollBy(0, 200);
};

yesForLanguage.onclick = function () {
  languageMainDiv.classList.remove("d-none");
  yesForLanguage.setAttribute("disabled", "");
  noForLanguage.setAttribute("disabled", "");
  window.scrollBy(0, 200);
};

let languageMainDiv = document.getElementById("language-main-div");
let languageInfo = document.getElementById("language-info");
let addLangSectionBtn = document.getElementById("add-language-section-btn");
let languagePanel = document.getElementById("language-panel");

let languageModal = document.getElementById("language-modal");
let closeLangModalBtn = document.getElementById("close-lang-modal-btn");

let languageModalForm = document.getElementById("language-modal-form");

let selectLangName = document.getElementById("select-lang-name");
let selectLangReadSkill = document.getElementById("select-lang-read-skill");
let selectLangWriteSkill = document.getElementById("select-lang-write-skill");
let selectLangSpeakSkill = document.getElementById("select-lang-speak-skill");

let langNameMenu = document.getElementById("lang-name-dropdown-menu");
let readSkillMenu = document.getElementById("read-skill-menu");
let writeSkillMenu = document.getElementById("write-skill-menu");
let speakSkillMenu = document.getElementById("speak-skill-menu");

let confirmLangFormBtn = document.getElementById("confirm-lang-form-btn");
let langModalFooterBtn = document.getElementById("lang-modal-footer-btn");

let langNameOptions = langNameMenu.querySelectorAll("li");
let readSkillOptions = readSkillMenu.querySelectorAll("li");
let writeSkillOptions = writeSkillMenu.querySelectorAll("li");
let speakSkillOptions = speakSkillMenu.querySelectorAll("li");

let languageEndButtonDiv = document.getElementById("language-end-button-div");
let languageEndButton = document.getElementById("language-end-button");

for (let i = 0; i < langNameOptions.length; i++) {
  langNameOptions[i].onclick = function () {
    selectLangName.value = langNameOptions[i].innerHTML;
  };
}
for (let i = 0; i < readSkillOptions.length; i++) {
  readSkillOptions[i].onclick = function () {
    selectLangReadSkill.value = readSkillOptions[i].innerHTML;
  };
}
for (let i = 0; i < writeSkillOptions.length; i++) {
  writeSkillOptions[i].onclick = function () {
    selectLangWriteSkill.value = writeSkillOptions[i].innerHTML;
  };
}
for (let i = 0; i < speakSkillOptions.length; i++) {
  speakSkillOptions[i].onclick = function () {
    selectLangSpeakSkill.value = speakSkillOptions[i].innerHTML;
  };
}

addLangSectionBtn.onclick = function () {
  selectLangName.value = "";
  selectLangReadSkill.value = "";
  selectLangWriteSkill.value = "";
  selectLangSpeakSkill.value = "";
  langModalFooterBtn.setAttribute("disabled", "");
};

languageModalForm.onsubmit = function (e) {
  e.preventDefault();
  langModalFooterBtn.removeAttribute("disabled");
};

langModalFooterBtn.onclick = function () {
  let languageSection = document.createElement("div");
  languageSection.style.position = "relative";
  languageSection.classList.add("bg-light", "border", "rounded", "p-4", "my-3");

  let langNamePart = document.createElement("h5");
  langNamePart.innerHTML = selectLangName.value;
  languageSection.appendChild(langNamePart);

  let langReadSkillElement = document.createElement("p");
  langReadSkillElement.innerHTML = selectLangReadSkill.value;
  languageSection.appendChild(langReadSkillElement);
  langReadSkillElement.classList.add("d-none");

  let langWriteSkillElement = document.createElement("p");
  langWriteSkillElement.innerHTML = selectLangWriteSkill.value;
  languageSection.appendChild(langWriteSkillElement);
  langWriteSkillElement.classList.add("d-none");

  let langSpeakSkillElement = document.createElement("p");
  langSpeakSkillElement.innerHTML = selectLangSpeakSkill.value;
  languageSection.appendChild(langSpeakSkillElement);
  langSpeakSkillElement.classList.add("d-none");

  let langSkillPart = document.createElement("p");
  langSkillPart.style.color = "gray";
  langSkillPart.style.fontSize = "14px";
  langSkillPart.innerHTML =
    selectLangReadSkill.value +
    "/" +
    selectLangWriteSkill.value +
    "/" +
    selectLangSpeakSkill.value;
  languageSection.appendChild(langSkillPart);

  let removeLangSectionBtn = document.createElement("button");
  removeLangSectionBtn.classList.add("btn-close", "p-3");
  removeLangSectionBtn.style.position = "absolute";
  removeLangSectionBtn.style.top = 0;
  removeLangSectionBtn.style.right = 0;
  languageSection.appendChild(removeLangSectionBtn);

  removeLangSectionBtn.onclick = function () {
    languageSection.remove();
  };
  languagePanel.appendChild(languageSection);

  languageEndButtonDiv.classList.remove("d-none");

  const childsLP = languagePanel.children;
  if (childsLP.length == 1) {
    removeLangSectionBtn.onclick = function () {
      languageEndButtonDiv.classList.add("d-none");
      languageSection.remove();
    };
  }
  window.scrollBy(0, 900);
};

// Computer Panel
let requestForComputer = document.getElementById("request-for-computer");
let yesForComputer = document.getElementById("yes-for-computer");
let noForComputer = document.getElementById("no-for-computer");

noForLanguage.onclick = function () {
  requestForComputer.classList.remove("d-none");
  yesForLanguage.setAttribute("disabled", "");
  noForLanguage.setAttribute("disabled", "");
  window.scrollBy(0, 200);
};

languageEndButton.onclick = function () {
  requestForComputer.classList.remove("d-none");
  languageEndButton.setAttribute("disabled", "");
  addLangSectionBtn.setAttribute("disabled", "");
  let languagePanelCloseButtons = languagePanel.querySelectorAll("button");
  for (let i = 0; i < languagePanelCloseButtons.length; i++) {
    languagePanelCloseButtons[i].classList.add("d-none");
  }
  window.scrollBy(0, 200);
};

yesForComputer.onclick = function () {
  computerMainDiv.classList.remove("d-none");
  yesForComputer.setAttribute("disabled", "");
  noForComputer.setAttribute("disabled", "");
  window.scrollBy(0, 200);
};

let computerMainDiv = document.getElementById("computer-main-div");
let computerInfo = document.getElementById("computer-info");
let addCompSectionBtn = document.getElementById("add-computer-section-btn");
let computerPanel = document.getElementById("computer-panel");

let computerModal = document.getElementById("computer-modal");
let closeCompModalBtn = document.getElementById("close-comp-modal-btn");

let computerModalForm = document.getElementById("computer-modal-form");

let compNameInput = document.getElementById("input-comp-name");
let selectCompSkill = document.getElementById("select-comp-skill");

let compSkillMenu = document.getElementById("comp-skill-menu");

let confirmCompFormBtn = document.getElementById("confirm-comp-form-btn");
let compModalFooterBtn = document.getElementById("comp-modal-footer-btn");

let compSkillOptions = compSkillMenu.querySelectorAll("li");

let computerEndButtonDiv = document.getElementById("computer-end-button-div");
let computerEndButton = document.getElementById("computer-end-button");

for (let i = 0; i < compSkillOptions.length; i++) {
  compSkillOptions[i].onclick = function () {
    selectCompSkill.value = compSkillOptions[i].innerHTML;
  };
}

addCompSectionBtn.onclick = function () {
  compNameInput.value = "";
  selectCompSkill.value = "";
  compModalFooterBtn.setAttribute("disabled", "");
};

computerModalForm.onsubmit = function (e) {
  e.preventDefault();
  compModalFooterBtn.removeAttribute("disabled");
};

compModalFooterBtn.onclick = function () {
  let computerSection = document.createElement("div");
  computerSection.style.position = "relative";
  computerSection.classList.add("bg-light", "border", "rounded", "p-4", "my-3");

  let compNamePart = document.createElement("h5");
  compNamePart.innerHTML = compNameInput.value;
  computerSection.appendChild(compNamePart);

  let compSkillPart = document.createElement("p");
  compSkillPart.style.color = "gray";
  compSkillPart.style.fontSize = "14px";
  compSkillPart.innerHTML = selectCompSkill.value;
  computerSection.appendChild(compSkillPart);

  let removeCompSectionBtn = document.createElement("button");
  removeCompSectionBtn.classList.add("btn-close", "p-3");
  removeCompSectionBtn.style.position = "absolute";
  removeCompSectionBtn.style.top = 0;
  removeCompSectionBtn.style.right = 0;
  computerSection.appendChild(removeCompSectionBtn);

  removeCompSectionBtn.onclick = function () {
    computerSection.remove();
  };
  computerPanel.appendChild(computerSection);

  computerEndButtonDiv.classList.remove("d-none");

  const childsCP = computerPanel.children;
  if (childsCP.length == 1) {
    removeCompSectionBtn.onclick = function () {
      computerEndButtonDiv.classList.add("d-none");
      computerSection.remove();
    };
  }
  window.scrollBy(0, 900);
};

// Account Info Panel
let accountMainDiv = document.getElementById("account-main-div");

noForComputer.onclick = function () {
  accountMainDiv.classList.remove("d-none");
  yesForComputer.setAttribute("disabled", "");
  noForComputer.setAttribute("disabled", "");
  window.scrollBy(0, 500);
};

computerEndButton.onclick = function () {
  accountMainDiv.classList.remove("d-none");
  computerEndButton.setAttribute("disabled", "");
  addCompSectionBtn.setAttribute("disabled", "");
  let computerPanelCloseButtons = computerPanel.querySelectorAll("button");
  for (let i = 0; i < computerPanelCloseButtons.length; i++) {
    computerPanelCloseButtons[i].classList.add("d-none");
  }
  window.scrollBy(0, 500);
};

let accountForm = document.getElementById("account-form");

let accountUserName = document.getElementById("account-user-name");
let accountPassWord1 = document.getElementById("account-password-1");
let accountPassWord2 = document.getElementById("account-password-2");
let showPasswordIcon1 = document.getElementById("show-password-icon-1");
let showPasswordIcon2 = document.getElementById("show-password-icon-2");

let wrongPasswordAlertToast = document.getElementById(
  "wrong-password-alert-toast"
);

let accountSubmitBtn = document.getElementById("account-submit-btn");

showPasswordIcon1.onclick = function (e) {
  e.preventDefault();
  if (accountPassWord1.getAttribute("type") == "password") {
    accountPassWord1.setAttribute("type", "text");
  } else {
    accountPassWord1.setAttribute("type", "password");
  }
};
showPasswordIcon2.onclick = function (e) {
  e.preventDefault();
  if (accountPassWord2.getAttribute("type") == "password") {
    accountPassWord2.setAttribute("type", "text");
  } else {
    accountPassWord2.setAttribute("type", "password");
  }
};

let mainPageEndButtonDiv = document.getElementById("main-page-end-button-div");
let mainPageEndButton = document.getElementById("main-page-end-button");

accountForm.onsubmit = function (e) {
  e.preventDefault();
  if (accountPassWord1.value != accountPassWord2.value) {
    wrongPasswordAlertToast.classList.add("show");
  } else {
    wrongPasswordAlertToast.classList.remove("show");
    accountUserName.setAttribute("disabled", "");
    accountPassWord1.setAttribute("disabled", "");
    accountPassWord2.setAttribute("disabled", "");
    accountSubmitBtn.setAttribute("disabled", "");
    mainPageEndButtonDiv.classList.remove("d-none");
  }
};

let userInformationDiv = document.getElementById("user-information-div");
let userInformationOpenBtn = document.getElementById(
  "user-information-open-button"
);
let infoSaveSuccessToast = document.getElementById("info-save-success-toast");

mainPageEndButton.onclick = function () {
  mainPageEndButton.setAttribute("disabled", "");
  userInformationDiv.classList.remove("d-none");
  window.scrollBy(0, 200);
};

// Login Panel
let userLoginModal = document.getElementById("user-login-modal");
let closeLoginModalBtn = document.getElementById("close-login-modal-btn");
let userLoginForm = document.getElementById("user-login-form");
let loginUsernameInput = document.getElementById("login-username-input");
let loginPasswordInput = document.getElementById("login-password-input");
let showLoginPasswordIcon = document.getElementById("show-login-password-icon");
let loginModalSubmitBtn = document.getElementById("login-modal-submit-btn");
let openUserDataModalBtn = document.getElementById("open-user-data-modal-btn");

let wrongLoginUsernameToast = document.getElementById(
  "wrong-login-username-alert-toast"
);
let wrongLoginPasswordToast = document.getElementById(
  "wrong-login-password-alert-toast"
);
let wrongLoginUPToast = document.getElementById(
  "wrong-login-username-password-alert-toast"
);

userInformationOpenBtn.onclick = function () {
  loginUsernameInput.value = "";
  loginPasswordInput.value = "";
  document.querySelector("#education-table tbody").innerHTML = "";
  document.querySelector("#language-table tbody").innerHTML = "";
  document.querySelector("#computer-table tbody").innerHTML = "";

  wrongLoginUsernameToast.classList.remove("show");
  wrongLoginPasswordToast.classList.remove("show");
  wrongLoginUPToast.classList.remove("show");

  openUserDataModalBtn.setAttribute("disabled", "");
};

showLoginPasswordIcon.onclick = function (e) {
  e.preventDefault();
  if (loginPasswordInput.getAttribute("type") == "password") {
    loginPasswordInput.setAttribute("type", "text");
  } else {
    loginPasswordInput.setAttribute("type", "password");
  }
};


//let openUserDataModalBtn = document.getElementById("open-user-data-modal-btn")

userLoginForm.onsubmit = function (e) {
  e.preventDefault();

  if (
    loginUsernameInput.value != accountUserName.value &&
    loginPasswordInput.value != accountPassWord1.value
  ) {
    wrongLoginUPToast.classList.add("show");
    wrongLoginUsernameToast.classList.remove("show");
    wrongLoginPasswordToast.classList.remove("show");
  } else if (loginUsernameInput.value != accountUserName.value) {
    wrongLoginUsernameToast.classList.add("show");
    wrongLoginUPToast.classList.remove("show");
    wrongLoginPasswordToast.classList.remove("show");
  } else if (loginPasswordInput.value != accountPassWord1.value) {
    wrongLoginPasswordToast.classList.add("show");
    wrongLoginUPToast.classList.remove("show");
    wrongLoginUsernameToast.classList.remove("show");
  } else {
    wrongLoginUPToast.classList.remove("show");
    wrongLoginUsernameToast.classList.remove("show");
    wrongLoginPasswordToast.classList.remove("show");
    openUserDataModalBtn.removeAttribute("disabled");
  }
};

let userFirstNameCell = document.getElementById("user-first-name-cell");
let userLastNameCell = document.getElementById("user-last-name-cell");
let userFatherNameCell = document.getElementById("user-father-name-cell");
let userBirthdayCell = document.getElementById("user-birthday-cell");
let userLocationNameCell = document.getElementById("user-location-name-cell");
let userEmailCell = document.getElementById("user-email-cell");
let userPhoneNumberCell = document.getElementById("user-phone-number-cell");

let userLastNameFirstName = document.getElementById("user-lastname-firstname");


let educationTableBody = document.querySelector("#education-table tbody");
let languageTableBody = document.querySelector("#language-table tbody");
let computerTableBody = document.querySelector("#computer-table tbody");

let containerMain = document.getElementById("main-container");
let containerData = document.getElementById("container-data");

openUserDataModalBtn.onclick = function () {


  containerMain.classList.add("d-none");
  containerData.classList.remove("d-none");

  userLastNameFirstName.innerHTML =
    userLastNameInput.value + " " + userFirstNameInput.value;
  // Person Data
  userFirstNameCell.innerHTML = userFirstNameInput.value;
  userLastNameCell.innerHTML = userLastNameInput.value;
  userFatherNameCell.innerHTML = userFatherNameInput.value;
  userBirthdayCell.innerHTML = userBdateInput.value;
  userLocationNameCell.innerHTML = userCityNameInput.value;
  userEmailCell.innerHTML = userEmailInput.value;
  userPhoneNumberCell.innerHTML = userPhoneInput.value;

  // Education Data

  if (educationPanel.children.length == 0) {
    let newTableRow = document.createElement("tr");

    let newTableCell1 = document.createElement("td");
    let newTableCell2 = document.createElement("td");
    let newTableCell3 = document.createElement("td");
    let newTableCell4 = document.createElement("td");
    let newTableCell5 = document.createElement("td");
    newTableRow.appendChild(newTableCell1);
    newTableRow.appendChild(newTableCell2);
    newTableRow.appendChild(newTableCell3);
    newTableRow.appendChild(newTableCell4);
    newTableRow.appendChild(newTableCell5);

    newTableCell1.innerHTML = "(boş)";
    newTableCell2.innerHTML = "(boş)";
    newTableCell3.innerHTML = "(boş)";
    newTableCell4.innerHTML = "(boş)";
    newTableCell5.innerHTML = "(boş)";
    educationTableBody.appendChild(newTableRow);
  } else {
    for (let i = 0; i < educationPanel.children.length; i++) {
      let newTableRow = document.createElement("tr");

      let newTableCell1 = document.createElement("td");
      let newTableCell2 = document.createElement("td");
      let newTableCell3 = document.createElement("td");
      let newTableCell4 = document.createElement("td");
      let newTableCell5 = document.createElement("td");
      newTableRow.appendChild(newTableCell1);
      newTableRow.appendChild(newTableCell2);
      newTableRow.appendChild(newTableCell3);
      newTableRow.appendChild(newTableCell4);
      newTableRow.appendChild(newTableCell5);

      newTableCell1.innerHTML = educationPanel.children[i].children[0].innerHTML;
      newTableCell2.innerHTML = educationPanel.children[i].children[1].innerHTML;
      newTableCell3.innerHTML = educationPanel.children[i].children[2].innerHTML;
      newTableCell4.innerHTML = educationPanel.children[i].children[3].innerHTML;
      newTableCell5.innerHTML = educationPanel.children[i].children[4].innerHTML;
      educationTableBody.appendChild(newTableRow);
    }
  }

  // Language Data

  if (languagePanel.children.length == 0) {
    let newTableRow = document.createElement("tr");

    let newTableCell1 = document.createElement("td");
    let newTableCell2 = document.createElement("td");
    let newTableCell3 = document.createElement("td");
    let newTableCell4 = document.createElement("td");
    
    newTableRow.appendChild(newTableCell1);
    newTableRow.appendChild(newTableCell2);
    newTableRow.appendChild(newTableCell3);
    newTableRow.appendChild(newTableCell4);
    

    newTableCell1.innerHTML = "(boş)";
    newTableCell2.innerHTML = "(boş)";
    newTableCell3.innerHTML = "(boş)";
    newTableCell4.innerHTML = "(boş)";
    
    languageTableBody.appendChild(newTableRow);
  } else {
    for (let i = 0; i < languagePanel.children.length; i++) {
      let newTableRow = document.createElement("tr");

      let newTableCell1 = document.createElement("td");
      let newTableCell2 = document.createElement("td");
      let newTableCell3 = document.createElement("td");
      let newTableCell4 = document.createElement("td");
      
      newTableRow.appendChild(newTableCell1);
      newTableRow.appendChild(newTableCell2);
      newTableRow.appendChild(newTableCell3);
      newTableRow.appendChild(newTableCell4);
      
      newTableCell1.innerHTML = languagePanel.children[i].children[0].innerHTML;
      newTableCell2.innerHTML = languagePanel.children[i].children[1].innerHTML;
      newTableCell3.innerHTML = languagePanel.children[i].children[2].innerHTML;
      newTableCell4.innerHTML = languagePanel.children[i].children[3].innerHTML;
      languageTableBody.appendChild(newTableRow);
    }
  }

  // Computer Data

  if (computerPanel.children.length == 0) {
    let newTableRow = document.createElement("tr");

    let newTableCell1 = document.createElement("td");
    let newTableCell2 = document.createElement("td");
    
    newTableRow.appendChild(newTableCell1);
    newTableRow.appendChild(newTableCell2);

    newTableCell1.innerHTML = "(boş)";
    newTableCell2.innerHTML = "(boş)";
    
    computerTableBody.appendChild(newTableRow);
  } else {
    for (let i = 0; i < computerPanel.children.length; i++) {
      let newTableRow = document.createElement("tr");

      let newTableCell1 = document.createElement("td");
      let newTableCell2 = document.createElement("td");
      
      newTableRow.appendChild(newTableCell1);
      newTableRow.appendChild(newTableCell2);
      
      newTableCell1.innerHTML = computerPanel.children[i].children[0].innerHTML;
      newTableCell2.innerHTML = computerPanel.children[i].children[1].innerHTML;

      computerTableBody.appendChild(newTableRow);
    }
  }

};

let backMainPageBtn = document.getElementById("back-to-main-page");

backMainPageBtn.onclick = function(){
  containerData.classList.add("d-none");
  containerMain.classList.remove("d-none")
}
