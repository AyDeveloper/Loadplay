// Mobile Navigation
const toggleButton = document.querySelector('.socials .iconBar');

const mobileNav = document.querySelector('.mobileNav');
toggleButton.addEventListener('click', e => {
    mobileNav.classList.toggle('show');
})

window.addEventListener('scroll', (e) => {
    const arrowTop = document.querySelector('.scrollTop')
    const scrollSize = window.pageYOffset;
    if(scrollSize > 50) {
        mobileNav.classList.remove('show')
    }

    if (scrollSize > 200) {
        arrowTop.classList.add("showTop");
    } else {
        arrowTop.classList.remove("showTop");
    }
})
// End of Mobile Navigation

// Dark theme
    const darkToggle = document.getElementById('toggle');
    darkToggle.addEventListener('click', e => {
        e.preventDefault()
        document.body.classList.toggle('darkmode');
        const icon = darkToggle.querySelector('#toggleIcon');
    
        if (e.target.classList.contains('fa-toggle-on')) {
                e.target.classList.remove('fa-toggle-on');
                icon.classList.add('fa-toggle-off')
        } else if(e.target.classList.contains('fa-toggle-off')) {
            e.target.classList.remove('fa-toggle-off')
            icon.classList.add('fa-toggle-on');
        }
        
    })
// End of dark theme

// cta scroll to
const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    document.querySelector('.customize').scrollIntoView();
})
//end of cta scroll to


// show popup on load after 2.5s

window.addEventListener('load', (e) => {
    e.preventDefault();
    const mainload = document.querySelector('.mainload');
    
    setTimeout(() => {
        mainload.classList.add('show')
    }, 6000);

    const start = document.querySelector('.start');
    const dropDown = document.querySelector('.dropdown1');
    const cancelBtn = document.querySelector('.cancelBtn');
    start.addEventListener('click', () => {
        mainload.classList.remove('show')
        dropDown.focus();
        dropDown.scrollIntoView();
    })
    cancelBtn.addEventListener('click', () => {
        mainload.classList.remove('show')
    })
})

// end of show popup


// Dropdown
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach( (dropdown) => {
        dropdown.addEventListener('click', (e) => {
            const id = e.target;
            if(id.classList.contains('dropdown1')) {
                const preloaders = document.querySelector('.preloaders');
                const preloaderCont = document.querySelector('.preloaderCont');
                const height = preloaderCont.getBoundingClientRect().height
                if (preloaders.style.height == '0px') {
                        preloaders.style.height = `${height}px`
                } else {
                    preloaders.style.height = '0px'
                }
            } else if (id.classList.contains('dropdown2')) {
                const styleContent = document.querySelector('.styleContent');
                const styleCent = document.querySelector('.styleCent');
                const height = styleCent.getBoundingClientRect().height
                if (styleContent.style.height == '0px') {
                        styleContent.style.height = `${height}px`
                } else {
                    styleContent.style.height = '0px'
                }
            }
        })
    })


// End of Dropdown

// Displaying the Preloader on Playground 
    const preloaderCont = document.querySelector('.preloaderCont');

    preloaderCont.addEventListener('click', e => {
        const id = e.target.classList.contains('iconCard');

        if (id) {
            const src = e.target;
            const srcFile = src.firstElementChild.firstElementChild.getAttribute('src');
            // console.log(src, srcFile);

            playSrcFile(srcFile)

            const styleIcon = document.querySelector('.styleIcon');
            styleIcon.classList.add('showStyleIcon')
        }
    })


// function displaying srcFIle in playground
        const playSrcFile = (srcFile, text) => {
            const playgroundContent = document.querySelector('.playgroundContent')
            const playgroundCenter = document.querySelector('.playgroundCenter');
             let html = `
                <div class="playgroundContent">
                    <div class="playIcon">
                        <img src="${srcFile}" alt="imageAltText">
                    </div>
                    <p class="playText"></p>
                </div>
                `;

            playgroundCenter.innerHTML = `${html}`;
        }

// End of Displaying the Preloader on Playground 


// Style Form SUbmission 

const styleCent = document.querySelector('.styleCent');
styleCent.addEventListener('submit', e => {
    e.preventDefault();

    const bgColorInput = styleCent.bgColorInput.value;
    const bgOpacityInput = styleCent.bgOpacityInput.value;
    let txtNameInput = styleCent.txtNameInput.value;
    let textSizeInput = styleCent.textSizeInput.value;
    let txtColorInput = styleCent.txtColorInput.value;
    
    if (txtNameInput.length) {
        txtStyle(txtNameInput, textSizeInput, txtColorInput)
    } else {
        textSizeInput == null;
        txtColorInput == null;
        txtNameInput == null;

        txtStyle(txtNameInput, textSizeInput, txtColorInput)
    }

    playgroundStyle(bgColorInput, bgOpacityInput)
    styleCent.reset()

    const playground = document.querySelector('.playground');
    playground.scrollIntoView();
    const snackBar = document.querySelector('.snackBar');
    snackBar.classList.add('showSnackBar')


    setTimeout( () => {
        snackBar.classList.remove('showSnackBar');
    }, 2000);

    const previewButton = document.querySelector('.previewButton');
    previewButton.classList.add('showBtn')
})


