//!!! Работает только если на одной страничке одна форма
const formID = document.querySelector('form');

const errorElements = {
  text1: document.querySelector('.text-error1'),
  text2: document.querySelector('.text-error2'),
  text3: document.querySelector('.text-error3'),
  email: document.querySelector('.email-error'),
  tel: document.querySelector('.tel-error'),
  checkbox: document.querySelector('.checkbox-error'),
  number: document.querySelector('.number-error'),
  textarea: document.querySelector('.textarea-error'),
  select: document.querySelector('.select-error'),
};

/**** spans to HTML *************
<span class="text-error1"></span>
<span class="text-error2"></span>
<span class="text-error3"></span>
<span class="email-error"></span>
<span class="tel-error"></span>
<span class="select-error"></span>
<span class="textarea-error"></span>
<span class="checkbox-error"></span>
************************************************/

/**** max fields *************
type="text" - 3 (name="1", name="2", name="3")
type="tel"  - 1
type="email" - 1
type="checkbox" - 1
type="number" - 1
textarea - 1
option - 1
************************************************/
const storageValue = {
  checkbox: 'checkboxSave1',
  text1: 'name1Save1',
  text2: 'name2Save1',
  text3: 'name3Save1',
  email: 'emailSave1',
  number: 'numberSave1',
  tel: 'telSave1',
  textarea: 'textareaSave1',
  select: 'selectSave1',
};

const storageErrors = {
  checkbox: 'errorCheckbox1',
  text1: 'text1Error1',
  text2: 'text2Error1',
  text3: 'text3Error1',
  email: 'errorEmail1',
  number: 'errorNumber1',
  tel: 'errorTel1',
  textarea: 'errorTextarea1',
  select: 'selectError1',
};

const errorMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  text: 'The first character cannot be a number',
  text2: 'Must contain 2 or more characters',
  tel: 'Must contain only numbers',
  tel2: 'Must contain between 10 and 15 digits',
  loading: 'Loading...',
};

//! SET STYLE TO ERRORS
function setErrorStyle(errorEl) {
  if (errorEl) {
    errorEl.style.display = 'block';
    errorEl.style.color = 'rgb(206, 0, 0)';
    errorEl.style.fontSize = '14px';
    errorEl.style.fontWeight = '600';
  }
}
Object.values(errorElements).forEach(setErrorStyle);

//! GET ERRORS
document.addEventListener('DOMContentLoaded', () => {
  const getStoredValue = key => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.warn(`Failed to parse localStorage item "${key}":`, e);
      return null;
    }
  };

  const errorMap = [
    {
      element: errorElements.text1,
      valueKey: storageValue.text1,
      errorKey: storageErrors.text1,
      validate: value => value && isNaN(value[0]) && value.length >= 2,
    },
    {
      element: errorElements.text2,
      valueKey: storageValue.text2,
      errorKey: storageErrors.text2,
      validate: value => value && isNaN(value[0]) && value.length >= 2,
    },
    {
      element: errorElements.text3,
      valueKey: storageValue.text3,
      errorKey: storageErrors.text3,
      validate: value => value && isNaN(value[0]) && value.length >= 2,
    },
    {
      element: errorElements.email,
      valueKey: storageValue.email,
      errorKey: storageErrors.email,
      validate: value =>
        value &&
        /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/.test(
          value
        ),
    },
    {
      element: errorElements.tel,
      valueKey: storageValue.tel,
      errorKey: storageErrors.tel,
      validate: value =>
        value &&
        /^\d+$/.test(value) &&
        value.length >= 10 &&
        value.length <= 15,
    },
    {
      element: errorElements.checkbox,
      valueKey: storageValue.checkbox,
      errorKey: storageErrors.checkbox,
      validate: value => value === true,
    },
    {
      element: errorElements.number,
      valueKey: storageValue.number,
      errorKey: storageErrors.number,
      validate: value => value && value.trim() !== '',
    },
    {
      element: errorElements.textarea,
      valueKey: storageValue.textarea,
      errorKey: storageErrors.textarea,
      validate: value => value && value.trim() !== '',
    },
    {
      element: errorElements.select,
      valueKey: storageValue.select,
      errorKey: storageErrors.select,
      validate: value => value && value.trim() !== '',
    },
  ];

  errorMap.forEach(({ element, valueKey, errorKey, validate }) => {
    if (element) {
      const storedValue = getStoredValue(valueKey);
      const storedError = getStoredValue(errorKey);
      if (storedValue !== null && validate(storedValue)) {
        localStorage.removeItem(errorKey);
        element.textContent = '';
      } else if (storedError !== null) {
        element.textContent = storedError;
      }
    }
  });
});

