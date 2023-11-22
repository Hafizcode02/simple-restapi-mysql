const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        const timestamp = new Date().getTime();
        const fileName = file.originalname;
        // const extension = path.extname(file.originalname);
        callback(null, `${timestamp}-${fileName}`)
    }
});

const fileFilter = function (req, file, cb) {
    // Allowed file types
    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and PDF files are allowed.'), false); // Reject the file
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000 // 3mb
    },
    fileFilter: fileFilter,
});

module.exports = upload;