console.log('connected')
const homePage = document.querySelector('#home-page')
const aboutPage = document.querySelector('#about-page')
const projectPage = document.querySelector('#project-page')
const contactPage = document.querySelector('#contact-page')
const body = document.querySelector('body')
const header = document.querySelector('header')






const homeNav = document.querySelector('#home-nav')
const aboutNav = document.querySelector('#about-nav')
const projectNav = document.querySelector('#project-nav')
const contactNav = document.querySelector('#contact-nav')


homeNav.addEventListener('click', function(){

    if (aboutPage) {
    homePage.classList.remove('hide')
    aboutPage.classList.add('hide')
    }

    if(projectPage) {
        homePage.classList.remove('hide')
        projectPage.classList.add('hide')
    }

    if(contactPage) {
        homePage.classList.remove('hide')
        contactPage.classList.add('hide')
    }
})


aboutNav.addEventListener('click', function(){

    if(homePage) {
        aboutPage.classList.remove('hide')
        homePage.classList.add('hide')
      
    }
    if(projectPage) {
        aboutPage.classList.remove('hide')
        projectPage.classList.add('hide')     
    }
    if(contactPage) {
        aboutPage.classList.remove('hide')
        contactPage.classList.add('hide')    
    }
   
})


projectNav.addEventListener('click', function(){


    if(homePage) {
        projectPage.classList.remove('hide')
        homePage.classList.add('hide')
    }
    if(aboutPage) {
        projectPage.classList.remove('hide')
        aboutPage.classList.add('hide')     
    }
    if(contactPage) {
        projectPage.classList.remove('hide')
        contactPage.classList.add('hide')    
    }

})

contactNav.addEventListener('click', function(){
    if(homePage) {
        contactPage.classList.remove('hide')
        homePage.classList.add('hide')
    }
    if(aboutPage) {
        contactPage.classList.remove('hide')
        aboutPage.classList.add('hide')     
    }
    if(projectPage) {
        contactPage.classList.remove('hide')
        projectPage.classList.add('hide')    
    }
})


// <------------------------ overlay ------------------------->

const nextProject = document.querySelector('#next-radio')
const overlayNext = document.querySelector('#project-1')
nextProject.addEventListener('click', function() {
    overlayNext.style.width = "100%"
})

function closeNav() {
    overlayNext.style.width = "0%";
  }

  const ghaniliProject = document.querySelector('#ghanili')
  const overlayGhanili = document.querySelector('#project-2')

  ghaniliProject.addEventListener('click', function() {
    overlayGhanili.style.width = "100%"
})

function closeNav1() {
    overlayGhanili.style.width = "0%";
  }

const btnAbout = document.querySelector('.btn-about')
const overlayResume = document.querySelector('#Resume')

  btnAbout.addEventListener('click', function() {
    overlayResume.style.width = "100%"
})

function closeNav2() {
    overlayResume.style.width = "0%";
  }  

const threeD = document.querySelector('#threed-design')
const overlayThreeD = document.querySelector('#project-3')
  
threeD.addEventListener('click', function() {
    overlayThreeD.style.width = "100%"
  })
  
  function closeNav3() {
    overlayThreeD.style.width = "0%";
    }   





  

/* responsive js */
const btnToggle = document.querySelector('.btn-toggle')
const overlayToggle = document.querySelector('#overlay-toggle')

const mobileNavHome = document.querySelector('#home-nav-toggle')
const mobileNavAbout = document.querySelector('#about-nav-toggle')
const mobileNavProject = document.querySelector('#project-nav-toggle')
const mobileNavContact = document.querySelector('#contact-nav-toggle')

mobileNavHome.addEventListener('click', function(){
    if (aboutPage) {
        aboutPage.classList.add('hide')
        overlayToggle.classList.add('hide')
        homePage.classList.remove('hide')

        }

    if (contactPage) {
            contactPage.classList.add('hide')
            overlayToggle.classList.add('hide')
            homePage.classList.remove('hide')
    
            }

    if (projectPage) {
                projectPage.classList.add('hide')
                overlayToggle.classList.add('hide')
                homePage.classList.remove('hide')
        
                }
})

mobileNavAbout.addEventListener('click', function(){
    if (homePage) {
        homePage.classList.add('hide')
        overlayToggle.classList.add('hide')
        aboutPage.classList.remove('hide')

        }

    if (contactPage) {
            contactPage.classList.add('hide')
            overlayToggle.classList.add('hide')
            aboutPage.classList.remove('hide')
    
            }

    if (projectPage) {
                projectPage.classList.add('hide')
                overlayToggle.classList.add('hide')
                aboutPage.classList.remove('hide')
        
                }
})