const playgroundStyle = (bgColorInput, bgOpacityInput) => {
    const playgroundCenter = document.querySelector('.playgroundCenter');
        playgroundCenter.style.background = `${bgColorInput}` ;

        let valueNow = `0.${bgOpacityInput}`
            Number(valueNow)
            parseInt(valueNow)
            playgroundCenter.style.opacity = `${valueNow}`
}

const txtStyle = (txtNameInput, textSizeInput, txtColorInput) => {
    const playgroundCenter = document.querySelector('.playgroundCenter');
 
    if (playgroundCenter.firstElementChild.classList.contains('playgroundContent')) {
       playgroundCenter.firstElementChild.lastElementChild.innerText = `${txtNameInput}`
       playgroundCenter.firstElementChild.lastElementChild.style.color = `${txtColorInput}`
       playgroundCenter.firstElementChild.lastElementChild.style.fontSize = `${textSizeInput}px`
    }
}

// End of style form submission


// On change of style Values
const bgColorInput = document.querySelector('#bgColorInput');
 bgColorInput.addEventListener('input', e => {
        const bgColor = e.target.value;
        const playgroundCenter = document.querySelector('.playgroundCenter');
        playgroundCenter.style.background = `${bgColor}`
})

const bgOpacityInput = document.querySelector('#bgOpacityInput');
 bgOpacityInput.addEventListener('input', e => {
        const bgOpacity = e.target.value;
        const playgroundCenter = document.querySelector('.playgroundCenter');
       
        let valueNow = `0.${bgOpacity}`
            Number(valueNow)
            parseInt(valueNow)
            playgroundCenter.style.opacity = `${valueNow}`
})

const txtName = document.querySelector('#txtNameInput');
   txtName.addEventListener('input', e => {
       let txtNameInput = e.target.value;
       let textSizeInput = textSize.value;
       let txtColorInput = txtColor.value;
       txtStyle(txtNameInput, textSizeInput, txtColorInput)
   })

const textSize = document.querySelector('#textSizeInput');
textSize.addEventListener('input', e => {
        let textSizeInput = e.target.value;
        let txtNameInput = txtName.value;
        let txtColorInput = txtColor.value;

        if (textSizeInput.length) {
            txtStyle(txtNameInput, textSizeInput, txtColorInput)
            
        } else {
            textSizeInput = 12;
            txtStyle(txtNameInput, textSizeInput, txtColorInput)
        }
   })


const txtColor = document.querySelector('#txtColorInput');
txtColor.addEventListener('input', e => {
    let txtColorInput = e.target.value;
    let textSizeInput = textSize.value;
    let txtNameInput = txtName.value;

    if (txtNameInput.length) {
        txtStyle(txtNameInput, textSizeInput, txtColorInput)
    }
})

// End of on change of style Values

// Show preview button
const styleContent = document.querySelector('.styleContent');
    styleContent.addEventListener('input', e => {
            if (e.target.tagName == "INPUT") {
                const previewButton = document.querySelector('.previewButton');
                previewButton.classList.add('showBtn')
            } else {
                previewButton.classList.remove('showBtn') 
            }
    })
// End show preview button

// Display playground object in HomePage
    const previewButton = document.querySelector('.previewButton');
    const playgroundCenter = document.querySelector('.playgroundCenter');
    const loadplay = document.querySelector('.loadplay');
    const body = document.body;


        previewButton.addEventListener('click', e => {
            displayLoadPlay(e)

            loadplay.classList.add('showLoadplay');
            body.scrollIntoView();
            setTimeout( () => {
                loadplay.classList.remove('showLoadplay');
                playgroundCenter.scrollIntoView()
            }, 5000)

        })


    const displayLoadPlay = (e) => {
       const playground =  e.currentTarget.parentElement.parentElement;
       const playgroundCenter = playground.firstElementChild;
       const img = playgroundCenter.firstElementChild.firstElementChild.firstElementChild;
       const textElement = playgroundCenter.firstElementChild.lastElementChild;
       const textCont = textElement.innerText;
       const textStyle = textElement.getAttribute('style');
       const imgSrc = img.getAttribute('src');
        const style = playgroundCenter.getAttribute('style')
        
       let text = `
       <div class="loadplayCenter" style="${style}">
                <div class="playIcon">
                    <img src="${imgSrc}" alt="806">
                </div>
                <p class="playText" style="${textStyle}">${textCont}</p>            
        </div>
       `
        loadplay.innerHTML = `${text}`;

    }
// End of display playground object in HomePage


