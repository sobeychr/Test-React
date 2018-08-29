const ajaxCall = ({ page, data, callback }) => {
    let ajaxConfig = {
        url: 'ajax/' + page + '.php',
        method: 'GET',
        timeout: 5 * 1000,

        complete: function(data) {
            console.log('complete', data);
        },
        error: function(jq, text, err) {
            console.log('error', text, err);
        },
        success: function(data) {
            console.log('success', data);
        }
    };

    if (data) {
        ajaxConfig = Object.assign({}, ajaxConfig, {
            contentType: 'text/plain',
            converters: { '* text': window.String },
            data: data,
            dataType: 'text',
            method: 'POST'
        });
    }
};

// ================================================================
// Exports
export default ajaxCall;
