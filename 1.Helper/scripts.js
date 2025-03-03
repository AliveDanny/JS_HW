/**
 * 
 * @param {string} content 
 * @param {boolean} position 
 * @returns {HTMLDivElement} 
 */

const createTooltip = (content, position) => {
    const tooltipContainer = document.createElement('div')
    tooltipContainer.classList.add('tooltip-container')
    if (position) {
        tooltipContainer.style.top = '-5px'
        tooltipContainer.style.transform = 'trasnlate(-50%, -100%)'
    } else {
        tooltipContainer.style.bottom = '-5px'
        tooltipContainer.style.transform = 'trasnlate(-50%, -100%)'
    }

    const tooltipContent = document.createElement('p')
    tooltipContent.classList.add('tooltip-content')
    tooltipContent.innerText = content

    tooltipContainer.append(tooltipContent)
    return  tooltipContainer
}


const  tooltips = (tooltipsSelector) => {

    tooltipsItems = document.querySelectorAll(tooltipsSelector)

    /**
     * 
     * @param {HTMLElement} tooltipItem 
     */
    const tooltip = (tooltipItem) => {
        const content = tooltipItem.dataset.content
        let tooltipContainer = null

        /**
         * 
         * @param {MouseEvent} event 
         */

        const tooltipHandler = (event) => {
            const height = window.innerHeight
            const positionY = event.clientY
            let topFlag = false

            if (positionY < height * .75) {
                topFlag = true
            }

            tooltipContainer = createTooltip (content, topFlag)
            tooltipItem.append(tooltipContainer)
        }

        const mouseleaveHandler = () => {
            if (!tooltipContainer) return
            tooltipContainer.remove()
            tooltipContainer = null
        }

        tooltipItem.addEventListener('mouseenter', tooltipHandler)
        tooltipItem.addEventListener('mouseleave', mouseleaveHandler)
    }

    tooltipsItems.forEach(tooltip)
}

tooltips('.tooltip')