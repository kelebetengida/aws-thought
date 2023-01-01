const { v4: uuidv4 } = require('uuid');
const params = (fileName) => {
     const myFile = fileName.originalname.split('.');
     const fileType = myFile[myFile.length - 1];
     const imageParams = {
       // Replace the <My_Bucket_Name> with the name of your own S3 bucket
       Bucket: '71465689-de7a-4f9d-a7f8-85ce8e575ad6',
       Key: `${uuidv4()}.${fileType}`,
       Body: fileName.buffer,
       ACL: 'public-read',
     };
     return imageParams;
    };
    

module.exports = params;
