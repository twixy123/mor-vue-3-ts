const baseUrl = 'FAQ'

export default (fetchWrapper, apiUrl) => ({
  /**
   * Fetch FAQ list
   *
   * @param {Object} requestData
   * @param {Object} requestData.params
   * @param {String, Number} requestData.params.page
   * @param {String} requestData.params.search
   * @param {Date} requestData.params.start_date
   * @param {Date} requestData.params.end_date
   *
   * @param {Object} urlData
   *
   * @returns {Promise}
   */
  getFAQList (requestData = {}, urlObject = {}) {
    const url = `${apiUrl}/${baseUrl}/`

    return new Promise((resolve, reject) => {
      fetchWrapper
        .get(url, requestData)
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Fetch FAQ detail
   *
   * @param {Object} requestData
   *
   * @param {Object} urlData
   * @param {String, Number} urlData.id
   *
   * @returns {Promise}
   */
  getFAQ (requestData = {}, urlObject = {}) {
    const url = `${apiUrl}/${baseUrl}/${urlObject.id}/`

    return new Promise((resolve, reject) => {
      fetchWrapper
        .get(url, requestData)
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Update FAQ detail
   *
   * @param {Object} requestData
   * @param {Object} requestData.body
   * @param {String} requestData.body.question
   * @param {String} requestData.body.answer
   *
   * @param {Object} urlData
   * @param {String, Number} urlData.id
   *
   * @returns {Promise}
   */
  updateFAQ (requestData = {}, urlObject = {}) {
    const url = `${apiUrl}/${baseUrl}/${urlObject.id}/`

    return new Promise((resolve, reject) => {
      fetchWrapper
        .patch(url, requestData)
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
})
