// get all data in form and return object
const getFormData = (form) => {
  const elements = form.elements;
  let honeypot;

  const fields = Object.keys(elements)
    .filter(function (k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    })
    // eslint-disable-next-line array-callback-return
    .map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    })
    .filter(function (item, pos, self) {
      // eslint-disable-next-line eqeqeq
      return self.indexOf(item) == pos && item;
    });

  const formData = {};
  fields.forEach(function (name) {
    const element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;

    // when our element has multiple items, get their values
    if (element.length) {
      const data = [];
      for (let i = 0; i < element.length; i++) {
        const item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(", ");
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  return { data: formData, honeypot };
};

const disableAllButtons = (form) => {
  const buttons = form.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
};

export const handleFormSubmit = (event) => {
  // handles form submit without any jquery
  event.preventDefault(); // we are submitting via xhr below
  const form = event.target;
  const formData = getFormData(form);
  const data = formData.data;
  // If a honeypot field is filled, assume it was done so by a spam bot.

  disableAllButtons(form);
  const url = form.action;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      form.reset();
      const formElements = form.querySelector(".form-elements");
      if (formElements) {
        formElements.style.display = "none"; // hide form
      }
      const thankYouMessage = form.querySelector(".thankyou_message");
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      }
    }
  };
  // url encode form data for sending as post data
  const encoded = Object.keys(data)
    .map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    })
    .join("&");
  xhr.send(encoded);
};