formID.addEventListener('submit', e => {
  e.preventDefault();

  //! Clear previous error messages
  if (errorElements.text1) errorElements.text1.textContent = '';
  if (errorElements.text2) errorElements.text2.textContent = '';
  if (errorElements.text3) errorElements.text3.textContent = '';
  if (errorElements.email) errorElements.email.textContent = '';
  if (errorElements.tel) errorElements.tel.textContent = '';
  if (errorElements.checkbox) errorElements.checkbox.textContent = '';
  if (errorElements.number) errorElements.number.textContent = '';
  if (errorElements.textarea) errorElements.textarea.textContent = '';
  if (errorElements.select) errorElements.select.textContent = '';

  //? errors
  const errors = [];

  //! Check
  [...e.target].forEach(element => {
    if (element.localName === 'button') return;

    //* Checkbox
    if (element.type === 'checkbox') {
      if (!element.checked) {
        if (errorElements.checkbox) {
          errorElements.checkbox.textContent = errorMessages.required;
          errors.push('Checkbox not checked');
          localStorage.setItem(
            storageErrors.checkbox,
            JSON.stringify(errorMessages.required)
          );
        }
        return;
      }
    }

    //* Number
    if (element.type === 'number') {
      if (!element.value.trim()) {
        if (errorElements.number) {
          errorElements.number.textContent = errorMessages.required;
          errors.push('Number empty');
          localStorage.setItem(
            storageErrors.number,
            JSON.stringify(errorMessages.required)
          );
        }
        return;
      }
    }

    //* Email
    if (element.type === 'email') {
      const emailRegex =
        /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/;

      if (!element.value.trim()) {
        if (errorElements.email) {
          errorElements.email.textContent = errorMessages.required;
          localStorage.setItem(
            storageErrors.email,
            JSON.stringify(errorMessages.required)
          );
          errors.push('Email empty');
        }
        return;
      } else if (!emailRegex.test(element.value.trim())) {
        if (errorElements.email) {
          errorElements.email.textContent = errorMessages.email;
          localStorage.setItem(
            storageErrors.email,
            JSON.stringify(errorMessages.email)
          );
          errors.push('Invalid email format');
        }
        return;
      }
    }

    //* Text inputs
    if (element.type === 'text') {
      if (element.name === '1') {
        if (!element.value.trim()) {
          if (errorElements.text1) {
            errorElements.text1.textContent = errorMessages.required;
            localStorage.setItem(
              storageErrors.text1,
              JSON.stringify(errorMessages.required)
            );
            errors.push('Text1 empty');
          }
          return;
        } else if (!isNaN(element.value.split('')[0])) {
          if (errorElements.text1) {
            errorElements.text1.textContent = errorMessages.text;
            localStorage.setItem(
              storageErrors.text1,
              JSON.stringify(errorMessages.text)
            );
            errors.push('Text1 starts with number');
          }
          return;
        } else if (element.value.length < 2) {
          if (errorElements.text1) {
            errorElements.text1.textContent = errorMessages.text2;
            localStorage.setItem(
              storageErrors.text1,
              JSON.stringify(errorMessages.text2)
            );
            errors.push('Text1 too short');
          }
          return;
        }
      }
      if (element.name === '2') {
        if (!element.value.trim()) {
          if (errorElements.text2) {
            errorElements.text2.textContent = errorMessages.required;
            localStorage.setItem(
              storageErrors.text2,
              JSON.stringify(errorMessages.required)
            );
            errors.push('Text2 empty');
          }
          return;
        } else if (!isNaN(element.value.split('')[0])) {
          if (errorElements.text2) {
            errorElements.text2.textContent = errorMessages.text;
            localStorage.setItem(
              storageErrors.text2,
              JSON.stringify(errorMessages.text)
            );
            errors.push('Text2 starts with number');
          }
          return;
        } else if (element.value.length < 2) {
          if (errorElements.text2) {
            errorElements.text2.textContent = errorMessages.text2;
            localStorage.setItem(
              storageErrors.text2,
              JSON.stringify(errorMessages.text2)
            );
            errors.push('Text2 too short');
          }
          return;
        }
      }
      if (element.name === '3') {
        if (!element.value.trim()) {
          if (errorElements.text3) {
            errorElements.text3.textContent = errorMessages.required;
            localStorage.setItem(
              storageErrors.text3,
              JSON.stringify(errorMessages.required)
            );
            errors.push('Text3 empty');
          }
          return;
        } else if (!isNaN(element.value.split('')[0])) {
          if (errorElements.text3) {
            errorElements.text3.textContent = errorMessages.text;
            localStorage.setItem(
              storageErrors.text3,
              JSON.stringify(errorMessages.text)
            );
            errors.push('Text3 starts with number');
          }
          return;
        } else if (element.value.length < 2) {
          if (errorElements.text3) {
            errorElements.text3.textContent = errorMessages.text2;
            localStorage.setItem(
              storageErrors.text3,
              JSON.stringify(errorMessages.text2)
            );
            errors.push('Text3 too short');
          }
          return;
        }
      }
    }

    //* Telephone
    if (element.type === 'tel') {
      if (!element.value.trim()) {
        if (errorElements.tel) {
          errorElements.tel.textContent = errorMessages.required;
          localStorage.setItem(
            storageErrors.tel,
            JSON.stringify(errorMessages.required)
          );
          errors.push('Tel empty');
        }
        return;
      } else if (!/^\d+$/.test(element.value)) {
        if (errorElements.tel) {
          errorElements.tel.textContent = errorMessages.tel;
          localStorage.setItem(
            storageErrors.tel,
            JSON.stringify(errorMessages.tel)
          );
          errors.push('Tel contains non-numbers');
        }
        return;
      } else if (element.value.length < 10 || element.value.length > 15) {
        if (errorElements.tel) {
          errorElements.tel.textContent = errorMessages.tel2;
          localStorage.setItem(
            storageErrors.tel,
            JSON.stringify(errorMessages.tel2)
          );
          errors.push('Tel length invalid');
        }
        return;
      }
    }

    //* Textarea
    if (element.nodeName === 'TEXTAREA') {
      if (!element.value.trim()) {
        if (errorElements.textarea) {
          errorElements.textarea.textContent = errorMessages.required;
          localStorage.setItem(
            storageErrors.textarea,
            JSON.stringify(errorMessages.required)
          );
          errors.push('Textarea empty');
        }
        return;
      }
    }

    //* Select
    if (element.nodeName === 'SELECT') {
      if (!element.value.trim()) {
        if (errorElements.select) {
          errorElements.select.textContent = errorMessages.required;
          localStorage.setItem(
            storageErrors.select,
            JSON.stringify(errorMessages.required)
          );
          errors.push('Select empty');
        }
        return;
      }
    }
  });

  //! If no errors, collect data, log, and redirect
  if (errors.length === 0) {
    const info = {};
    [...e.target].forEach(element => {
      if (element.type === 'checkbox') {
        info.accept = true;
      }
      if (element.type === 'text') {
        if (element.name === '1') {
          info.text1 = element.value;
        }
        if (element.name === '2') {
          info.text2 = element.value;
        }
        if (element.name === '3') {
          info.text3 = element.value;
        }
      }
      if (element.type === 'email') {
        info.email = element.value;
      }
      if (element.type === 'number') {
        info.number = element.value;
      }
      if (element.type === 'tel') {
        info.tel = element.value;
      }
      if (element.nodeName === 'TEXTAREA') {
        info.message = element.value;
      }
      if (element.nodeName === 'SELECT') {
        info.choice = element.value;
      }
    });

    //! Here you can send to backend
    // console.log(info);
    const form = e.target;
    const successMessage = document.getElementById('success-message1');
    const errorMessage = document.getElementById('error-message1');
    [...form].forEach(element => {
      if (element.localName === 'button') {
        let prevText = element.textContent;
        element.textContent = errorMessages.loading;

        setTimeout(() => {
          element.textContent = prevText;
          if (
            formID.action.toString().includes('https://formspree.io/f/xgvyaqjp')
          ) {
            const response = async () => {
              try {
                const response = await fetch(form.action, {
                  method: form.method,
                  body: new FormData(form),
                  headers: {
                    Accept: 'application/json',
                  },
                });

                if (response.ok) {
                  successMessage.style.display = 'block';
                  errorMessage.style.display = 'none';
                  form.reset();
                  setTimeout(() => {
                    successMessage.style.display = 'none';
                  }, 3000);
                } else {
                  throw new Error('Error sending form');
                }
              } catch (error) {
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                setTimeout(() => {
                  errorMessage.style.display = 'none';
                }, 3000);
              }
            };
            response();
          }
        }, 2000);
      }
    });
  }
});

