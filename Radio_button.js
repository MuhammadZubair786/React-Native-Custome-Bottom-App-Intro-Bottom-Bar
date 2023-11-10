import React, { useState } from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity, Image } from 'react-native';
import { Button, RadioButton, Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import  storage  from '@react-native-firebase/storage';
import ProgressBar from 'react-native-progress/Bar';
import { toast } from 'react-native-easy-toast';


const GenderSelection = () => {
    const [uploadProgress, setUploadProgress] = useState(0);

    const [gender, setGender] = useState('male'); // Initialize with 'male'
    const [file, setfile] = useState("file:///data/user/0/com.awesomeproject/cache/rn_image_picker_lib_temp_6455f4dc-fee4-497e-b4a9-2ac7add4ff10.jpg")
    const imageUri = 'file:///data/user/0/com.awesomeproject/cache/rn_image_picker_lib_temp_6455f4dc-fee4-497e-b4a9-2ac7add4ff10.jpg';



    const createUser = () => {
        auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const _signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            GoogleSignin.configure({
                // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
                webClientId: '501890821284-k32p2n3m59nc6poonqngt1qerkg70kmf.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
                offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
                hostedDomain: '', // specifies a hosted domain restriction
                forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
                accountName: '', // [Android] specifies an account name on the device that should be used

                googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
                openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
                profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
            });

            const userInfo = await GoogleSignin.signIn();

            const { idToken } = await GoogleSignin.signIn();
            const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredentials);
            return userInfo;
        } catch (error) {
            console.log('=> Google Sign In', error);
            return null;
        }
    };

    const options = {
        title: 'Select an Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };


    async function signInWithGoogle() {
        _signInWithGoogle().then(data => {
            console.log('user data=>', data);
        });
    }

    const handleGenderChange = (value) => {
        setGender(value);
    };

    // / Function to open the camera
    const openCamera = () => {
        const options = {
            mediaType: 'photo',  // You can use 'photo' or 'video'
            quality: 0.8,       // Image quality (0 to 1)
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled the camera.');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                // Use the image from the camera here
                console.log('Image URI: ', response.assets[0].uri);
                setfile(response.assets[0].uri)

                uploadImageToFirebase(response.assets[0].uri)
            }
        });
    };


    const uploadImageToFirebase = async (imageUri) => {
        const reference = storage().ref('images/' + new Date().getTime() + '.jpg');
        try {
          const uploadTask = reference.putFile(imageUri);
      
          uploadTask.on('state_changed', 
            (snapshot) => {
              // Get the upload progress in percentage
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress)
      
              if (progress === 0) {
                alert("Upload Process Started. Please wait for the image to upload to the database.");
              }
      
              if (progress === 100) {
                alert("Upload Process Finished. Image successfully uploaded to the database.");
              }
      
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, 
            (error) => {
              // Handle unsuccessful uploads
              console.error('Error uploading image: ', error);
            }, 
            () => {
              // Handle successful uploads on complete
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const img_url = downloadURL;
                console.log('File available at', downloadURL);
                // You can use img_url as the URL of the uploaded image.
                // Implement further actions here, e.g., saving the URL in a database.
              });
            }
          );
        } catch (error) {
          console.error('Error uploading image: ', error);
        }
      };


    const openImageLibrary = () => {
        const options = {
          mediaType: 'photo',  // You can use 'photo' or 'video'
          quality: 0.8,       // Image quality (0 to 1)
        };
      
        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled the image library.');
          } else if (response.error) {
            console.log('Image Library Error: ', response.error);
          } else {
            // Use the selected image from the library here
            console.log('Image URI: ', response.uri);
            setfile(response.assets[0].uri)
          }
        });
      };




    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Gender:</Text>
            <RadioButton.Group onValueChange={handleGenderChange} value={gender}>
                <View style={styles.radioButtonContainer}>
                    <Text>Male</Text>
                    <RadioButton value="male" />
                </View>
                <View style={styles.radioButtonContainer}>
                    <Text>Female</Text>
                    <RadioButton value="female" />
                </View>
            </RadioButton.Group>
            <Image source={{ uri: file }} style={styles.image} />
            

            <ProgressBar
        progress={uploadProgress / 100}
        width={100}
        height={20}
        color={'#007AFF'}
      />
      <Text style={styles.progressText}>
        {`${Math.floor(uploadProgress)}% completed`}
      </Text>

            <Text>Selected Gender: {gender}</Text>
            <TouchableOpacity onPress={() => { openCamera() }}>
                <Text>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { openImageLibrary() }}>
                <Text>open image up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { signInWithGoogle() }}>
                <Text>Sign up</Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});


export default GenderSelection