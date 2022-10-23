const tabActive = (content, tab) => {
  let i, allContent, allTabActive, allTabText;
  allContent = document.getElementsByClassName("content"); //get all content
  for (i = 0; i < allContent.length; i++) {
      allContent[i].style.display = "none";
  }

  allTabActive = document.getElementsByClassName("tab-active"); //get the active tab
  // allTabText = document.getElementsByClassName("text-accent"); //get the active tab
  console.log(allTabText)
  for (i = 0; i < allTabActive.length; i++) {
      console.log('in')
      allTabActive[0].className = allTabActive[0].className.replace(" tab-active", " "); // replace the active class with empty string
      // allTabText[0].className = allTabText[0].className.replace(" text-accent", " "); // replace the active class with empty string
  }
  console.log(allTabText)

  document.getElementById(content).style.display = "block";
  currentTab = document.getElementById(tab);
  currentTab.classList.add('tab-active');
  // currentTab.classList.add('text-accent');
}

const sendEmail = () => {
  let params = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  }
  const serviceId = "service_hsw8ity";
  const templateId = "template_tlg18ol";
  emailjs.send(serviceId, templateId, params)
  .then(
      res => {
          document.getElementById('name').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('email').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('message').value = '';
          console.log(res);
          alert('Email Sent Successfully');
      }
  )
  .catch((err) => console.log(err));
}