//! LOCAL STORAGE - GET
[...formID.elements].forEach(element => {
  if (element.localName === 'button') return;

  const getStoredValue = key => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.warn(`Failed to parse localStorage item "${key}":`, e);
      return null;
    }
  };
  if (element.type === 'checkbox') {
    const value = getStoredValue(storageValue.checkbox);
    if (value !== null) element.checked = value;
  }

  if (element.type === 'text') {
    if (element.name === '1') {
      const value = getStoredValue(storageValue.text1);
      if (value !== null) element.value = value;
    }
    if (element.name === '2') {
      const value = getStoredValue(storageValue.text2);
      if (value !== null) element.value = value;
    }
    if (element.name === '3') {
      const value = getStoredValue(storageValue.text3);
      if (value !== null) element.value = value;
    }
  }
  if (element.type === 'email') {
    const value = getStoredValue(storageValue.email);
    if (value !== null) element.value = value;
  }
  if (element.type === 'number') {
    const value = getStoredValue(storageValue.number);
    if (value !== null) element.value = value;
  }
  if (element.type === 'tel') {
    const value = getStoredValue(storageValue.tel);
    if (value !== null) element.value = value;
  }
  if (element.nodeName === 'TEXTAREA') {
    const value = getStoredValue(storageValue.textarea);
    if (value !== null) element.value = value;
  }
  if (element.nodeName === 'SELECT') {
    const value = getStoredValue(storageValue.select);
    if (value !== null) element.value = value;
  }
});

