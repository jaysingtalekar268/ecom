const formidable = require('formidable');

const parsefile = async (req) => {
    return new Promise((resolve, reject) => {
        let options = {
            maxFileSize: 100 * 1024 * 1024, //100 MBs converted to bytes,
            allowEmptyFiles: false
        }

        const form = formidable(options);
        
        form.parse(req, (err, fields, files) => {});
    })
}

module.exports = parsefile;
