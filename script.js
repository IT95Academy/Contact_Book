const addContact = () => {
  let cName = document.querySelector('#name').value.toUpperCase();
  let cNumber = document.querySelector('#number').value;
  let displayContact = document.querySelector('#display_contact');

  if (cName === '' || cNumber === '') {
    displayContact.innerHTML = 'Please enter information!';
    displayContact.style.color = 'red';
  } else {
    sessionStorage.setItem(cName, cNumber);
    displayContact.innerHTML = 'Successfully Adden New Contact';
    displayContact.style.color = 'green';
  }

  setTimeout(() => {
    displayContact.innerHTML = '';
  }, 5000);
};

const getContact = () => {
  let getContactName = document
    .querySelector('#get_contact_name')
    .value.toUpperCase();

  let displayInfo = document.querySelector('#display_info');
  let output = sessionStorage.getItem(getContactName);

  displayInfo.classList.add('display_info');

  displayInfo.innerHTML = `${getContactName}: ${
    output ? output : '😓This contact detail is not added'
  }`;
};

const reset = () => location.reload();
