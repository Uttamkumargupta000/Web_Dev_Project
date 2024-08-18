/**
 *  Add event on multiple element
 *  @param {NodeList} $elements NodeList
 *  @param {String} eventType Event type string
 *  @param {Function} callback callback Function
 * 
 */


window.addEventOnElements = ($elements, eventType, callback) =>{
    for(const $element of $elements){
        $element.addEventListener(eventType, callback);
    }
}