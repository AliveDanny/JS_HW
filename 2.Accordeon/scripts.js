const accordeon = (accordeonSelector) => {
    const accordeonContainers = document.querySelectorAll(accordeonSelector)

    /**
     * 
     * @param {HTMLDivElement} container 
     */
    const accordeonHandler = (container) => {
        const titles = container.querySelectorAll('.accordeon__title')

        /**
         * 
         * @param {HTMLElement} title 
         */
        const titleHandler = (title) => {
            title.addEventListener('click', () => {
                title.classList.toggle('active')
            })
        }

        titles.forEach(titleHandler)
    }

    accordeonContainers.forEach(accordeonHandler)
}

accordeon('.accordeon-container')

