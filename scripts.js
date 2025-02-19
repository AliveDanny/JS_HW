/**
 * @typedef {Object} tabsContainerParams
 * @property {string} tabContainer
 * @property {string} tabButtons
 * @property {string} tabContent
 */

/**
 * @param {tabsContainerParams} param0 
 */

const tabsContainer = ({tabContainer, tabButtons, tabContent}) => {
    const tabContainers = document.querySelectorAll(tabContainer)

    /**
     * @param {HTMLDivElement} tabHtmlElement 
     */
    const tabHandler = (tabHtmlElement) => {
        const buttons = tabHtmlElement.querySelector(tabButtons)
        const content = tabHtmlElement.querySelector(tabContent)

        if (!buttons && !content) return

        const tabContentHendler = (index) => {
            for (let contentItem of content.children) {
                if(contentItem.dataset.contentindex === index) {
                    contentItem.classList.add('tab-content--active')
                } else {
                    contentItem.classList.remove('tab-content--active')
                }
            }

        // [...content.children].forEach((item, contentIndex) => {
        //     if (index === contentIndex) {
        //         item.classList.add('tab-content--active')
        //     } else {
        //         item.classList.remove('tab-content--active')
        //     }
        // })
        }
        /**
         * @param {Event} event 
         */

        const buttonHandler = (event) => {
            /**
             * @type {HTMLElement}
             */
            const target = event.target
            // console.log(target)

            if (target.classList.contains('tab-buttons') || target.classList.contains('tab-button--active')) return
            
            if (target.classList.contains('tab-button-add')) {

                const newButton = document.createElement('button')
                const newButtonIndex = buttons.children.length - 1 
                newButton.dataset.buttonindex = newButtonIndex.toString()
                newButton.classList.add('tab-button')
                newButton.textContent = `Tab ${newButtonIndex + 1}`
                
                buttons.insertBefore(newButton, target)
                
                const newContent = document.createElement('div') 
                newContent.dataset.contentindex = newButtonIndex.toString()
                newContent.classList.add('tab-content')
                newContent.innerHTML = '<p>This is the content for the new tab.</p>'
                
                content.appendChild(newContent)
                
                return
            }

            

            const tabIndex = target.dataset.buttonindex

            tabContentHendler(tabIndex)
            target.classList.add('tab-button--active')
            
            for(let button of buttons.children) {
                if (button.dataset.buttonindex !== tabIndex) {
                    button.classList.remove('tab-button--active')
                }
            }

            // [...buttons.children].forEach((button, index) => {
            //     if (button === target) {
            //         button.classList.add('tab-button--active')
            //         tabContentHendler(index)
            //     } else {
            //         button.classList.remove('tab-button--active')
            //     }
            // })
        }

        buttons.addEventListener('click', buttonHandler)
    }

    tabContainers.forEach(tabHandler)
}

tabsContainer({tabContainer: '.tab-container', tabButtons: '.tab-buttons', tabContent: '.tab-contents'})

