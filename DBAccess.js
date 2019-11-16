// ------- firebase admin sdk -----------------
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iseeu-259117.firebaseio.com"
});

//--------- connecting the bucket -------------

// Set the configuration for your app
var firebaseConfig = {
    apiKey: ' AIzaSyD3TZzTVxBIuRLL54Wj_NeKr1G1ldupZI0',
    authDomain: 'iseeu-259117.firebaseapp.com',
    databaseURL: 'https://iseeu-259117.firebaseio.com',
    storageBucket: 'gs://iseeu-259117.appspot.com'
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();



//----------- uploading file to DB -----------------
export default function upload(fileName) {
    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var picRef = storageRef.child(fileName+'.png');

    // Create a reference to 'images/mountains.jpg'
    var picImagesRef = storageRef.child('images/'+fileName+'.png');

    // While the file names are the same, the references point to different files
    picRef.name === picImagesRef.name            // true
    picRef.fullPath === picImagesRef.fullPath   //false
}

export default function download(fileName) {
    // Create a reference with an initial file path and name
    var storage = firebase.storage();
    var pathReference = storage.ref('images/'+fileName+'.png');

    // Create a reference from a Google Cloud Storage URI
    var gsReference = storage.refFromURL('gs://bucket/images/'+fileName+'.png');

    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20'+fileName+'.png');

}