mobileNavProject.addEventListener('click', function(){
    if (aboutPage) {
        aboutPage.classList.add('hide')
        overlayToggle.classList.add('hide')
        projectPage.classList.remove('hide')

        }

    if (contactPage) {
            contactPage.classList.add('hide')
            overlayToggle.classList.add('hide')
            projectPage.classList.remove('hide')
    
            }

    if (homePage) {
                homePage.classList.add('hide')
                overlayToggle.classList.add('hide')
                projectPage.classList.remove('hide')
        
                }
})

mobileNavContact.addEventListener('click', function(){
    if (aboutPage) {
        aboutPage.classList.add('hide')
        overlayToggle.classList.add('hide')
        contactPage.classList.remove('hide')

        }

    if (homePage) {
            homePage.classList.add('hide')
            overlayToggle.classList.add('hide')
            contactPage.classList.remove('hide')
    
            }

    if (projectPage) {
                projectPage.classList.add('hide')
                overlayToggle.classList.add('hide')
                contactPage.classList.remove('hide')
        
                }
})





btnToggle.addEventListener('click', function(){
   
    if (homePage) {
        overlayToggle.classList.remove('hide')
        homePage.classList.add('hide')
        }
        
    if (projectPage) {
        overlayToggle.classList.remove('hide')
        projectPage.classList.add('hide')
        }
    if (contactPage) {
    overlayToggle.classList.remove('hide')
    contactPage.classList.add('hide')
    }
    if (aboutPage) {
        overlayToggle.classList.remove('hide')
        aboutPage.classList.add('hide')
        }
    

})


/* contact submit*/
const send = document.querySelector('.forms-block')
const submit = document.querySelector('#submit')
const nameContact = document.querySelector('#name-contact')
const emailContact = document.querySelector('#email')
const descriptionContact = document.querySelector('#description-contact')


const doubleCheck = document.querySelector('#information-page')
const confirm = document.querySelector('#confirm-text')
const ul = document.querySelector('#ul-check')

class Information {
    constructor(name, email, description) {
      this.name = name;
      this.email = email;
      this.description = description;
      
    }
  }








function checkingInfo (event) {
    event.preventDefault()
if(emailContact.value.includes('@gmail.com') || emailContact.value.includes('@yahoo.com') || emailContact.value.includes('@hotmail.com') ) {
    if (nameContact.value !== '') {
      if (descriptionContact.value !== '') {
    let infoBlock = document.createElement('li')
    let infoBlockEmail = document.createElement('li')
    let infoBlockDescription = document.createElement('li')
    console.log('name',nameContact.value) 
    console.log('email',emailContact.value)
    console.log('description',descriptionContact.value)
    infoBlock.innerText = nameContact.value
    infoBlockEmail.innerText = emailContact.value
    infoBlockDescription.innerText = descriptionContact.value

   

    ul.appendChild(infoBlock)
    ul.appendChild(infoBlockEmail)
    ul.appendChild(infoBlockDescription)
    console.log(ul)
    contactPage.classList.add('hide')
    doubleCheck.classList.remove('hide') 
      } else {
        alert(`Your ${descriptionContact.name} is empty`)
      }
    } else {
        alert(`Your ${nameContact.name} is empty`)
    }
} else {
 alert(`Your entred invalid ${emailContact.name}`)
}



}


submit.addEventListener('click', checkingInfo)
function submitInformation () {

    const contactArray = new Information(nameContact.value,emailContact.value,descriptionContact.value)
    nameContact.value= ''
    emailContact.value = ''
    descriptionContact.value = ''
    console.log(contactArray)
    doubleCheck.classList.add('hide')
    homePage.classList.remove('hide') 
}
confirm.addEventListener('click', submitInformation)





/*welcome pages*/
const welcomePageDark = document.querySelector('#welcome-page-dark')
const welcomePageLight = document.querySelector('#welcome-page-light')
const darkBtn = document.querySelector('#dark-btn')

const lightPageText = document.querySelector('#light')
const darkPageText = document.querySelector('#dark-light-page')

darkPageText.addEventListener('click', function(){
    welcomePageDark.classList.remove('hide')
    welcomePageLight.classList.add('hide')
    body.style.background = 'black'
})

lightPageText.addEventListener('click', function(){
    welcomePageDark.classList.add('hide')
    welcomePageLight.classList.remove('hide')
    body.style.background = 'white'

})


darkBtn.addEventListener('click', function(){
    homePage.classList.remove('hide')
    welcomePageDark.classList.add('hide')
    header.classList.remove('hide')


})