//! LOCAL STORAGE - ADD

[...formID.elements].forEach(element => {
  if (element.localName === 'button') return;

  if (element.type === 'checkbox') {
    element.addEventListener('input', () => {
      localStorage.setItem(
        storageValue.checkbox,
        JSON.stringify(element.checked)
      );
    });
  }

  if (element.type === 'text') {
    if (element.name === '1') {
      element.addEventListener('input', () => {
        localStorage.setItem(storageValue.text1, JSON.stringify(element.value));
      });
    }
    if (element.name === '2') {
      element.addEventListener('input', () => {
        localStorage.setItem(storageValue.text2, JSON.stringify(element.value));
      });
    }
    if (element.name === '3') {
      element.addEventListener('input', () => {
        localStorage.setItem(storageValue.text3, JSON.stringify(element.value));
      });
    }
  }
  if (element.type === 'email') {
    element.addEventListener('input', () => {
      localStorage.setItem(storageValue.email, JSON.stringify(element.value));
    });
  }
  if (element.type === 'number') {
    element.addEventListener('input', () => {
      localStorage.setItem(storageValue.number, JSON.stringify(element.value));
    });
  }
  if (element.type === 'tel') {
    element.addEventListener('input', () => {
      localStorage.setItem(storageValue.tel, JSON.stringify(element.value));
    });
  }
  if (element.nodeName === 'TEXTAREA') {
    element.addEventListener('input', () => {
      localStorage.setItem(
        storageValue.textarea,
        JSON.stringify(element.value)
      );
    });
  }
  if (element.nodeName === 'SELECT') {
    element.addEventListener('input', () => {
      localStorage.setItem(storageValue.select, JSON.stringify(element.value));
    });
  }
});

const container = document.querySelector('.boxes1');

const createBoxes = () => {
  return Array.from({ length: 680 }, (_, i) => i + 1)
    .map(_ => `<span class="special-box"></span>`)
    .join('');
};
container.insertAdjacentHTML('afterbegin', createBoxes());

const boxesAll = document.querySelectorAll('.special-box');
[...boxesAll].forEach(el => {
  el.addEventListener('mouseover', () => {
    el.classList.add('active');
  });

  el.addEventListener('mouseleave', () => {
    setTimeout(() => {
      el.classList.remove('active');
    }, 300);
  });
});
