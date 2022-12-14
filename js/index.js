// Navbar Menu Toggling
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
  button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

//Resume Active Tabs
const activeTab = (content, tab) => {
  let i, contents, activeTabs;
  contents = document.getElementsByClassName("content"); //get all the content
  for (i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  activeTabs = document.getElementsByClassName("tab-active"); //get the active tab
  activeTabs[0].className = activeTabs[0].className.replace(" tab-active", " "); 
  
  document.getElementById(content).style.display = "block"; //show the current active tab
  currentTab = document.getElementById(tab);
  currentTab.classList.add('tab-active');
}

//Send Email
const sendEmail = () => {
  let params = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  }
  const serviceId = "service_87vm55n";
  const templateId = "template_d2cg638";
  emailjs.send(serviceId, templateId, params)
  .then(
      res => {
          document.getElementById('name').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
          alert('Email Sent Successfully');
      }
  )
  .catch((err) => console.log(err));
}