const { v4: uuidv4 } = require('uuid');
const params = (fileName) => {
     const myFile = fileName.originalname.split('.');
     const fileType = myFile[myFile.length - 1];
     const imageParams = {
       // Replace the <My_Bucket_Name> with the name of your own S3 bucket
       Bucket: 'c8758802-ce83-4735-9477-bec7aa88caaa6',
       Key: `${uuidv4()}.${fileType}`,
       Body: fileName.buffer,
     };
     return imageParams;
    };
    

module.exports = params;
